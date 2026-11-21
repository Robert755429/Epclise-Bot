const fs=require('fs')
module.exports={name:'setprefix',run:async({reply,args,isOwner})=>{
if(!isOwner) return reply('❌ Solo OWNER 👑')
if(!args[0]) return reply('Uso: .setprefix !')
try{
const c=require('../config.js')
c.prefix=args[0]
fs.writeFileSync('./config.js',`module.exports=${JSON.stringify(c,null,2)}`)
reply(`✅ Prefix cambiato a: *${args[0]}*\nRiavvia il bot per applicarlo`)
}catch{reply('✅ Prefix impostato, riavvia il bot')}
}}
