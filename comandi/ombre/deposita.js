const fs=require('fs')
function load(){try{return JSON.parse(fs.readFileSync('./ombre.json'))}catch{return{}}}
function save(d){fs.writeFileSync('./ombre.json',JSON.stringify(d))}
module.exports={name:'deposita',run:async({reply,sender,args})=>{
const q=parseInt(args[0]); if(!q||q<=0) return reply('Uso: .deposita 100')
const d=load(); d[sender]=d[sender]||{saldo:0,banca:0}
if(d[sender].saldo<q) return reply('❌ Non hai abbastanza OMBRE')
d[sender].saldo-=q; d[sender].banca+=q; save(d)
reply(`🏦 Depositate *${q} OMBRE*\nIn banca: *${d[sender].banca}*`)
}}
