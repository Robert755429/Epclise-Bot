const fs=require('fs')
function load(){try{return JSON.parse(fs.readFileSync('./ombre.json'))}catch{return{}}}
function save(d){fs.writeFileSync('./ombre.json',JSON.stringify(d))}
function loadCd(){try{return JSON.parse(fs.readFileSync('./daily.json'))}catch{return{}}}
function saveCd(d){fs.writeFileSync('./daily.json',JSON.stringify(d))}
module.exports={name:'daily',run:async({reply,sender})=>{
const cd=loadCd(); const ora=Date.now()
if(cd[sender] && ora-cd[sender]<86400000) return reply(`⏰ Hai già preso il daily! Torna tra *${Math.ceil((86400000-(ora-cd[sender]))/3600000)} ore*`)
const d=load(); d[sender]=d[sender]||{saldo:0,banca:0}
const premio=Math.floor(Math.random()*200)+100
d[sender].saldo+=premio; save(d); cd[sender]=ora; saveCd(cd)
reply(`🌑 *DAILY!*\nHai ricevuto *${premio} OMBRE*\nSaldo: *${d[sender].saldo}*`)
}}
