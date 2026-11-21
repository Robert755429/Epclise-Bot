module.exports={name:'data',run:async({reply})=>{
const d=new Date()
reply(`📅 *DATA*\nOggi è: *${d.toLocaleDateString('it-IT',{weekday:'long',day:'numeric',month:'long',year:'numeric'})}*\nOra: *${d.toLocaleTimeString('it-IT')}*`)
}}
