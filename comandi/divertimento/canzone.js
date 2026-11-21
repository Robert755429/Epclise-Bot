module.exports = { name: 'canzone', run: async ({ reply }) => {
  const c = ['Sfera Ebbasta - X2VR 🔥','Geolier - I P\' ME TU P\' TE','ANNA - 30°C','Shiva - 100 OPPS','Lazza - 100 MESSAGGI']
  reply(`🎵 Canzone consigliata: ${c[Math.floor(Math.random()*c.length)]}`)
} }
