# Undangan Digital — Majelis Ta'lim Al Khoir Wal Barokah

Website undangan mobile-first, cinematic, hitam–gold dengan aksen hijau. Dibuat dengan HTML, CSS, dan JavaScript murni sehingga bisa langsung di-host di GitHub Pages atau Vercel.

## Struktur
- `index.html` — halaman utama
- `assets/css/style.css` — desain & animasi
- `assets/js/script.js` — opening, countdown, reveal, RSVP WhatsApp
- `assets/images/` — seluruh gambar referensi yang digunakan
- `assets/audio/` — tempat file sholawat
- `assets/video/` — tempat video Masjid Nabawi jika nanti tersedia

## Yang wajib diganti sebelum publikasi
1. Tanggal acara di `assets/js/script.js` pada `eventDate`.
2. Tanggal/waktu teks di `index.html`.
3. Nomor WhatsApp panitia pada `phone` di `assets/js/script.js`.
4. Link Google Maps pada tombol `Lihat Lokasi` di `index.html`.
5. Jika sudah punya audio berlisensi, letakkan `sholawat.mp3` di `assets/audio/` lalu ubah `audio.src` di `script.js` menjadi `assets/audio/sholawat.mp3`.
6. Jika memiliki video Masjid Nabawi, tambahkan video dan ubah cover menjadi elemen `<video>` sesuai kebutuhan.

## GitHub
1. Buat repository baru, misalnya `undangan-alkhoir`.
2. Upload semua isi folder project ini.
3. Untuk GitHub Pages: Settings → Pages → Deploy from branch → `main` → `/root`.
4. Jika memakai Vercel: import repository GitHub ini sebagai project.
5. Hubungkan domain `undanganalkhoir.com` pada pengaturan domain Vercel dan ikuti DNS record yang diberikan Vercel.

## Catatan
Versi ini menggunakan gambar Masjid Nabawi sebagai hero karena file video belum disediakan. Tidak ada gambar baru yang dibuat; seluruh visual utama berasal dari aset referensi yang diberikan.


## Data Acara — diperbarui berdasarkan poster referensi
- Acara: Maulid Akbar 1448 H
- Hari/Tanggal: Minggu, 06 September 2026
- Waktu: 09.00 WIT — Selesai
- Tempat: Gedung Majlis Al Khoir Wal Barokah, Sofifi, Maluku Utara
- Terbuka untuk umum: Ikhwan & Akhwat

Countdown website sudah disesuaikan ke 06 September 2026 pukul 09.00 WIT.
