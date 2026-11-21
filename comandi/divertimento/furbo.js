module.exports = { name: 'furbo', run: async ({ reply, target }) => reply(`🦊 Furbizia di @${target ? target.split('@')[0] : 'te'}: *${Math.floor(Math.random()*101)}%*`) }
