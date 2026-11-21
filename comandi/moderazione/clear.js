module.exports = { name: 'clear', run: async ({ sock, jid, reply, isGroup, sender }) => {
  if(!isGroup) return
  const m = await sock.groupMetadata(jid)
  if(!m.participants.find(p=>p.id===sender)?.admin) return reply('❌ Solo admin')
  reply('🧹 Pulizia chat... (funzione admin)')
} }
