module.exports={name:'mp3',run:async({reply,args,sock,jid})=>{
if(!args[0]) return reply('Uso: .mp3 <link youtube>')
try{
const res=await fetch(`https://api.davidcyriltech.my.id/download/ytmp3?url=${encodeURIComponent(args[0])}`)
const j=await res.json()
const url=j?.result?.downloadUrl || j?.result?.url
if(!url) return reply('❌ Non riesco a scaricare MP3')
await sock.sendMessage(jid,{audio:{url},mimetype:'audio/mpeg',fileName:'eclipse.mp3'}, {quoted:null})
}catch{reply('❌ Errore MP3 🌑')}
}}
