module.exports={name:'impiccato',run:async({reply})=>{
const parole=['ECLIPSE','LUNA','OMBRA','NOTTE','STELLA','SOLE']
const p=parole[Math.floor(Math.random()*parole.length)]
reply(`🎯 *IMPICCATO*\n\nParola: ${p.split('').map(()=>'_').join(' ')}\n\nIndovina le lettere in chat! 🌑\n(Parola: ||${p}||)`)
}}
