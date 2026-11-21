module.exports = { name: 'hidetag', run: async ({ sock, jid, args, reply, isGroup, sender }) => {
  if(!isGroup) return
  const m = await sock.groupMetadata(jid)
  if(!m.participants.find(p=>p.id===sender)?.admin) return reply('❌ Solo admin')
  const mentions = m.participants.map(p=>p.id)
  await sock.sendMessage(jid,{text:args.join(' ')||'🌑 ECLIPSE', mentions})
} }
