module.exports={name:'facebook',run:async({reply,args,sock,jid})=>{
if(!args[0]) return reply('Uso: .facebook <link fb>')
try{
const res=await fetch(`https://api.davidcyriltech.my.id/download/facebook?url=${encodeURIComponent(args[0])}`)
const j=await res.json()
const url=j?.result?.video || j?.result?.[0]?.url
if(!url) return reply('❌ Non riesco a scaricare questo video FB')
await sock.sendMessage(jid,{video:{url},caption:'🌑 ECLIPSE - Facebook Download'})
}catch{reply('❌ Errore download FB 🌑')}
}}
