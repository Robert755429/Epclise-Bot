module.exports = { name: 'fortuna', run: async ({ reply }) => {
  const p = Math.floor(Math.random()*101)
  reply(`🍀 Fortuna oggi: *${p}%*\n${p > 70 ? 'Giornata top! 🔥' : 'Stai attento alle OMBRE 🌑'}`)
} }
