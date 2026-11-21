module.exports={name:'eval',run:async({reply,args,isOwner})=>{
if(!isOwner) return reply('❌ Solo OWNER 👑')
try{
const res=eval(args.join(' '))
reply(`💻 *EVAL*\n${String(res)}`)
}catch(e){reply(`❌ Errore:\n${e.message}`)}
}}
