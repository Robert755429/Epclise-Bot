const fs=require('fs')
function load(){try{return JSON.parse(fs.readFileSync('./owners.json'))}catch{return[]}}
function save(d){fs.writeFileSync('./owners.json',JSON.stringify(d))}
module.exports={name:'addowner',run:async({reply,target,isOwner,args})=>{
if(!isOwner) return reply('❌ Solo OWNER 👑')
if(!target) return reply('Tagga chi vuoi rendere owner')
const d=load(); if(!d.includes(target)) d.push(target)
save(d); reply(`👑 @${target.split('@')[0]} ora è OWNER`)
}}
