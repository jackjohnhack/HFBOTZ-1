/*const free = 500000
const prem = 1000000
const limitfree = 50
const limitprem = 100

let handler = async (m, { isPrems }) => {
    let time = global.db.data.users[m.sender].lastmonthly + 31536000000
      // conn.reply(m.chat, `Anda sudah mengklaim dan mendapatkan :`, m)
        global.db.data.users[m.sender].exp += isPrems ? prem : free
        global.db.data.users[m.sender].limit += isPrems ? limitprem : limitfree
       // global.db.data.users[m.sender].pet += 3
        conn.reply(m.chat, `Selamat kamu mendapatkan:\n\n+${isPrems ? prem : free} Exp\n+${isPrems ? limitprem : limitfree} Limit`, m)
        global.db.data.users[m.sender].lastmonthly = new Date * 1
    }
handler.help = ['zeus']
handler.tags = ['rpg', 'main']
handler.command = /^(kongrets)$/i
handler.limit = false

handler.fail = null

module.exports = handler*/