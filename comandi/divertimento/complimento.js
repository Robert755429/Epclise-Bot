module.exports = { name: 'complimento', run: async ({ reply, target }) => {
  const c = ['Sei una leggenda 🔥','Hai un vibe pazzesco ✨','Sei il top del gruppo 🏆','ECLIPSE ti approva 🌑','Sei più raro di un diamante 💎']
  reply(`✨ @${target ? target.split('@')[0] : 'te'}: ${c[Math.floor(Math.random()*c.length)]}`)
} }
