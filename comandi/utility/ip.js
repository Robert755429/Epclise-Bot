module.exports={name:'ip',run:async({reply,args})=>{
if(!args[0]) return reply('Uso: .ip <indirizzo ip>')
try{
const res=await fetch(`http://ip-api.com/json/${args[0]}`)
const j=await res.json()
if(j.status==='fail') return reply('❌ IP non trovato')
reply(`🌐 *INFO IP*\nIP: *${j.query}*\nPaese: *${j.country}*\nCittà: *${j.city}*\nISP: *${j.isp}*`)
}catch{reply('❌ Errore IP')}
}}
