module.exports = { name: 'slot', run: async ({ reply }) => {
  const em=['🍒','🍋','🔔','💎','🌑','⭐']; const r=[em[Math.floor(Math.random()*6)],em[Math.floor(Math.random()*6)],em[Math.floor(Math.random()*6)]]
  reply(`🎰 ${r.join(' | ')}\n${r[0]===r[1]&&r[1]===r[2]?'HAI VINTO! 🔥':'Riprova...'}`)
} }
