module.exports={name:'menu-owner',run:async({reply,isOwner})=>{
if(!isOwner) return reply('❌ Solo OWNER 👑')
reply(`👑 *OWNER - 20*\n\n.broadcast .ban-globale\n.block .unblock .join .leave\n.setnome .setbio .setprefix\n.addowner .delowner\n.listgruppi .listutenti\n.give .pulisci\n.eval .exec\n.riavvia .spegni`)
}}
