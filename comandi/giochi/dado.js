module.exports={name:'dado',run:async({reply,sender,args,addOmbre,getSaldo})=>{
const tiro=Math.floor(Math.random()*6)+1
if(!args.length) return reply(`🎲 Hai tirato: *${tiro}*`)
const scommessa=parseInt(args[0]),cifra=parseInt(args[1])
if(!scommessa||!cifra) return reply('Uso: .dado <numero 1-6> <cifra>\nEs: .dado 5 260')
if(scommessa<1||scommessa>6) return reply('Il numero deve essere da 1 a 6! 🎲')
if(cifra<=0) return reply('La cifra deve essere più di 0! 🌑')
if(getSaldo&&getSaldo(sender)<cifra) return reply(`Non hai abbastanza OMBRE! Hai: ${getSaldo(sender)} 🌑`)
if(tiro===scommessa){const v=cifra*5;if(addOmbre)addOmbre(sender,v);reply(`🎲 *DADO*\n\nScommesso: ${scommessa} con ${cifra} 🌑\nUscito: *${tiro}*\n\n🔥 HAI INDOVINATO! +${v} 🌑`)}
else{if(addOmbre)addOmbre(sender,-cifra);reply(`🎲 *DADO*\n\nScommesso: ${scommessa} con ${cifra} 🌑\nUscito: *${tiro}*\n\n😈 Hai perso! -${cifra} 🌑`)}
}}
