const fs=require('fs')
function load(){try{return JSON.parse(fs.readFileSync('./ombre.json'))}catch{return{}}}
function save(d){fs.writeFileSync('./ombre.json',JSON.stringify(d))}
module.exports={name:'gamble',run:async({reply,sender,args})=>{
const q=parseInt(args[0]); if(!q||q<=0) return reply('Uso: .gamble 100')
const d=load(); d[sender]=d[sender]||{saldo:0,banca:0}
if(d[sender].saldo<q) return reply('❌ Non hai abbastanza OMBRE')
if(Math.random()<0.45){ d[sender].saldo+=q; save(d); reply(`🎰 HAI VINTO! +*${q} OMBRE*\nSaldo: *${d[sender].saldo}*`) }
else{ d[sender].saldo-=q; save(d); reply(`🎰 HAI PERSO! -*${q} OMBRE*\nSaldo: *${d[sender].saldo}*`) }
}}
