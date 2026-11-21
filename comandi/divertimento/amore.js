module.exports = { name: 'amore', run: async ({ reply, target }) => {
  reply(`❤️ Amore per @${target ? target.split('@')[0] : 'te'}: *${Math.floor(Math.random()*101)}%*`)
} }
