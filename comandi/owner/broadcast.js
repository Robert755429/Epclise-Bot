module.exports={name:'broadcast',run:async({reply,args,isOwner,sock})=>{
if(!isOwner) return reply('❌ Solo OWNER 👑')
if(!args.length) return reply('Uso: .broadcast <messaggio>')
try{
const gruppi=await sock.groupFetchAllParticipating()
let count=0
for(const id of Object.keys(gruppi)){
  try{ await sock.sendMessage(id,{text:`🌑 *BROADCAST ECLIPSE*\n\n${args.join(' ')}`}); count++ }catch{}
}
reply(`✅ Broadcast mandato a *${count}* gruppi`)
}catch{reply('❌ Errore broadcast')}
}}
