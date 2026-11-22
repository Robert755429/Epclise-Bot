module.exports={name:'slot',run:async({reply,sender,args,addOmbre,getSaldo})=>{
const cifra=parseInt(args[0])||0
if(args.length&&(!cifra||cifra<=0)) return reply('Uso: .slot <cifra>\nEs: .slot 100')
if(cifra>0&&getSaldo&&getSaldo(sender)<cifra) return reply(`Non hai abbastanza OMBRE! Hai: ${getSaldo(sender)} 🌑`)
const em=['🍒','🍋','🔔','💎','🌑','⭐']
const r=[em[Math.floor(Math.random()*6)],em[Math.floor(Math.random()*6)],em[Math.floor(Math.random()*6)]]
const vinto=r[0]===r[1]&&r[1]===r[2]
if(!cifra) return reply(`🎰 ${r.join(' | ')}\n${vinto?'HAI VINTO! 🔥':'Riprova...'}\n\nPer scommettere: .slot <cifra>`)
if(vinto){const v=cifra*5;if(addOmbre)addOmbre(sender,v);reply(`🎰 ${r.join(' | ')}\n\n🔥🔥 JACKPOT! +${v} 🌑`)}
else{if(addOmbre)addOmbre(sender,-cifra);reply(`🎰 ${r.join(' | ')}\n\n😈 Hai perso! -${cifra} 🌑`)}
}}
