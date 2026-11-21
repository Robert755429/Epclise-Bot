const fs=require('fs')
function load(){try{return JSON.parse(fs.readFileSync('./ombre.json'))}catch{return{}}}
function save(d){fs.writeFileSync('./ombre.json',JSON.stringify(d))}
module.exports={name:'give',run:async({reply,sender,target,args,isOwner})=>{
if(!isOwner) return reply('❌ Solo OWNER 🌑')
const q=parseInt(args[1]||args[0])||999999999
const id=target||sender
const d=load(); d[id]=d[id]||{saldo:0,banca:0}
d[id].saldo+=q; save(d)
reply(`🌑 Owner ha dato *${q} OMBRE* a @${id.split('@')[0]}`)
}}
