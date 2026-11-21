module.exports={name:'riavvia',run:async({reply,isOwner})=>{
if(!isOwner) return reply('❌ Solo OWNER 👑')
await reply('🔄 Riavvio ECLIPSE...')
process.exit(0)
}}
