module.exports = { name: 'retrocedi', run: async ({ sock, jid, target, reply, isGroup, sender }) => {
  if(!isGroup) return
  const m = await sock.groupMetadata(jid)
  const bot = sock.user.id.split(':')[0]+'@s.whatsapp.net'
  if(!m.participants.find(p=>p.id===sender)?.admin) return reply('❌ Solo admin')
  if(!m.participants.find(p=>p.id===bot)?.admin) return reply('❌ Rendimi admin prima 🌑')
  if(!target) return reply('Uso: .retrocedi @utente')
  await sock.groupParticipantsUpdate(jid,[target],'demote')
  reply(`⬇️ @${target.split('@')[0]} non è più admin`)
} }
