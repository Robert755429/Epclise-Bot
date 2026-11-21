module.exports = { name: 'iq', run: async ({ reply, target }) => reply(`🧠 QI di @${target ? target.split('@')[0] : 'te'}: *${Math.floor(Math.random()*150)+50}*`) }
