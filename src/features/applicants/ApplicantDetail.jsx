import { useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import './AdminPages.css'
import Card, { CardBody, CardHeader } from '../../components/Card/Card'
import Badge from '../../components/Badge/Badge'
import Button from '../../components/Button/Button'
import Modal from '../../components/Modal/Modal'
import { Textarea } from '../../components/Input/Input'
import {
  IconArrowLeft,
  IconCheck,
  IconCheckCircle,
  IconAlertCircle,
  IconFileText,
  IconEye,
  IconX,
} from '../../components/icons'
import { useAdmin } from './AdminContext'
import { STATUS_LABELS } from '../../data/mockData'

export default function ApplicantDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { applicants, updateApplicantStatus, toggleBerkas } = useAdmin()

  const applicant = applicants.find(a => a.id === id)

  const [catatan, setCatatan] = useState(applicant?.catatan || '')
  const [modalAction, setModalAction] = useState(null) // 'verified' | 'fix' | 'accepted' | 'rejected'
  const [toast, setToast] = useState('')

  if (!applicant) {
    return (
      <div>
        <p>Data pendaftar tidak ditemukan.</p>
        <Link to="/admin/pendaftar">
          <Button variant="ghost">Kembali ke Daftar</Button>
        </Link>
      </div>
    )
  }

  const handleApplyStatus = (statusToApply) => {
    updateApplicantStatus(applicant.id, statusToApply, catatan)
    setModalAction(null)
    setToast(`Status berhasil diperbarui menjadi "${STATUS_LABELS[statusToApply]}".`)
    setTimeout(() => setToast(''), 3000)
  }

  const BERKAS_KEYS = [
    { key: 'aktaKelahiran', label: 'Akta Kelahiran Santri' },
    { key: 'foto', label: 'Pasfoto Santri 3x4' },
    { key: 'ktpWali', label: 'KTP Orang Tua / Wali' },
    { key: 'domisili', label: 'Surat Domisili (Bila beda KK)' },
  ]

  return (
    <div className="applicant-detail-page">
      <div style={{ marginBottom: 'var(--space-4)' }}>
        <Button variant="ghost" size="sm" leftIcon={<IconArrowLeft size={16} />} onClick={() => navigate('/admin/pendaftar')}>
          Kembali ke Data Pendaftar
        </Button>
      </div>

      {toast && (
        <div className="notice-box success" role="alert" style={{ marginBottom: 'var(--space-4)' }}>
          <IconCheck size={20} />
          <div>{toast}</div>
        </div>
      )}

      {/* Header Info */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 'var(--space-4)', marginBottom: 'var(--space-6)' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
            <h1 className="parent-page-title" style={{ margin: 0 }}>{applicant.namaSantri}</h1>
            <Badge variant={applicant.status} size="lg" dot>
              {STATUS_LABELS[applicant.status] || applicant.status}
            </Badge>
          </div>
          <p className="parent-page-desc" style={{ marginTop: '4px' }}>
            No. Registrasi: <strong style={{ fontFamily: 'monospace' }}>{applicant.id}</strong> • Tanggal Masuk: {applicant.tanggalDaftar}
          </p>
        </div>

        {/* Action Controls */}
        <div style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap' }}>
          <Button
            variant="secondary"
            size="sm"
            onClick={() => setModalAction('fix')}
          >
            Minta Perbaikan
          </Button>

          <Button
            variant="primary"
            size="sm"
            onClick={() => setModalAction('verified')}
          >
            Verifikasi Berkas
          </Button>

          <Button
            variant="secondary"
            size="sm"
            style={{ backgroundColor: 'var(--success-bg)', color: 'var(--success)', borderColor: 'var(--success)' }}
            onClick={() => setModalAction('accepted')}
          >
            Terima Santri
          </Button>

          <Button
            variant="destructive"
            size="sm"
            onClick={() => setModalAction('rejected')}
          >
            Tolak
          </Button>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'var(--space-6)' }}>
        {/* Kolom 1: Biodata Santri & Wali */}
        <Card variant="default">
          <CardHeader>
            <h2 style={{ fontSize: 'var(--font-size-base)', fontWeight: '600' }}>Biodata Pendaftar</h2>
          </CardHeader>
          <CardBody>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', fontSize: 'var(--font-size-sm)' }}>
              <div>
                <span style={{ color: 'var(--color-text-muted)' }}>Nama Lengkap:</span>
                <div><strong>{applicant.namaSantri}</strong></div>
              </div>
              <div>
                <span style={{ color: 'var(--color-text-muted)' }}>Usia:</span>
                <div>{applicant.usia} tahun</div>
              </div>
              <div>
                <span style={{ color: 'var(--color-text-muted)' }}>Program Pilihan:</span>
                <div><strong>{applicant.program}</strong></div>
              </div>
              <div>
                <span style={{ color: 'var(--color-text-muted)' }}>Nama Wali / Penanggung Jawab:</span>
                <div>{applicant.namaWali}</div>
              </div>
              <div>
                <span style={{ color: 'var(--color-text-muted)' }}>Catatan Verifikator:</span>
                <div style={{ padding: 'var(--space-2) var(--space-3)', backgroundColor: 'var(--color-bg)', borderRadius: 'var(--radius-sm)', marginTop: '4px' }}>
                  {applicant.catatan || 'Belum ada catatan verifikator.'}
                </div>
              </div>
            </div>
          </CardBody>
        </Card>

        {/* Kolom 2: Kelengkapan Berkas */}
        <Card variant="default">
          <CardHeader>
            <h2 style={{ fontSize: 'var(--font-size-base)', fontWeight: '600' }}>Kelengkapan Berkas Persyaratan</h2>
          </CardHeader>
          <CardBody>
            <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', marginBottom: 'var(--space-4)' }}>
              Klik tombol centang untuk memverifikasi atau menandai berkas belum lengkap.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              {BERKAS_KEYS.map((b) => {
                const isUploaded = !!applicant.berkas?.[b.key]
                return (
                  <div
                    key={b.key}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: 'var(--space-3)',
                      backgroundColor: 'var(--color-bg)',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--color-border)',
                    }}
                  >
                    <div>
                      <p style={{ fontSize: 'var(--font-size-sm)', fontWeight: '500' }}>{b.label}</p>
                      <p style={{ fontSize: 'var(--font-size-xs)', color: isUploaded ? 'var(--success)' : 'var(--error)' }}>
                        {isUploaded ? '✓ Berkas Terlampir' : '✕ Belum Terlampir'}
                      </p>
                    </div>

                    <Button
                      variant={isUploaded ? 'secondary' : 'primary'}
                      size="sm"
                      onClick={() => toggleBerkas(applicant.id, b.key)}
                    >
                      {isUploaded ? 'Tandai Kurang' : 'Tandai Lengkap'}
                    </Button>
                  </div>
                )
              })}
            </div>
          </CardBody>
        </Card>
      </div>

      {/* Modal Aksi Update Status */}
      <Modal
        isOpen={!!modalAction}
        onClose={() => setModalAction(null)}
        title={`Konfirmasi Pembaruan Status: ${STATUS_LABELS[modalAction] || ''}`}
        footer={
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 'var(--space-3)' }}>
            <Button variant="ghost" onClick={() => setModalAction(null)}>
              Batal
            </Button>
            <Button
              variant={modalAction === 'rejected' ? 'destructive' : 'primary'}
              onClick={() => handleApplyStatus(modalAction)}
            >
              Simpan Perubahan
            </Button>
          </div>
        }
      >
        <div>
          <p style={{ fontSize: 'var(--font-size-sm)', marginBottom: 'var(--space-4)' }}>
            Anda akan mengubah status santri <strong>{applicant.namaSantri}</strong> menjadi <strong>&quot;{STATUS_LABELS[modalAction]}&quot;</strong>.
          </p>

          <Textarea
            id="catatan"
            label="Catatan / Pesan untuk Orang Tua (Opsional)"
            placeholder="Contoh: Akta belum terlampir, harap unggah ulang di portal pendaftaran."
            value={catatan}
            onChange={(e) => setCatatan(e.target.value)}
            rows={3}
          />
        </div>
      </Modal>
    </div>
  )
}
