module.exports={name:'unblock',run:async({reply,target,isOwner,sock})=>{
if(!isOwner) return reply('❌ Solo OWNER 👑')
if(!target) return reply('Tagga chi vuoi sbloccare')
await sock.updateBlockStatus(target,'unblock')
reply(`✅ @${target.split('@')[0]} sbloccato`)
}}
