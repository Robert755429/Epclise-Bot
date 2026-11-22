module.exports={name:'dungeon',run:async({reply,sender,addOmbre})=>{
const stanze=[{t:'🦇 Hai trovato un pipistrello!',v:5},{t:'💰 Hai trovato un tesoro!',v:100},{t:'👻 Hai trovato un fantasma!',v:-15},{t:'🐉 Hai trovato un drago!',v:50},{t:'🚪 Hai trovato una porta segreta!',v:30}]
const x=stanze[Math.floor(Math.random()*stanze.length)]
if(addOmbre)addOmbre(sender,x.v)
reply(`🏰 *DUNGEON*\n\n${x.t}\n\n🌑 OMBRE: ${x.v>0?'+'+x.v:x.v}`)
}}
