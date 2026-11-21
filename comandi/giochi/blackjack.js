module.exports={name:'blackjack',run:async({reply})=>{
const tu=Math.floor(Math.random()*11)+11
const bot=Math.floor(Math.random()*11)+11
let ris=tu>21?'Hai sballato! 😈':tu>bot?'HAI VINTO! 🔥':tu===bot?'Pareggio! 🤝':'ECLIPSE vince 🌑'
reply(`🃏 *BLACKJACK*\n\nTu: ${tu}\nECLIPSE: ${bot}\n\n${ris}`)
}}
