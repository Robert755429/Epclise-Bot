module.exports = { name: '8ball', run: async ({ reply }) => {
  const r=['Si 🔥','No 😂','Forse...','Assolutamente si','ECLIPSE dice no 🌑','Chiedilo dopo']
  reply(`🎱 ${r[Math.floor(Math.random()*r.length)]}`)
} }
