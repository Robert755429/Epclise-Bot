module.exports={name:'spegni',run:async({reply,isOwner})=>{
if(!isOwner) return reply('❌ Solo OWNER 👑')
await reply('🌑 ECLIPSE si spegne... Ciao!')
setTimeout(()=>process.exit(0),1000)
}}
