module.exports={name:'toimg',run:async({reply,msg,sock,jid})=>{
const quoted=msg.message.extendedTextMessage?.contextInfo?.quotedMessage
if(!quoted?.stickerMessage) return reply('Rispondi a uno sticker con .toimg')
try{
const m={key:{remoteJid:jid,id:msg.message.extendedTextMessage.contextInfo.stanzaId},message:quoted}
const buffer=await sock.downloadMediaMessage(m)
await sock.sendMessage(jid,{image:buffer,caption:'🌑 ECLIPSE - Sticker to Image'})
}catch{reply('❌ Errore toimg 🌑')}
}}
