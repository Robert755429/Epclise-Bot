module.exports={name:'ship-anime',run:async({reply,args,target})=>{
if(!target) return reply('Tagga chi vuoi shippare con un personaggio anime')
const pg=['Naruto','Sasuke','Goku','Luffy','Gojo','Mikasa','Zero Two','Nezuko']
const p=pg[Math.floor(Math.random()*pg.length)]
const perc=Math.floor(Math.random()*100)
reply(`💘 *SHIP ANIME*\n\n@${target.split('@')[0]} x ${p}\nCompatibilità: ${perc}%\n${perc>80?'💖 DESTINO!':perc>50?'💕 Carini insieme':'💔 Meglio di no...'}`)
}}
