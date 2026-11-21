const fs=require('fs')
function load(){try{return JSON.parse(fs.readFileSync('./ombre.json'))}catch{return{}}}
module.exports={name:'ombre',run:async({reply,sender})=>{
const d=load(); const u=d[sender]||{saldo:0,banca:0}
reply(`🌑 *LE TUE OMBRE*\nSaldo: *${u.saldo}* 🌑\nBanca: *${u.banca}* 🌑\nTotale: *${u.saldo+u.banca}* 🌑`)
}}
