const fetch = require('node-fetch');
const uploader = require('../lib/uploadImage');

let handler = async (m, { conn, text, command, usedPrefix }) => {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || q.mediaType || ''
   if (/image/g.test(mime) && !/webp/g.test(mime)) {
    let buffer = await q.download()
    await m.reply(wait)
    let media = await uploader(buffer)
    let json = await (await fetch(`https://api.botcahx.eu.org/api/search/bard-img?url=${media}&text=${text}&apikey=${btc}`)).json()  
    conn.sendMessage(m.chat, { text: json.result }, { quoted: m })
  } else throw `Reply image with command ${usedPrefix + command} pertanyaan`
}
handler.help = ['bardimg']
handler.tags = ['tools', 'AI']
handler.command = /^(bardimg|bardimage)$/i
handler.limit = 4;

module.exports = handler