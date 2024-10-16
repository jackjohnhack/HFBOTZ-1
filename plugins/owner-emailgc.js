let handler = async (m, { conn, text, usedPrefix: _p }) => {
    let [number, pesan, boddy] = text.split('|');

    if (!number) return conn.reply(m.chat, 'Silahkan masukkan id grup yang akan dikirim', m);
    if (!pesan) return conn.reply(m.chat, 'Silahkan masukkan pesannya', m);
    if (pesan.length > 500) return conn.reply(m.chat, 'Teks terlalu panjang!', m);

    let user = global.db.data.users[m.sender];
    let korban = `${number}`;
    var nomor = m.sender;
    let spam1 = `「 *VYNAA BOT* 」\n\nDari : Owner\nKe : ${korban}@g.us\nPesan : ${pesan}\n\n${global.wm}`;

    await conn.reply(korban + '@g.us', spam1, 0);

    let logs = `[!] Berhasil mengirim pesan wa ke id grup ${korban}`;
    conn.reply(m.chat, logs, m);
};

handler.help = ['gcemail'];
handler.tags = ['owner'];
handler.command = /^(gcemail|emailgc)$/i;
handler.owner = true;

module.exports = handler;
