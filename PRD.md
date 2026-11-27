# PRD — Sistem Informasi PPDB TPQ Khoirul Ummah

**Status:** Draft untuk persetujuan pengguna · **Versi:** 0.1  
**Produk:** Website PPDB berbasis React + Vite  
**Metode pengembangan:** Agile Scrum

## 1. Ringkasan Produk
Website untuk membantu TPQ Khoirul Ummah menyampaikan informasi penerimaan santri baru, menerima pendaftaran online, mengelola berkas, memverifikasi data, menyampaikan status penerimaan, dan menghasilkan laporan PPDB.

## 2. Masalah yang Diselesaikan
- Informasi PPDB perlu tersedia pada satu halaman yang mudah diakses.
- Pencatatan dan pencarian data pendaftar perlu lebih terstruktur.
- Kelengkapan berkas dan status verifikasi perlu mudah dipantau.
- Pengelola membutuhkan rekap data pendaftaran dan hasil penerimaan.

## 3. Tujuan dan Indikator Keberhasilan
- Orang tua dapat menemukan informasi dan mengirim pendaftaran melalui website.
- Admin dapat mencari, memperbarui, memverifikasi, dan meninjau data pendaftar.
- Status pendaftaran terlihat jelas bagi pengguna yang berwenang.
- Laporan dapat ditinjau dan disiapkan untuk ekspor/cetak.
- Antarmuka responsif, mudah dipahami, dan konsisten dengan brand sage green, cream, dan gold.

## 4. Peran Pengguna
- **Pengunjung:** melihat profil TPQ, jadwal, persyaratan, dan informasi PPDB.
- **Orang tua/wali:** membuat akun atau masuk, mengisi pendaftaran, mengunggah berkas, dan melihat status.
- **Admin/pengelola:** mengelola informasi, data pendaftar, verifikasi, hasil penerimaan, serta laporan.

## 5. Ruang Lingkup — 8 Modul
1. **Beranda & Informasi PPDB:** profil TPQ, pengumuman, jadwal, persyaratan, CTA pendaftaran.
2. **Pendaftaran Calon Santri:** formulir identitas santri dan orang tua/wali, validasi isian, simpan draf/kirim.
3. **Unggah Berkas:** unggah dokumen yang dipersyaratkan, indikator kelengkapan, validasi tipe dan ukuran berkas.
4. **Login & Hak Akses:** autentikasi dan pembatasan halaman berdasarkan peran orang tua/admin.
5. **Pengelolaan Data Santri:** tabel pendaftar, pencarian, filter, detail, dan pembaruan data.
6. **Verifikasi Pendaftaran:** pemeriksaan data/berkas dan status perlu perbaikan, sedang diverifikasi, atau terverifikasi.
7. **Status & Hasil Penerimaan:** status pendaftaran dan hasil seleksi/penerimaan yang ditetapkan admin.
8. **Laporan PPDB:** ringkasan jumlah pendaftar dan status, filter periode/status, serta tampilan siap cetak.

## 6. Alur Utama
Pengunjung melihat informasi → orang tua masuk/daftar akun → mengisi formulir → mengunggah berkas → mengirim pendaftaran → admin memverifikasi → orang tua melihat status/perbaikan → admin memperbarui hasil penerimaan → laporan direkap.

## 7. Kebutuhan Fungsional
- Navigasi ke delapan modul sesuai peran.
- Validasi field wajib, format data, dan pesan kesalahan yang jelas.
- Status proses pendaftaran terlihat dan menggunakan label konsisten.
- Admin dapat mencari/filter pendaftar dan membuka detailnya.
- Tindakan penting seperti kirim pendaftaran dan perubahan hasil memiliki konfirmasi.
- Data sensitif hanya tampil kepada pengguna yang berwenang.

## 8. Kebutuhan Nonfungsional
- Desain responsif untuk ponsel, tablet, dan desktop.
- Aksesibilitas dasar: kontras memadai, label input, fokus keyboard, dan pesan error yang terbaca.
- Antarmuka berbahasa Indonesia dengan istilah sederhana.
- Komponen UI konsisten dan dapat digunakan ulang.
- Hindari menampilkan data pribadi pada halaman publik.

## 9. Asumsi dan Batasan
- Frontend menggunakan React dan Vite.
- PRD ini mendefinisikan produk dan UI; backend, database, layanan WhatsApp, serta autentikasi produksi belum ditentukan sebagai bagian implementasi frontend awal.
- Isi persyaratan, jadwal, kontak, logo, dan aturan penerimaan final harus disediakan/disetujui pihak TPQ.
- Tidak termasuk modul absensi, nilai, kelas mengaji harian, atau pembayaran SPP rutin.

## 10. Kriteria Penerimaan Awal
- Delapan modul memiliki tujuan dan alur UI yang terdefinisi.
- Orang tua dapat menyelesaikan alur pendaftaran secara visual dari formulir sampai status.
- Admin dapat meninjau daftar pendaftar, detail, verifikasi, hasil, dan laporan pada prototipe.
- Layout responsif dan memakai token warna/komponen pada UI-GUIDELINE.
- Tidak ada integrasi backend atau data produksi yang diasumsikan berjalan sebelum dikonfirmasi.

## 11. Pertanyaan yang Perlu Diputuskan Sebelum Implementasi
- Apakah orang tua wajib membuat akun sebelum mengisi formulir?
- Berkas apa saja yang wajib diunggah dan berapa batas ukurannya?
- Apakah ada tes bacaan/jadwal tes dalam alur PPDB?
- Apakah pembayaran infaq termasuk proses PPDB versi pertama?
- Siapa yang boleh mengubah hasil penerimaan dan bagaimana hasil diumumkan?
