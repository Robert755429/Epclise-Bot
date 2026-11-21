module.exports = { name: 'setnome', run: async ({ sock, jid, args, reply, isGroup, sender }) => {
  if(!isGroup) return
  const m = await sock.groupMetadata(jid)
  const bot = sock.user.id.split(':')[0]+'@s.whatsapp.net'
  if(!m.participants.find(p=>p.id===sender)?.admin) return reply('❌ Solo admin')
  if(!m.participants.find(p=>p.id===bot)?.admin) return reply('❌ Rendimi admin prima 🌑')
  if(!args[0]) return reply('Uso: .setnome Nuovo Nome')
  await sock.groupUpdateSubject(jid, args.join(' '))
  reply(`✏️ Nome: ${args.join(' ')}`)
} }
