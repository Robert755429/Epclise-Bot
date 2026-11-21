const fs=require('fs')
function load(){try{return JSON.parse(fs.readFileSync('./ombre.json'))}catch{return{}}}
function save(d){fs.writeFileSync('./ombre.json',JSON.stringify(d))}
module.exports={name:'bonus',run:async({reply,sender})=>{
const d=load(); d[sender]=d[sender]||{saldo:0,banca:0}
const b=Math.floor(Math.random()*101)+50
d[sender].saldo+=b; save(d)
reply(`🎁 BONUS! Hai ricevuto *${b} OMBRE* 🌑\nSaldo ora: *${d[sender].saldo}*`)
}}
