module.exports = {
  name: 'antispam',
  run: async ({ reply, args }) => {
    const stato = args[0] === 'off' ? 'DISATTIVATO ❌' : 'ATTIVATO ✅'
    reply(`🚫 Antispam ${stato}`)
  }
}
