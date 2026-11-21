const start=Date.now()
module.exports={name:'uptime',run:async({reply})=>{
const sec=Math.floor((Date.now()-start)/1000)
const h=Math.floor(sec/3600), m=Math.floor((sec%3600)/60), s=sec%60
reply(`⏱️ *UPTIME ECLIPSE*\nOnline da: *${h}h ${m}m ${s}s* 🌑`)
}}
