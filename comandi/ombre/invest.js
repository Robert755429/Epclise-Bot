const fs=require('fs')
function load(){try{return JSON.parse(fs.readFileSync('./ombre.json'))}catch{return{}}}
function save(d){fs.writeFileSync('./ombre.json',JSON.stringify(d))}
module.exports={name:'invest',run:async({reply,sender,args})=>{
const q=parseInt(args[0]); if(!q||q<=0) return reply('Uso: .invest 100')
const d=load(); d[sender]=d[sender]||{saldo:0,banca:0}
if(d[sender].saldo<q) return reply('❌ Non hai abbastanza OMBRE')
d[sender].saldo-=q
const esito=Math.random()
if(esito<0.4){ const vinto=Math.floor(q*1.8); d[sender].saldo+=vinto; save(d); reply(`📈 INVESTIMENTO TOP! Hai messo ${q}, hai preso *${vinto}* 🌑`) }
else{ save(d); reply(`📉 INVESTIMENTO FALLITO! Hai perso *${q} OMBRE* 😭`) }
}}
