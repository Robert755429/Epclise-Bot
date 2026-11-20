module.exports = {
  name: 'add',
  run: async ({ sock, jid, args, reply }) => {
    if(!args[0]) return reply('Uso: .add 393887347002')
    const num = args[0].replace(/[^0-9]/g,'') + '@s.whatsapp.net'
    await sock.groupParticipantsUpdate(jid, [num], 'add')
    reply(`➕ Aggiunto ${args[0]}`)
  }
}
