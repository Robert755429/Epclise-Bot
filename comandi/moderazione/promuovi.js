module.exports = {
  name: 'promuovi',
  run: async ({ sock, jid, target, reply }) => {
    if(!target) return reply('Uso: .promuovi @utente')
    await sock.groupParticipantsUpdate(jid, [target], 'promote')
    reply(`👑 @${target.split('@')[0]} ora è admin`)
  }
}
