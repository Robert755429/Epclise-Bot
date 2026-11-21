module.exports = { name: 'gaytest', run: async ({ reply, target }) => reply(`🏳️‍🌈 Gaytest di @${target ? target.split('@')[0] : 'te'}: *${Math.floor(Math.random()*101)}%*`) }
