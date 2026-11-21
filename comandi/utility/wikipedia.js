module.exports={name:'wikipedia',run:async({reply,args})=>{
if(!args.length) return reply('Uso: .wikipedia ECLIPSE')
try{
const q=encodeURIComponent(args.join(' '))
const res=await fetch(`https://it.wikipedia.org/api/rest_v1/page/summary/${q}`)
const j=await res.json()
if(j.type==='disambiguation'||!j.extract) return reply('❌ Non trovato su Wikipedia')
reply(`📚 *WIKIPEDIA - ${j.title}*\n\n${j.extract.slice(0,800)}\n\n🔗 ${j.content_urls?.desktop?.page}`)
}catch{reply('❌ Errore Wikipedia')}
}}
