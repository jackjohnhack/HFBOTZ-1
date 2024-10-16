const fetch = require('node-fetch');
const { webp2png } = require('../lib/webp2mp4.js');

async function handler(m, { conn }) {
  let q = m.quoted ? m.quoted : m;
  let mime = (q || q.msg).mimetype || q.mediaType || '';
  if (/image/.test(mime)) {
    let url = await webp2png(await q.download());
    let res = await fetch(API('https://api.ocr.space', '/parse/imageurl', { apikey: '8e65f273cd88957', url }));
    if (res.status !== 200) throw res.statusText;
    let json = await res.json();
    m.reply(json?.ParsedResults?.[0]?.ParsedText);
  } else {
    throw 'Balas gambar';
  }
}

handler.help = ['ocr', 'totext'];
handler.tags = ['tools'];
handler.command = /^(ocr|totext)$/i;
handler.limit = 3;

module.exports = handler;
