/*const util = require('util');
const path = require('path');

const user = (a) => '@' + a.split('@')[0];

function handler(m, { groupMetadata, command, conn, text, usedPrefix }) {
  if (!text) throw `Contoh penggunaan:\n.top *teks*`;

  const ps = groupMetadata.participants.map((v) => v.id);

  const a = pickRandom(ps);
  const b = pickRandom(ps);
  const c = pickRandom(ps);
  const d = pickRandom(ps);
  const e = pickRandom(ps);
  const f = pickRandom(ps);
  const g = pickRandom(ps);
  const h = pickRandom(ps);
  const i = pickRandom(ps);
  const j = pickRandom(ps);

  const k = Math.floor(Math.random() * 70);
  const x = pickRandom(['🤓', '😅', '😂', '😳', '😎', '🥵', '😱', '🤑', '🙄', '💩', '🍑', '🤨', '🥴', '🔥', '👇🏻', '😔', '👀', '🌚']);
  const l = Math.floor(Math.random() * x.length);
  const vn = `https://kaxel-host.tech/sound/sound.mp3`;

  const top = `*${x} Top 10 ${text} ${x}*\n\n1. ${user(a)}\n2. ${user(b)}\n3. ${user(c)}\n4. ${user(d)}\n5. ${user(e)}\n6. ${user(f)}\n7. ${user(f)}\n8. ${user(g)}\n9. ${user(h)}\n10. ${user(i)}`;

  m.reply(top, null, { mentions: [a, b, c, d, e, f, g, h ,i] });
}

handler.help = handler.command = ['top'];
handler.tags = ['fun'];
handler.group = true;
handler.limit = true;

module.exports = handler;

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}
*/