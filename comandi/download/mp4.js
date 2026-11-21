module.exports={name:'mp4',run:async({reply,args,sock,jid})=>{
if(!args[0]) return reply('Uso: .mp4 <link youtube>')
try{
const res=await fetch(`https://api.davidcyriltech.my.id/download/ytmp4?url=${encodeURIComponent(args[0])}`)
const j=await res.json()
const url=j?.result?.downloadUrl || j?.result?.url
if(!url) return reply('❌ Non riesco a scaricare MP4')
await sock.sendMessage(jid,{video:{url},caption:'🌑 ECLIPSE - YT MP4'})
}catch{reply('❌ Errore MP4 🌑')}
}}
