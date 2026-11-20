module.exports = {
  name: 'setnome',
  run: async ({ sock, jid, args, reply, isGroup }) => {
    if(!isGroup) return reply('Solo nei gruppi')
    if(!args[0]) return reply('Uso: .setnome Nuovo Nome')
    await sock.groupUpdateSubject(jid, args.join(' '))
    reply(`✏️ Nome cambiato in: ${args.join(' ')}`)
  }
}
