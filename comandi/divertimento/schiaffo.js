module.exports = { name: 'schiaffo', run: async ({ reply, target, sender }) => reply(`👋 @${sender.split('@')[0]} ha dato uno SCHIAFFO a @${target ? target.split('@')[0] : 'ECLIPSE'}! PAM!`) }
