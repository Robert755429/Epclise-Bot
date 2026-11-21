module.exports={name:'twitter',run:async({reply,args,sock,jid})=>{
if(!args[0]) return reply('Uso: .twitter <link x>')
try{
const res=await fetch(`https://api.davidcyriltech.my.id/download/twitter?url=${encodeURIComponent(args[0])}`)
const j=await res.json()
const url=j?.result?.video || j?.result?.[0]?.url
if(!url) return reply('❌ Non riesco a scaricare da X')
await sock.sendMessage(jid,{video:{url},caption:'🌑 ECLIPSE - X Download'})
}catch{reply('❌ Errore X 🌑')}
}}
