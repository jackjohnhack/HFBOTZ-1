let fs = require('fs')
let handler = m => m

handler.all = async function (m, { isBlocked }) {
    if (isBlocked) return
    if ((m.mtype === 'groupInviteMessage' || m.text.startsWith('Undangan untuk bergabung') || m.text.startsWith('Invitation to join') || m.text.startsWith('Buka tautan ini')) && !m.isBaileys && !m.isGroup) {
    let teks = `╭━━━━「 PAKET SEWA 」
┊⫹⫺ Trial:     Free/grup (1 Hari) *SYARAT DAN KETENTUAN BERLAKU
┊⫹⫺ MurMer:     3k/grup (3 Hari) 
┊⫹⫺ Hemat:     5k/grup (1 minggu)
┊⫹⫺ Normal:   15k/grup (1 bulan)
┊⫹⫺ Super:    25k/grup (3 bulan)
┊⫹⫺ Gacor:    45k/grup (6 bulan)
┊⫹⫺ Permanen: 55k/grup (Unlimited)
╰═┅═━––––––๑
Jika berminat hubungi: @${global.owner[0]} untuk order:)
`
    this.reply(m.chat, teks, m)
    const data = global.owner.filter(([id, isCreator]) => id && isCreator)
    this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
    }
}

module.exports = handler