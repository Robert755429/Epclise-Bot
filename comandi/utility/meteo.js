module.exports={name:'meteo',run:async({reply,args})=>{
if(!args.length) return reply('Uso: .meteo Ferrara')
try{
const citta=args.join(' ')
const geo=await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(citta)}&count=1&language=it`)
const gj=await geo.json()
if(!gj.results?.[0]) return reply('❌ Città non trovata')
const {latitude,longitude,name,country}=gj.results[0]
const w=await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m&timezone=auto`)
const wj=await w.json(); const c=wj.current
const codici={0:'☀️ Sereno',1:'🌤️ Quasi sereno',2:'⛅ Nuvoloso',3:'☁️ Coperto',45:'🌫️ Nebbia',51:'🌦️ Pioggerella',61:'🌧️ Pioggia',71:'❄️ Neve',95:'⛈️ Temporale'}
reply(`🌤️ *METEO ${name.toUpperCase()}, ${country}*\n${codici[c.weather_code]||'🌡️'}\nTemperatura: *${c.temperature_2m}°C*\nPercepita: *${c.apparent_temperature}°C*\nUmidità: *${c.relative_humidity_2m}%*\nVento: *${c.wind_speed_10m} km/h*`)
}catch{reply('❌ Errore meteo')}
}}
