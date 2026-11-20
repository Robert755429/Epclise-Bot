module.exports = {
  name: 'invita',
  run: async ({ sock, jid, reply, isGroup }) => {
    if(!isGroup) return reply('Solo nei gruppi')
    const code = await sock.groupInviteCode(jid)
    reply(`📩 Invita con questo link:\nhttps://chat.whatsapp.com/${code}`)
  }
}
