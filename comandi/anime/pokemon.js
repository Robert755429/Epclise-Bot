module.exports={name:'pokemon',run:async({reply})=>{
const p=['Pikachu','Charizard','Gengar','Lucario','Mewtwo','Eevee','Snorlax','Greninja']
reply(`⚡ *IL TUO POKEMON È: ${p[Math.floor(Math.random()*p.length)]}*\n\nPrenditene cura! 🌑`)
}}
