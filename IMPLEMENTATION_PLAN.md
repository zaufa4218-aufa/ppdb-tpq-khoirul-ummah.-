# IMPLEMENTATION_PLAN — PPDB TPQ Khoirul Ummah

**Status:** Selesai Diimplementasikan (Fase 0 – Fase 5) · **Versi:** 1.0
 
## 1. Prinsip Eksekusi
- SOT menjadi sumber kebenaran; jangan menambah fitur di luar PRD.
- Frontend menggunakan React + Vite.
- Setiap fase berhenti pada checkpoint dan meminta persetujuan pengguna sebelum melanjutkan.
- Backend, database, autentikasi nyata, pembayaran, dan notifikasi eksternal tidak boleh dianggap tersedia tanpa keputusan eksplisit.

## 2. Tahapan yang Diusulkan
| Fase | Hasil | Checklist selesai | Gate |
|---|---|---|---|
| 0 — SOT | PRD, UI-GUIDELINE, IMPLEMENTATION_PLAN | Dokumen konsisten dan disetujui | Persetujuan SOT |
| 1 — Fondasi UI | Setup React/Vite, struktur folder, token CSS, routing/kerangka navigasi | App berjalan, lint/build berhasil bila tooling tersedia | Persetujuan fondasi |
| 2 — UI Publik | Beranda, informasi, persyaratan, jadwal | Responsif, CTA dan navigasi jelas | Persetujuan UI publik |
| 3 — Alur Orang Tua | Login/daftar UI, formulir, upload, status | Validasi frontend dan state demo konsisten | Persetujuan alur orang tua |
| 4 — Portal Admin | Tabel pendaftar, detail, verifikasi, hasil, laporan | Filter dan interaksi prototipe berjalan | Persetujuan portal admin |
| 5 — QA & Handover | Uji responsif, aksesibilitas dasar, README, daftar batasan | Tidak ada error kritis; semua batasan didokumentasikan | Persetujuan akhir |

## 3. Struktur Frontend yang Diusulkan
```text
src/
  app/          # entry, layout, route configuration
  components/   # button, input, badge, card, modal, table
  features/
    public/     # beranda dan informasi PPDB
    registration/ # formulir dan unggah berkas
    auth/       # layar login dan hak akses demo
    applicants/ # pengelolaan data pendaftar
    verification/ # verifikasi pendaftaran
    results/    # status dan hasil
    reports/    # laporan
  data/         # data demo lokal yang jelas diberi label
  styles/       # tokens, globals, responsive rules
```

Struktur ini usulan awal dan boleh disederhanakan bila proyek tetap mudah dirawat. Jangan memasang library tambahan tanpa kebutuhan dan persetujuan.

## 4. Urutan Prioritas UI
1. Design tokens dan komponen dasar.
2. Layout publik dan navigasi.
3. Dashboard orang tua dan alur pendaftaran.
4. Dashboard admin serta tabel/filter.
5. Status verifikasi, hasil, dan laporan.
6. Responsif, aksesibilitas, QA, dan dokumentasi.

## 5. Strategi Data pada Fase Frontend
- Gunakan data demo lokal dengan identitas fiktif.
- Jelaskan bahwa data tidak tersimpan secara permanen jika belum ada backend.
- Pisahkan service/data layer agar API dapat dihubungkan kemudian.
- Jangan menyimpan kata sandi atau data pribadi nyata di localStorage.

## 6. Quality Gate
- Semua delapan modul tercakup sesuai PRD.
- Konsistensi warna, tipografi, status, spacing, dan komponen sesuai UI-GUIDELINE.
- Semua kontrol yang terlihat memiliki aksi atau ditandai sebagai nonaktif/placeholder.
- Validasi formulir, error state, empty state, loading state, dan konfirmasi tindakan penting dirancang.
- Layout diuji pada ukuran mobile, tablet, dan desktop.
- Build/lint dijalankan bila tersedia; masalah yang belum selesai dilaporkan secara eksplisit.

## 7. Risiko dan Ketergantungan
- Informasi resmi jadwal, syarat, dokumen, kontak, dan aturan penerimaan menunggu konfirmasi TPQ.
- Penyimpanan data dan autentikasi produksi memerlukan backend dan keputusan keamanan terpisah.
- Pengunggahan berkas produksi membutuhkan batas tipe/ukuran, penyimpanan aman, dan kontrol akses.
- Integrasi WhatsApp, pembayaran infaq, atau tes bacaan tidak masuk implementasi kecuali disetujui sebagai perubahan ruang lingkup.

## 8. Keputusan yang Diminta pada Gate SOT
Setujui atau minta revisi pada: ruang lingkup delapan modul, peran pengguna, palet warna, struktur layar, dan batasan frontend. Setelah disetujui, fase berikutnya adalah menyiapkan kontrak `AGENTS.md` dan prompt eksekusi awal sesuai permintaan pengguna; implementasi aplikasi tetap menunggu persetujuan tersendiri.
