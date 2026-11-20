module.exports = {
  name: 'ban',
  run: async ({ sock, jid, target, reply }) => {
    if(!target) return reply('Uso: .ban @utente')
    await sock.groupParticipantsUpdate(jid, [target], 'remove')
    reply(`🌑 @${target.split('@')[0]} bannato`)
  }
}
