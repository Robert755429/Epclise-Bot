module.exports = {
  name: 'unmute',
  run: async ({ sock, jid, reply, isGroup }) => {
    if(!isGroup) return reply('Solo nei gruppi')
    await sock.groupSettingUpdate(jid, 'not_announcement')
    reply('🔊 Gruppo smutato - tutti possono scrivere')
  }
}
