module.exports={name:'pinterest',run:async({reply,args,sock,jid})=>{
if(!args[0]) return reply('Uso: .pinterest <link>')
try{
const res=await fetch(`https://api.davidcyriltech.my.id/download/pinterest?url=${encodeURIComponent(args[0])}`)
const j=await res.json()
const url=j?.result?.image || j?.result?.video || j?.result?.[0]
if(!url) return reply('❌ Non riesco a scaricare')
await sock.sendMessage(jid,{image:{url},caption:'🌑 ECLIPSE - Pinterest'})
}catch{reply('❌ Errore Pinterest 🌑')}
}}
