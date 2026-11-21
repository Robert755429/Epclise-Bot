module.exports={name:'cerca',run:async({reply,args})=>{
if(!args.length) return reply('Uso: .cerca <cosa cercare>')
const q=encodeURIComponent(args.join(' '))
reply(`🔍 *CERCA*\n\nHai cercato: ${args.join(' ')}\nLink: https://www.google.com/search?q=${q}`)
}}
