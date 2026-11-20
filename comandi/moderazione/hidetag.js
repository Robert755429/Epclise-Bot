module.exports = {
  name: 'hidetag',
  run: async ({ sock, jid, args, isGroup, reply }) => {
    if(!isGroup) return reply('Solo nei gruppi')
    const meta = await sock.groupMetadata(jid)
    const mentions = meta.participants.map(p => p.id)
    await sock.sendMessage(jid, { text: args.join(' ') || '🌑 ECLIPSE', mentions })
  }
}
