module.exports = { name: 'bellezza', run: async ({ reply, target }) => reply(`✨ Bellezza di @${target ? target.split('@')[0] : 'te'}: *${Math.floor(Math.random()*101)}%*`) }
