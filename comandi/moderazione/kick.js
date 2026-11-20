module.exports = {
  name: 'kick',
  run: async ({ sock, jid, target, reply }) => {
    if(!target) return reply('Uso: .kick @utente')
    await sock.groupParticipantsUpdate(jid, [target], 'remove')
    reply(`👢 @${target.split('@')[0]} kickato`)
  }
}
