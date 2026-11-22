module.exports={name:'matematica',run:async({reply,sender,addOmbre})=>{
const a=Math.floor(Math.random()*20)+1,b=Math.floor(Math.random()*20)+1
if(addOmbre)addOmbre(sender,15)
reply(`🧮 *MATEMATICA VELOCE*\n\nQuanto fa ${a} + ${b} ?\n\n(Risposta: ||${a+b}||)\n\n+15 🌑 per aver giocato!`)
}}
