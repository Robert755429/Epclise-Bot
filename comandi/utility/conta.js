module.exports={name:'conta',run:async({reply,args})=>{
const testo=args.join(' ')
if(!testo) return reply('Uso: .conta <testo>')
reply(`🔢 *CONTA*\nCaratteri: *${testo.length}*\nParole: *${testo.split(/\s+/).length}*`)
}}
