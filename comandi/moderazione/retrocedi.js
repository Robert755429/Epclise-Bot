module.exports = {
  name: 'retrocedi',
  run: async ({ sock, jid, target, reply }) => {
    if(!target) return reply('Uso: .retrocedi @utente')
    await sock.groupParticipantsUpdate(jid, [target], 'demote')
    reply(`⬇️ @${target.split('@')[0]} non è più admin`)
  }
}
