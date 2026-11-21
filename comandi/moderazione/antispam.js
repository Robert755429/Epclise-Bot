module.exports = { name: 'antispam', run: async ({ sock, jid, reply, isGroup, sender, args }) => {
  if(!isGroup) return
  const m = await sock.groupMetadata(jid)
  if(!m.participants.find(p=>p.id===sender)?.admin) return reply('❌ Solo admin')
  reply(`🚫 Antispam ${args[0]==='off'?'DISATTIVATO ❌':'ATTIVATO ✅'}`)
} }
