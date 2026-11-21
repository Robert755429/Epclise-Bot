module.exports = { name: 'verita', run: async ({ reply }) => {
  const v = ['Qual è il tuo segreto più grande?','Hai mai tradito?','Chi ti piace nel gruppo?','Ultima cosa cercata su Google?','Hai mai pianto per amore?','Qual è la tua cotta segreta?']
  reply(`🤫 VERITÀ: ${v[Math.floor(Math.random()*v.length)]}`)
} }
