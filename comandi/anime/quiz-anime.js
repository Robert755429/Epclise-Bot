module.exports={name:'quiz-anime',run:async({reply})=>{
const q=[
{q:'Chi è il protagonista di Naruto?',a:'Naruto Uzumaki'},
{q:'Chi è il capitano dei Mugiwara?',a:'Monkey D. Luffy'},
{q:'In che anime c’è Tanjiro?',a:'Demon Slayer'},
{q:'Chi è il Titano Attaccante?',a:'Eren Yeager'},
{q:'Chi è il maestro di Naruto?',a:'Jiraiya / Kakashi'}
]
const x=q[Math.floor(Math.random()*q.length)]
reply(`🧠 *QUIZ ANIME*\n\n${x.q}\n\nRispondi in chat! 🌑\n(Risposta: ||${x.a}||)`)
}}
