const fs=require('fs')
function load(){try{return JSON.parse(fs.readFileSync('./ombre.json'))}catch{return{}}}
function save(d){fs.writeFileSync('./ombre.json',JSON.stringify(d))}
module.exports={name:'ruba',run:async({reply,sender,target})=>{
if(!target) return reply('Uso: .ruba @utente')
const d=load(); d[sender]=d[sender]||{saldo:0,banca:0}; d[target]=d[target]||{saldo:0,banca:0}
if(d[target].saldo<=0) return reply('❌ Non ha niente da rubare')
const rubato=Math.floor(Math.random()*100)+10
if(d[target].saldo<rubato) return reply('❌ Ha troppo poche OMBRE')
d[target].saldo-=rubato; d[sender].saldo+=rubato; save(d)
reply(`🕵️ Hai rubato *${rubato} OMBRE* a @${target.split('@')[0]}!`)
}}
