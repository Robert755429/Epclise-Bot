module.exports = {
  name: 'link',
  run: async ({ sock, jid, reply, isGroup }) => {
    if(!isGroup) return reply('Solo nei gruppi')
    const code = await sock.groupInviteCode(jid)
    reply(`🔗 Link gruppo:\nhttps://chat.whatsapp.com/${code}`)
  }
}
