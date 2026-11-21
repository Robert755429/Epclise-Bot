module.exports = { name: 'dove', run: async ({ reply }) => {
  const d = ['A Milano 📍','Sulla luna 🌙','Nel mondo ECLIPSE 🌑','A casa tua 😂']
  reply(`📍 Dove? ${d[Math.floor(Math.random()*d.length)]}`)
} }
