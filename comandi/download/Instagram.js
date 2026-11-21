module.exports={name:'instagram',run:async({reply,args,sock,jid})=>{
if(!args[0]) return reply('Uso: .instagram <link ig>')
try{
const res=await fetch(`https://api.davidcyriltech.my.id/download/instagram?url=${encodeURIComponent(args[0])}`)
const j=await res.json()
const url=j?.result?.[0]?.url || j?.result?.url
if(!url) return reply('❌ Non riesco a scaricare questo Reel')
await sock.sendMessage(jid,{video:{url},caption:'🌑 ECLIPSE - Instagram Download'})
}catch{reply('❌ Errore download IG 🌑')}
}}
