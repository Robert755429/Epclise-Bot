const fs=require('fs')
function load(){try{return JSON.parse(fs.readFileSync('./ombre.json'))}catch{return{}}}
module.exports={name:'saldo',run:async({reply,sender,target})=>{
const d=load(); const id=target||sender; const u=d[id]||{saldo:0,banca:0}
reply(`💰 Saldo di @${id.split('@')[0]}: *${u.saldo} OMBRE* 🌑\nBanca: *${u.banca}*`)
}}
