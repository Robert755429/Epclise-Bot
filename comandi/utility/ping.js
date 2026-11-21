module.exports={name:'ping',run:async({reply})=>{
const start=Date.now()
await reply(`🏓 Pong! 🌑\nVelocità: *${Date.now()-start}ms*`)
}}
