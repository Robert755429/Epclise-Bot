module.exports = { name: 'bugiardo', run: async ({ reply, target }) => reply(`🤥 Livello bugiardo di @${target ? target.split('@')[0] : 'te'}: *${Math.floor(Math.random()*101)}%*`) }
