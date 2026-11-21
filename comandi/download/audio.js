module.exports={name:'audio',run:async({reply,args})=>{
if(!args[0]) return reply('Uso: .audio <link youtube>')
reply(`🎵 Sto scaricando l'audio...\nLink: ${args[0]}\nUsa .play per cercare per nome`)
}}
