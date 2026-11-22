module.exports={name:'duello',run:async({reply,target,sender,addOmbre})=>{
if(!target) return reply('Tagga chi vuoi sfidare!\nEs: .duello @utente')
const v1=Math.floor(Math.random()*100)+1,v2=Math.floor(Math.random()*100)+1
const haiVinto=v1>v2
if(addOmbre){addOmbre(sender,haiVinto?40:-20);addOmbre(target,haiVinto?-20:40)}
reply(`⚔️ *DUELLO*\n\n@${sender.split('@')[0]}: ${v1} HP ❤️\n@${target.split('@')[0]}: ${v2} HP ❤️\n\n🏆 Vincitore: ${haiVinto?`@${sender.split('@')[0]} +40 🌑`:`@${target.split('@')[0]} +40 🌑`}`)
}}
