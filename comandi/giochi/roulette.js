module.exports={name:'roulette',run:async({reply,sender,args,addOmbre,getSaldo})=>{
if(!args.length){const n=Math.floor(Math.random()*37);return reply(`🎡 Roulette: *${n}*\n\nPer scommettere: .roulette <numero 0-36> <cifra>\nEs: .roulette 7 100`)}
const scelta=parseInt(args[0]),cifra=parseInt(args[1])
if(isNaN(scelta)||scelta<0||scelta>36) return reply('Il numero deve essere da 0 a 36!\nEs: .roulette 7 100')
if(!cifra||cifra<=0) return reply('Uso: .roulette <numero> <cifra>\nEs: .roulette 7 100')
if(getSaldo&&getSaldo(sender)<cifra) return reply(`Non hai abbastanza OMBRE! Hai: ${getSaldo(sender)} 🌑`)
const uscito=Math.floor(Math.random()*37)
if(scelta===uscito){const v=cifra*10;if(addOmbre)addOmbre(sender,v);reply(`🎡 *ROULETTE*\n\nScommesso: ${scelta} con ${cifra} 🌑\nUscito: *${uscito}*\n\n🔥🔥 HAI VINTO! +${v} 🌑`)}
else{if(addOmbre)addOmbre(sender,-cifra);reply(`🎡 *ROULETTE*\n\nScommesso: ${scelta} con ${cifra} 🌑\nUscito: *${uscito}*\n\n😈 Hai perso! -${cifra} 🌑`)}
}}
