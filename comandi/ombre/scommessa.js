const fs=require('fs')
function load(){try{return JSON.parse(fs.readFileSync('./ombre.json'))}catch{return{}}}
function save(d){fs.writeFileSync('./ombre.json',JSON.stringify(d))}
module.exports={name:'scommessa',run:async({reply,sender,args})=>{
const q=parseInt(args[1]); const scelta=(args[0]||'').toLowerCase()
if(!['testa','croce'].includes(scelta)||!q) return reply('Uso: .scommessa testa 100')
const d=load(); d[sender]=d[sender]||{saldo:0,banca:0}
if(d[sender].saldo<q) return reply('❌ Non hai abbastanza OMBRE')
const esito=Math.random()>0.5?'testa':'croce'
if(esito===scelta){ d[sender].saldo+=q; save(d); reply(`🪙 È uscito *${esito}*! HAI VINTO +*${q}* 🌑`) }
else{ d[sender].saldo-=q; save(d); reply(`🪙 È uscito *${esito}*! HAI PERSO -*${q}*`) }
}}
