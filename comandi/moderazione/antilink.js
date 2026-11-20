module.exports = {
  name: 'antilink',
  run: async ({ reply, args }) => {
    const stato = args[0] === 'off' ? 'DISATTIVATO ❌' : 'ATTIVATO ✅'
    reply(`🔗 Antilink ${stato}\nI link saranno eliminati`)
  }
}
