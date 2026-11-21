module.exports = { name: 'warn', run: async ({ sock, jid, target, reply, isGroup, sender }) => {
  if(!isGroup) return
  const m = await sock.groupMetadata(jid)
  if(!m.participants.find(p=>p.id===sender)?.admin) return reply('❌ Solo admin')
  if(!target) return reply('Uso: .warn @utente')
  reply(`⚠️ Warn a @${target.split('@')[0]} - 1/3`)
} }
