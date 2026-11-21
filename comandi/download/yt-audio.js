module.exports={name:'yt-audio',run:async({reply,args,sock,jid})=>{
if(!args[0]) return reply('Uso: .yt-audio <link>')
try{
const dl=await fetch(`https://api.davidcyriltech.my.id/download/ytmp3?url=${encodeURIComponent(args[0])}`)
const dj=await dl.json()
await sock.sendMessage(jid,{audio:{url:dj?.result?.downloadUrl},mimetype:'audio/mpeg',fileName:'eclipse.mp3'})
}catch{reply('❌ Errore yt-audio 🌑')}
}}
