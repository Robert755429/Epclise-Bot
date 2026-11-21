module.exports = { name: 'coraggioso', run: async ({ reply, target }) => reply(`🦁 Coraggio di @${target ? target.split('@')[0] : 'te'}: *${Math.floor(Math.random()*101)}%*`) }
