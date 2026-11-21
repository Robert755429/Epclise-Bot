module.exports = { name: 'pigro', run: async ({ reply, target }) => reply(`😴 Pigrizia di @${target ? target.split('@')[0] : 'te'}: *${Math.floor(Math.random()*101)}%*`) }
