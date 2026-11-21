module.exports={name:'kawaii',run:async({reply,sender})=>{
const perc=Math.floor(Math.random()*100)
reply(`💖 *LIVELLO KAWAII*\n\n@${sender.split('@')[0]} sei kawaii al *${perc}%*\n\n${perc>85?'😍 TROPPO KAWAII!':'🥰 Carino/a!'}`)
}}
