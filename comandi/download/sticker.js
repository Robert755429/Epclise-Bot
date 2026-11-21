module.exports={name:'sticker',run:async({reply,msg,sock,jid})=>{
const quoted=msg.message.extendedTextMessage?.contextInfo?.quotedMessage
const img=quoted?.imageMessage || msg.message.imageMessage
const vid=quoted?.videoMessage || msg.message.videoMessage
if(!img && !vid) return reply('Manda una foto con .sticker o rispondi a una foto con .sticker')
try{
const m=quoted?{key:{remoteJid:jid,id:msg.message.extendedTextMessage.contextInfo.stanzaId},message:quoted}:msg
const buffer=await sock.downloadMediaMessage(m)
await sock.sendMessage(jid,{sticker:buffer})
}catch{reply('❌ Errore sticker 🌑')}
}}
