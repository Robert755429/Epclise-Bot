module.exports={name:'qr',run:async({reply,args,sock,jid})=>{
if(!args.length) return reply('Uso: .qr <testo o link>')
try{
const t=encodeURIComponent(args.join(' '))
await sock.sendMessage(jid,{image:{url:`https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${t}`},caption:`🌑 QR per: ${args.join(' ')}`})
}catch{reply('❌ Errore QR')}
}}
