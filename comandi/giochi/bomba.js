module.exports={name:'bomba',run:async({reply,target})=>{
if(!target) return reply('Tagga chi vuoi lanciare la bomba 💣\nEs: .bomba @utente')
const sec=Math.floor(Math.random()*10)+1
reply(`💣 *BOMBA*\n\n@${target.split('@')[0]} hai ${sec} secondi per disinnescarla!\n\n...BOOM! 💥 Scherzo 🌑`)
}}
