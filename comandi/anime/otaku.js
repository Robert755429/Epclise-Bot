module.exports={name:'otaku',run:async({reply,sender})=>{
const perc=Math.floor(Math.random()*100)
reply(`🌸 *LIVELLO OTAKU*\n\n@${sender.split('@')[0]} sei otaku al *${perc}%*\n${perc>80?'🏆 OTAKU SUPREMO!':perc>50?'🔥 Bel livello':'😅 Sei ancora un novizio'}`)
}}
