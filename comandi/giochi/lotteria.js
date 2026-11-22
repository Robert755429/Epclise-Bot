module.exports={name:'lotteria',run:async({reply,sender,args,addOmbre,getSaldo})=>{
const vincente=Math.floor(Math.random()*10)+1
if(!args.length) return reply(`🎟️ *LOTTERIA*\n\nNumero vincente: *${vincente}*\n\nPer scommettere: .lotteria <numero 1-10> <cifra>\nEs: .lotteria 7 100`)
const scelta=parseInt(args[0]),cifra=parseInt(args[1])
if(!scelta||scelta<1||scelta>10) return reply('Numero da 1 a 10!\nEs: .lotteria 7 100')
if(!cifra||cifra<=0) return reply('Uso: .lotteria <numero> <cifra>\nEs: .lotteria 7 100')
if(getSaldo&&getSaldo(sender)<cifra) return reply(`Non hai abbastanza OMBRE! Hai: ${getSaldo(sender)} 🌑`)
if(scelta===vincente){const v=cifra*8;if(addOmbre)addOmbre(sender,v);reply(`🎟️ *LOTTERIA*\n\nScommesso: ${scelta} con ${cifra} 🌑\nVincente: *${vincente}*\n\n🔥🔥 HAI VINTO! +${v} 🌑`)}
else{if(addOmbre)addOmbre(sender,-cifra);reply(`🎟️ *LOTTERIA*\n\nScommesso: ${scelta} con ${cifra} 🌑\nVincente: *${vincente}*\n\n😈 Hai perso! -${cifra} 🌑`)}
}}
