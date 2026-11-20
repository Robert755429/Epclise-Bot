module.exports = {
  name: 'remove',
  run: async ({ sock, jid, target, reply }) => {
    if(!target) return reply('Uso: .remove @utente')
    await sock.groupParticipantsUpdate(jid, [target], 'remove')
    reply(`➖ Rimosso @${target.split('@')[0]}`)
  }
}
