module.exports={name:'blackjack',run:async({reply,sender,args,addOmbre,getSaldo})=>{
const cifra=parseInt(args[0])||0
if(args.length&&(!cifra||cifra<=0)) return reply('Uso: .blackjack <cifra>\nEs: .blackjack 100')
if(cifra>0&&getSaldo&&getSaldo(sender)<cifra) return reply(`Non hai OMBRE! Hai: ${getSaldo(sender)} 🌑`)
const tu=Math.floor(Math.random()*11)+11
const bot=Math.floor(Math.random()*11)+11
let vincita=0,ris=''
if(tu>21){ris='Hai sballato! 😈';vincita=cifra?-cifra:-20}
else if(tu>bot){ris='HAI VINTO! 🔥';vincita=cifra?cifra*2:50}
else if(tu===bot){ris='Pareggio! 🤝';vincita=0}
else{ris='ECLIPSE vince 🌑';vincita=cifra?-cifra:-20}
if(addOmbre&&vincita!==0) addOmbre(sender,vincita)
reply(`🃏 *BLACKJACK*\n\nTu: ${tu}\nECLIPSE: ${bot}\n\n${ris}\n🌑 OMBRE: ${vincita>0?'+'+vincita:vincita}`)
}}
