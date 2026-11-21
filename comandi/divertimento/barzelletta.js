module.exports = { name: 'barzelletta', run: async ({ reply }) => {
  const b = ['Perché il computer è andato dal dottore? Aveva un virus 😂','Cosa dice un bit all\'altro? Ci vediamo nel bus 🚌','Perché la luna è triste? Perché è piena di crateri 🌑','Cosa fa un cane con la calcolatrice? Fa i conti 😂']
  reply(`😂 ${b[Math.floor(Math.random()*b.length)]}`)
} }
