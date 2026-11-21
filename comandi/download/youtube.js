module.exports={name:'youtube',run:async({reply,args})=>{
if(!args[0]) return reply('Uso: .youtube <link>')
reply(`📺 Link YouTube: ${args[0]}\nUsa .mp3 per audio o .mp4 per video`)
}}
