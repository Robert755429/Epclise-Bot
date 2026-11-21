module.exports = { name: 'setdesc', run: async ({ sock, jid, args, reply, isGroup, sender }) => {
  if(!isGroup) return
  const m = await sock.groupMetadata(jid)
  const bot = sock.user.id.split(':')[0]+'@s.whatsapp.net'
  if(!m.participants.find(p=>p.id===sender)?.admin) return reply('❌ Solo admin')
  if(!m.participants.find(p=>p.id===bot)?.admin) return reply('❌ Rendimi admin prima 🌑')
  await sock.groupUpdateDescription(jid, args.join(' ')||'🌑 ECLIPSE')
  reply('📝 Descrizione aggiornata')
} }
