module.exports = {
  name: 'mute',
  run: async ({ sock, jid, reply, isGroup }) => {
    if(!isGroup) return reply('Solo nei gruppi')
    await sock.groupSettingUpdate(jid, 'announcement')
    reply('🔇 Gruppo mutato - solo admin possono scrivere')
  }
}
