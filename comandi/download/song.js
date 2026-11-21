module.exports={name:'song',run:async({reply,args,sock,jid})=>{
if(!args[0]) return reply('Uso: .song <nome>')
try{
const q=encodeURIComponent(args.join(' '))
const s=await fetch(`https://api.davidcyriltech.my.id/search/yt?q=${q}`)
const sj=await s.json(); const v=sj?.result?.[0]
if(!v) return reply('❌ Non trovata')
const dl=await fetch(`https://api.davidcyriltech.my.id/download/ytmp3?url=${encodeURIComponent(v.url)}`)
const dj=await dl.json()
await sock.sendMessage(jid,{audio:{url:dj?.result?.downloadUrl},mimetype:'audio/mpeg',fileName:`${v.title}.mp3`})
}catch{reply('❌ Errore song 🌑')}
}}
