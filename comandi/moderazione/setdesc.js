module.exports = {
  name: 'setdesc',
  run: async ({ sock, jid, args, reply, isGroup }) => {
    if(!isGroup) return reply('Solo nei gruppi')
    await sock.groupUpdateDescription(jid, args.join(' ') || '🌑 ECLIPSE BOT')
    reply(`📝 Descrizione aggiornata`)
  }
}
