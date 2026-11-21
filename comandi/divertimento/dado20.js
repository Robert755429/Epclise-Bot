module.exports = { name: 'dado20', run: async ({ reply }) => reply(`🎲 D20: *${Math.floor(Math.random()*20)+1}*`) }
