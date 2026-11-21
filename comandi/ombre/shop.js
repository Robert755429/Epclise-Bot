const fs=require('fs')
function load(){try{return JSON.parse(fs.readFileSync('./ombre.json'))}catch{return{}}}
function save(d){fs.writeFileSync('./ombre.json',JSON.stringify(d))}
module.exports={name:'shop',run:async({reply,sender,args})=>{
const item=(args[0]||'').toLowerCase()
const prezzi={vip:1000,dorata:5000,corona:10000,fuoco:2000}
if(!prezzi[item]) return reply(`🛒 *SHOP*\n.shop vip - 1000 🌑\n.shop dorata - 5000 🌑\n.shop corona - 10000 🌑\n.shop fuoco - 2000 🌑`)
const d=load(); d[sender]=d[sender]||{saldo:0,banca:0}
if(d[sender].saldo<prezzi[item]) return reply(`❌ Ti servono ${prezzi[item]} OMBRE, hai ${d[sender].saldo}`)
d[sender].saldo-=prezzi[item]; save(d)
reply(`✅ Hai comprato *${item.toUpperCase()}* per *${prezzi[item]} OMBRE* 🌑\nSaldo rimasto: *${d[sender].saldo}*`)
}}
