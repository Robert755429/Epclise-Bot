module.exports={name:'moneta',run:async({reply,sender,args,addOmbre,getSaldo})=>{
if(!args.length){const r=Math.random()>0.5?'TESTA':'CROCE';return reply(`🪙 ${r}\n\nPer scommettere: .moneta <testa/croce> <cifra>\nEs: .moneta testa 100`)}
const scelta=args[0].toLowerCase(),cifra=parseInt(args[1])
if(scelta!=='testa'&&scelta!=='croce') return reply('Scrivi testa o croce!\nEs: .moneta testa 100')
if(!cifra||cifra<=0) return reply('Uso: .moneta <testa/croce> <cifra>\nEs: .moneta testa 100')
if(getSaldo&&getSaldo(sender)<cifra) return reply(`Non hai abbastanza OMBRE! Hai: ${getSaldo(sender)} 🌑`)
const esito=Math.random()>0.5?'testa':'croce'
if(scelta===esito){const v=cifra*2;if(addOmbre)addOmbre(sender,v);reply(`🪙 *MONETA*\n\nScommesso: ${scelta} con ${cifra} 🌑\nUscito: *${esito.toUpperCase()}*\n\n🔥 HAI VINTO! +${v} 🌑`)}
else{if(addOmbre)addOmbre(sender,-cifra);reply(`🪙 *MONETA*\n\nScommesso: ${scelta} con ${cifra} 🌑\nUscito: *${esito.toUpperCase()}*\n\n😈 Hai perso! -${cifra} 🌑`)}
}}
