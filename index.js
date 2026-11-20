const { default: makeWASocket, useMultiFileAuthState } = require('@whiskeysockets/baileys')
const pino = require('pino')
const fs = require('fs')
const path = require('path')
const config = require('./config')

async function start() {
  const { state, saveCreds } = await useMultiFileAuthState('./session')
  const sock = makeWASocket({ auth: state, logger: pino({ level: 'silent' }) })
  sock.ev.on('creds.update', saveCreds)
  console.log('🌑 ECLIPSE BOT ONLINE - CARTELLE ATTIVE')

  // Carica tutti i comandi dalle cartelle
  const comandi = {}
  const base = path.join(__dirname, 'comandi')
  if(fs.existsSync(base)) {
    fs.readdirSync(base).forEach(cartella => {
      const cartellaPath = path.join(base, cartella)
      fs.readdirSync(cartellaPath).forEach(file => {
        if(file.endsWith('.js')) {
          const cmd = require(path.join(cartellaPath, file))
          comandi[cmd.name] = cmd
          console.log(`✅ Caricato: ${cartella}/${file}`)
        }
      })
    })
  }

  sock.ev.on('messages.upsert', async ({ messages }) => {
    const msg = messages[0]
    if(!msg.message || msg.key.fromMe) return
    const jid = msg.key.remoteJid
    const text = msg.message.conversation || msg.message.extendedTextMessage?.text || msg.message.imageMessage?.caption || ""
    if(!text.startsWith(config.prefix)) return

    const args = text.slice(1).trim().split(/ +/)
    const command = args.shift().toLowerCase()
    const sender = msg.key.participant || msg.key.remoteJid
    const isGroup = jid.endsWith('@g.us')
    const mentioned = msg.message.extendedTextMessage?.contextInfo?.mentionedJid?.[0] || null
    const target = mentioned || (args[0] ? args[0].replace(/[^0-9]/g,'') + '@s.whatsapp.net' : null)
    const reply = (t) => sock.sendMessage(jid, { text: t }, { quoted: msg })

    if(comandi[command]) {
      try {
        await comandi[command].run({ sock, msg, jid, args, sender, isGroup, target, reply, config })
      } catch(e) {
        console.log(e)
        reply('Errore nel comando 🌑')
      }
    }
  })
}
start()
