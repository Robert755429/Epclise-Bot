const fs=require('fs')
function load(){try{return JSON.parse(fs.readFileSync('./ombre.json'))}catch{return{}}}
function save(d){fs.writeFileSync('./ombre.json',JSON.stringify(d))}
module.exports={name:'preleva',run:async({reply,sender,args})=>{
const q=parseInt(args[0]); if(!q||q<=0) return reply('Uso: .preleva 100')
const d=load(); d[sender]=d[sender]||{saldo:0,banca:0}
if(d[sender].banca<q) return reply('❌ Non hai abbastanza in banca')
d[sender].banca-=q; d[sender].saldo+=q; save(d)
reply(`🏦 Prelevate *${q} OMBRE*\nSaldo: *${d[sender].saldo}*`)
}}
