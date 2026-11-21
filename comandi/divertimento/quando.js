module.exports = { name: 'quando', run: async ({ reply, args }) => reply(`⏰ Quando ${args.join(' ') || 'succederà'}? *Tra ${Math.floor(Math.random()*30)+1} giorni*`) }
