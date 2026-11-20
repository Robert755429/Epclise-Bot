const { default: makeWASocket, useMultiFileAuthState } = require('@whiskeysockets/baileys')
const pino = require('pino')
const config = require('./config')

let warns = {}
let ombre = {} // saldo ombre per utente

function getOmbre(id) {
  if(!ombre[id]) ombre[id] = 1000 // saldo iniziale
  return ombre[id]
}

async function start() {
  const { state, saveCreds } = await useMultiFileAuthState('./session')
  const sock = makeWASocket({ auth: state, logger: pino({ level: 'silent' }) })
  sock.ev.on('creds.update', saveCreds)
  console.log('🌑 ECLIPSE BOT ONLINE - VALUTA: OMBRE')

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

    if(command === 'menu') {
      return reply(`🌑 *ECLIPSE BOT*\n\n_Scegli una categoria:_\n\n🛡️ .menu-moderazione\n🎲 .menu-divertimento\n⬇️ .menu-download\n🌑 .menu-ombre\n\n_Esempio: .menu-ombre_`)
    }
    if(command === 'menu-moderazione') return reply(`🛡️ *MODERAZIONE*\n\n.warn @utente\n.unwarn @utente\n.ban @utente\n.kick @utente\n.tagall`)
    if(command === 'menu-divertimento') return reply(`🎲 *DIVERTIMENTO*\n\n.ship\n.gaytest @utente\n.dado\n.slot\n.8ball domanda\n.verita\n.obbligo`)
    if(command === 'menu-download') return reply(`⬇️ *DOWNLOAD*\n\n.play nome canzone\n.tiktok link\n.ig link\n.yt link`)
    if(command === 'menu-ombre') return reply(`🌑 *OMBRE - ECONOMIA*\n\n.daily\n.balance\n.rapina @utente\n.dona @utente 100\n.classifica\n.shop`)

    // MODERAZIONE
    if(command === 'warn') {
      if(!isGroup || !target) return reply('Tagga qualcuno: .warn @utente')
      warns[target] = (warns[target] || 0) + 1
      if(warns[target] >= config.warnLimit) {
        warns[target] = 0
        await sock.groupParticipantsUpdate(jid, [target], 'remove')
        return reply(`🌑 Bannato! Aveva ${config.warnLimit} warn.`)
      }
      return reply(`⚠️ Warn ${warns[target]}/${config.warnLimit}`)
    }
    if(command === 'unwarn') { warns[target] = 0; return reply('Warn azzerate ✅') }
    if(command === 'ban' || command === 'kick') {
      if(!target) return reply('Tagga qualcuno')
      await sock.groupParticipantsUpdate(jid, [target], 'remove')
      return reply('Utente rimosso 🌑')
    }
    if(command === 'tagall') {
      if(!isGroup) return reply('Solo nei gruppi')
      const meta = await sock.groupMetadata(jid)
      const mentions = meta.participants.map(p => p.id)
      let t = '🌑 *TAGALL*\n\n'
      mentions.forEach(m => t += `@${m.split('@')[0]} `)
      return sock.sendMessage(jid, { text: t, mentions })
    }

    // DIVERTIMENTO
    if(command === 'dado') return reply(`🎲 Hai tirato: *${Math.floor(Math.random()*6)+1}*`)
    if(command === 'slot') {
      const em = ['🍒','🍋','🔔','💎','🌑','⭐']
      const r = [em[Math.floor(Math.random()*6)], em[Math.floor(Math.random()*6)], em[Math.floor(Math.random()*6)]]
      const win = r[0]===r[1] && r[1]===r[2]
      if(win) { ombre[sender] = getOmbre(sender) + 300; return reply(`🎰 ${r.join(' | ')}\nHAI VINTO +300 🌑 OMBRE!`) }
      return reply(`🎰 ${r.join(' | ')}\nRiprova...`)
    }
    if(command === '8ball') {
      const r = ['Si 🔥','No 😂','Forse...','Assolutamente si','ECLIPSE dice no 🌑']
      return reply(`🎱 ${r[Math.floor(Math.random()*r.length)]}`)
    }
    if(command === 'ship') {
      const perc = Math.floor(Math.random()*101)
      return reply(`💘 Compatibilità: *${perc}%*`)
    }
    if(command === 'gaytest') return reply(`🏳️‍🌈 Gaytest: *${Math.floor(Math.random()*101)}%*`)
    if(command === 'verita') {
      const v = ['Qual è il tuo segreto più grande?','Hai mai tradito?','Chi ti piace nel gruppo?']
      return reply(`🤫 VERITÀ: ${v[Math.floor(Math.random()*v.length)]}`)
    }
    if(command === 'obbligo') {
      const o = ['Manda un vocale cantando','Cambia foto profilo per 1h','Manda l\'ultima foto in galleria']
      return reply(`😈 OBBLIGO: ${o[Math.floor(Math.random()*o.length)]}`)
    }

    // 🌑 OMBRE - ECONOMIA
    if(command === 'daily') {
      ombre[sender] = getOmbre(sender) + 500
      return reply(`🌑 Hai ricevuto *500 OMBRE*!\nSaldo: *${ombre[sender]} OMBRE*`)
    }
    if(command === 'balance' || command === 'saldo' || command === 'ombre') {
      return reply(`🌑 Il tuo saldo: *${getOmbre(sender)} OMBRE*`)
    }
    if(command === 'rapina') {
      if(!target) return reply('Tagga chi vuoi rapinare: .rapina @utente')
      const rubate = Math.floor(Math.random()*200)+50
      ombre[sender] = getOmbre(sender) + rubate
      ombre[target] = Math.max(0, getOmbre(target) - rubate)
      return reply(`🌑 Hai rubato *${rubate} OMBRE* a @${target.split('@')[0]}!\nOra hai: *${ombre[sender]} OMBRE*`)
    }
    if(command === 'dona') {
      if(!target) return reply('Uso: .dona @utente 100')
      const q = parseInt(args[1]) || 0
      if(q <= 0) return reply('Metti una quantità valida')
      if(getOmbre(sender) < q) return reply('Non hai abbastanza OMBRE 🌑')
      ombre[sender] -= q
      ombre[target] = getOmbre(target) + q
      return reply(`🌑 Hai donato *${q} OMBRE* a @${target.split('@')[0]}`)
    }
    if(command === 'classifica') return reply(`🏆 *CLASSIFICA OMBRE*\n1. Tu - ${getOmbre(sender)} 🌑\n2. ECLIPSE - 999 🌑`)
    if(command === 'shop') return reply(`🛒 *SHOP OMBRE*\n\n.vip - 5000 OMBRE\n.titolo - 2000 OMBRE\n.protetto - 1000 OMBRE\n\nScrivi .compra vip`)

    if(command === 'ping') return reply('Pong! 🌑 ECLIPSE online')
    if(command === 'info') return reply(`🌑 *ECLIPSE BOT*\nValuta: OMBRE 🌑\nPrefisso: .\nOwner: ${config.ownerName}`)
  })
}
start()
