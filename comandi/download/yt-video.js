module.exports={name:'yt-video',run:async({reply,args,sock,jid})=>{
if(!args[0]) return reply('Uso: .yt-video <link>')
try{
const dl=await fetch(`https://api.davidcyriltech.my.id/download/ytmp4?url=${encodeURIComponent(args[0])}`)
const dj=await dl.json()
await sock.sendMessage(jid,{video:{url:dj?.result?.downloadUrl},caption:'🌑 ECLIPSE - YT Video'})
}catch{reply('❌ Errore yt-video 🌑')}
}}
