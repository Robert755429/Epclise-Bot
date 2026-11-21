module.exports={name:'vero-falso',run:async({reply})=>{
const q=[
{q:'I pinguini possono volare',a:'FALSO ❌'},
{q:'Il Sole è una stella',a:'VERO ✅'},
{q:'I delfini sono pesci',a:'FALSO ❌ Sono mammiferi!'}
]
const x=q[Math.floor(Math.random()*q.length)]
reply(`🤔 *VERO O FALSO?*\n\n${x.q}\n\nScrivi VERO o FALSO!\nRisposta: ||${x.a}||`)
}}
