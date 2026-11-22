module.exports={name:'scommessa',run:async({reply,args,sender,addOmbre,getSaldo})=>{
if(!args.length) return reply('Uso: .scommessa <testa/croce> <cifra>\nEs: .scommessa testa 100')
const scelta=args[0].toLowerCase(),cifra=parseInt(args[1])||0
if(scelta!=='testa'&&scelta!=='croce') return reply('Scrivi testa o croce!')
if(cifra>0&&getSaldo&&getSaldo(sender)<cifra) return reply(`Non hai OMBRE! Hai: ${getSaldo(sender)} 🌑`)
const esito=Math.random()>0.5?'testa':'croce',vinto=scelta===esito
if(cifra>0){if(addOmbre)addOmbre(sender,vinto?cifra*2:-cifra)}
else{if(addOmbre)addOmbre(sender,vinto?30:-10)}
reply(`🎲 *SCOMMESSA*\n\nTu: ${scelta} ${cifra?`con ${cifra} 🌑`:''}\nUscito: ${esito}\n\n${vinto?`🔥 HAI VINTO! +${cifra?cifra*2:30} 🌑`:`😈 HAI PERSO! -${cifra?cifra:10} 🌑`}`)
}}
