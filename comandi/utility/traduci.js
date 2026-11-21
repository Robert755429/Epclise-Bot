module.exports={name:'traduci',run:async({reply,args})=>{
if(args.length<2) return reply('Uso: .traduci en ciao come stai?\nLingue: en, es, fr, de, it, ja, pt')
try{
const lang=args[0]; const testo=args.slice(1).join(' ')
const res=await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(testo)}&langpair=it|${lang}`)
const j=await res.json()
reply(`🌐 *TRADUCI (${lang})*\n${testo}\n⬇️\n*${j.responseData.translatedText}*`)
}catch{reply('❌ Errore traduzione')}
}}
