module.exports = {
  name: 'tagall',
  run: async ({ sock, jid, reply, isGroup }) => {
    if(!isGroup) return reply('Solo nei gruppi')
    const meta = await sock.groupMetadata(jid)
    const mentions = meta.participants.map(p => p.id)
    let t = '🌑 *TAGALL*\n\n'
    mentions.forEach(m => t += `@${m.split('@')[0]} `)
    await sock.sendMessage(jid, { text: t, mentions })
  }
}
