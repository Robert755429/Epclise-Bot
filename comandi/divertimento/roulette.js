module.exports = { name: 'roulette', run: async ({ reply }) => {
  const n = Math.floor(Math.random()*37)
  reply(`🎡 Roulette: *${n}* ${n === 0 ? '🌑 ECLIPSE NUMERO!' : ''}`)
} }
