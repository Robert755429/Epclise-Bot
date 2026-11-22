module.exports={name:'menu',run:async({reply,box})=>{
reply(`🌑 *ECLIPSE*\n\n_Scegli una categoria_\n\n${box('MENU',[
'',
'↩  🎲  _GIOCHI_',
'↩  🛠️  _UTILITY_',
'↩  🛡️  _MODERAZIONE_',
'↩  🎲  _DIVERTIMENTO_',
'↩  📥  _DOWNLOAD_',
'↩  🌑  _OMBRE_',
'↩  👑  _OWNER_',
'↩  🎌  _ANIME_',
'',
])}\n\n_Scrivi .menu-<categoria>_\n_Es: .menu-giochi_`)
}}
