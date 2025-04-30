const { Telegraf } = require('telegraf');
const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => {
  ctx.reply('Halo! Selamat datang di Smart Solution.\n\nSilakan ketik salah satu kata berikut:\n- voucher\n- member\n- paket\n- pendaftaran\n- alat\n- pembayaran\n- kontak\n- mac\n- gangguan\n- tentang\n\nKami siap membantu Anda.');
});

bot.on('text', (ctx) => {
  const pesan = ctx.message.text.toLowerCase();
  if (pesan.includes('voucher')) {
    ctx.reply('Voucher tersedia:\n2K = 7 jam\n3K = 9 jam\n5K = 15 jam\n10K = 5 hari\n15K = 8 hari\n30K = 15 hari\n50K = 31 hari\n\nBonus: Tukar 10 voucher harga sama untuk 1 voucher gratis. Berlaku di semua titik WiFi Smart Solution.');
  } else if (pesan.includes('member')) {
    ctx.reply('Member bayar bulanan, tanggal tetap, masuk program Doorprize 2 bulan sekali.\nHarga:\n1 device = Rp60K\n2 = Rp100K\n3 = Rp150K\n4 = Rp200K');
  } else if (pesan.includes('paket')) {
    ctx.reply('Paket Member:\n1 device = Rp60K\n2 = Rp100K\n3 = Rp150K\n4 = Rp200K');
  } else if (pesan.includes('daftar') || pesan.includes('pendaftaran')) {
    ctx.reply('Cara Daftar:\n- Nama\n- No HP\n- Email\n- Alamat\nHubungi admin untuk pemasangan dan info harga.');
  } else if (pesan.includes('alat')) {
    ctx.reply('Semua alat bersifat sewa. Kerusakan ditanggung Smart Solution dan dapat diambil kembali.');
  } else if (pesan.includes('pembayaran') || pesan.includes('qris')) {
    ctx.reply('Pembayaran via Transfer Bank atau QRIS. Konfirmasi ke admin setelah transfer.');
  } else if (pesan.includes('kontak') || pesan.includes('admin')) {
    ctx.reply('Kontak Admin:\nWA/Telegram: +6282299911594\nEmail: smartisk1@gmail.com');
  } else if (pesan.includes('mac')) {
    ctx.reply('Matikan "Randomized MAC Address" di pengaturan WiFi agar login berhasil.');
  } else if (pesan.includes('gangguan')) {
    ctx.reply('Laporkan gangguan ke admin:\n- Nama\n- Lokasi\n- Keluhan singkat\nWA: +6282299911594');
  } else if (pesan.includes('tentang') || pesan.includes('smart solution')) {
    ctx.reply('Smart Solution adalah penyedia jaringan internet komunitas dengan koneksi stabil & terpercaya.');
  } else {
    ctx.reply('Maaf, saya belum memahami pesan Anda. Silakan hubungi Admin Smart Solution.');
  }
});

bot.launch();