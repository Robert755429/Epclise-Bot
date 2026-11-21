module.exports={name:'frase-anime',run:async({reply})=>{
const f=[
'"Non mollare mai, è il mio modo di fare!" - Naruto',
'"Diventerò il Re dei Pirati!" - Luffy',
'"Se non rischi, non puoi creare un futuro." - Monkey D. Luffy',
'"Il dolore è inevitabile, la sofferenza è una scelta." - Haruki Murakami',
'"Anche se il mondo è crudele, io continuerò a sorridere." - Tanjiro',
'"Non importa quanto sei forte, da solo non vai da nessuna parte." - Gojo'
]
reply(`💬 *FRASE ANIME*\n\n${f[Math.floor(Math.random()*f.length)]} 🌑`)
}}
