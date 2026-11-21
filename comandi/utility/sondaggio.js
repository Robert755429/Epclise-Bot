module.exports={name:'random',run:async({reply,args})=>{
const max=parseInt(args[0])||100
const n=Math.floor(Math.random()*max)+1
reply(`🎲 Numero random tra 1 e ${max}: *${n}*`)
}}
