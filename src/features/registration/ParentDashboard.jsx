import { Link } from 'react-router-dom'
import './ParentPages.css'
import Card, { CardBody, CardHeader } from '../../components/Card/Card'
import Badge from '../../components/Badge/Badge'
import Button from '../../components/Button/Button'
import {
  IconClipboard,
  IconUpload,
  IconCheckCircle,
  IconAlertCircle,
  IconClock,
  IconArrowRight,
  IconUser,
  IconFileText,
} from '../../components/icons'
import { useRegistration } from './RegistrationContext'
import { STATUS_LABELS } from '../../data/mockData'

export default function ParentDashboard() {
  const { registrationId, formData, uploadedFiles, status, catatanVerifikasi, lastSaved } = useRegistration()

  const filesCount = Object.keys(uploadedFiles).length
  const totalFilesReq = 4
  const filesPercentage = Math.round((filesCount / totalFilesReq) * 100)

  // Status mapping badge variant
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

  return (
    <div className="parent-dashboard-page">
      <div className="parent-page-header">
        <h1 className="parent-page-title">Dashboard Orang Tua / Wali</h1>
        <p className="parent-page-desc">
          Pantau progres pengisian data, kelengkapan dokumen berkas, dan status verifikasi calon santri baru.
        </p>
      </div>

      {status === 'fix' && (
        <div className="notice-box fix" role="alert">
          <IconAlertCircle size={22} />
          <div>
            <strong>Perhatian: Berkas / Data Perlu Perbaikan</strong>
            <p style={{ margin: '4px 0 0', fontSize: 'var(--font-size-sm)' }}>
              {catatanVerifikasi || 'Admin meminta koreksi pada berkas atau data yang dikirim. Silakan cek menu Unggah Berkas.'}
            </p>
          </div>
        </div>
      )}

      {status === 'accepted' && (
        <div className="notice-box success" role="alert">
          <IconCheckCircle size={22} />
          <div>
            <strong>Alhamdulillah! Calon Santri Dinyatakan Diterima</strong>
            <p style={{ margin: '4px 0 0', fontSize: 'var(--font-size-sm)' }}>
              Selamat, calon santri telah lolos tahap seleksi PPDB TPQ Khoirul Ummah. Silakan pantau pengumuman daftar ulang.
            </p>
          </div>
        </div>
      )}

      <div className="parent-dash-grid">
        {/* Kartu Status Pendaftaran Utama */}
        <Card variant="elevated" className={`parent-status-card status-${status}`}>
          <CardBody>
            <div className="parent-status-badge-row">
              <span className="reg-id-tag">No. Registrasi: {registrationId}</span>
              <Badge variant={getBadgeVariant(status)} dot>
                {STATUS_LABELS[status] || status}
              </Badge>
            </div>

            <h2 className="parent-santri-name">{formData.namaLengkap || 'Nama Calon Santri Belum Diisi'}</h2>
            <p className="parent-program-sub">
              Pilihan Program: <strong>{formData.program === 'tahfidz' ? "Tahfidz Juz 'Amma" : formData.program === 'adab' ? 'Adab & Karakter Islami' : 'Tahsin & Tilawati'}</strong>
            </p>

            <div className="progress-list">
              <div className="progress-item">
                <div className="progress-item-left">
                  <div className="progress-item-icon done">
                    <IconCheckCircle size={16} />
                  </div>
                  <div>
                    <p className="progress-item-title">Formulir Identitas Santri & Orang Tua</p>
                    <p className="progress-item-sub">Terakhir disimpan: {lastSaved}</p>
                  </div>
                </div>
                <Link to="/portal/pendaftaran">
                  <Button variant="ghost" size="sm">Ubah</Button>
                </Link>
              </div>

              <div className="progress-item">
                <div className="progress-item-left">
                  <div className={`progress-item-icon ${filesCount >= 3 ? 'done' : 'warning'}`}>
                    {filesCount >= 3 ? <IconCheckCircle size={16} /> : <IconAlertCircle size={16} />}
                  </div>
                  <div>
                    <p className="progress-item-title">Unggah Dokumen Berkas Persyaratan</p>
                    <p className="progress-item-sub">{filesCount} dari {totalFilesReq} berkas terunggah ({filesPercentage}%)</p>
                  </div>
                </div>
                <Link to="/portal/berkas">
                  <Button variant="ghost" size="sm">Kelola</Button>
                </Link>
              </div>

              <div className="progress-item">
                <div className="progress-item-left">
                  <div className="progress-item-icon done">
                    <IconClock size={16} />
                  </div>
                  <div>
                    <p className="progress-item-title">Tahapan Status & Hasil Seleksi</p>
                    <p className="progress-item-sub">Status terkini: {STATUS_LABELS[status]}</p>
                  </div>
                </div>
                <Link to="/portal/status">
                  <Button variant="ghost" size="sm">Detail</Button>
                </Link>
              </div>
            </div>
          </CardBody>
        </Card>

        {/* Akses Cepat / Ringkasan Panduan */}
        <div>
          <Card variant="outlined">
            <CardHeader>
              <h3 style={{ fontSize: 'var(--font-size-base)', fontWeight: '600' }}>Tindakan Cepat</h3>
            </CardHeader>
            <CardBody>
              <div className="quick-action-list">
                <Link to="/portal/pendaftaran" className="quick-action-card">
                  <div className="quick-action-icon">
                    <IconClipboard size={20} />
                  </div>
                  <div>
                    <div className="quick-action-title">Lengkapi Formulir</div>
                    <div className="quick-action-desc">Periksa kelengkapan data santri & wali</div>
                  </div>
                  <IconArrowRight size={16} style={{ marginLeft: 'auto', color: 'var(--color-text-muted)' }} />
                </Link>

                <Link to="/portal/berkas" className="quick-action-card">
                  <div className="quick-action-icon">
                    <IconUpload size={20} />
                  </div>
                  <div>
                    <div className="quick-action-title">Unggah Berkas</div>
                    <div className="quick-action-desc">KK, Akta Lahir, Pasfoto, KTP Wali</div>
                  </div>
                  <IconArrowRight size={16} style={{ marginLeft: 'auto', color: 'var(--color-text-muted)' }} />
                </Link>

                <Link to="/portal/status" className="quick-action-card">
                  <div className="quick-action-icon">
                    <IconCheckCircle size={20} />
                  </div>
                  <div>
                    <div className="quick-action-title">Cek Riwayat & Status</div>
                    <div className="quick-action-desc">Timeline verifikasi admin & hasil</div>
                  </div>
                  <IconArrowRight size={16} style={{ marginLeft: 'auto', color: 'var(--color-text-muted)' }} />
                </Link>
              </div>

              <div style={{ marginTop: 'var(--space-5)', padding: 'var(--space-3)', backgroundColor: 'var(--color-bg)', borderRadius: 'var(--radius-sm)', fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', lineHeight: '1.5' }}>
                💡 <strong>Informasi Bantuan:</strong> Jika ada kendala saat pendaftaran, hubungi sekretariat TPQ Khoirul Ummah pada jam kerja santri.
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  )
}
