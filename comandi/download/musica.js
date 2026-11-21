module.exports={name:'musica',run:async({reply,args,sock,jid})=>{
if(!args[0]) return reply('Uso: .musica <nome canzone>')
try{
const q=encodeURIComponent(args.join(' '))
const search=await fetch(`https://api.davidcyriltech.my.id/search/yt?q=${q}`)
const sj=await search.json()
const video=sj?.result?.[0]
if(!video) return reply('❌ Canzone non trovata')
const dl=await fetch(`https://api.davidcyriltech.my.id/download/ytmp3?url=${encodeURIComponent(video.url)}`)
const dj=await dl.json()
const url=dj?.result?.downloadUrl
if(!url) return reply('❌ Errore download')
await sock.sendMessage(jid,{audio:{url},mimetype:'audio/mpeg',fileName:`${video.title}.mp3`})
}catch{reply('❌ Errore musica 🌑')}
}}
