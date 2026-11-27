import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './ParentPages.css'
import Card, { CardBody } from '../../components/Card/Card'
import Badge from '../../components/Badge/Badge'
import Button from '../../components/Button/Button'
import Modal from '../../components/Modal/Modal'
import {
  IconUpload,
  IconCheck,
  IconCheckCircle,
  IconTrash,
  IconFileText,
  IconAlertCircle,
  IconArrowRight,
  IconArrowLeft,
  IconEye,
} from '../../components/icons'
import { useRegistration } from './RegistrationContext'
import { REQUIREMENTS } from '../../data/mockData'

const REQUIRED_DOCS = [
  {
    key: 'aktaKelahiran',
    title: 'Akta Kelahiran Santri',
    desc: 'Format PDF atau JPG/PNG, maksimal ukuran berkas 2 MB.',
    wajib: true,
  },
  {
    key: 'kartuKeluarga',
    title: 'Kartu Keluarga (KK)',
    desc: 'Format PDF atau JPG/PNG, pastikan nama calon santri tercantum jelas. Maks 2 MB.',
    wajib: true,
  },
  {
    key: 'pasFoto',
    title: 'Pasfoto Santri (3x4)',
    desc: 'Pasfoto berwarna terbaru berbusana muslim/sopan. Format JPG/PNG, maks 1 MB.',
    wajib: true,
  },
  {
    key: 'ktpWali',
    title: 'KTP Orang Tua / Wali',
    desc: 'Foto KTP Ayah atau Ibu/Wali yang masih berlaku. Format JPG/PNG/PDF, maks 2 MB.',
    wajib: true,
  },
  {
    key: 'domisili',
    title: 'Surat Keterangan Domisili (Opsional)',
    desc: 'Wajib hanya jika alamat domisili saat ini berbeda dengan alamat KK. Format PDF, maks 2 MB.',
    wajib: false,
  },
]

export default function UploadFiles() {
  const navigate = useNavigate()
  const { uploadedFiles, uploadFile, removeFile, submitRegistration, status } = useRegistration()

  const [confirmModal, setConfirmModal] = useState(false)
  const [previewModal, setPreviewModal] = useState(null)
  const [uploadError, setUploadError] = useState('')

  // Hitung berkas wajib yang sudah diunggah
  const wajibCount = REQUIRED_DOCS.filter(d => d.wajib && uploadedFiles[d.key]).length
  const totalWajib = REQUIRED_DOCS.filter(d => d.wajib).length
  const isComplete = wajibCount === totalWajib

  // Simulasi upload file
  const handleSimulateUpload = (key, title) => {
    setUploadError('')
    const simulatedFiles = {
      aktaKelahiran: { name: 'akta_kelahiran_santri.pdf', size: '1.4 MB', uploadedAt: 'Hari ini, baru saja' },
      kartuKeluarga: { name: 'kartu_keluarga_terbaru.pdf', size: '1.9 MB', uploadedAt: 'Hari ini, baru saja' },
      pasFoto: { name: 'pasfoto_santri_3x4.jpg', size: '520 KB', uploadedAt: 'Hari ini, baru saja' },
      ktpWali: { name: 'ktp_ayah_ibu.jpg', size: '780 KB', uploadedAt: 'Hari ini, baru saja' },
      domisili: { name: 'surat_keterangan_domisili.pdf', size: '1.1 MB', uploadedAt: 'Hari ini, baru saja' },
    }

    uploadFile(key, simulatedFiles[key] || {
      name: `berkas_${key}.pdf`,
      size: '1.2 MB',
      uploadedAt: 'Hari ini, baru saja',
    })
  }

  const handleSubmit = () => {
    if (!isComplete) {
      setUploadError('Harap lengkapi semua dokumen berkas wajib sebelum mengirimkan pendaftaran.')
      return
    }
    submitRegistration()
    setConfirmModal(false)
    navigate('/portal/status')
  }

  return (
    <div className="upload-files-page">
      <div className="parent-page-header">
        <h1 className="parent-page-title">Unggah Berkas Persyaratan</h1>
        <p className="parent-page-desc">
          Unggah dokumen administrasi calon santri sesuai dengan format dan ketentuan ukuran yang berlaku.
        </p>
      </div>

      {uploadError && (
        <div className="notice-box fix" role="alert">
          <IconAlertCircle size={20} />
          <div>{uploadError}</div>
        </div>
      )}

      {/* Progress banner */}
      <div className="notice-box" style={{ backgroundColor: isComplete ? 'var(--success-bg)' : 'var(--cream-100)', borderColor: isComplete ? 'var(--success)' : 'var(--cream-200)', marginBottom: 'var(--space-6)' }}>
        <IconCheckCircle size={22} style={{ color: isComplete ? 'var(--success)' : 'var(--color-primary)' }} />
        <div>
          <strong>Status Kelengkapan Berkas: {wajibCount} dari {totalWajib} Dokumen Wajib</strong>
          <p style={{ margin: '2px 0 0', fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>
            {isComplete
              ? 'Seluruh berkas persyaratan wajib telah lengkap diunggah. Anda dapat mengirimkan pendaftaran untuk diverifikasi admin.'
              : 'Silakan unggah dokumen yang masih kosong untuk melanjutkan proses seleksi.'}
          </p>
        </div>
      </div>

      {/* Grid Kartu Dokumen */}
      <div className="upload-grid">
        {REQUIRED_DOCS.map((doc) => {
          const file = uploadedFiles[doc.key]

          return (
            <div key={doc.key} className="upload-card">
              <div>
                <div className="upload-card-header">
                  <div>
                    <h3 className="upload-title">{doc.title}</h3>
                    <p className="upload-hint">{doc.desc}</p>
                  </div>
                  <Badge variant={doc.wajib ? 'pending' : 'draft'} size="sm">
                    {doc.wajib ? 'Wajib' : 'Opsional'}
                  </Badge>
                </div>
              </div>

              {file ? (
                <div>
                  <div className="upload-file-info">
                    <div>
                      <p className="upload-file-name">{file.name}</p>
                      <p className="upload-file-meta">{file.size} • Diunggah: {file.uploadedAt}</p>
                    </div>
                    <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
                      <Button
                        variant="ghost"
                        size="sm"
                        aria-label="Lihat pratinjau"
                        onClick={() => setPreviewModal({ title: doc.title, file })}
                      >
                        <IconEye size={16} />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        aria-label="Hapus file"
                        onClick={() => removeFile(doc.key)}
                      >
                        <IconTrash size={16} style={{ color: 'var(--error)' }} />
                      </Button>
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <div
                    className="upload-dropzone"
                    onClick={() => handleSimulateUpload(doc.key, doc.title)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => { if (e.key === 'Enter') handleSimulateUpload(doc.key, doc.title) }}
                  >
                    <IconUpload size={24} style={{ margin: '0 auto var(--space-2)', color: 'var(--color-primary)' }} />
                    <p style={{ fontSize: 'var(--font-size-sm)', fontWeight: '500', color: 'var(--color-text)' }}>
                      Klik untuk simulasi unggah file
                    </p>
                    <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>
                      Format PDF / JPG / PNG
                    </p>
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Aksi Bawah */}
      <div className="form-actions" style={{ marginTop: 'var(--space-8)' }}>
        <Button variant="ghost" leftIcon={<IconArrowLeft size={16} />} onClick={() => navigate('/portal/pendaftaran')}>
          Kembali ke Formulir
        </Button>
        <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
          <Button variant="secondary" onClick={() => navigate('/portal/status')}>
            Cek Status Pendaftaran
          </Button>
          <Button
            variant="primary"
            disabled={!isComplete}
            onClick={() => setConfirmModal(true)}
            rightIcon={<IconArrowRight size={16} />}
          >
            Kirim Pendaftaran
          </Button>
        </div>
      </div>

      {/* Modal Konfirmasi Pengiriman */}
      <Modal
        isOpen={confirmModal}
        onClose={() => setConfirmModal(false)}
        title="Konfirmasi Pengiriman Pendaftaran"
        footer={
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 'var(--space-3)' }}>
            <Button variant="secondary" onClick={() => setConfirmModal(false)}>
              Batal & Periksa Lagi
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
              Ya, Kirim Sekarang
            </Button>
          </div>
        }
      >
        <div style={{ lineHeight: '1.6' }}>
          <p>
            Pastikan seluruh isian formulir dan dokumen persyaratan yang diunggah sudah benar dan sesuai identitas asli calon santri.
          </p>
          <div style={{ margin: 'var(--space-4) 0', padding: 'var(--space-3)', backgroundColor: 'var(--color-bg)', borderRadius: 'var(--radius-sm)', fontSize: 'var(--font-size-sm)' }}>
            📌 <strong>Setelah dikirim:</strong> Status pendaftaran akan berubah menjadi <strong>&quot;Menunggu Verifikasi&quot;</strong> oleh panitia TPQ Khoirul Ummah.
          </div>
        </div>
      </Modal>

      {/* Modal Simulasi Pratinjau Berkas */}
      <Modal
        isOpen={!!previewModal}
        onClose={() => setPreviewModal(null)}
        title={`Pratinjau: ${previewModal?.title}`}
        footer={
          <Button variant="primary" onClick={() => setPreviewModal(null)}>
            Tutup Pratinjau
          </Button>
        }
      >
        <div style={{ textAlign: 'center', padding: 'var(--space-6) 0' }}>
          <IconFileText size={48} style={{ margin: '0 auto var(--space-3)', color: 'var(--color-primary)' }} />
          <h4 style={{ fontSize: 'var(--font-size-base)', fontWeight: '600' }}>{previewModal?.file.name}</h4>
          <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)', marginTop: '4px' }}>
            Ukuran: {previewModal?.file.size} • Diunggah pada: {previewModal?.file.uploadedAt}
          </p>
          <div style={{ marginTop: 'var(--space-4)', padding: 'var(--space-3)', backgroundColor: 'var(--color-bg)', borderRadius: 'var(--radius-md)', fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>
            📄 Ini adalah simulasi visual berkas dokumen. Pada sistem produksi sesungguhnya, file PDF/gambar akan dirender secara penuh.
          </div>
        </div>
      </Modal>
    </div>
  )
}
