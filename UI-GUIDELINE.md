# UI-GUIDELINE — PPDB TPQ Khoirul Ummah

**Status:** Draft untuk persetujuan pengguna · **Versi:** 0.1

## 1. Arah Visual
Modern futuristic SaaS yang tetap hangat, tenang, terpercaya, dan sesuai konteks pendidikan Islam. Gunakan ruang kosong yang lega, panel bersih, sudut membulat, garis tipis, bayangan lembut, dan aksen gold secukupnya. Hindari neon berlebihan, ornamen ramai, serta efek kaca yang mengurangi keterbacaan.

## 2. Token Warna
| Token | Hex | Penggunaan |
|---|---|---|
| Sage 700 | `#476B57` | Tombol utama, navigasi aktif, heading aksen |
| Sage 500 | `#78977F` | Ikon, ilustrasi, aksen sekunder |
| Sage 100 | `#E5EDE5` | Latar lembut dan chip |
| Cream 50 | `#FBF8F0` | Latar halaman utama |
| Cream 100 | `#F2EBDD` | Panel sekunder |
| Gold 500 | `#C6A45A` | Aksen, garis penekanan, ikon premium |
| Ink | `#24332B` | Teks utama |
| Muted | `#68756D` | Teks sekunder |
| Border | `#E1E5DC` | Garis pemisah dan border kartu |
| White | `#FFFFFF` | Kartu/formulir |
| Error | `#B54747` | Error validasi |
| Success | `#39765A` | Status berhasil |

Pastikan teks normal memiliki kontras yang memadai; jangan menggunakan gold muda untuk teks kecil di atas cream.

## 3. Tipografi dan Bentuk
- Font UI: `Inter` atau font sans-serif sistem sebagai fallback.
- Heading: tegas, ringkas, hirarki jelas; body 14–16 px; label 12–14 px.
- Radius kartu 16–20 px; input dan tombol 10–12 px.
- Grid desktop 12 kolom; konten utama dibatasi sekitar 1200 px; jarak memakai skala 4/8/12/16/24/32 px.

## 4. Struktur Layar
### Publik
- Header: logo/nama TPQ, navigasi, tombol “Daftar Sekarang”.
- Hero: headline penerimaan santri, deskripsi singkat, CTA, ringkasan periode/jadwal.
- Bagian persyaratan, alur pendaftaran, jadwal, FAQ/pengumuman, kontak, footer.

### Portal Orang Tua
- Header ringkas dengan identitas akun.
- Stepper: Data Santri → Data Wali → Berkas → Tinjau & Kirim.
- Kartu progres, checklist berkas, status pendaftaran, pesan tindakan berikutnya.

### Dashboard Admin
- Sidebar: Ringkasan, Data Pendaftar, Verifikasi, Hasil Penerimaan, Laporan, Pengaturan informasi.
- Header dengan pencarian/akun.
- Kartu statistik ringkas, tabel pendaftar, filter status/periode, panel detail, badge status.

## 5. Komponen dan State
- Button: primary sage, secondary cream, tertiary/ghost, destructive.
- Input, textarea, select, date picker, upload dropzone, checkbox, modal konfirmasi, toast, tabel, pagination, empty state, skeleton.
- Status: Draf (netral), Menunggu verifikasi (gold), Perlu perbaikan (merah lembut), Terverifikasi (sage), Diterima/Tidak diterima (jelas dan berbeda).
- Semua field wajib memiliki label; error muncul dekat field dan menjelaskan cara memperbaiki.
- Tombol memiliki state default, hover, focus-visible, disabled, loading.
- Upload menampilkan nama berkas, ukuran, progress bila tersedia, dan aksi ganti/hapus.

## 6. Responsif
- Mobile-first; pada layar kecil sidebar menjadi drawer, tabel berubah menjadi kartu atau tabel dengan scroll terkontrol, dan CTA utama mudah dijangkau.
- Formulir satu kolom di ponsel, dua kolom pada layar lebar bila sesuai.
- Jangan menyampaikan informasi hanya melalui warna; sertakan teks/ikon.

## 7. Prinsip Konten
- Bahasa Indonesia yang ramah, ringkas, dan tidak menyalahkan pengguna.
- Gunakan istilah konsisten: “calon santri”, “orang tua/wali”, “berkas”, “verifikasi”, “status pendaftaran”.
- Data contoh pada prototipe harus fiktif dan diberi konteks demo.

## 8. Batasan Visual
- Tidak menambah modul di luar delapan modul PRD.
- Tidak menambahkan integrasi eksternal atau mengklaim fungsi backend berjalan.
- Logo, foto, jadwal, dan identitas resmi TPQ menggunakan aset placeholder sampai aset resmi disetujui.
