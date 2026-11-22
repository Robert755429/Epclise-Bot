module.exports={name:'pesca',run:async({reply,sender,addOmbre})=>{
const pesci=[{n:'🐟 Pesce',v:10},{n:'🐠 Pesce Tropicale',v:20},{n:'🦈 Squalo',v:70},{n:'🐙 Polpo',v:30},{n:'🦀 Granchio',v:15},{n:'🐳 Balena',v:100},{n:'👟 Scarpa vecchia',v:-5}]
const x=pesci[Math.floor(Math.random()*pesci.length)]
if(addOmbre)addOmbre(sender,x.v)
reply(`🎣 *PESCA*\n\nHai pescato: *${x.n}*\n\n🌑 OMBRE: ${x.v>0?'+'+x.v:x.v}`)
}}
