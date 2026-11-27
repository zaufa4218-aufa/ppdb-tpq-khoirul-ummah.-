import { Link } from 'react-router-dom'
import './AllPagesHub.css'
import Button from '../../components/Button/Button'
import Badge from '../../components/Badge/Badge'
import {
  IconHome,
  IconInfo,
  IconLock,
  IconUser,
  IconUsers,
  IconClipboard,
  IconUpload,
  IconCheckCircle,
  IconAward,
  IconPrinter,
  IconArrowRight,
  IconMosque,
  IconFileText,
} from '../../components/icons'

const SECTIONS = [
  {
    title: '🌐 1. Modul Publik & Informasi PPDB',
    desc: 'Halaman yang dapat diakses oleh semua pengunjung, calon orang tua santri, dan masyarakat umum.',
    items: [
      {
        title: 'Beranda / Landing Page',
        route: '/',
        fullUrl: 'http://localhost:5173/',
        badge: 'Publik',
        icon: <IconHome size={20} />,
        iconClass: 'hub-icon-public',
        desc: 'Profil TPQ, metode Tilawati, daftar program mengaji, keunggulan, jadwal, dan FAQ.',
      },
      {
        title: 'Informasi, Syarat & Jadwal PPDB',
        route: '/informasi',
        fullUrl: 'http://localhost:5173/informasi',
        badge: 'Publik',
        icon: <IconInfo size={20} />,
        iconClass: 'hub-icon-public',
        desc: 'Rincian jadwal gelombang PPDB, syarat berkas wajib & opsional, alur teknis, dan FAQ.',
      },
      {
        title: 'Halaman Masuk (Login Bebas)',
        route: '/masuk',
        fullUrl: 'http://localhost:5173/masuk',
        badge: 'Autentikasi',
        icon: <IconLock size={20} />,
        iconClass: 'hub-icon-public',
        desc: 'Mode terbuka: semua email dan kata sandi dapat masuk langsung sebagai Orang Tua atau Admin.',
      },
      {
        title: 'Pendaftaran Akun Baru',
        route: '/daftar',
        fullUrl: 'http://localhost:5173/daftar',
        badge: 'Autentikasi',
        icon: <IconUser size={20} />,
        iconClass: 'hub-icon-public',
        desc: 'Pendaftaran akun orang tua/wali baru dengan aktivasi sesi login instan.',
      },
    ],
  },
  {
    title: '👨‍👩‍👧 2. Alur Pendaftaran Orang Tua / Wali',
    desc: 'Alur lengkap pendaftaran santri baru dari sisi orang tua (otomatis aktif tanpa login ulang).',
    items: [
      {
        title: 'Status & Bukti Pendaftaran (Hasil Santri)',
        route: '/portal/status',
        fullUrl: 'http://localhost:5173/portal/status',
        badge: 'Orang Tua',
        icon: <IconCheckCircle size={20} />,
        iconClass: 'hub-icon-parent',
        highlight: true,
        desc: 'Halaman yang kemarin diperbaiki: timeline verifikasi, simulator status, dan cetak tanda terima santri.',
      },
      {
        title: 'Dashboard Orang Tua',
        route: '/portal/dashboard',
        fullUrl: 'http://localhost:5173/portal/dashboard',
        badge: 'Orang Tua',
        icon: <IconHome size={20} />,
        iconClass: 'hub-icon-parent',
        desc: 'Ringkasan progres berkas santri, panduan langkah berikutnya, dan akses cepat form.',
      },
      {
        title: 'Formulir Pendaftaran Calon Santri',
        route: '/portal/pendaftaran',
        fullUrl: 'http://localhost:5173/portal/pendaftaran',
        badge: 'Orang Tua',
        icon: <IconClipboard size={20} />,
        iconClass: 'hub-icon-parent',
        desc: 'Isian biodata santri, data orang tua/wali, pemilihan program tilawah, dan simpan draf.',
      },
      {
        title: 'Unggah Dokumen / Berkas',
        route: '/portal/berkas',
        fullUrl: 'http://localhost:5173/portal/berkas',
        badge: 'Orang Tua',
        icon: <IconUpload size={20} />,
        iconClass: 'hub-icon-parent',
        desc: 'Manajemen unggah Akta Kelahiran, KK, Pasfoto 3x4, KTP Wali, dan pratinjau dokumen.',
      },
    ],
  },
  {
    title: '🛠️ 3. Portal Administrasi & Verifikasi Pengelola TPQ',
    desc: 'Panel kontrol lengkap untuk panitia PPDB TPQ Khoirul Ummah memeriksa, meluluskan, dan merekap data.',
    items: [
      {
        title: 'Rekapitulasi Laporan Siap Cetak',
        route: '/admin/laporan',
        fullUrl: 'http://localhost:5173/admin/laporan',
        badge: 'Admin TPQ',
        icon: <IconPrinter size={20} />,
        iconClass: 'hub-icon-admin',
        desc: 'Tabel rekapitulasi seluruh santri, ringkasan angka kelulusan, dan fungsi print-ready CSS.',
      },
      {
        title: 'Penetapan Hasil Seleksi Kelulusan',
        route: '/admin/hasil',
        fullUrl: 'http://localhost:5173/admin/hasil',
        badge: 'Admin TPQ',
        icon: <IconAward size={20} />,
        iconClass: 'hub-icon-admin',
        desc: 'Keputusan akhir penerimaan santri: Terima / Tolak dengan modal konfirmasi admin.',
      },
      {
        title: 'Antrean Verifikasi Berkas',
        route: '/admin/verifikasi',
        fullUrl: 'http://localhost:5173/admin/verifikasi',
        badge: 'Admin TPQ',
        icon: <IconFileText size={20} />,
        iconClass: 'hub-icon-admin',
        desc: 'Pemeriksaan berkas masuk, verifikasi butir dokumen, dan pemberian catatan perbaikan.',
      },
      {
        title: 'Pengelolaan Seluruh Data Santri',
        route: '/admin/pendaftar',
        fullUrl: 'http://localhost:5173/admin/pendaftar',
        badge: 'Admin TPQ',
        icon: <IconUsers size={20} />,
        iconClass: 'hub-icon-admin',
        desc: 'Tabel master data seluruh santri pendaftar dengan pencarian nama dan filter program.',
      },
      {
        title: 'Dashboard Ringkasan Admin',
        route: '/admin',
        fullUrl: 'http://localhost:5173/admin',
        badge: 'Admin TPQ',
        icon: <IconMosque size={20} />,
        iconClass: 'hub-icon-admin',
        desc: 'Metrik KPI utama pendaftaran: total santri, berkas terverifikasi, diterima, dan butuh revisi.',
      },
    ],
  },
]

export default function AllPagesHub() {
  return (
    <div className="hub-page">
      <div className="container">
        {/* Header */}
        <header className="hub-header">
          <div className="hub-badge">
            <IconCheckCircle size={14} />
            <span>Pusat Navigasi & Direktori Lengkap PPDB</span>
          </div>
          <h1 className="hub-title">Direktori Keseluruhan Halaman Aplikasi</h1>
          <p className="hub-subtitle">
            Halaman ini merangkum seluruh tautan navigasi aplikasi PPDB TPQ Khoirul Ummah.
            Setiap halaman dapat langsung dibuka dan dicoba tanpa hambatan login.
          </p>

          <div className="hub-stats-strip">
            <span className="hub-stat-pill">✨ 8 Modul PRD Lengkap</span>
            <span className="hub-stat-pill">🔗 13 Halaman Aktif</span>
            <span className="hub-stat-pill">⚡ Akses Auto-Demo Aktif</span>
          </div>
        </header>

        {/* Section Groups */}
        {SECTIONS.map((sec, idx) => (
          <section key={idx} className="hub-section">
            <h2 className="hub-section-title">{sec.title}</h2>
            <p className="hub-section-desc">{sec.desc}</p>

            <div className="hub-grid">
              {sec.items.map((item, itemIdx) => (
                <div key={itemIdx} className="hub-card" style={item.highlight ? { borderColor: 'var(--color-primary)', borderWidth: '2px' } : {}}>
                  <div className="hub-card-top">
                    <div className="hub-card-header-row">
                      <div className={`hub-card-icon ${item.iconClass}`}>
                        {item.icon}
                      </div>
                      <Badge variant={item.badge === 'Admin TPQ' ? 'verified' : item.badge === 'Orang Tua' ? 'pending' : 'draft'} size="sm">
                        {item.badge}
                      </Badge>
                    </div>

                    <h3 className="hub-card-title">{item.title}</h3>
                    <code className="hub-card-route">{item.route}</code>
                    <p className="hub-card-desc">{item.desc}</p>
                  </div>

                  <div className="hub-card-action">
                    <Link to={item.route} style={{ width: '100%' }}>
                      <Button
                        variant={item.highlight ? 'primary' : 'secondary'}
                        size="sm"
                        fullWidth
                        rightIcon={<IconArrowRight size={14} />}
                      >
                        Buka Halaman Ini
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
