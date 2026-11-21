module.exports = { name: 'abbraccio', run: async ({ reply, target, sender }) => {
  reply(`🤗 @${sender.split('@')[0]} ha abbracciato @${target ? target.split('@')[0] : sender.split('@')[0]}!`)
} }
