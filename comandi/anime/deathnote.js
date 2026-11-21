module.exports={name:'deathnote',run:async({reply,target})=>{
if(!target) return reply('Tagga chi vuoi scrivere sul Death Note 📓')
reply(`📓 *DEATH NOTE*\n\n@${target.split('@')[0]} è stato scritto sul Death Note...\n\n...scherzo! 😈 Sei salvo per ora 🌑`)
}}
