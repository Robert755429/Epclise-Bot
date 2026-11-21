module.exports = { name: 'compatibilita', run: async ({ reply, target }) => reply(`💞 Compatibilità con @${target ? target.split('@')[0] : 'ECLIPSE'}: *${Math.floor(Math.random()*101)}%*`) }
