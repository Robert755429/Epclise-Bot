module.exports={name:'setnome',run:async({reply,args,isOwner,sock})=>{
if(!isOwner) return reply('❌ Solo OWNER 👑')
if(!args.length) return reply('Uso: .setnome <nuovo nome>')
try{ await sock.updateProfileName(args.join(' ')); reply(`✅ Nome cambiato: ${args.join(' ')}`) }catch{reply('❌ Errore')}
}}
