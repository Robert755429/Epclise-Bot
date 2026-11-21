module.exports={name:'tosticker',run:async({reply,msg,sock,jid})=>{
const quoted=msg.message.extendedTextMessage?.contextInfo?.quotedMessage
if(!quoted?.imageMessage) return reply('Rispondi a una foto con .tosticker')
try{
const m={key:{remoteJid:jid,id:msg.message.extendedTextMessage.contextInfo.stanzaId},message:quoted}
const buffer=await sock.downloadMediaMessage(m)
await sock.sendMessage(jid,{sticker:buffer})
}catch{reply('❌ Errore tosticker 🌑')}
}}
