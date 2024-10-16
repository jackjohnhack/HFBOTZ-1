let handler = async (m, {conn, text, usedPrefix}) => {
  if (!text) throw 'Berikan URL dari YouTube!'
  try {   
    var aud = `https://widipe.com/youtube?url=${text}&filter=audioonly&quality=highestaudio&contenttype=audio/mpeg` 
    await conn.sendMessage(m.chat, { audio: { url: aud }, mimetype: 'audio/mpeg' }, { quoted: m })    
  } catch (e) {
    throw 'Video/Audio Tidak Ditemukan'
  }
}
handler.command = handler.help = ['ytaudio', 'ytmp3', 'yta'];
handler.tags = ['downloader'];
handler.exp = 0;
handler.limit = 2;
handler.premium = false;
module.exports = handler;