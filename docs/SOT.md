# SOT — Source of Truth
## Rancang Bangun Sistem Informasi PPDB TPQ Khoirul Ummah Berbasis Web

**Versi:** 1.0  
**Status:** Baseline untuk tahap front-end prototype  
**Prinsip:** SOT adalah sumber kebenaran utama. Implementasi tidak boleh menambah ruang lingkup tanpa persetujuan.

## 1. Tujuan Produk
Membangun antarmuka web yang membantu TPQ Khoirul Ummah menyampaikan informasi penerimaan santri baru, menerima pendaftaran online, mengelola berkas, memverifikasi data, menyampaikan status penerimaan, dan menghasilkan laporan PPDB secara transparan dan akuntabel.

## 2. Pengguna dan Hak Akses
1. **Pengunjung / Calon Orang Tua Santri:** melihat profil TPQ, jadwal, persyaratan, program mengaji, mengisi formulir pendaftaran, mengunggah berkas, dan memantau status kelulusan.
2. **Administrator / Pengelola TPQ:** mengelola informasi, data pendaftar, verifikasi berkas, penetapan hasil kelulusan santri, serta rekapitulasi laporan PPDB.

## 3. Ruang Lingkup Fitur (8 Modul)
### Publik & Orang Tua
- **Modul 1: Beranda & Informasi PPDB:** profil TPQ, keunggulan metode Tilawati, jadwal gelombang, persyaratan berkas, FAQ, dan CTA pendaftaran.
- **Modul 2: Pendaftaran Calon Santri:** formulir biodata santri dan data orang tua/wali, validasi 3 tahap, simpan draf lokal.
- **Modul 3: Unggah Berkas & Dokumen:** kelola upload Akta Kelahiran, Kartu Keluarga, Pasfoto 3x4, KTP Wali, indikator kelengkapan, dan pratinjau berkas.
- **Modul 4: Login & Hak Akses:** autentikasi peran Orang Tua dan Admin dengan mode terbuka untuk kemudahan review demo.
- **Modul 6: Status & Hasil Penerimaan (Sisi Orang Tua):** pelacakan status verifikasi berkas, timeline progres, cetak tanda terima pendaftaran, dan simulator status.

### Administrator TPQ
- **Modul 5: Pengelolaan Data Santri:** tabel master seluruh pendaftar, pencarian nama santri/wali, filter program dan status pendaftaran.
- **Modul 6: Verifikasi Pendaftaran:** pemeriksaan detail butir berkas pendaftar, catatan revisi/perbaikan, dan pembaruan status verifikasi.
- **Modul 7: Penetapan Hasil Seleksi:** keputusan akhir kelulusan (Diterima / Tidak Diterima) dengan modal konfirmasi admin.
- **Modul 8: Laporan PPDB:** ringkasan KPI pendaftar, statistik kelulusan, filter status, dan tampilan siap cetak (*print-ready CSS*).

## 4. Navigasi dan Layar
### Admin Shell
- Sidebar: Dashboard Admin, Data Pendaftar, Verifikasi Berkas, Hasil Seleksi, Laporan PPDB.
- Header: judul halaman, info akun admin, tombol keluar.
- Konten: ringkasan KPI, tabel data, aksi verifikasi, modal konfirmasi, dan laporan rekap siap cetak.

### Portal Orang Tua
- Sidebar: Dashboard Orang Tua, Formulir Pendaftaran, Unggah Berkas, Status Pendaftaran.
- Konten: kartu identitas santri, tahapan timeline, tombol cetak bukti pendaftaran, simulator status.

### Halaman Publik
- Hero section ajakan mendaftar santri baru
- Keunggulan metode Tilawati & profil TPQ
- Daftar program santri (Tahsin Anak, Tahfidz Juz 30, Reguler Sore)
- FAQ & informasi jadwal pendaftaran

## 5. Model Data Dummy
- **Applicant:** id, namaSantri, namaWali, nik, tempatLahir, tanggalLahir, jenisKelamin, noWa, program, status, tanggalDaftar, berkas, catatan.
- **Schedule:** gelombang, tanggalMulai, tanggalSelesai, status, kuota.
- **Program:** id, nama, usia, jadwal, deskripsi, kuota.

## 6. Aturan Bisnis Dasar
1. Seluruh kontrol yang terlihat harus berfungsi pada state lokal React.
2. Status pendaftaran standar: Draft, Sedang Diverifikasi (Pending), Perlu Perbaikan (Fix), Terverifikasi (Verified), Diterima (Accepted), Tidak Diterima (Rejected).
3. Data bersifat prototipe front-end tanpa integrasi database permanen.
