let handler = async (m, {
    conn,
    args
}) => {
    if (!args[0] || isNaN(args[0])) {
        throw '*Example*: .buylimit 10';
    }

    conn.sendMessage(m.chat, {
        react: {
            text: '🕒',
            key: m.key,
        }
    })

    let count = parseInt(args[0]);
    let price = count * 1500;
    let users = global.db.data.users;
    let user = users[m.sender];
    if (price > user.exp) {
        throw `Maaf, exp kamu tidak cukup untuk membeli ${count} limit. Harga 1 limit adalah 1500 exp.`;
    }
    user.exp -= price;
    user.limit += count;
    conn.reply(m.chat, `Berhasil membeli ${count} limit dengan harga ${price} exp.`, m);
};

handler.help = ['buylimit <jumlah>'];
handler.tags = ['xp'];
handler.command = /^(buylimit)$/i;
handler.register = false;
handler.limit = false;

module.exports = handler