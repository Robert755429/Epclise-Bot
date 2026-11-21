module.exports={name:'ai',run:async({reply,args})=>{
if(!args.length) return reply('Chiedimi qualcosa! Es: .ai chi è ECLIPSE?')
reply(`🤖 *ECLIPSE AI*\n\nHai chiesto: "${args.join(' ')}"\n\nPer ora sono in modalità base 🌑\nUsa .menu per vedere tutti i comandi`)
}}
