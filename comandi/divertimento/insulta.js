module.exports = { name: 'insulta', run: async ({ reply, target }) => {
  const i = ['Sei così lento che la lumaca ti supera 🐌','Hai la faccia da lunedì mattina 😴','Sei più inutile di un ombrello al sole ☀️','Il tuo cervello è in modalità aereo ✈️']
  reply(`😈 @${target ? target.split('@')[0] : 'te'}: ${i[Math.floor(Math.random()*i.length)]}`)
} }
