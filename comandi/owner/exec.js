const {exec}=require('child_process')
module.exports={name:'exec',run:async({reply,args,isOwner})=>{
if(!isOwner) return reply('❌ Solo OWNER 👑')
exec(args.join(' '),(e,out,err)=>{
if(e) return reply(`❌ ${e.message}`)
reply(`💻 *EXEC*\n${out||err||'Fatto'}`.slice(0,3000))
})
}}
