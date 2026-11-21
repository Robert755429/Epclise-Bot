const fs=require('fs')
function load(){try{return JSON.parse(fs.readFileSync('./ombre.json'))}catch{return{}}}
function save(d){fs.writeFileSync('./ombre.json',JSON.stringify(d))}
function loadCd(){try{return JSON.parse(fs.readFileSync('./lavoro.json'))}catch{return{}}}
function saveCd(d){fs.writeFileSync('./lavoro.json',JSON.stringify(d))}
module.exports={name:'lavoro',run:async({reply,sender})=>{
const cd=loadCd(); const ora=Date.now()
if(cd[sender] && ora-cd[sender]<3600000) return reply(`⏰ Devi aspettare ancora *${Math.ceil((3600000-(ora-cd[sender]))/60000)} minuti* prima di lavorare`)
const lavori=['Hai pulito la luna 🌙','Hai fatto il guardiano ECLIPSE 🌑','Hai venduto meme 😂','Hai fatto il DJ 🎧','Hai consegnato OMBRE 📦']
const guadagno=Math.floor(Math.random()*150)+50
const d=load(); d[sender]=d[sender]||{saldo:0,banca:0}; d[sender].saldo+=guadagno; save(d); cd[sender]=ora; saveCd(cd)
reply(`💼 *LAVORO*\n${lavori[Math.floor(Math.random()*lavori.length)]}\nGuadagno: *${guadagno} OMBRE*`)
}}
