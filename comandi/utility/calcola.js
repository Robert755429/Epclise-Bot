module.exports={name:'calcola',run:async({reply,args})=>{
if(!args.length) return reply('Uso: .calcola 5+5*2')
try{
const expr=args.join(' ').replace(/[^0-9+\-*/(). ]/g,'')
if(!expr) return reply('❌ Espressione non valida')
const res=Function(`return ${expr}`)()
reply(`🧮 *CALCOLO*\n${expr} = *${res}*`)
}catch{reply('❌ Errore calcolo')}
}}
