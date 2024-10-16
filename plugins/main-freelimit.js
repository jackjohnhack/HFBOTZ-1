const freeLimit = 20; // Jumlah limit gratis yang diberikan
const cooldown = 12 * 60 * 60 * 1000; // Cooldown dalam milidetik (12 jam)
const timeoutMessage = 'Silahkan tunggu untuk mengambil limit kembali.'; // Pesan jika masih dalam cooldown

let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender];
    let now = Date.now();
    let elapsedTime = now - (user.lastClaim || 0); // Waktu yang telah berlalu sejak klaim terakhir
    let remainingTime = Math.max(cooldown - elapsedTime, 0); // Waktu yang tersisa untuk cooldown
    let timers = msToTime(remainingTime); // Format waktu tersisa

    if (elapsedTime < cooldown) {
        m.reply(`${timeoutMessage} Tunggu selama ${timers} untuk mengambil limit kembali.`);
    } else {
        if (user.limit >= 1) throw 'Limit kamu harus 0 untuk mengambil free limit';
        user.limit += freeLimit; // Tambahkan limit gratis
        user.lastClaim = now; // Catat waktu klaim terakhir
        m.reply(`Sukses mendapatkan +${freeLimit} Limit.`);
    }
}

handler.help = ['freelimit'];
handler.tags = ['main'];
handler.command = /^freelimit$/i;
handler.register = true;
handler.group = false;

module.exports = handler;

// Fungsi untuk mengonversi milidetik ke format waktu (jam, menit, detik)
function msToTime(duration) {
    let seconds = Math.floor((duration / 1000) % 60);
    let minutes = Math.floor((duration / (1000 * 60)) % 60);
    let hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
    
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    return `${hours} jam ${minutes} menit ${seconds} detik`;
}
