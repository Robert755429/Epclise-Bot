module.exports = { name: 'obbligo', run: async ({ reply }) => {
  const o = ['Manda un vocale cantando','Cambia foto profilo per 1h','Manda ultima foto in galleria','Scrivi "Amo ECLIPSE" nel gruppo','Manda un vocale con voce strana','Fai uno screen del tuo sfondo']
  reply(`😈 OBBLIGO: ${o[Math.floor(Math.random()*o.length)]}`)
} }
