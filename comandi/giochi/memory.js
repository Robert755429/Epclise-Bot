module.exports={name:'memory',run:async({reply,sender,addOmbre})=>{
const em=['🌑','⭐','🔥','🍒','🐱','🎲']
const seq=[em[Math.floor(Math.random()*6)],em[Math.floor(Math.random()*6)],em[Math.floor(Math.random()*6)]]
if(addOmbre)addOmbre(sender,10)
reply(`🧠 *MEMORY*\n\nRicorda: ${seq.join(' ')}\n\n+10 🌑 per aver giocato!`)
}}
