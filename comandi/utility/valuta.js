module.exports={name:'valuta',run:async({reply,args})=>{
if(args.length<3) return reply('Uso: .valuta 100 EUR USD\nEs: .valuta 100 EUR USD')
try{
const q=parseFloat(args[0]); const da=args[1].toUpperCase(); const a=args[2].toUpperCase()
const res=await fetch(`https://api.exchangerate-api.com/v4/latest/${da}`)
const j=await res.json()
if(!j.rates[a]) return reply('❌ Valuta non valida')
reply(`💱 *CONVERTI*\n${q} ${da} = *${(q*j.rates[a]).toFixed(2)} ${a}*`)
}catch{reply('❌ Errore valuta')}
}}
