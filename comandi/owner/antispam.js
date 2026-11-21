const fs = require('fs')
function load() { try { return JSON.parse(fs.readFileSync('./antispam.json')) } catch { return {} } }
function save(d) { fs.writeFileSync('./antispam.json', JSON.stringify(d)) }

module.exports = {
  name: 'antispam',
  run: async ({ reply, jid, isOwner, isGroup, sock, sender }) => {
    if (!isGroup) return reply('Usa in un gruppo')

    // SOLO OWNER / ADMIN
    let puo = false
    if (isOwner) puo = true
    else {
      try {
        const meta = await sock.groupMetadata(jid)
        const io = meta.participants.find(p => p.id === sender)
        if (io?.admin) puo = true
      } catch {}
    }
    if (!puo) return reply('❌ Solo OWNER / ADMIN 👑')

    const d = load()

    if (d[jid]) {
      delete d[jid]
      save(d)
      reply(`🌑 *ECLIPSE RIATTIVATO*\n\nSono tornato in questo gruppo.\nOra rispondo a tutti i comandi.\n\nProva con .ping`)
    } else {
      d[jid] = true
      save(d)
      reply(`🌑 *ECLIPSE IN PAUSA*\n\nMi metto in silenzioso in questo gruppo.\nNon risponderò a nessun comando.\n\nPer farmi tornare, scrivi di nuovo .antispam`)
    }
  }
}
