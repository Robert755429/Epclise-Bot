module.exports = {
  name: 'warn',
  run: async ({ reply, target, isGroup }) => {
    if(!isGroup || !target) return reply('Uso: .warn @utente')
    reply(`⚠️ Warn data a @${target.split('@')[0]} - 1/3`)
  }
}
