/**
 * mockData.js — Data Demo Fiktif PPDB TPQ Khoirul Ummah
 * ⚠️ PROTOTIPE: Semua data bersifat fiktif. Tidak ada data santri sungguhan.
 */

// ============================================================
// MODUL 1: BERANDA & INFORMASI PPDB
// ============================================================
export const TPQ_PROFILE = {
  nama: 'TPQ Khoirul Ummah',
  tagline: "Membentuk Generasi Qur'ani yang Berakhlak Mulia",
  visi: "Menjadi lembaga pendidikan Al-Qur'an terpercaya yang melahirkan generasi berkarakter Islami, cerdas, dan berakhlak mulia.",
  misi: [
    "Menyelenggarakan pembelajaran Al-Qur'an yang terstruktur, menyenangkan, dan berbasis metode terkini.",
    "Membentuk karakter santri yang berakhlak mulia, disiplin, dan bertanggung jawab.",
    "Membangun kemitraan yang erat antara TPQ, orang tua, dan masyarakat dalam mendidik generasi Qur'ani.",
  ],
  keunggulan: [
    { icon: 'book', label: 'Metode Tilawati', desc: 'Pembelajaran tartil menggunakan metode Tilawati yang terstruktur dan teruji.' },
    { icon: 'users', label: 'Ustadz Berpengalaman', desc: 'Pengajar bersertifikat dengan pengalaman lebih dari 5 tahun di bidang pendidikan Al-Qur\'an.' },
    { icon: 'star', label: 'Lingkungan Islami', desc: 'Suasana belajar yang kondusif, ramah anak, dan berorientasi pada akhlak mulia.' },
    { icon: 'award', label: 'Kurikulum Terpadu', desc: 'Program belajar mencakup tahsin, tahfidz, adab, dan sirah untuk pembentukan karakter holistik.' },
  ],
}

export const PROGRAM_LIST = [
  {
    id: 'tahsin',
    nama: 'Tahsin & Tilawati',
    usia: '5–8 tahun',
    deskripsi: 'Belajar membaca Al-Qur\'an dengan tartil dan benar menggunakan metode Tilawati. Santri diajarkan makharijul huruf, tajwid dasar, dan kelancaran membaca.',
    durasi: '3x seminggu, 60 menit/sesi',
    badge: 'Pemula',
  },
  {
    id: 'tahfidz',
    nama: "Tahfidz Juz 'Amma",
    usia: '7–12 tahun',
    deskripsi: "Program hafalan Juz 30 (Juz 'Amma) secara bertahap dengan metode muraja'ah rutin. Santri dibimbing menghafal dan menjaga hafalan dengan baik.",
    durasi: '4x seminggu, 90 menit/sesi',
    badge: 'Menengah',
  },
  {
    id: 'adab',
    nama: 'Adab & Karakter Islami',
    usia: '6–12 tahun',
    deskripsi: 'Pembentukan akhlak mulia melalui pengajaran adab sehari-hari, kisah teladan, dan sirah Nabawiyah. Dirancang untuk menumbuhkan karakter Islami yang kuat.',
    durasi: '2x seminggu, 60 menit/sesi',
    badge: 'Semua Usia',
  },
]

export const PPDB_SCHEDULE = [
  { id: 1, fase: 'Pengumuman Pembukaan PPDB', tanggal: 'Menunggu konfirmasi TPQ', status: 'pending', current: false },
  { id: 2, fase: 'Pendaftaran Online Dibuka', tanggal: 'Menunggu konfirmasi TPQ', status: 'pending', current: true },
  { id: 3, fase: 'Batas Akhir Pendaftaran', tanggal: 'Menunggu konfirmasi TPQ', status: 'pending', current: false },
  { id: 4, fase: 'Verifikasi Berkas oleh Admin', tanggal: 'Menunggu konfirmasi TPQ', status: 'pending', current: false },
  { id: 5, fase: 'Pengumuman Hasil Penerimaan', tanggal: 'Menunggu konfirmasi TPQ', status: 'pending', current: false },
  { id: 6, fase: 'Daftar Ulang Santri Baru', tanggal: 'Menunggu konfirmasi TPQ', status: 'pending', current: false },
]

export const REQUIREMENTS = {
  umum: [
    'Calon santri berusia 4–12 tahun pada saat pendaftaran.',
    'Belum pernah terdaftar sebagai santri aktif TPQ Khoirul Ummah.',
    'Orang tua/wali bersedia mendampingi proses belajar.',
    'Bersedia mengikuti tata tertib dan aturan TPQ.',
  ],
  dokumen: [
    { nama: 'Akta Kelahiran / Kartu Keluarga', format: 'PDF/JPG', maks: '2 MB', wajib: true },
    { nama: 'Foto Calon Santri (terbaru)', format: 'JPG/PNG', maks: '1 MB', wajib: true },
    { nama: 'KTP Orang Tua/Wali', format: 'PDF/JPG', maks: '2 MB', wajib: true },
    { nama: 'Surat Keterangan Domisili (jika berbeda KK)', format: 'PDF', maks: '2 MB', wajib: false },
  ],
}

export const REGISTRATION_STEPS = [
  { step: 1, label: 'Buat Akun', desc: 'Daftarkan email dan buat kata sandi untuk akun orang tua/wali.' },
  { step: 2, label: 'Isi Formulir', desc: 'Lengkapi data diri calon santri dan data orang tua/wali.' },
  { step: 3, label: 'Unggah Berkas', desc: 'Unggah dokumen yang dipersyaratkan sesuai format dan ukuran yang ditentukan.' },
  { step: 4, label: 'Kirim & Tunggu', desc: 'Tinjau kembali data, kirim pendaftaran, dan pantau status verifikasi.' },
]

export const FAQ_LIST = [
  {
    id: 1,
    q: 'Apakah pendaftaran gratis?',
    a: 'Informasi mengenai biaya pendaftaran dan infaq akan disampaikan oleh pihak TPQ. Hubungi kami untuk konfirmasi lebih lanjut.',
  },
  {
    id: 2,
    q: 'Apakah ada tes masuk?',
    a: 'Kebijakan tes masuk ditentukan oleh pihak TPQ dan akan diinformasikan saat pengumuman PPDB resmi diterbitkan.',
  },
  {
    id: 3,
    q: 'Berapa kuota santri baru?',
    a: 'Kuota per angkatan/kelas menunggu konfirmasi dari pihak TPQ Khoirul Ummah.',
  },
  {
    id: 4,
    q: 'Apakah data saya aman?',
    a: 'Sistem ini adalah prototipe demo. Pada implementasi produksi, data akan dijaga kerahasiaannya sesuai kebijakan privasi yang berlaku. Jangan masukkan data pribadi nyata pada sistem demo ini.',
  },
  {
    id: 5,
    q: 'Bagaimana cara memantau status pendaftaran?',
    a: 'Setelah mendaftar, Anda dapat masuk ke portal orang tua menggunakan akun yang dibuat dan memantau status pendaftaran secara real-time.',
  },
  {
    id: 6,
    q: 'Dokumen apa saja yang perlu disiapkan?',
    a: 'Siapkan akta kelahiran/kartu keluarga, foto calon santri terbaru, dan KTP orang tua/wali. Lihat halaman Informasi PPDB untuk daftar lengkap.',
  },
]

// ============================================================
// MODUL 2–5: DATA PENDAFTAR (Demo Fiktif)
// ============================================================
export const STATUS_LABELS = {
  draft: 'Draf',
  pending: 'Menunggu Verifikasi',
  fix: 'Perlu Perbaikan',
  verified: 'Terverifikasi',
  accepted: 'Diterima',
  rejected: 'Tidak Diterima',
}

export const DEMO_APPLICANTS = [
  {
    id: 'PPD-2026-001',
    namaSantri: 'Ahmad Fauzi Ramadhan',
    namaWali: 'Budi Santoso',
    usia: 7,
    program: 'Tahsin & Tilawati',
    tanggalDaftar: '2026-10-10',
    status: 'verified',
    berkas: { aktaKelahiran: true, foto: true, ktpWali: true, domisili: false },
    catatan: '',
  },
  {
    id: 'PPD-2026-002',
    namaSantri: 'Siti Aisyah Nabila',
    namaWali: 'Dewi Rahayu',
    usia: 9,
    program: "Tahfidz Juz 'Amma",
    tanggalDaftar: '2026-10-11',
    status: 'pending',
    berkas: { aktaKelahiran: true, foto: true, ktpWali: true, domisili: true },
    catatan: '',
  },
  {
    id: 'PPD-2026-003',
    namaSantri: 'Muhammad Hafidz Al-Ghifari',
    namaWali: 'Rizal Maulana',
    usia: 6,
    program: 'Tahsin & Tilawati',
    tanggalDaftar: '2026-10-12',
    status: 'fix',
    berkas: { aktaKelahiran: false, foto: true, ktpWali: true, domisili: false },
    catatan: 'Akta kelahiran belum diunggah. Harap segera melengkapi.',
  },
  {
    id: 'PPD-2026-004',
    namaSantri: 'Zahra Fatimah Azzahra',
    namaWali: 'Hendra Wijaya',
    usia: 8,
    program: 'Adab & Karakter Islami',
    tanggalDaftar: '2026-10-13',
    status: 'accepted',
    berkas: { aktaKelahiran: true, foto: true, ktpWali: true, domisili: false },
    catatan: '',
  },
  {
    id: 'PPD-2026-005',
    namaSantri: 'Ridho Bagas Pratama',
    namaWali: 'Sari Yuliana',
    usia: 10,
    program: "Tahfidz Juz 'Amma",
    tanggalDaftar: '2026-10-14',
    status: 'draft',
    berkas: { aktaKelahiran: false, foto: false, ktpWali: false, domisili: false },
    catatan: '',
  },
  {
    id: 'PPD-2026-006',
    namaSantri: 'Nurul Hidayah Putri',
    namaWali: 'Agus Firmansyah',
    usia: 5,
    program: 'Tahsin & Tilawati',
    tanggalDaftar: '2026-10-15',
    status: 'rejected',
    berkas: { aktaKelahiran: true, foto: true, ktpWali: true, domisili: false },
    catatan: 'Usia tidak memenuhi syarat minimum program yang dipilih.',
  },
  {
    id: 'PPD-2026-007',
    namaSantri: 'Ilham Dwi Saputra',
    namaWali: 'Nina Marlina',
    usia: 11,
    program: 'Adab & Karakter Islami',
    tanggalDaftar: '2026-10-16',
    status: 'verified',
    berkas: { aktaKelahiran: true, foto: true, ktpWali: true, domisili: true },
    catatan: '',
  },
  {
    id: 'PPD-2026-008',
    namaSantri: 'Salwa Qonita Bilqis',
    namaWali: 'Fajar Nugraha',
    usia: 8,
    program: "Tahfidz Juz 'Amma",
    tanggalDaftar: '2026-10-17',
    status: 'accepted',
    berkas: { aktaKelahiran: true, foto: true, ktpWali: true, domisili: false },
    catatan: '',
  },
]

// Demo akun untuk simulasi login
export const DEMO_ACCOUNTS = {
  parent: { email: 'ortu@demo.id', password: 'demo1234', name: 'Budi Santoso', role: 'parent', applicantId: 'PPD-2026-001' },
  admin:  { email: 'admin@demo.id', password: 'admin1234', name: 'Admin TPQ', role: 'admin' },
}

// Statistik ringkasan untuk admin dashboard
export const ADMIN_STATS = {
  totalPendaftar: 8,
  draft: 1,
  menungguVerifikasi: 1,
  perluPerbaikan: 1,
  terverifikasi: 2,
  diterima: 2,
  tidakDiterima: 1,
}
