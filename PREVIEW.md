# Preview Paket PPDB TPQ Khoirul Ummah

Dokumen ini merangkum arsitektur 8 modul sistem informasi Penerimaan Peserta Didik Baru (PPDB) TPQ Khoirul Ummah berbasis web.

## 1. Aplikasi Front-End
- `src/main.jsx`: Entry root aplikasi React 19 + Vite 6.
- `src/app/App.jsx` & `src/app/AppRoutes.jsx`: Pengatur routing halaman dan proteksi autentikasi peran (*role-based*).
- `src/app/AuthContext.jsx`: **Modul 4** — Otentikasi & Manajemen Akun (Role: Orang Tua & Admin, mode terbuka untuk demo).
- `src/features/public/PublicHome.jsx`: **Modul 1** — Beranda Publik (Hero, Profil TPQ, Keunggulan Tilawati, Program, FAQ, CTA).
- `src/features/public/PublicInfo.jsx`: **Modul 1** — Informasi & Persyaratan PPDB (Jadwal Gelombang, Dokumen Wajib/Opsional, Alur Teknis).
- `src/features/public/AllPagesHub.jsx`: Pusat Navigasi & Direktori Keseluruhan Halaman Aplikasi (Master Hub).
- `src/features/registration/ParentDashboard.jsx`: **Modul 4** — Dashboard Progres Pendaftaran Orang Tua.
- `src/features/registration/RegistrationForm.jsx`: **Modul 2** — Formulir Pendaftaran Santri & Orang Tua (Validasi 3 langkah & draf).
- `src/features/registration/UploadFiles.jsx`: **Modul 3** — Unggah Dokumen Berkas (Akta Kelahiran, KK, Pasfoto 3x4, KTP Wali, pratinjau).
- `src/features/registration/ApplicationStatus.jsx`: **Modul 6** — Pelacakan Status Santri, Timeline Verifikasi, Simulator Status, dan Cetak Tanda Terima.
- `src/features/applicants/AdminDashboard.jsx`: **Modul 5** — Dashboard Ringkasan KPI Admin.
- `src/features/applicants/ApplicantList.jsx`: **Modul 5** — Pengelolaan & Pencarian Data Seluruh Santri.
- `src/features/applicants/ApplicantDetail.jsx`: **Modul 5 & 6** — Detail Pendaftar & Catatan Pemeriksaan Verifikator.
- `src/features/verification/VerificationPage.jsx`: **Modul 6** — Antrean Verifikasi Dokumen Masuk.
- `src/features/results/ResultsPage.jsx`: **Modul 7** — Penetapan Keputusan Hasil Seleksi (Terima / Tolak).
- `src/features/reports/ReportsPage.jsx`: **Modul 8** — Laporan & Rekapitulasi Data Santri Siap Cetak (*Print-Ready*).
- `src/data/mockData.js`: Dataset dummy terpadu santri, program, jadwal, profil TPQ, dan akun demo.

## 2. Cara Menjalankan
```bash
npm run dev
```
Buka URL lokal di peramban: `http://localhost:5173`.

Untuk membangun bundle produksi:
```bash
npm run build
```
