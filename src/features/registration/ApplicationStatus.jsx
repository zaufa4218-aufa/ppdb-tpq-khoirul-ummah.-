import { useState } from 'react'
import { Link } from 'react-router-dom'
import './ParentPages.css'
import Card, { CardBody, CardHeader } from '../../components/Card/Card'
import Badge from '../../components/Badge/Badge'
import Button from '../../components/Button/Button'
import Modal from '../../components/Modal/Modal'
import {
  IconCheckCircle,
  IconClock,
  IconAlertCircle,
  IconFileText,
  IconPrinter,
  IconHome,
  IconArrowRight,
} from '../../components/icons'
import { useRegistration } from './RegistrationContext'
import { STATUS_LABELS } from '../../data/mockData'

export default function ApplicationStatus() {
  const { registrationId, formData, status, setStatus, catatanVerifikasi, lastSaved } = useRegistration()
  const [printSuccess, setPrintSuccess] = useState(false)

  const getBadgeVariant = (st) => {
    switch (st) {
      case 'verified': return 'verified'
      case 'accepted': return 'accepted'
      case 'rejected': return 'rejected'
      case 'fix': return 'fix'
      case 'pending': return 'pending'
      default: return 'draft'
    }
  }

  // Tahapan timeline pendaftaran
  const TIMELINE = [
    {
      id: 1,
      title: 'Pembuatan Akun & Formulir Draf',
      desc: 'Orang tua melengkapi data diri santri dan data keluarga.',
      time: '10 Oktober 2026, 14:15 WIB',
      completed: true,
    },
    {
      id: 2,
      title: 'Pengunggahan Berkas Administrasi',
      desc: 'Akta Kelahiran, KK, KTP Wali, dan Pasfoto santri diunggah.',
      time: '10 Oktober 2026, 14:26 WIB',
      completed: true,
    },
    {
      id: 3,
      title: 'Pendaftaran Dikirim & Menunggu Verifikasi',
      desc: 'Berkas masuk ke antrean verifikasi administrasi panitia PPDB.',
      time: status !== 'draft' ? '10 Oktober 2026, 14:30 WIB' : 'Belum dikirim',
      completed: status !== 'draft',
      active: status === 'pending',
    },
    {
      id: 4,
      title: 'Verifikasi Berkas oleh Panitia TPQ',
      desc: status === 'fix'
        ? `Catatan Verifikator: ${catatanVerifikasi || 'Perlu perbaikan berkas'}`
        : 'Pemeriksaan keabsahan dokumen dan kesesuaian data santri.',
      time: ['verified', 'accepted', 'rejected'].includes(status) ? '12 Oktober 2026, 10:00 WIB' : 'Sedang diproses',
      completed: ['verified', 'accepted', 'rejected'].includes(status),
      active: status === 'fix',
      error: status === 'fix',
    },
    {
      id: 5,
      title: 'Pengumuman Hasil Seleksi PPDB',
      desc: status === 'accepted'
        ? 'Selamat! Calon santri telah diterima dan dapat melanjutkan ke tahap daftar ulang.'
        : status === 'rejected'
        ? 'Mohon maaf, calon santri belum memenuhi kuota / kriteria penerimaan tahun ini.'
        : 'Hasil seleksi akhir akan diumumkan sesuai jadwal resmi TPQ.',
      time: ['accepted', 'rejected'].includes(status) ? '15 Oktober 2026, 09:00 WIB' : 'Menunggu jadwal pengumuman',
      completed: ['accepted', 'rejected'].includes(status),
      active: ['accepted', 'rejected'].includes(status),
    },
  ]

  const handleSimulatePrint = () => {
    setPrintSuccess(true)
    setTimeout(() => {
      window.print()
      setPrintSuccess(false)
    }, 400)
  }

  return (
    <div className="application-status-page">
      <div className="parent-page-header">
        <h1 className="parent-page-title">Status Pendaftaran Calon Santri</h1>
        <p className="parent-page-desc">
          Pantau setiap tahapan verifikasi berkas dan pengumuman seleksi secara transparan dan berkala.
        </p>
      </div>

      {/* Simulator Switcher untuk kemudahan review prototipe */}
      <div style={{ backgroundColor: 'var(--cream-100)', padding: 'var(--space-3) var(--space-4)', borderRadius: 'var(--radius-md)', marginBottom: 'var(--space-6)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 'var(--space-2)' }}>
        <span style={{ fontSize: 'var(--font-size-xs)', fontWeight: '600', color: 'var(--color-primary)' }}>
          🛠️ Simulasi Status Prototipe:
        </span>
        <div style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap' }}>
          {['draft', 'pending', 'fix', 'verified', 'accepted', 'rejected'].map(st => (
            <Button
              key={st}
              size="sm"
              variant={status === st ? 'primary' : 'ghost'}
              onClick={() => setStatus(st)}
              style={{ fontSize: 'var(--font-size-xs)', padding: '2px 8px' }}
            >
              {STATUS_LABELS[st]}
            </Button>
          ))}
        </div>
      </div>

      <div className="parent-dash-grid">
        {/* Kolom Kiri: Kartu Identitas & Status Terkini */}
        <div>
          <Card variant="elevated" className={`parent-status-card status-${status}`} style={{ marginBottom: 'var(--space-6)' }}>
            <CardBody>
              <div className="parent-status-badge-row">
                <span className="reg-id-tag">No. Registrasi: {registrationId}</span>
                <Badge variant={getBadgeVariant(status)} size="lg" dot>
                  {STATUS_LABELS[status]}
                </Badge>
              </div>

              <h2 className="parent-santri-name">{formData.namaLengkap}</h2>
              <p className="parent-program-sub">
                NIK: {formData.nik} • TTL: {formData.tempatLahir}, {formData.tanggalLahir}
              </p>

              {status === 'fix' && (
                <div className="notice-box fix" role="alert" style={{ margin: 'var(--space-4) 0 0' }}>
                  <IconAlertCircle size={20} />
                  <div>
                    <strong>Perlu Perbaikan Segera:</strong>
                    <p style={{ margin: '4px 0 0', fontSize: 'var(--font-size-sm)' }}>
                      {catatanVerifikasi || 'Akta kelahiran / dokumen pendukung belum terbaca jelas. Silakan unggah kembali berkas pengganti.'}
                    </p>
                    <div style={{ marginTop: 'var(--space-3)' }}>
                      <Link to="/portal/berkas">
                        <Button variant="destructive" size="sm">Perbaiki Berkas Sekarang</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              )}

              {status === 'accepted' && (
                <div className="notice-box success" role="alert" style={{ margin: 'var(--space-4) 0 0' }}>
                  <IconCheckCircle size={20} />
                  <div>
                    <strong>Pemberitahuan Kelulusan Santri:</strong>
                    <p style={{ margin: '4px 0 0', fontSize: 'var(--font-size-sm)' }}>
                      Alhamdulillah! Ananda <strong>{formData.namaLengkap}</strong> resmi dinyatakan diterima di TPQ Khoirul Ummah. Silakan simpan dan cetak Bukti Tanda Terima Pendaftaran untuk registrasi ulang.
                    </p>
                  </div>
                </div>
              )}

              {status === 'rejected' && (
                <div className="notice-box fix" role="alert" style={{ margin: 'var(--space-4) 0 0' }}>
                  <IconAlertCircle size={20} />
                  <div>
                    <strong>Pengumuman Seleksi:</strong>
                    <p style={{ margin: '4px 0 0', fontSize: 'var(--font-size-sm)' }}>
                      Jazakumullah khairan katsiran atas minat Bapak/Ibu. Berdasarkan hasil seleksi dan keterbatasan kuota kelas, ananda belum dapat kami terima pada periode ini.
                    </p>
                  </div>
                </div>
              )}

              <div style={{ display: 'flex', gap: 'var(--space-3)', marginTop: 'var(--space-6)', flexWrap: 'wrap' }}>
                <Button variant="secondary" size="sm" leftIcon={<IconPrinter size={16} />} onClick={handleSimulatePrint}>
                  Cetak Bukti Pendaftaran
                </Button>
                <Link to="/portal/dashboard">
                  <Button variant="ghost" size="sm" leftIcon={<IconHome size={16} />}>
                    Kembali ke Dashboard
                  </Button>
                </Link>
              </div>
            </CardBody>
          </Card>

          {/* Timeline Progres Pendaftaran */}
          <Card variant="outlined">
            <CardHeader>
              <h3 style={{ fontSize: 'var(--font-size-base)', fontWeight: '600' }}>
                Riwayat & Timeline Tahapan Seleksi
              </h3>
            </CardHeader>
            <CardBody>
              <div className="timeline-container">
                {TIMELINE.map((item) => (
                  <div
                    key={item.id}
                    className={`timeline-item ${item.completed ? 'completed' : ''} ${item.active ? 'active' : ''}`}
                  >
                    <div className="timeline-dot">
                      {item.completed ? '✓' : item.id}
                    </div>
                    <div className="timeline-title">{item.title}</div>
                    <div className="timeline-time">{item.time}</div>
                    <p className="timeline-desc">{item.desc}</p>
                  </div>
                ))}
              </div>
            </CardBody>
          </Card>
        </div>

        {/* Kolom Kanan: Rincian Registrasi */}
        <div>
          <Card variant="default">
            <CardHeader>
              <h3 style={{ fontSize: 'var(--font-size-base)', fontWeight: '600' }}>Ringkasan Data Santri</h3>
            </CardHeader>
            <CardBody>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', fontSize: 'var(--font-size-sm)' }}>
                <div>
                  <div style={{ color: 'var(--color-text-muted)', fontSize: 'var(--font-size-xs)' }}>Nomor Registrasi</div>
                  <div style={{ fontWeight: '600', fontFamily: 'monospace' }}>{registrationId}</div>
                </div>
                <div>
                  <div style={{ color: 'var(--color-text-muted)', fontSize: 'var(--font-size-xs)' }}>Program</div>
                  <div style={{ fontWeight: '600' }}>{formData.program === 'tahfidz' ? "Tahfidz Juz 'Amma" : formData.program === 'adab' ? 'Adab & Karakter Islami' : 'Tahsin & Tilawati'}</div>
                </div>
                <div>
                  <div style={{ color: 'var(--color-text-muted)', fontSize: 'var(--font-size-xs)' }}>Wali / Kontak WhatsApp</div>
                  <div style={{ fontWeight: '600' }}>{formData.namaAyah || formData.namaIbu} ({formData.noWa})</div>
                </div>
                <div>
                  <div style={{ color: 'var(--color-text-muted)', fontSize: 'var(--font-size-xs)' }}>Alamat Domisili</div>
                  <div>{formData.alamat}</div>
                </div>
              </div>

              <div style={{ marginTop: 'var(--space-6)', paddingTop: 'var(--space-4)', borderTop: '1px solid var(--color-border)' }}>
                <Link to="/portal/pendaftaran">
                  <Button variant="ghost" fullWidth size="sm" rightIcon={<IconArrowRight size={16} />}>
                    Buka Formulir Pendaftaran
                  </Button>
                </Link>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  )
}
