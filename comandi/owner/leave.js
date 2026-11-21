module.exports={name:'leave',run:async({reply,isOwner,sock,jid,isGroup})=>{
if(!isOwner) return reply('❌ Solo OWNER 👑')
if(!isGroup) return reply('Usa in un gruppo')
await reply('👋 ECLIPSE esce dal gruppo... Ciao 🌑')
await sock.groupLeave(jid)
}}
