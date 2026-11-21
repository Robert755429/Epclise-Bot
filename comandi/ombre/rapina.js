const fs=require('fs')
function load(){try{return JSON.parse(fs.readFileSync('./ombre.json'))}catch{return{}}}
function save(d){fs.writeFileSync('./ombre.json',JSON.stringify(d))}
module.exports={name:'rapina',run:async({reply,sender,target})=>{
if(!target) return reply('Tagga chi vuoi rapinare! Es: .rapina @utente')
const d=load(); d[sender]=d[sender]||{saldo:0,banca:0}; d[target]=d[target]||{saldo:0,banca:0}
if(d[target].saldo<100) return reply('❌ Troppo povero da rapinare 😂')
if(Math.random()<0.35){
  const rubato=Math.floor(d[target].saldo*0.3)
  d[target].saldo-=rubato; d[sender].saldo+=rubato; save(d)
  reply(`🔫 RAPINA RIUSCITA! Hai preso *${rubato} OMBRE* a @${target.split('@')[0]}`)
}else{
  d[sender].saldo=Math.max(0,d[sender].saldo-100); save(d)
  reply(`🚔 RAPINA FALLITA! La polizia ECLIPSE ti ha beccato! -*100 OMBRE*`)
}
}}
