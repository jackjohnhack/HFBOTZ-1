const axios = require('axios');
const cheerio = require('cheerio');

async function handler(m, { conn, args, usedPrefix, command }) {
  if (!args[0]) throw `Contoh pemakaian: ${usedPrefix}${command} https://danbooru.donmai.us/posts/6261124`;
  if (!/danbooru\.donmai\.us\/posts\/[0-9]+$/i.test(args[0])) throw '*Link Salah!*';
  m.react('🕑');
  let data = await danbooruDl(args[0]);
  let img = data.url;
  delete data.url;
  let capt = Object.keys(data).map((x) => `${x}: ${data[x]}`).join`\n`;
  await conn.sendFile(m.chat, img, '', capt, m);
}

handler.tags = ['downloader'];
handler.command = /^danbooru$/i;
handler.help = ['danbooru'];
handler.limit = 5;

async function danbooruDl(url) {
  let html = (await axios.get(url)).data;
  let $ = cheerio.load(html);
  let obj = {};
  $('#post-information > ul > li').each((idx, el) => {
    let str = $(el).text().trim().replace(/\n/g, '').split(': ');
    obj[str[0]] = str[1].replace('»', '').trim().split(' .')[0];
  });
  obj.url = $('#post-information > ul > li[id="post-info-size"] > a').attr('href');
  return obj;
}

module.exports = handler;
