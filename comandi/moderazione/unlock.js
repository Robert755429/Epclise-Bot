module.exports = {
  name: 'unlock',
  run: async ({ sock, jid, reply, isGroup }) => {
    if(!isGroup) return reply('Solo nei gruppi')
    await sock.groupSettingUpdate(jid, 'not_announcement')
    reply(`✅ Lockdown rimosso`)
  }
}
