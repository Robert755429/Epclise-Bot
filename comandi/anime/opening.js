module.exports={name:'opening',run:async({reply})=>{
const op=[
'Naruto - Blue Bird',
'Attack on Titan - Guren no Yumiya',
'One Piece - We Are!',
'Demon Slayer - Gurenge',
'Jujutsu Kaisen - Kaikai Kitan',
'Tokyo Ghoul - Unravel'
]
const x=op[Math.floor(Math.random()*op.length)]
reply(`🎵 *OPENING DEL GIORNO*\n\n🎶 ${x}\n\nMettila a palla! 🌑`)
}}
