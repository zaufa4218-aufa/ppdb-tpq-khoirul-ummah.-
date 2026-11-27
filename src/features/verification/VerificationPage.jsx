import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../applicants/AdminPages.css'
import Card, { CardBody } from '../../components/Card/Card'
import Badge from '../../components/Badge/Badge'
import Button from '../../components/Button/Button'
import Table from '../../components/Table/Table'
import { IconCheckCircle, IconEye, IconAlertCircle } from '../../components/icons'
import { useAdmin } from '../applicants/AdminContext'
import { STATUS_LABELS } from '../../data/mockData'

export default function VerificationPage() {
  const { applicants } = useAdmin()

  // Filter pendaftar yang membutuhkan tindakan verifikasi (pending & fix)
  const [activeTab, setActiveTab] = useState('pending') // 'pending' | 'fix' | 'all'

  const queue = applicants.filter(app => {
    if (activeTab === 'pending') return app.status === 'pending'
    if (activeTab === 'fix') return app.status === 'fix'
    return app.status === 'pending' || app.status === 'fix' || app.status === 'verified'
  })

  const columns = [
    { key: 'id', label: 'No. Reg', width: '130px', render: (val) => <span style={{ fontFamily: 'monospace', fontWeight: '600' }}>{val}</span> },
    { key: 'namaSantri', label: 'Nama Calon Santri', render: (val, row) => <div><strong>{val}</strong><div style={{ fontSize: '11px', color: 'var(--color-text-muted)' }}>Wali: {row.namaWali}</div></div> },
    { key: 'program', label: 'Program' },
    {
      key: 'berkas',
      label: 'Kelengkapan Berkas',
      render: (berkas) => {
        const count = Object.values(berkas || {}).filter(Boolean).length
        return (
          <span style={{ fontSize: 'var(--font-size-xs)' }}>
            {count}/4 berkas terpenuhi
          </span>
        )
      },
    },
    {
      key: 'status',
      label: 'Status Saat Ini',
      render: (val) => <Badge variant={val} size="sm" dot>{STATUS_LABELS[val] || val}</Badge>,
    },
    {
      key: 'actions',
      label: 'Aksi Verifikasi',
      width: '130px',
      render: (_, row) => (
        <Link to={`/admin/pendaftar/${row.id}`}>
          <Button variant="primary" size="sm">
            Periksa Berkas
          </Button>
        </Link>
      ),
    },
  ]

  return (
    <div className="verification-page">
      <div className="parent-page-header">
        <h1 className="parent-page-title">Verifikasi Berkas Pendaftaran</h1>
        <p className="parent-page-desc">
          Antrean verifikasi dokumen administrasi calon santri yang dikirim orang tua/wali.
        </p>
      </div>

      {/* Tabs Filter Antrean */}
      <div className="form-step-tabs" style={{ marginBottom: 'var(--space-4)' }}>
        <button
          type="button"
          className={`form-step-btn ${activeTab === 'pending' ? 'active' : ''}`}
          onClick={() => setActiveTab('pending')}
        >
          <span>Menunggu Verifikasi</span>
        </button>
        <button
          type="button"
          className={`form-step-btn ${activeTab === 'fix' ? 'active' : ''}`}
          onClick={() => setActiveTab('fix')}
        >
          <span>Perlu Perbaikan Berkas</span>
        </button>
        <button
          type="button"
          className={`form-step-btn ${activeTab === 'all' ? 'active' : ''}`}
          onClick={() => setActiveTab('all')}
        >
          <span>Semua Antrean Berkas</span>
        </button>
      </div>

      <Card variant="default">
        <CardBody style={{ padding: 0 }}>
          <Table
            columns={columns}
            data={queue}
            emptyMessage="Tidak ada antrean pendaftar pada kategori ini."
          />
        </CardBody>
      </Card>
    </div>
  )
}
