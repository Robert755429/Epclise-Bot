module.exports={name:'setbio',run:async({reply,args,isOwner,sock})=>{
if(!isOwner) return reply('❌ Solo OWNER 👑')
if(!args.length) return reply('Uso: .setbio <nuova bio>')
try{ await sock.updateProfileStatus(args.join(' ')); reply(`✅ Bio cambiata: ${args.join(' ')}`) }catch{reply('❌ Errore')}
}}
