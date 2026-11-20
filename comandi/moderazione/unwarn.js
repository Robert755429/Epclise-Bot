module.exports = {
  name: 'unwarn',
  run: async ({ reply, target }) => {
    if(!target) return reply('Uso: .unwarn @utente')
    reply(`✅ Warn azzerate per @${target.split('@')[0]}`)
  }
}
