module.exports={name:'info',run:async({reply,sock,jid})=>{
try{
const meta=await sock.groupMetadata(jid)
reply(`ℹ️ *INFO GRUPPO*\nNome: *${meta.subject}*\nMembri: *${meta.participants.length}*\nID: ${meta.id}`)
}catch{reply('ℹ️ *INFO BOT*\n🌑 ECLIPSE\nUsa in un gruppo per vedere info gruppo')}
}}
