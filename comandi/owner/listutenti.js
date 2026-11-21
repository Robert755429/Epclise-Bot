const fs=require('fs')
function load(){try{return JSON.parse(fs.readFileSync('./ombre.json'))}catch{return{}}}
module.exports={name:'listutenti',run:async({reply,isOwner})=>{
if(!isOwner) return reply('❌ Solo OWNER 👑')
const d=load(); const ids=Object.keys(d)
reply(`👥 *UTENTI OMBRE: ${ids.length}*\n\n${ids.slice(0,20).map(id=>`+${id.split('@')[0]} - ${d[id].saldo+d[id].banca} 🌑`).join('\n')}`)
}}
