const fs=require('fs')
function load(){try{return JSON.parse(fs.readFileSync('./ombre.json'))}catch{return{}}}
function save(d){fs.writeFileSync('./ombre.json',JSON.stringify(d))}
module.exports={name:'furto',run:async({reply,sender,target})=>{
if(!target) return reply('Tagga chi vuoi derubare! Es: .furto @utente')
const d=load(); d[sender]=d[sender]||{saldo:0,banca:0}; d[target]=d[target]||{saldo:0,banca:0}
if(d[target].saldo<=0) return reply('❌ Quella persona non ha OMBRE da rubare')
if(Math.random()<0.5){
  const rubato=Math.floor(d[target].saldo*0.2)
  d[target].saldo-=rubato; d[sender].saldo+=rubato; save(d)
  reply(`😈 FURTO RIUSCITO! Hai rubato *${rubato} OMBRE* a @${target.split('@')[0]}`)
}else{
  const multa=50; d[sender].saldo=Math.max(0,d[sender].saldo-multa); save(d)
  reply(`🚨 FURTO FALLITO! Sei stato beccato! Multa di *${multa} OMBRE*`)
}
}}
