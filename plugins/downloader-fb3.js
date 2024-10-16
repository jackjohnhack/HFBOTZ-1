const fetch = require('node-fetch');
let handler = async (m, { conn, args, usedPrefix, command }) => {  
        if (!args[0]) throw `Gunakan contoh ${usedPrefix}${command} https://fb.watch/mcx9K6cb6t/?mibextid=8103lRmnirLUhozF`;
        try {
        const res = await fetch(`https://api.botcahx.eu.org/api/dowloader/fbdown3?url=${args[0]}&apikey=${btc}`);
        const json = await res.json();
        let urls = json.result.url.urls;
        if (!Array.isArray(urls)) {
            throw `Tidak dapat mendapatkan URL video dari tautan yang diberikan`;
        }
        for (let url of urls) {
            if (url.sd) {
                conn.sendFile(m.chat, url.sd, 'fb.mp4', `*Facebook Downloader*`, m);
                break;
            }
        }
    } catch (error) {
        console.log(error);
        throw 'Terjadi kesalahan pada saat melakukan proses download';
    }
}
handler.help = ['facebook'].map(v => v + ' <url>');
handler.command = /^(fb3|facebook3|facebookdl3|fbdl3|fbdown3|dlfb3|fesbuk3)$/i;
handler.tags = ['downloader'];
handler.group = false;
handler.premium = false;
handler.owner = false;
handler.admin = false;
handler.botAdmin = false;
handler.fail = null;
handler.private = false;
handler.limit = 2
module.exports = handler;