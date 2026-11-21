module.exports = { name: 'unwarn', run: async ({ sock, jid, target, reply, isGroup, sender }) => {
  if(!isGroup) return
  const m = await sock.groupMetadata(jid)
  if(!m.participants.find(p=>p.id===sender)?.admin) return reply('❌ Solo admin')
  if(!target) return reply('Uso: .unwarn @utente')
  reply(`✅ Warn azzerate per @${target.split('@')[0]}`)
} }
