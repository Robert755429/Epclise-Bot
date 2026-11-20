module.exports = {
  name: 'lockdown',
  run: async ({ sock, jid, reply, isGroup }) => {
    if(!isGroup) return reply('Solo nei gruppi')
    await sock.groupSettingUpdate(jid, 'announcement')
    reply(`🚨 *LOCKDOWN ATTIVO*\nSolo admin possono scrivere 🌑`)
  }
}
