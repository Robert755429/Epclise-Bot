module.exports={name:'join',run:async({reply,args,isOwner,sock})=>{
if(!isOwner) return reply('❌ Solo OWNER 👑')
if(!args[0]) return reply('Uso: .join <link gruppo>')
try{
const code=args[0].split('/').pop()
await sock.groupAcceptInvite(code)
reply('✅ ECLIPSE è entrato nel gruppo 🌑')
}catch{reply('❌ Link non valido')}
}}
