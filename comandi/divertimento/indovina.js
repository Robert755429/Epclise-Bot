module.exports = { name: 'indovina', run: async ({ reply, args }) => {
  const n = Math.floor(Math.random()*10)+1
  const guess = parseInt(args[0])
  if(!guess) return reply(`🔢 Ho pensato a un numero da 1 a 10... prova! Es: .indovina 5`)
  reply(guess === n ? `🎉 HAI INDOVINATO! Era ${n}!` : `❌ Sbagliato! Era ${n}, riprova!`)
} }
