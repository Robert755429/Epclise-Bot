module.exports = { name: 'segreto', run: async ({ reply }) => {
  const s = ['ECLIPSE ha 224 comandi segreti...','Il proprietario è il più forte','Le OMBRE valgono più dell\'oro 🌑','Stanotte ci sarà un\'eclissi']
  reply(`🤫 SEGRETO: ${s[Math.floor(Math.random()*s.length)]}`)
} }
