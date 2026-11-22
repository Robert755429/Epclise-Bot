module.exports={name:'tombola',run:async({reply,sender,addOmbre})=>{
const nums=Array.from({length:5},()=>Math.floor(Math.random()*90)+1)
if(addOmbre)addOmbre(sender,10)
reply(`🎱 *TOMBOLA*\n\nI tuoi numeri: ${nums.join(' - ')}\n\n+10 🌑 per aver giocato!`)
}}
