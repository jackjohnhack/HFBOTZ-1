global.owner = ['6285651307830']  
global.mods = ['6285651307830'] 
global.prems = ['6285651307830', '6283856053809']
global.nameowner = 'Hafizh'
global.numberowner = '6285651307830' 
global.mail = 'muhafid6422@gmail.com' 
global.gc = 'https://chat.whatsapp.com/FZSXzC6XEl12h5mg2dSGJt'
global.instagram = 'https://instagram.com/hfizh22'
global.wm = '© Hafizh'
global.wait = '_*Tunggu sedang di proses...*_'
global.eror = '_*Server Error*_'
global.stiker_wait = '*⫹⫺ Otw dibuat...*'
global.packname = 'Made With HaFlazh-BOT'
global.author = 'wa.me/6285787834363'
global.maxwarn = '2' // Peringatan maksimum

//INI WAJIB DI ISI!//
global.btc = '-------' 
//Daftar terlebih dahulu https://api.botcahx.eu.org

//INI OPTIONAL BOLEH DI ISI BOLEH JUGA ENGGA//
global.lann = '-------'
//Daftar https://api.betabotz.eu.org 

global.APIs = {   
  btc: 'https://api.botcahx.eu.org',
  widipe: 'https://widipe.com'
}
global.APIKeys = { 
  'https://api.botcahx.eu.org': '--------' 
}

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
