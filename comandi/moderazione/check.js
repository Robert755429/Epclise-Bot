module.exports = { name: 'check', run: async ({ reply, target }) => {
  if(!target) return reply('Uso: .check @utente')
  reply(`🔍 *CHECK @${target.split('@')[0]}*\nWarn: 0/3\nOMBRE: 1000 🌑\nStato: Pulito ✅`)
} }
