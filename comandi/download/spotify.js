module.exports={name:'spotify',run:async({reply,args,sock,jid})=>{
if(!args[0]) return reply('Uso: .spotify <link spotify>')
try{
const res=await fetch(`https://api.davidcyriltech.my.id/download/spotify?url=${encodeURIComponent(args[0])}`)
const j=await res.json()
const url=j?.result?.downloadUrl || j?.result?.url
if(!url) return reply('❌ Non riesco a scaricare da Spotify')
await sock.sendMessage(jid,{audio:{url},mimetype:'audio/mpeg',fileName:'spotify.mp3'})
}catch{reply('❌ Errore Spotify 🌑')}
}}
