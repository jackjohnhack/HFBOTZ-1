const axios = require("axios");
const got = require("got");
const {
    fetchVideo
} = require("@prevter/tiktok-scraper");
const {
    Tiktok
} = require("@xct007/tiktok-scraper");
const ora = require('ora');
const chalk = require('chalk');
const {
    TiktokJs
} = require("../lib/tiktok-js.js");
let tiktokJs = new TiktokJs();
const {
    ShortLink
} = require("../lib/shortlink.js");
const short = new ShortLink();

let handler = async (m, {
    command,
    usedPrefix,
    conn,
    text,
    args
}) => {
    let lister = Array.from({
        length: 15
    }, (_, index) => `v${index + 1}`);
    let [links, versions] = text.split(" ");
    versions = versions ? versions : lister[Math.floor(Math.random() * lister.length)];
    let spaces = "                ";
    if (!lister.includes(versions.toLowerCase())) return m.reply("*Example:*\n" + usedPrefix + command + " link v2\n\n*Pilih type yg ada*\n" + lister.map((v, index) => "  ○ " + v.toUpperCase()).join("\n"));

    try {

        if (!links) return m.reply("Input query link");

        if (versions === "v1") {
            let video = await tiktokJs.aweme(links);
            let caption = `${spaces}*[ T I K T O K ]*\n` +
                `🔗 ID: ${video?.video_id || ''}\n` +
                `👤 Author: ${video?.author?.name || ''}\n` +
                `❤️ Views: ${video?.stats?.total_views || ''}\n` +
                `💬 Comments: ${video?.stats?.total_comment || ''}\n` +
                `🔁 Shares: ${video?.stats?.total_share || ''}\n` +
                `▶️ Download: ${video?.stats?.total_download || ''}\n` +
                `🎵 Music: ${video?.music?.title} - ${video?.music?.author || ''}\n` +
                `🖼️ Thumbnail URL: ${(await short.tinyurl(video?.thumbnail)) || ''}\n` +
                `${spaces}*[ Aweme ]*`;

            await conn.sendFile(m.chat, video?.videos[0] || video?.videos[1] || video?.videos[2] || giflogo, "", caption, m);
        }
        if (versions === "v2") {
            let video = await tiktokJs.musicaldown(links);
            let caption = `${spaces}*[ T I K T O K ]*\n` +
                `🔗 ID: ${video?.video_id || ''}\n` +
                `👤 Author: ${video?.author?.name || ''}\n` +
                `🎵 Music: ${video?.music?.title || ''}\n` +
                `🖼️ Thumbnail URL: ${(await short.tinyurl(video?.thumbnail)) || ''}\n` +
                `${spaces}*[ Musicaldown ]*`;

            await conn.sendFile(m.chat, video?.videos[0] || video?.videos[1] || video?.videos[2] || giflogo, "", caption, m);
        }
        if (versions === "v3") {
            let video = await tiktokJs.savetik(links);
            let caption = `${spaces}*[ T I K T O K ]*\n` +
                `🔗 ID: ${video?.video_id || ''}\n` +
                `👤 Author: ${video?.author?.name || ''}\n` +
                `🎵 Music: ${video?.music?.title || ''}\n` +
                `🖼️ Thumbnail URL: ${(await short.tinyurl(video?.thumbnail)) || ''}\n` +
                `${spaces}*[ Savetik ]*`;

            await conn.sendFile(m.chat, video?.videos[0] || video?.videos[1] || video?.videos[2] || giflogo, "", caption, m);
        }
        if (versions === "v4") {
            let video = await tiktokJs.snaptik(links);
            let caption = `${spaces}*[ T I K T O K ]*\n` +
                `🔗 ID: ${video?.video_id || ''}\n` +
                `👤 Author: ${video?.author?.name || ''}\n` +
                `❤️ Views: ${video?.total_views || ''}\n` +
                `💬 Comments: ${video?.total_comment || ''}\n` +
                `🎵 Music: ${video?.music?.title} - ${video?.music?.author || ''}\n` +
                `🖼️ Thumbnail URL: ${(await short.tinyurl(video?.thumbnail)) || ''}\n` +
                `${spaces}*[ Snaptik ]*`;

            await conn.sendFile(m.chat, video?.videos[0] || video?.videos[1] || video?.videos[2] || giflogo, "", caption, m);
        }
        if (versions === "v5") {
            let video = await tiktokJs.snaptikpro(links);
            let caption = `${spaces}*[ T I K T O K ]*\n` +
                `🔗 ID: ${video?.video_id || ''}\n` +
                `👤 Author: ${video?.author?.name || ''}\n` +
                `❤️ Views: ${video?.total_views || ''}\n` +
                `💬 Comments: ${video?.total_comment || ''}\n` +
                `🎵 Music: ${video?.music?.title} - ${video?.music?.author || ''}\n` +
                `🖼️ Thumbnail URL: ${(await short.tinyurl(video?.thumbnail)) || ''}\n` +
                `${spaces}*[ Snaptikpro ]*`;

            await conn.sendFile(m.chat, video?.videos || video?.videos[0] || video?.videos[1] || giflogo, "", caption, m);
        }
        if (versions === "v6") {
            let video = await tiktokJs.ssstik(links);
            let caption = `${spaces}*[ T I K T O K ]*\n` +
                `🔗 ID: ${video?.video_id || ''}\n` +
                `👤 Author: ${video?.author?.name || ''}\n` +
                `❤️ Views: ${video?.total_views || ''}\n` +
                `💬 Comments: ${video?.total_comment || ''}\n` +
                `🎵 Music: ${video?.music?.title} - ${video?.music?.author || ''}\n` +
                `🖼️ Thumbnail URL: ${(await short.tinyurl(video?.thumbnail)) || ''}\n` +
                `${spaces}*[ Ssstik ]*`;

            await conn.sendFile(m.chat, video?.videos || video?.videos[0] || video?.videos[1] || giflogo, "", caption, m);
        }
        if (versions === "v7") {
            let video = await tiktokJs.tikcdn(links);
            let caption = `${spaces}*[ T I K T O K ]*\n` +
                `🔗 ID: ${video?.video_id || ''}\n` +
                `👤 Author: ${video?.author?.name || ''}\n` +
                `❤️ Views: ${video?.stats?.total_views || ''}\n` +
                `💬 Comments: ${video?.stats?.total_comment || ''}\n` +
                `🔁 Shares: ${video?.stats?.total_share || ''}\n` +
                `▶️ Download: ${video?.stats?.total_download || ''}\n` +
                `🎵 Music: ${video?.music?.title} - ${video?.music?.author || ''}\n` +
                `🖼️ Thumbnail URL: ${(await short.tinyurl(video?.thumbnail)) || ''}\n` +
                `${spaces}*[ Tikcdn ]*`;

            await conn.sendFile(m.chat, video?.videos[0] || video?.videos[1] || giflogo, "", caption, m);
        }
        if (versions === "v8") {
            let video = await tiktokJs.tikmate(links);
            let caption = `${spaces}*[ T I K T O K ]*\n` +
                `🔗 ID: ${video?.video_id || ''}\n` +
                `👤 Author: ${video?.author?.name || ''}\n` +
                `❤️ Views: ${video?.total_views || ''}\n` +
                `💬 Comments: ${video?.total_comment || ''}\n` +
                `🎵 Music: ${video?.music?.title} - ${video?.music?.author || ''}\n` +
                `🖼️ Thumbnail URL: ${(await short.tinyurl(video?.thumbnail)) || ''}\n` +
                `${spaces}*[ Tikmate ]*`;

            await conn.sendFile(m.chat, video?.videos || video?.videos[0] || giflogo, "", caption, m);
        }
        if (versions === "v9") {
            let video = await tiktokJs.tiktokdownloadr(links);
            let caption = `${spaces}*[ T I K T O K ]*\n` +
                `🔗 ID: ${video?.video_id || ''}\n` +
                `👤 Author: ${video?.author?.name || ''}\n` +
                `❤️ Views: ${video?.total_views || ''}\n` +
                `💬 Comments: ${video?.total_comment || ''}\n` +
                `🎵 Music: ${video?.music?.title} - ${video?.music?.author || ''}\n` +
                `🖼️ Thumbnail URL: ${(await short.tinyurl(video?.thumbnail)) || ''}\n` +
                `${spaces}*[ Tiktokdownloadr ]*`;

            await conn.sendFile(m.chat, video?.videos[0] || video?.videos[1] || video?.videos[2] || giflogo, "", caption, m);
        }
        if (versions === "v10") {
            let video = await tiktokJs.tikwm(links);
            let caption = `${spaces}*[ T I K T O K ]*\n` +
                `🔗 ID: ${video?.video_id || ''}\n` +
                `👤 Author: ${video?.author?.name || ''}\n` +
                `❤️ Views: ${video?.stats?.total_views || ''}\n` +
                `💬 Comments: ${video?.stats?.total_comment || ''}\n` +
                `🔁 Shares: ${video?.stats?.total_share || ''}\n` +
                `▶️ Download: ${video?.stats?.total_download || ''}\n` +
                `🎵 Music: ${video?.music?.title} - ${video?.music?.author || ''}\n` +
                `🖼️ Thumbnail URL: ${(await short.tinyurl(video?.thumbnail)) || ''}\n` +
                `${spaces}*[ Tikwm ]*`;

            await conn.sendFile(m.chat, video?.videos || video?.videos[0] || giflogo, "", caption, m);
        }
        if (versions === "v11") {
            let video = await tiktokJs.ttdownloader(links);
            let caption = `${spaces}*[ T I K T O K ]*\n` +
                `🔗 ID: ${video?.video_id || ''}\n` +
                `👤 Author: ${video?.author?.name || ''}\n` +
                `❤️ Views: ${video?.total_views || ''}\n` +
                `💬 Comments: ${video?.total_comment || ''}\n` +
                `🎵 Music: ${video?.music?.title} - ${video?.music?.author || ''}\n` +
                `🖼️ Thumbnail URL: ${(await short.tinyurl(video?.thumbnail)) || ''}\n` +
                `${spaces}*[ Ttdownloader ]*`;

            await conn.sendFile(m.chat, video?.videos || video?.videos[0] || giflogo, "", caption, m);
        }
        if (versions === "v12") {
            let Scrap = await Tiktokdl(links)
            let S = Scrap?.result
            let obj = S
            let ScrapCap = `${spaces}*「 T I K T O K 」*

🆔 Aweme ID: ${obj?.aweme_id}
🌍 Region: ${obj?.region}
💬 Description: ${obj?.desc}
🕒 Create Time: ${obj?.create_time}
👤 Author:
  🆔 UID: ${obj?.author?.uid}
  🆔 Unique ID: ${obj?.author?.unique_id}
  👤 Nickname: ${obj?.author?.nickname}
  🎂 Birthday: ${obj?.author?.birthday}
⏱ Duration: ${obj?.duration}
⬇️ Download:
  ▶️ Nowm: ${(await short.tinyurl(obj?.download?.nowm))}
  ▶️ WM: ${(await short.tinyurl(obj?.download?.wm))}
  🎵 Music: ${obj?.download?.music}
  🎵 Music Info:
    🆔 ID: ${obj?.download?.music_info?.id}
    🎵 Title: ${obj?.download?.music_info?.title}
    👤 Author: ${obj?.download?.music_info?.author}
    🔄 Is Original: ${obj?.download?.music_info?.is_original}
\n${spaces}*[ ${versions.toUpperCase()} ]*`
            await conn.sendFile(m.chat, obj?.download?.nowm || obj?.download?.wm || obj?.download?.nowm || giflogo, "", ScrapCap, m)
        }
        if (versions === "v13") {
            let god = await axios.get("https://godownloader.com/api/tiktok-no-watermark-free?url=" + links + "&key=godownloader.com")
            let GoCap = `${spaces}*[ T I K T O K ]*

*Desc:* ${god?.data?.desc}
\n${spaces}*[ ${versions.toUpperCase()} ]*`
            await conn.sendFile(m.chat, god?.data?.video_no_watermark, "", GoCap, m)
        }
        if (versions === "v14") {
            let spinner = ora({
                text: 'Downloading...',
                spinner: 'moon',
            }).start();
            try {
                let video = await fetchVideo(links);
                let buffer = await video.download({
                    progress: (p) => {
                        let progressText = chalk.blue(`Downloaded ${p.progress}%`) +
                            ` (${chalk.green(p.downloaded)}/${chalk.green(p.total)} bytes)`;
                        spinner.text = progressText;
                    },
                });

                spinner.succeed(chalk.green('Download completed'));

                let PrevCap = `${spaces}*[ T I K T O K ]*

${getVideoInfo(video)}
\n${spaces}*[ ${versions.toUpperCase()} ]*`
                await conn.sendFile(m.chat, buffer || giflogo, "", PrevCap, m)
            } catch (e) {
                spinner.fail(chalk.red('Download failed'));
                console.error(e);
            }
        }
        if (versions === "v15") {
            let videoX = await Tiktok(links);

            let XctCap = `${spaces}*[ T I K T O K ]*

${getUserProfileInfo(videoX)}
\n${spaces}*[ ${versions.toUpperCase()} ]*`
            await conn.sendFile(m.chat, videoX?.download?.nowm || giflogo, "", XctCap, m)
        }

    } catch (e) {
        await m.reply(e.toString());
    }
};

handler.help = ["tiktok"]
handler.tags = ["downloader"]
handler.command = /^(tiktok|tt|ttdl|tikdl|tiktoknowm|ttnowm|tiknowm)$/i;
module.exports = handler

async function Tiktokdl(url) {
    async function API_URL(videoId) {
        const API = {
            AID: 0,
            APP_NAME: 'musical_ly',
            HOSTNAME: 'api22-normal-c-alisg.tiktokv.com',
            API_V: 'v1',
            VERSION_WORKING: false,

            FORMATS: [
                'play_addr',
                'play_addr_h264',
                'play_addr_bytevc1',
                'download_addr'
            ],

            VERSIONS: [
                ['26.1.3', '260103'],
                ['26.1.2', '260102'],
                ['26.1.1', '260101'],
                ['25.6.2', '250602'],
                ['24.1.5', '240105']
            ],

            constructApiQuery: async (videoId, appVersion, manifestAppVersion) => {
                const fetchType = 'feed';
                const ts = Math.round(Date.now() / 1000);

                const parameters = {
                    'aweme_id': videoId,
                    'version_name': appVersion,
                    'version_code': manifestAppVersion,
                    'build_number': appVersion,
                    'manifest_version_code': manifestAppVersion,
                    'update_version_code': manifestAppVersion,
                    'openudid': ranGen('0123456789abcdef', 16),
                    'uuid': ranGen('0123456789', 16),
                    '_rticket': ts * 1000,
                    'ts': ts,
                    'device_brand': 'Google',
                    'device_type': 'ASUS_Z01QD',
                    'device_platform': 'android',
                    "iid": "7318518857994389254",
                    "device_id": "7318517321748022790",
                    'resolution': '1080*1920',
                    'dpi': 420,
                    'os_version': '10',
                    'os_api': '29',
                    'carrier_region': 'US',
                    'sys_region': 'US',
                    'region': 'US',
                    'app_name': API.APP_NAME,
                    'app_language': 'en',
                    'language': 'en',
                    'timezone_name': 'America/New_York',
                    'timezone_offset': '-14400',
                    'channel': 'googleplay',
                    'ac': 'wifi',
                    'mcc_mnc': '310260',
                    'is_my_cn': 0,
                    'aid': API.AID,
                    'ssmix': 'a',
                    'as': 'a1qwert123',
                    'cp': 'cbfhckdckkde1'
                };

                const queryParams = Object.keys(parameters).map((key, index) => `${index > 0 ? '&' : '?'}${key}=${parameters[key]}`).join('');

                const apiUrl = `https://${API.HOSTNAME}/aweme/${API.API_V}/${fetchType}/${queryParams}`;

                return apiUrl;
            }
        };
        return await API.constructApiQuery(videoId, API.VERSIONS[0][0], API.VERSIONS[0][1]);
    }

    function ranGen(charset, length) {
        let result = '';
        const charactersLength = charset.length;
        for (let i = 0; i < length; i++) {
            result += charset.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    async function getAwemeId(url) {
        let Konto1 = /video\/([\d|\+]+)?\/?/;
        let valid = url.match(Konto1);
        if (valid) {
            return valid[1];
        } else {
            try {
                let data = await fetch(url, {
                    headers: {
                        "Accept-Encoding": "deflate",
                    },
                    redirect: 'manual',
                });
                let _url = data.headers.get('location');
                let _valid = _url.match(Konto1);
                if (_valid) {
                    return _valid[1];
                }
            } catch (e) {
                return false;
            }
        }
    }

    let valid = await getAwemeId(url);
    if (!valid) return {
        status: false,
        result: 'Invalid URL'
    };

    let apiUrl = await API_URL(valid);
    let data = await fetch(apiUrl, {
        headers: {
            "Accept-Encoding": "deflate",
            "User-Agent": "okhttp/3.14.9",
        },
    });

    if (!data.ok) return {
        status: false,
        result: 'Error fetching data'
    };

    let body = await data.json();
    let obj = body.aweme_list.find((o) => o.aweme_id === valid);

    let results = {
        aweme_id: obj?.aweme_id || '',
        region: obj?.region || '',
        desc: obj?.desc || '',
        create_time: obj?.create_time || '',
        author: {
            uid: obj?.author?.uid || '',
            unique_id: obj?.author?.unique_id || '',
            nickname: obj?.author?.nickname || '',
            birthday: obj?.author?.birthday || '',
        },
        duration: obj?.music?.duration || '',
        download: {
            nowm: obj?.video?.play_addr?.url_list[0] || '',
            wm: obj?.video?.download_addr?.url_list[0] || '',
            music: obj?.music?.title || '',
            music_info: {
                id: obj?.music?.id || '',
                title: obj?.music?.title || '',
                author: obj?.music?.author || '',
                is_original: obj?.music?.is_original || '',
            }
        },
    };
    return {
        status: true,
        result: results
    };
}

async function getVideoInfo(video) {
    let obj = video;
    let result = `
ID: ${obj.id}
Author: ${obj.author.username} (${obj.author.nickname})
Description: ${obj.text}
Comments: ${obj.stats.commentCount}
Shares: ${obj.stats.shareCount}
Likes: ${obj.stats.diggCount}
Views: ${obj.stats.playCount}
Music: ${obj.music.id} (${obj.music.title} - ${obj.music.author})
Downloaded: ${obj.downloaded}`;

    return result;
}

async function getUserProfileInfo(video) {
    let obj = video;
    let result = `
Username: ${obj.author.username}
Nickname: ${obj.author.nickname}
Description: ${obj.author.signature}
Verified: ${obj.author.verified}
Follower Count: ${obj.author.stats.followerCount}
Following Count: ${obj.author.stats.followingCount}
Video Count: ${obj.author.stats.videoCount}
Heart Count: ${obj.author.stats.heartCount}
Digg Count: ${obj.author.stats.diggCount}`;

    return result;
}
