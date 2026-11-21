module.exports={name:'personaggio',run:async({reply,sender})=>{
const pg=[
{n:'Naruto Uzumaki',a:'Determinato, non molla mai'},
{n:'Monkey D. Luffy',a:'Libero, mangia tutto, re dei pirati'},
{n:'Goku',a:'Forte, ingenuo, ama combattere'},
{n:'Levi Ackerman',a:'Freddo, preciso, letale'},
{n:'Gojo Satoru',a:'Il più forte, arrogante ma iconico'},
{n:'Tanjiro',a:'Gentile, protettivo'},
{n:'Eren Yeager',a:'Determinato fino alla fine'}
]
const x=pg[Math.floor(Math.random()*pg.length)]
reply(`🌸 *Se fossi un personaggio anime saresti:*\n\n*${x.n}*\n${x.a} 🌑`)
}}
