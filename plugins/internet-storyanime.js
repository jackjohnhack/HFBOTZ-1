let fetch = require('node-fetch');
let handler = async (m, { conn }) => {
  try {
    conn.reply(m.chat, wait, m)
    let res = await fetch(`https://api.botcahx.live/api/download/storyanime?apikey=${btc}`);
    let json = await res.json();
      conn.sendFile(m.chat, json.result.url, 'anime_story.mp4', "*STORY ANIME*", m);
  } catch (e) {
    throw `*Error:* ${eror}`;
  }
};

handler.help = ['anime'];
handler.tags = ['storyanime'];
handler.command = /^(storyanime)$/i;
handler.limit = true 
module.exports = handler;