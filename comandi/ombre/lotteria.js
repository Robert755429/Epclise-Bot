const fs=require('fs')
function load(){try{return JSON.parse(fs.readFileSync('./ombre.json'))}catch{return{}}}
function save(d){fs.writeFileSync('./ombre.json',JSON.stringify(d))}
module.exports={name:'lotteria',run:async({reply,sender,args})=>{
const n=parseInt(args[0]); if(!n||n<1||n>10) return reply('Scegli un numero da 1 a 10! Es: .lotteria 7')
const d=load(); d[sender]=d[sender]||{saldo:0,banca:0}
if(d[sender].saldo<20) return reply('❌ Ti servono 20 OMBRE per giocare')
const vincente=Math.floor(Math.random()*10)+1
d[sender].saldo-=20
if(n===vincente){ d[sender].saldo+=500; save(d); reply(`🎉 HAI VINTO LA LOTTERIA! Numero ${vincente}! +*500 OMBRE* 🌑`) }
else{ save(d); reply(`❌ Il numero era ${vincente}, non ${n}. Hai perso 20 OMBRE`) }
}}
