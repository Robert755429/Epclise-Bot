module.exports={name:'tiktok',run:async({reply,args,sock,jid})=>{
if(!args[0]) return reply('Uso: .tiktok <link>')
try{
const res=await fetch(`https://www.tikwm.com/api/?url=${encodeURIComponent(args[0])}`)
const j=await res.json()
const url=j?.data?.play
if(!url) return reply('❌ Non riesco a scaricare TikTok')
await sock.sendMessage(jid,{video:{url},caption:'🌑 ECLIPSE - TikTok'})
}catch{reply('❌ Errore TikTok 🌑')}
}}
