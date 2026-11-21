module.exports={name:'video',run:async({reply,args,sock,jid})=>{
if(!args[0]) return reply('Uso: .video <nome video>')
try{
const q=encodeURIComponent(args.join(' '))
const s=await fetch(`https://api.davidcyriltech.my.id/search/yt?q=${q}`)
const sj=await s.json(); const v=sj?.result?.[0]
if(!v) return reply('❌ Non trovato')
const dl=await fetch(`https://api.davidcyriltech.my.id/download/ytmp4?url=${encodeURIComponent(v.url)}`)
const dj=await dl.json()
await sock.sendMessage(jid,{video:{url:dj?.result?.downloadUrl},caption:`🌑 ${v.title}`})
}catch{reply('❌ Errore video 🌑')}
}}
