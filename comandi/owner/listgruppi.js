module.exports={name:'listgruppi',run:async({reply,isOwner,sock})=>{
if(!isOwner) return reply('❌ Solo OWNER 👑')
const gruppi=await sock.groupFetchAllParticipating()
let t=`📋 *GRUPPI ECLIPSE (${Object.keys(gruppi).length})*\n\n`
Object.values(gruppi).forEach((g,i)=>{t+=`${i+1}. ${g.subject} - ${g.participants.length} membri\n`})
reply(t)
}}
