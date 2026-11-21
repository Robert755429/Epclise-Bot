module.exports={name:'manga',run:async({reply,args})=>{
if(!args.length) return reply('Uso: .manga <nome>')
reply(`📚 *MANGA: ${args.join(' ')}*\n\nCapitoli: ${Math.floor(Math.random()*200)+50}\nStato: In corso / Concluso\nVoto ECLIPSE: ⭐⭐⭐⭐⭐\n\nLeggilo, merita 🌑`)
}}
