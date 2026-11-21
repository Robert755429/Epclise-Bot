module.exports={name:'corsa',run:async({reply,sender})=>{
const animali=['🐢 Tartaruga','🐰 Coniglio','🐴 Cavallo','🐆 Ghepardo','🐌 Lumaca']
const v=animali[Math.floor(Math.random()*animali.length)]
reply(`🏁 *CORSA ANIMALI*\n\nVincitore: *${v}*!\n\n@${sender.split('@')[0]} hai vinto? 🌑`)
}}
