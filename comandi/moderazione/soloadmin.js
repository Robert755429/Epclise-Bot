const fs = require('fs')
const path = './soloadmin.json'

function getState(jid){
  try{
    const data = JSON.parse(fs.readFileSync(path))
    return data[jid] || false
  }catch{ return false }
}
function setState(jid, val){
  let data = {}
  try{ data = JSON.parse(fs.readFileSync(path)) }catch{}
  data[jid] = val
  fs.writeFileSync(path, JSON.stringify(data))
}

module.exports = {
  name: 'soloadmin',
  run: async ({ sock, jid, reply, isGroup, sender, args }) => {
    if(!isGroup) return
    const m = await sock.groupMetadata(jid)
    if(!m.participants.find(p=>p.id===sender)?.admin) return reply('❌ Solo admin')

    const val = args[0]?.toLowerCase()
    if(val === 'on'){
      setState(jid, true)
      return reply('🔒 *SOLO ADMIN ATTIVO*\nSolo gli admin possono usare ECLIPSE 🌑')
    }
    if(val === 'off'){
      setState(jid, false)
      return reply('🔓 *SOLO ADMIN DISATTIVATO*\nTutti possono usare ECLIPSE ✅')
    }
    return reply('Uso: .soloadmin on / off')
  },
  
  getState
}
