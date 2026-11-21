module.exports={name:'lotteria',run:async({reply})=>{
const num=Math.floor(Math.random()*1000)+1
reply(`🎟️ *LOTTERIA*\n\nIl tuo numero è: *${num}*\n\nSe esce 777 hai vinto! 🌑\n${num===777?'🔥🔥 HAI VINTO!!! 🔥🔥':''}`)
}}
