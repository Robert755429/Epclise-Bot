module.exports={name:'anime',run:async({reply,args})=>{
if(!args.length) return reply('Uso: .anime <nome>\nEs: .anime Naruto')
reply(`🔍 *Anime cercato: ${args.join(' ')}*\n\n🌸 Titolo: ${args.join(' ')}\n⭐ Voto: ${(Math.random()*3+7).toFixed(1)}/10\n📺 Episodi: ${Math.floor(Math.random()*100)+12}\n📖 Genere: Action / Adventure\n\nConsigliato da ECLIPSE 🌑`)
}}
