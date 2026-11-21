module.exports={name:'orario',run:async({reply})=>{
const d=new Date()
reply(`🕐 *ORARIO*\n*${d.toLocaleTimeString('it-IT')}*\n${d.toLocaleDateString('it-IT',{weekday:'long',day:'numeric',month:'long'})}`)
}}
