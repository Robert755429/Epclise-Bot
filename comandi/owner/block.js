module.exports={name:'block',run:async({reply,target,isOwner,sock})=>{
if(!isOwner) return reply('❌ Solo OWNER 👑')
if(!target) return reply('Tagga chi vuoi bloccare')
await sock.updateBlockStatus(target,'block')
reply(`🚫 @${target.split('@')[0]} bloccato`)
}}
