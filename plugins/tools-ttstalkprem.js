const fg = require('api-dylux');

let handler = async (m, { conn, text, args }) => {
  if (!text) throw `✳️ Masukkan Nama Pengguna pengguna TikTok`;
  try {
    let res = await fg.ttStalk(args[0]);
    let txt = `
┌──「 *TIKTOK STALK* 
▢ *🔖Nama:* ${res.name}
▢ *🔖Username:* ${res.username}
▢ *👥Pengikut:* ${res.followers}
▢ *🫂Mengikuti:* ${res.following}
▢ *📌Desc:* ${res.desc}

▢ *🔗 Link* : https://tiktok.com/${res.username}
└────────────`;
    await conn.sendFile(m.chat, res.profile, 'tt.png', txt, m);
  } catch {
    m.reply(`✳️ Periksa apakah nama pengguna berasal dari TikTok`);
  }
};

handler.help = ['tiktokstalk2'];
handler.tags = ['tools', 'premium'];
handler.command = /^t(tstalk2|iktokstalk2)$/i;
handler.premium = true;

module.exports = handler;
