import { Link } from 'react-router-dom'
import './AdminPages.css'
import Card, { CardBody, CardHeader } from '../../components/Card/Card'
import Badge from '../../components/Badge/Badge'
import Button from '../../components/Button/Button'
import Table from '../../components/Table/Table'
import {
  IconUsers,
  IconCheckCircle,
  IconAlertCircle,
  IconClock,
  IconAward,
  IconArrowRight,
} from '../../components/icons'
import { useAdmin } from './AdminContext'
import { STATUS_LABELS } from '../../data/mockData'

export default function AdminDashboard() {
  const { applicants, stats } = useAdmin()

  const recentApplicants = applicants.slice(0, 5)

  const columns = [
    { key: 'id', label: 'No. Reg', width: '130px', render: (val) => <span style={{ fontFamily: 'monospace', fontWeight: '600' }}>{val}</span> },
    { key: 'namaSantri', label: 'Nama Santri', render: (val) => <strong>{val}</strong> },
    { key: 'program', label: 'Program' },
    { key: 'tanggalDaftar', label: 'Tgl Daftar' },
    {
      key: 'status',
      label: 'Status',
      render: (val) => <Badge variant={val} size="sm" dot>{STATUS_LABELS[val] || val}</Badge>,
    },
    {
      key: 'actions',
      label: 'Aksi',
      width: '100px',
      render: (_, row) => (
        <Link to={`/admin/pendaftar/${row.id}`}>
          <Button variant="ghost" size="sm">Detail</Button>
        </Link>
      ),
    },
  ]

  return (
    <div className="admin-dashboard-page">
      <div className="parent-page-header">
        <h1 className="parent-page-title">Dashboard Pengelola PPDB</h1>
        <p className="parent-page-desc">
          Ikhtisar data pendaftaran santri baru TPQ Khoirul Ummah secara keseluruhan.
        </p>
      </div>

      {/* Grid Statistik Ringkasan */}
      <div className="admin-stats-grid">
        <div className="admin-stat-card">
          <span className="stat-label">Total Pendaftar</span>
          <span className="stat-value">{stats.total}</span>
          <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>Semua gelombang</span>
        </div>

        <div className="admin-stat-card" style={{ borderLeft: '4px solid var(--color-accent)' }}>
          <span className="stat-label">Menunggu Verifikasi</span>
          <span className="stat-value" style={{ color: 'var(--color-accent)' }}>{stats.pending}</span>
          <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>Perlu dicek admin</span>
        </div>

        <div className="admin-stat-card" style={{ borderLeft: '4px solid var(--error)' }}>
          <span className="stat-label">Perlu Perbaikan</span>
          <span className="stat-value" style={{ color: 'var(--error)' }}>{stats.fix}</span>
          <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>Menunggu berkas ortu</span>
        </div>

        <div className="admin-stat-card" style={{ borderLeft: '4px solid var(--color-primary)' }}>
          <span className="stat-label">Berkas Terverifikasi</span>
          <span className="stat-value" style={{ color: 'var(--color-primary)' }}>{stats.verified}</span>
          <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>Siap seleksi akhir</span>
        </div>

        <div className="admin-stat-card" style={{ borderLeft: '4px solid var(--success)' }}>
          <span className="stat-label">Santri Diterima</span>
          <span className="stat-value" style={{ color: 'var(--success)' }}>{stats.accepted}</span>
          <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>Lolos seleksi</span>
        </div>
      </div>

      {/* Pendaftar Terbaru */}
      <Card variant="default">
        <CardHeader>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
            <h2 style={{ fontSize: 'var(--font-size-base)', fontWeight: '600' }}>Pendaftar Terbaru</h2>
            <Link to="/admin/pendaftar">
              <Button variant="ghost" size="sm" rightIcon={<IconArrowRight size={16} />}>
                Lihat Semua Data ({applicants.length})
              </Button>
            </Link>
          </div>
        </CardHeader>
        <CardBody style={{ padding: 0 }}>
          <Table columns={columns} data={recentApplicants} />
        </CardBody>
      </Card>
    </div>
  )
}
