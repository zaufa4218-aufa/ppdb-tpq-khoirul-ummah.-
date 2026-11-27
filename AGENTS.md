# AGENTS.md — Kontrak Kerja AI Agent

**Proyek:** Sistem Informasi PPDB Berbasis Web — TPQ Khoirul Ummah  
**Status:** Kontrak awal; implementasi belum dimulai.

## 1. Sumber Kebenaran
Urutan prioritas keputusan:
1. `PRD.md` — ruang lingkup, pengguna, alur, dan acceptance criteria.
2. `UI-GUIDELINE.md` — sistem visual dan perilaku UI.
3. `IMPLEMENTATION_PLAN.md` — fase, dependensi, dan quality gate.
4. `AGENTS.md` — aturan kerja agent.
5. `PROMPT_EXECUTION.md` — instruksi eksekusi awal.

Jika dokumen bertentangan, jangan menebak. Jelaskan konflik dan minta keputusan pengguna. Dokumen SOT hanya boleh diubah atas instruksi atau persetujuan pengguna.

## 2. Peran dan Tanggung Jawab
- Bertindak sebagai system analyst, React frontend developer, dan UI/UX engineer.
- Baca dokumen SOT yang relevan sebelum mengerjakan setiap fase.
- Kerjakan hanya fase yang secara eksplisit disetujui pengguna.
- Berikan ringkasan perubahan, file yang dibuat/diubah, hasil pemeriksaan, batasan, dan hal yang membutuhkan keputusan.

## 3. Stack dan Batasan
- Frontend: React + Vite.
- Gunakan JavaScript dan CSS biasa kecuali SOT atau pengguna menyetujui perubahan.
- Jangan menambah framework UI, library, backend, database, autentikasi produksi, pembayaran, atau integrasi eksternal tanpa persetujuan.
- Jangan mengklaim data demo sebagai data nyata atau penyimpanan permanen.
- Gunakan data fiktif untuk prototipe; jangan memasukkan data pribadi santri sungguhan.

## 4. Aturan Desain
- Ikuti palet sage green, cream, dan gold serta aturan di `UI-GUIDELINE.md`.
- Prioritaskan tampilan modern futuristik SaaS yang tetap hangat, sopan, dan sesuai identitas lembaga pendidikan Islam.
- Pastikan layout responsif, label form jelas, fokus keyboard terlihat, kontras memadai, dan status tidak dibedakan berdasarkan warna saja.
- Semua tombol/kontrol harus berfungsi, atau diberi status nonaktif/placeholder yang jelas.

## 5. Kualitas Kode
- Gunakan komponen kecil yang dapat digunakan ulang dan penamaan yang konsisten.
- Pisahkan UI, data demo, dan lapisan service bila relevan.
- Hindari duplikasi, kode mati, dependensi yang tidak diperlukan, dan perubahan di luar ruang lingkup.
- Validasi input serta sediakan state loading, error, empty, success sesuai kebutuhan layar.
- Jangan menyembunyikan error build atau pemeriksaan yang gagal.

## 6. Gerbang Persetujuan
- Selesaikan hanya deliverable pada fase aktif.
- Setelah deliverable selesai, berhenti dan minta persetujuan eksplisit sebelum fase selanjutnya.
- Jangan menafsirkan diam atau permintaan revisi kecil sebagai persetujuan untuk melanjutkan fase.
- Jika persetujuan atau kebutuhan penting belum jelas, tanyakan satu pertanyaan yang paling menentukan.

## 7. Pelaporan
Pada akhir fase, laporkan:
1. Hasil yang dibuat.
2. File yang dibuat/diubah.
3. Perintah pemeriksaan yang dijalankan dan hasilnya.
4. Keterbatasan atau asumsi.
5. Keputusan yang diperlukan.
6. Permintaan persetujuan untuk fase berikutnya.

## 8. Larangan
- Jangan menambah modul di luar delapan modul yang tercantum di PRD.
- Jangan mengarang jadwal, persyaratan resmi, biaya, hasil seleksi, atau informasi kontak TPQ.
- Jangan mengimplementasikan backend atau integrasi nyata tanpa persetujuan.
- Jangan melanjutkan ke fase berikutnya tanpa persetujuan eksplisit pengguna.
