const fs=require('fs')
function load(){try{return JSON.parse(fs.readFileSync('./owners.json'))}catch{return[]}}
function save(d){fs.writeFileSync('./owners.json',JSON.stringify(d))}
module.exports={name:'delowner',run:async({reply,target,isOwner})=>{
if(!isOwner) return reply('❌ Solo OWNER 👑')
if(!target) return reply('Tagga chi vuoi togliere da owner')
let d=load().filter(x=>x!==target); save(d)
reply(`👑 @${target.split('@')[0]} non è più OWNER`)
}}
