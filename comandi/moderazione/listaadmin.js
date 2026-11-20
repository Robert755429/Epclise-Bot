module.exports = {
  name: 'listaadmin',
  run: async ({ sock, jid, reply, isGroup }) => {
    if(!isGroup) return reply('Solo nei gruppi')
    const meta = await sock.groupMetadata(jid)
    const admins = meta.participants.filter(p => p.admin).map(p => p.id)
    let t = `👑 *ADMIN (${admins.length})*\n\n`
    admins.forEach(a => t += `@${a.split('@')[0]}\n`)
    await sock.sendMessage(jid, { text: t, mentions: admins })
  }
}
