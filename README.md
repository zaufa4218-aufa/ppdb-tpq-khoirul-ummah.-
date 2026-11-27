# PPDB TPQ Khoirul Ummah — Management Platform

Prototype front-end untuk **Rancang Bangun Sistem Informasi Penerimaan Peserta Didik Baru (PPDB) TPQ Khoirul Ummah Berbasis Web** dengan struktur 8 modul terpadu.

## Teknologi
- **Framework**: React 19 + Vite 6
- **Styling**: CSS Tokens (Palet Sage Green, Cream, Gold) & Modern Flexbox/Grid
- **Ikonografi**: SVG React Icons Modern
- **Routing**: React Router v7
- **Data**: State reaktif lokal dengan dataset dummy terpadu (`src/data/mockData.js`)

## Cara Menjalankan Project
Pastikan Node.js versi LTS sudah terpasang.

```bash
# Instal seluruh dependensi
npm install

# Menjalankan server development
npm run dev

# Membangun bundle produksi
npm run build

# Meninjau hasil build produksi
npm run preview
```

Buka alamat lokal di browser: `http://localhost:5173`.

---

## 8 Modul Utama Sistem

1. **Modul 1: Beranda & Informasi PPDB (Landing Page)**
   - Profil TPQ Khoirul Ummah, visi-misi pendidikan Qur'ani, dan keunggulan metode Tilawati.
   - Katalog program belajar santri (Tahsin Anak, Tahfidz Juz 30, Reguler Sore).
   - Rincian jadwal gelombang PPDB, alur pendaftaran, dokumen persyaratan wajib/opsional, dan FAQ interaktif.

2. **Modul 2: Pendaftaran Calon Santri (Formulir Terpadu)**
   - Formulir pendaftaran multi-langkah: Biodata Santri, Data Orang Tua/Wali, dan Pratinjau Isian.
   - Validasi interaktif (NIK 16 digit, nomor WhatsApp aktif, format tanggal lahir).
   - Fitur simpan draf lokal otomatis.

3. **Modul 3: Unggah Berkas & Dokumen Persyaratan**
   - Manajemen upload Akta Kelahiran, Kartu Keluarga (KK), Pasfoto 3x4 berwarna, dan KTP Orang Tua/Wali.
   - Validasi tipe berkas (PDF, JPG, PNG) dan batas ukuran berkas (maksimal 2 MB).
   - Modal pratinjau dokumen dan konfirmasi kirim berkas.

4. **Modul 4: Autentikasi & Portal Orang Tua**
   - Halaman masuk dan pendaftaran akun orang tua/wali santri.
   - **Mode Terbuka**: Mendukung login bebas dengan akun apa saja untuk kenyamanan pengujian demo.
   - Dashboard orang tua untuk memantau ringkasan progres pendaftaran ananda.

5. **Modul 5: Pengelolaan Data Santri (Master Data Admin)**
   - Tabel master pendaftar lengkap dengan pencarian nama santri/wali secara instan.
   - Filter berdasarkan status verifikasi dan pilihan program mengaji.
   - Halaman detail biodata santri dan riwayat pendaftaran.

6. **Modul 6: Verifikasi Berkas Pendaftaran**
   - Antrean pemeriksaan dokumen calon santri oleh panitia verifikator TPQ.
   - Pemeriksaan per butir berkas dan fitur pemberian catatan revisi jika dokumen belum jelas.
   - Pelacakan status pendaftaran dan timeline tahapan seleksi transparan dari sisi orang tua.

7. **Modul 7: Penetapan Hasil Seleksi Kelulusan**
   - Keputusan akhir penerimaan santri: **Diterima** atau **Tidak Diterima**.
   - Modal konfirmasi penetapan kelulusan untuk mencegah kesalahan input.
   - Fitur cetak bukti tanda terima resmi pendaftaran untuk santri yang diterima.

8. **Modul 8: Laporan & Rekapitulasi PPDB (Akuntabilitas)**
   - Ringkasan KPI metrik pendaftar secara *real-time*.
   - Tabel rekapitulasi data pendaftar per gelombang dengan filter status.
   - Tata letak siap cetak (*print-ready CSS*) untuk laporan fisik panitia.

---

## Batasan Prototipe Front-end
- Data disimpan pada state React dan memori lokal selama sesi aktif.
- Integrasi backend nyata, database SQL, WhatsApp Gateway API riil, dan payment gateway infaq belum terpasang (tahap front-end prototype).
- Seluruh informasi dan data santri bersifat simulasi untuk demonstrasi sistem.

---
© 2026 TPQ Khoirul Ummah · PPDB Management Platform
