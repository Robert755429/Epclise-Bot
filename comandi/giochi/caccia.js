module.exports={name:'caccia',run:async({reply,sender,addOmbre})=>{
const premi=[{n:'🦌 Cervo',v:20},{n:'🐗 Cinghiale',v:30},{n:'🦊 Volpe',v:25},{n:'🐻 Orso',v:60},{n:'🐰 Coniglio',v:10},{n:'🦁 Leone',v:80}]
const x=premi[Math.floor(Math.random()*premi.length)]
if(addOmbre) addOmbre(sender,x.v)
reply(`🏹 *CACCIA*\n\nHai catturato: *${x.n}*!\n\n+${x.v} 🌑 OMBRE!`)
}}
