const fs=require('fs')
function load(){try{return JSON.parse(fs.readFileSync('./ombre.json'))}catch{return{}}}
module.exports={name:'topombre',run:async({reply})=>{
const d=load(); const arr=Object.entries(d).sort((a,b)=>(b[1].saldo+b[1].banca)-(a[1].saldo+a[1].banca)).slice(0,10)
let t=`🏆 *TOP OMBRE*\n\n`
arr.forEach(([id,u],i)=>{t+=`${i+1}. @${id.split('@')[0]} - ${u.saldo+u.banca} 🌑\n`})
reply(t||'Nessuno ha OMBRE ancora')
}}
