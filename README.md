# Sistem Informasi PPDB Berbasis Web — TPQ Khoirul Ummah

Aplikasi sistem informasi Penerimaan Peserta Didik Baru (PPDB) berbasis web modern untuk **TPQ Khoirul Ummah**, dibangun menggunakan **React** dan **Vite** dengan tema desain Islami bernuansa *Sage Green*, *Cream*, dan sentuhan aksen *Gold*.

---

## 🔗 Akses Cepat Link Aplikasi (Localhost)

Aplikasi sedang berjalan lokal pada port `5173`:
- **Beranda:** [http://localhost:5173/](http://localhost:5173/)
- **Status & Bukti Pendaftaran (Orang Tua):** [http://localhost:5173/portal/status](http://localhost:5173/portal/status)
- **Laporan & Rekapitulasi Lengkap (Admin):** [http://localhost:5173/admin/laporan](http://localhost:5173/admin/laporan)
- **Penetapan Hasil Seleksi (Admin):** [http://localhost:5173/admin/hasil](http://localhost:5173/admin/hasil)
- **Daftar Lengkap Tautan:** Lihat file [DAFTAR_LINK.md](file:///c:/Users/MyLaptop/Downloads/ppdb-tpq-khoirul-ummah-sot/DAFTAR_LINK.md)

---

## 🚀 Fitur & Modul Utama (8 Modul PRD)

1. **Beranda & Profil PPDB (`/`):**
   - Hero section, visi misi, keunggulan metode Tilawati, daftar program belajar santri, dan tahapan alur pendaftaran.
2. **Informasi & Persyaratan (`/informasi`):**
   - Jadwal gelombang PPDB, rincian dokumen persyaratan wajib/opsional, alur teknis, dan FAQ interaktif.
3. **Autentikasi & Hak Akses (`/masuk`, `/daftar`):**
   - Simulasi login peran Orang Tua dan Admin dengan tombol *Quick Login* demo.
4. **Dashboard & Alur Orang Tua (`/portal`):**
   - **Formulir Pendaftaran (`/portal/pendaftaran`):** Biodata santri, data orang tua/wali, dan pratinjau dengan validasi interaktif serta simpan draf.
   - **Unggah Berkas (`/portal/berkas`):** Kelola upload Akta Kelahiran, KK, Pasfoto 3x4, KTP Wali, preview dokumen, dan konfirmasi pengiriman.
   - **Status & Timeline Seleksi (`/portal/status`):** Pelacakan status pendaftaran berkas, timeline tahapan verifikasi, cetak tanda terima, dan simulator status demo.
5. **Portal Administrator (`/admin`):**
   - **Dashboard Admin (`/admin`):** KPI metrik ringkasan status pendaftaran secara *real-time*.
   - **Pengelolaan Data Santri (`/admin/pendaftar`):** Tabel pendaftar lengkap dengan pencarian nama/wali dan filter status serta program.
   - **Detail Pendaftar (`/admin/pendaftar/:id`):** Pemeriksaan per butir berkas, catatan verifikator, dan tombol pembaruan status.
   - **Verifikasi Berkas (`/admin/verifikasi`):** Antrean pemeriksaan dokumen santri.
   - **Penetapan Hasil Seleksi (`/admin/hasil`):** Keputusan akhir kelulusan pendaftaran (Diterima / Tidak Diterima) dengan modal konfirmasi.
   - **Laporan & Rekapitulasi (`/admin/laporan`):** Tabel rekap pendaftaran dengan filter status dan fungsi cetak (*print-ready*).

---

## 🛠️ Panduan Menjalankan Aplikasi

Pastikan Node.js telah terpasang di komputer Anda:

```bash
# 1. Masuk ke direktori proyek
cd ppdb-tpq-khoirul-ummah-sot

# 2. Instal seluruh dependensi
npm install

# 3. Jalankan server pengembang lokal
npm run dev

# 4. Bangun bundel produksi (opsional)
npm run build
```

Buka peramban di URL yang ditampilkan (biasanya `http://localhost:5173/`).

---

## 🔑 Akun Demo Prototipe

Gunakan kredensial berikut atau klik tombol **"Isi Cepat Demo"** pada halaman login:

| Peran | Email | Kata Sandi | Halaman Akses |
|---|---|---|---|
| **Orang Tua / Wali** | `ortu@demo.id` | `demo1234` | `/portal` |
| **Admin TPQ** | `admin@demo.id` | `admin1234` | `/admin` |

---

## 📂 Struktur Proyek

```text
src/
├── app/                  # App entry point, routing, AuthContext
├── components/           # Komponen dasar (Badge, Button, Card, Modal, Input, Table, Icons)
├── data/                 # mockData.js (Data awal fiktif santri, akun demo, profil TPQ)
├── features/
│   ├── auth/             # LoginPage, RegisterPage
│   ├── public/           # PublicHome, PublicInfo, PublicLayout
│   ├── registration/     # ParentLayout, ParentDashboard, RegistrationForm, UploadFiles, ApplicationStatus
│   ├── applicants/       # AdminLayout, AdminDashboard, ApplicantList, ApplicantDetail, AdminContext
│   ├── verification/     # VerificationPage
│   ├── results/          # ResultsPage
│   └── reports/          # ReportsPage
└── styles/               # tokens.css, globals.css (Desain sistem Sage Green, Cream, Gold)
```

---

## ⚠️ Batasan Sistem Prototipe

- Seluruh data bersifat simulasi lokal (demo fiktif) dan tidak disimpan ke database permanen.
- Sistem ini tidak terhubung dengan WhatsApp API atau payment gateway riil.
- Informasi tanggal, jadwal resmi, dan pengumuman final bergantung pada kebijakan resmi TPQ Khoirul Ummah.
