const fs = require('fs')
const path = require('path')
const { default: makeWASocket, useMultiFileAuthState, DisconnectReason } = require('@whiskeysockets/baileys')
const pino = require('pino')

const OWNER = '393887347002'

// ========== OMBRE 🌑 ==========
const OMBRE_FILE = path.join(__dirname, 'ombre.json')
let ombre = {}
if (fs.existsSync(OMBRE_FILE)) {
  try { ombre = JSON.parse(fs.readFileSync(OMBRE_FILE, 'utf8')) } catch { ombre = {} }
}
function saveOmbre() { fs.writeFileSync(OMBRE_FILE, JSON.stringify(ombre)) }
function getSaldo(id) { return ombre[id]?.wallet || 0 }
function getBanca(id) { return ombre[id]?.banca || 0 }
function addOmbre(id, q) {
  if (!ombre[id]) ombre[id] = { wallet: 0, banca: 0 }
  ombre[id].wallet += q
  if (ombre[id].wallet < 0) ombre[id].wallet = 0
  saveOmbre()
}
function setOmbre(id, q) {
  if (!ombre[id]) ombre[id] = { wallet: 0, banca: 0 }
  ombre[id].wallet = q
  saveOmbre()
}

// ========== STILE VOIDBOT ==========
function box(titolo, righe) {
  let out = `┌「 ${titolo} 」\n`
  for (let r of righe) out += `│ ${r}\n`
  out += `└──────────────────`
  return out
}

// ========== CARICA COMANDI ==========
const comandi = new Map()
const cartelle = ['giochi','utility','moderazione','divertimento','download','ombre','anime','owner','principale']

for (let cartella of cartelle) {
  const dir = path.join(__dirname, 'comandi', cartella)
  if (!fs.existsSync(dir)) continue
  for (let f of fs.readdirSync(dir)) {
    if (!f.endsWith('.js')) continue
    try {
      const cmd = require(path.join(dir, f))
      if (cmd.name) comandi.set(cmd.name.toLowerCase(), cmd)
    } catch (e) { console.log('Errore', f, e.message) }
  }
}
console.log(`✅ Caricati ${comandi.size} comandi`)

// ========== BOT ==========
async function start() {
  const { state, saveCreds } = await useMultiFileAuthState('sessione')
  const sock = makeWASocket({
    auth: state,
    logger: pino({ level: 'silent' }),
    printQRInTerminal: true
  })

  sock.ev.on('creds.update', saveCreds)

  // Pairing code solo se non connesso
  if (!state.creds.registered) {
    setTimeout(async () => {
      try {
        const code = await sock.requestPairingCode(OWNER)
        console.log('CODICE:', code)
      } catch (e) { console.log('Errore pairing', e.message) }
    }, 3000)
  }

  sock.ev.on('connection.update', ({ connection, lastDisconnect }) => {
    if (connection === 'close' && lastDisconnect?.error?.output?.statusCode !== DisconnectReason.loggedOut) start()
    if (connection === 'open') console.log('🌑 ECLIPSE ONLINE')
  })

  sock.ev.on('messages.upsert', async ({ messages }) => {
    const m = messages[0]
    if (!m.message || m.key.fromMe) return

    const jid = m.key.remoteJid
    const testo = m.message.conversation || m.message.extendedTextMessage?.text || m.message.imageMessage?.caption || m.message.videoMessage?.caption || ''
    if (!testo.startsWith('.')) return

    const parti = testo.slice(1).trim().split(/\s+/)
    const nome = parti[0].toLowerCase()
    const args = parti.slice(1)
    const cmd = comandi.get(nome)
    if (!cmd) return

    const sender = m.key.participant || m.key.remoteJid
    const mentioned = m.message.extendedTextMessage?.contextInfo?.mentionedJid || []
    const target = mentioned[0] || null

    const reply = async (txt) => {
      await sock.sendMessage(jid, { text: txt }, { quoted: m })
    }

    try {
      await cmd.run({
        sock, reply, sender, target, args,
        jid, m, testo, OWNER,
        addOmbre, getSaldo, getBanca, setOmbre, ombre,
        box
      })
    } catch (e) {
      console.log('Errore comando', nome, e)
      await reply('❌ Errore, riprova 🌑')
    }
  })
}
start()
