module.exports = { name: 'sasso', run: async ({ reply, args }) => {
  const scelte = ['sasso 🪨','carta 📄','forbici ✂️']
  const bot = scelte[Math.floor(Math.random()*3)]
  const tu = (args[0] || 'sasso').toLowerCase()
  if(!['sasso','carta','forbici'].includes(tu)) return reply('Uso: .sasso sasso / carta / forbici')
  reply(`Tu: ${tu}\nECLIPSE: ${bot}\n${tu === bot.split(' ')[0] ? 'Pareggio!' : 'ECLIPSE vince questa volta 😂'}`)
} }
