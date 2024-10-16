const fs = require('fs');
const Jimp = require('jimp');

let handler = async (m, { conn }) => {
  let image = m.quoted ? m.quoted : m;
  let mime = (image.msg || image).mimetype || '';
  let media = m.quoted ? await conn.downloadAndSaveMediaMessage(m.quoted, 'media') : await conn.downloadAndSaveMediaMessage(m, 'media');
  
  const group = m.chat;
  let { img } = await generateProfilePicture(media);
  
  await conn.query({
    tag: 'iq',
    attrs: {
      to: group,
      type: 'set',
      xmlns: 'w:profile:picture'
    },
    content: [
      {
        tag: 'picture',
        attrs: { type: 'image' },
        content: img
      }
    ]
  });
  
  m.reply("Update Profile Group ✅");
};

handler.help = ['setppgc'];
handler.tags = ['group'];
handler.command = /^(setppgc|setppgrup|setppgroup)$/i;
handler.group = true;
handler.admin = true;
handler.botAdmin = true;

module.exports = handler;

async function generateProfilePicture(buffer) {
  const jimp_1 = await Jimp.read(buffer);
  const minz = jimp_1.getWidth() > jimp_1.getHeight() ? jimp_1.resize(720, Jimp.AUTO) : jimp_1.resize(Jimp.AUTO, 720);
  const jimp_2 = await Jimp.read(await minz.getBufferAsync(Jimp.MIME_JPEG));
  return {
    img: await minz.getBufferAsync(Jimp.MIME_JPEG)
  };
}
