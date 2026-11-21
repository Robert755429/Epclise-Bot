module.exports = { name: 'add', run: async ({ sock, jid, args, reply, isGroup, sender }) => {
  if(!isGroup) return
  const m = await sock.groupMetadata(jid)
  const bot = sock.user.id.split(':')[0]+'@s.whatsapp.net'
  if(!m.participants.find(p=>p.id===sender)?.admin) return reply('❌ Solo admin')
  if(!m.participants.find(p=>p.id===bot)?.admin) return reply('❌ Rendimi admin prima 🌑')
  if(!args[0]) return reply('Uso: .add 393887347002')
  const num = args[0].replace(/[^0-9]/g,'')+'@s.whatsapp.net'
  await sock.groupParticipantsUpdate(jid,[num],'add')
  reply(`➕ Aggiunto ${args[0]}`)
} }
