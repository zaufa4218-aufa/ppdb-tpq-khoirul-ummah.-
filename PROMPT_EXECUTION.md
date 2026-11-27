# Prompt Execution — Proyek Awal PPDB TPQ Khoirul Ummah

Salin prompt ini ke AI coding agent setelah folder proyek berisi dokumen SOT. Prompt ini hanya meminta **Phase 1: fondasi frontend**, bukan seluruh aplikasi.

---

Kamu adalah AI coding agent yang bertugas mengimplementasikan frontend untuk **Sistem Informasi PPDB Berbasis Web pada TPQ Khoirul Ummah**.

## Wajib dibaca
Sebelum mengubah file, baca seluruh dokumen berikut:
- `AGENTS.md`
- `PRD.md`
- `UI-GUIDELINE.md`
- `IMPLEMENTATION_PLAN.md`

`AGENTS.md` dan dokumen SOT adalah kontrak proyek. Jangan mengarang kebutuhan yang tidak tercantum. Jika ada konflik atau keputusan penting yang belum ditetapkan, berhenti dan tanyakan kepada pengguna.

## Fase aktif
Kerjakan **Phase 1 — Fondasi UI** saja:
1. Siapkan proyek React + Vite jika belum tersedia.
2. Susun struktur folder yang sederhana dan mudah dirawat sesuai `IMPLEMENTATION_PLAN.md`.
3. Buat design tokens CSS untuk sage green, cream, gold, tipografi, spacing, radius, bayangan, dan fokus.
4. Buat komponen dasar yang memang diperlukan untuk fondasi, misalnya Button, Card, Input, Badge, dan layout.
5. Siapkan kerangka aplikasi dan navigasi dasar tanpa mengimplementasikan keseluruhan delapan modul.
6. Gunakan data fiktif saja jika diperlukan untuk demonstrasi.
7. Pastikan layout dasar responsif dan aksesibilitas dasar diperhatikan.

## Batasan
- Teknologi frontend: React + Vite.
- Jangan menambahkan backend, database, autentikasi produksi, pembayaran, WhatsApp API, atau integrasi eksternal.
- Jangan mengerjakan Phase 2 atau fase berikutnya.
- Jangan menambahkan fitur atau modul baru di luar PRD.
- Jangan mengklaim data demo tersimpan secara permanen.
- Hindari dependensi tambahan kecuali benar-benar diperlukan; jelaskan dan minta persetujuan jika berdampak pada stack.
- Jangan mengganti atau menulis ulang dokumen SOT tanpa instruksi.

## Validasi
Jalankan pemeriksaan yang tersedia, minimal build Vite bila package dan dependensi tersedia. Laporkan perintah dan hasil sebenarnya. Jangan mengklaim pemeriksaan lulus jika tidak dijalankan.

## Format laporan akhir
Laporkan secara ringkas:
1. Ringkasan hasil Phase 1.
2. Struktur/file yang dibuat atau diubah.
3. Cara menjalankan proyek.
4. Pemeriksaan yang dijalankan dan hasilnya.
5. Batasan, asumsi, serta keputusan yang masih diperlukan.
6. Minta persetujuan pengguna sebelum mulai Phase 2.

**Mulai dengan memeriksa isi folder dan dokumen SOT. Implementasikan Phase 1 saja, lalu berhenti pada approval gate.**

---
