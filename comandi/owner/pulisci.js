module.exports={name:'pulisci',run:async({reply,args,isOwner,sock,jid})=>{
if(!isOwner) return reply('❌ Solo OWNER 👑')
const q=parseInt(args[0])||10
reply(`🧹 Pulisco ${q} messaggi... (usa .cancella per cancellare davvero)`)
}}
