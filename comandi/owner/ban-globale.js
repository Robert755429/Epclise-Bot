module.exports={name:'ban-globale',run:async({reply,target,isOwner,sock})=>{
if(!isOwner) return reply('❌ Solo OWNER 👑')
if(!target) return reply('Tagga chi vuoi bannare ovunque')
try{
const gruppi=await sock.groupFetchAllParticipating()
for(const id of Object.keys(gruppi)){
  try{ await sock.groupParticipantsUpdate(id,[target],'remove') }catch{}
}
reply(`🔨 @${target.split('@')[0]} bannato da TUTTI i gruppi 🌑`)
}catch{reply('❌ Errore ban globale')}
}}
