module.exports = { name: 'sfiga', run: async ({ reply, target }) => reply(`😈 Sfiga di @${target ? target.split('@')[0] : 'te'} oggi: *${Math.floor(Math.random()*101)}%*`) }
