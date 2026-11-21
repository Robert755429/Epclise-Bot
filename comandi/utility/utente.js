module.exports={name:'utente',run:async({reply,sender,target,sock,jid})=>{
const id=target||sender
try{
const p=await sock.getProfilePictureUrl(id,'image').catch(()=>null)
const num=id.split('@')[0]
await reply(`👤 *UTENTE*\nNumero: +${num}\nID: ${id}\nFoto: ${p||'Nessuna foto'}`)
}catch{reply(`👤 Utente: +${id.split('@')[0]}`)}
}}
