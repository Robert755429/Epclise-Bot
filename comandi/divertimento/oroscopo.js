module.exports = { name: 'oroscopo', run: async ({ reply, args }) => {
  const segni = ['Ariete','Toro','Gemelli','Cancro','Leone','Vergine','Bilancia','Scorpione','Sagittario','Capricorno','Acquario','Pesci']
  const s = args[0] || segni[Math.floor(Math.random()*12)]
  reply(`🔮 *OROSCOPO ${s.toUpperCase()}*\nOggi è il tuo giorno fortunato! Le OMBRE ti sorridono 🌑\nAmore: ${Math.floor(Math.random()*101)}% - Fortuna: ${Math.floor(Math.random()*101)}%`)
} }
