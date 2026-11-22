module.exports={name:'reazione',run:async({reply,sender,addOmbre})=>{
const ms=Math.floor(Math.random()*900)+100
if(addOmbre)addOmbre(sender,10)
reply(`⚡ *TEST REAZIONE*\n\nTempo di ECLIPSE: ${ms}ms\nRiesci a batterlo? 🌑\n\n+10 🌑 per aver giocato!`)
}}
