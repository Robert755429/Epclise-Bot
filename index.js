// 🌑 ECLIPSE - index.js COMPLETO - USA config.js
const { default: makeWASocket, useMultiFileAuthState, DisconnectReason, fetchLatestBaileysVersion } = require('@whiskeysockets/baileys')
const pino = require('pino')
const fs = require('fs')
const path = require('path')
const readline = require('readline')
const config = require('./config.js') // <-- USA IL TUO FILE

// ============ CONFIG DAL TUO config.js ============
const PREFIX = config.prefix || config.PREFIX || '.'
const OWNER_NUMBER = config.owner || config.OWNER || config.ownerNumber || '393887347002'
const PAIRING_NUMBER = config.pairingNumber || config.PAIRING_NUMBER || config.owner || '393887347002'
const SESSION_FOLDER = config.session || config.SESSION || 'session'
const BOT_NAME = config.botName || config.BOT_NAME || 'ECLIPSE'

// ============ CARICA COMANDI ============
const comandi = new Map()

function caricaComandi(dir) {
  const files = fs.readdirSync(dir)
  for (const file of files) {
    const full = path.join(dir, file)
    if (fs.statSync(full).isDirectory()) {
      caricaComandi(full)
    } else if (file.endsWith('.js')) {
      try {
        delete require.cache[require.resolve(full)]
        const cmd = require(full)
        if (cmd.name && cmd.run) {
          comandi.set(cmd.name.toLowerCase(), cmd)
          console.log(`✅ Caricato: .${cmd.name}`)
        }
      } catch (e) {
        console.log(`❌ Errore in ${file}:`, e.message)
      }
    }
  }
}

if (fs.existsSync('./comandi')) {
  caricaComandi('./comandi')
}
console.log(`🌑 ${BOT_NAME} - ${comandi.size} comandi caricati`)

// ============ FUNZIONI UTILI ============
function getSoloAdmin(jid) {
  try {
    const data = JSON.parse(fs.readFileSync('./soloadmin.json'))
    return data[jid] || false
  } catch { return false }
}

function chiediPairing() {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
  return new Promise(res => rl.question('Premi INVIO per ricevere il codice pairing... ', () => { rl.close(); res() }))
}

// ============ AVVIA BOT ============
async function start() {
  const { state, saveCreds } = await useMultiFileAuthState(SESSION_FOLDER)
  const { version } = await fetchLatestBaileysVersion()

  const sock = makeWASocket({
    version,
    auth: state,
    printQRInTerminal: false,
    logger: pino({ level: 'silent' }),
    browser: [BOT_NAME, 'Chrome', '1.0'],
    syncFullHistory: false
  })

  sock.ev.on('creds.update', saveCreds)

  // Pairing code se non connesso
  if (!sock.authState.creds.registered) {
    await chiediPairing()
    try {
      const code = await sock.requestPairingCode(PAIRING_NUMBER)
      console.log(`\n🌑 CODICE PAIRING: ${code}\nVai su WhatsApp > Dispositivi collegati > Collega con numero\n`)
    } catch (e) {
      console.log('❌ Errore pairing:', e.message)
    }
  }

  // ============ CONNESSIONE ============
  sock.ev.on('connection.update', async (update) => {
    const { connection, lastDisconnect } = update
    if (connection === 'close') {
      const reason = lastDisconnect?.error?.output?.statusCode
      console.log('❌ Disconnesso:', reason)
      if (reason !== DisconnectReason.loggedOut) {
        console.log('🔄 Riconnessione...')
        start()
      } else {
        console.log('❌ Logged out, cancella cartella session e riavvia')
      }
    }
    if (connection === 'open') {
      console.log(`🌑 ${BOT_NAME} ONLINE! 🌑`)
      console.log(`Comandi: ${comandi.size}`)
    }
  })

  // ============ MESSAGGI IN ARRIVO ============
  sock.ev.on('messages.upsert', async ({ messages }) => {
    const msg = messages[0]
    if (!msg.message || msg.key.fromMe) return

    const jid = msg.key.remoteJid
    const isGroup = jid.endsWith('@g.us')
    const sender = isGroup ? msg.key.participant : jid

    const text = msg.message.conversation ||
      msg.message.extendedTextMessage?.text ||
      msg.message.imageMessage?.caption ||
      msg.message.videoMessage?.caption || ''

    if (!text.startsWith(PREFIX)) return

    const args = text.slice(PREFIX.length).trim().split(/\s+/)
    const cmd = args.shift().toLowerCase()

    let target = null
    const mentioned = msg.message.extendedTextMessage?.contextInfo?.mentionedJid
    if (mentioned && mentioned.length > 0) target = mentioned[0]
    else if (args[0] && args[0].startsWith('@')) target = args[0].replace('@', '') + '@s.whatsapp.net'

    const reply = (t) => sock.sendMessage(jid, { text: t }, { quoted: msg })

    const comando = comandi.get(cmd)
    if (!comando) return

    const isOwner = sender.includes(OWNER_NUMBER)

    // --- OWNER SOLDI INFINITI 🌑 ---
    if (isOwner) {
      try {
        let d = {}
        try { d = JSON.parse(fs.readFileSync('./ombre.json')) } catch {}
        if (!d[sender] || d[sender].saldo < 999999999) {
          d[sender] = { saldo: 999999999, banca: 999999999 }
          fs.writeFileSync('./ombre.json', JSON.stringify(d))
          console.log('🌑 Owner ricaricato a INFINITO')
        }
      } catch {}
    }

    // --- CONTROLLO SOLO ADMIN - VALE PER TUTTI I COMANDI ---
    const soloAdminAttivo = getSoloAdmin(jid)
    if (soloAdminAttivo && isGroup) {
      try {
        const meta = await sock.groupMetadata(jid)
        const isAdmin = meta.participants.find(p => p.id === sender)?.admin
        const semprePermessi = ['soloadmin', 'menu', 'ping', 'owner', 'help']

        if (!isAdmin && !isOwner && !semprePermessi.includes(cmd)) {
          return reply(`🔒 ${BOT_NAME} è in modalità SOLO ADMIN 🌑\nSolo gli admin possono usarlo ora`)
        }
      } catch {}
    }

    // --- ESEGUI COMANDO ---
    try {
      console.log(`[${isGroup ? 'GRUPPO' : 'PV'}] .${cmd} da ${sender.split('@')[0]} ${isOwner ? '[OWNER]' : ''}`)
      await comando.run({
        sock,
        msg,
        jid,
        sender,
        target,
        args,
        reply,
        isGroup,
        isOwner,
        prefix: PREFIX,
        config
      })
    } catch (e) {
      console.log(`❌ Errore in .${cmd}:`, e)
      reply('❌ Errore nel comando 🌑')
    }
  })

  // ============ QUANDO QUALCUNO ENTRA / ESCE ============
  sock.ev.on('group-participants.update', async ({ id, participants, action }) => {
    try {
      if (action === 'add') {
        for (const p of participants) {
          await sock.sendMessage(id, {
            text: `👋 Benvenuto @${p.split('@')[0]}!\n🌑 Benvenuto in ${BOT_NAME}\nScrivi .menu per vedere i comandi`,
            mentions: [p]
          })
        }
      }
      if (action === 'remove') {
        for (const p of participants) {
          await sock.sendMessage(id, { text: `👋 @${p.split('@')[0]} ha lasciato il gruppo 🌑`, mentions: [p] })
        }
      }
    } catch {}
  })
}

start()
