module.exports = { name: 'bacio', run: async ({ reply, target, sender }) => {
  reply(`💋 @${sender.split('@')[0]} ha dato un bacio a @${target ? target.split('@')[0] : 'ECLIPSE'}!`)
} }
