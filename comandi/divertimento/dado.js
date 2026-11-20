module.exports = { name: 'dado', run: async ({ reply }) => reply(`🎲 Hai tirato: *${Math.floor(Math.random()*6)+1}*`) }
