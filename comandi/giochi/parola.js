module.exports={name:'parola',run:async({reply,sender,addOmbre})=>{
const parole=['ECLIPSE','OMBRA','LUNA','GALASSIA','NOTTE']
const p=parole[Math.floor(Math.random()*parole.length)]
const mescolata=p.split('').sort(()=>Math.random()-0.5).join('')
if(addOmbre)addOmbre(sender,15)
reply(`🔤 *PAROLA MESCOLATA*\n\n${mescolata}\n\n(Soluzione: ||${p}||)\n\n+15 🌑 per aver giocato!`)
}}
