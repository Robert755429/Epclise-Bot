module.exports={name:'dragonball',run:async({reply})=>{
const liv=['Super Saiyan','Super Saiyan Blue','Ultra Instinct','Super Saiyan God','Base']
reply(`🐉 *LIVELLO DRAGON BALL*\n\nHai raggiunto: *${liv[Math.floor(Math.random()*liv.length)]}*\n\nPotenza: ${Math.floor(Math.random()*9000)+1000} 🌑`)
}}
