const fs=require('fs')
function load(){try{return JSON.parse(fs.readFileSync('./ombre.json'))}catch{return{}}}
function save(d){fs.writeFileSync('./ombre.json',JSON.stringify(d))}
module.exports={name:'dona',run:async({reply,sender,target,args})=>{
if(!target) return reply('Tagga chi vuoi donare! Es: .dona @utente 100')
const q=parseInt(args[1]||args[0]); if(!q||q<=0) return reply('Uso: .dona @utente 100')
const d=load(); d[sender]=d[sender]||{saldo:0,banca:0}; d[target]=d[target]||{saldo:0,banca:0}
if(d[sender].saldo<q) return reply('❌ Non hai abbastanza OMBRE')
d[sender].saldo-=q; d[target].saldo+=q; save(d)
reply(`🎁 Hai donato *${q} OMBRE* a @${target.split('@')[0]} 🌑`)
}}
