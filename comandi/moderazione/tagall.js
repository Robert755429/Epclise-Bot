module.exports = { name: 'tagall', run: async ({ sock, jid, reply, isGroup, sender, args }) => {
  if(!isGroup) return
  const m = await sock.groupMetadata(jid)
  if(!m.participants.find(p=>p.id===sender)?.admin) return reply('❌ Solo admin')
  const mentions = m.participants.map(p=>p.id)
  let t = `🌑 *TAGALL*\n${args.join(' ')||''}\n\n`
  mentions.forEach(x=>t+=`@${x.split('@')[0]} `)
  await sock.sendMessage(jid,{text:t, mentions})
} }
