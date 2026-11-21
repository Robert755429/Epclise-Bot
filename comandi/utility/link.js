module.exports={name:'link',run:async({reply,sock,jid,isGroup})=>{
if(!isGroup) return reply('Usa in un gruppo')
try{
const code=await sock.groupInviteCode(jid)
reply(`🔗 *LINK GRUPPO*\nhttps://chat.whatsapp.com/${code}`)
}catch{reply('❌ Non riesco a prendere il link')}
}}
