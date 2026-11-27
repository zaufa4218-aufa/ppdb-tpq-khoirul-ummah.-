import { useState } from 'react'
import '../applicants/AdminPages.css'
import Card, { CardBody, CardHeader } from '../../components/Card/Card'
import Badge from '../../components/Badge/Badge'
import Button from '../../components/Button/Button'
import Table from '../../components/Table/Table'
import { Select } from '../../components/Input/Input'
import { IconPrinter, IconFileText, IconDownload } from '../../components/icons'
import { useAdmin } from '../applicants/AdminContext'
import { STATUS_LABELS } from '../../data/mockData'

export default function ReportsPage() {
  const { applicants, stats } = useAdmin()

  const [statusFilter, setStatusFilter] = useState('all')

  const filtered = applicants.filter(app => statusFilter === 'all' || app.status === statusFilter)

  const handlePrint = () => {
    window.print()
  }

  const columns = [
    { key: 'id', label: 'No. Reg', width: '130px', render: (val) => <span style={{ fontFamily: 'monospace' }}>{val}</span> },
    { key: 'namaSantri', label: 'Nama Santri', render: (val) => <strong>{val}</strong> },
    { key: 'namaWali', label: 'Wali' },
    { key: 'usia', label: 'Usia', render: (val) => `${val} th` },
    { key: 'program', label: 'Program' },
    { key: 'tanggalDaftar', label: 'Tgl Masuk' },
    {
      key: 'status',
      label: 'Status Terkini',
      render: (val) => <Badge variant={val} size="sm">{STATUS_LABELS[val] || val}</Badge>,
    },
  ]

  return (
    <div className="reports-page">
      <div className="parent-page-header">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 'var(--space-3)' }}>
          <div>
            <h1 className="parent-page-title">Laporan & Rekapitulasi PPDB</h1>
            <p className="parent-page-desc">
              Rekap data pendaftaran santri baru TPQ Khoirul Ummah siap cetak dan analisis periode.
            </p>
          </div>
          <div className="no-print" style={{ display: 'flex', gap: 'var(--space-2)' }}>
            <Button variant="primary" leftIcon={<IconPrinter size={16} />} onClick={handlePrint}>
              Cetak Rekap Laporan
            </Button>
          </div>
        </div>
      </div>

      {/* Ringkasan Angka Rekap */}
      <div className="admin-stats-grid" style={{ marginBottom: 'var(--space-6)' }}>
        <div className="admin-stat-card">
          <span className="stat-label">Total Pendaftar</span>
          <span className="stat-value">{stats.total}</span>
        </div>
        <div className="admin-stat-card">
          <span className="stat-label">Terverifikasi</span>
          <span className="stat-value" style={{ color: 'var(--color-primary)' }}>{stats.verified}</span>
        </div>
        <div className="admin-stat-card">
          <span className="stat-label">Diterima</span>
          <span className="stat-value" style={{ color: 'var(--success)' }}>{stats.accepted}</span>
        </div>
        <div className="admin-stat-card">
          <span className="stat-label">Tidak Diterima</span>
          <span className="stat-value" style={{ color: 'var(--error)' }}>{stats.rejected}</span>
        </div>
      </div>

      {/* Filter Toolbar (disembunyikan saat print) */}
      <div className="admin-toolbar no-print">
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
          <span style={{ fontSize: 'var(--font-size-sm)', fontWeight: '500' }}>Filter Status Laporan:</span>
          <Select
            id="statusReportFilter"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            options={[
              { value: 'all', label: 'Semua Status Pendaftar' },
              { value: 'accepted', label: 'Hanya yang Diterima' },
              { value: 'verified', label: 'Hanya Terverifikasi' },
              { value: 'pending', label: 'Hanya Menunggu Verifikasi' },
              { value: 'rejected', label: 'Hanya yang Tidak Diterima' },
            ]}
          />
        </div>
        <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>
          Menampilkan {filtered.length} baris data
        </div>
      </div>

      {/* Header Dokumen Cetak Khusus Print */}
      <div style={{ display: 'none' }} className="print-header">
        <h2 style={{ textAlign: 'center', fontSize: '18px' }}>REKAPITULASI PENDAFTARAN SANTRI BARU</h2>
        <h3 style={{ textAlign: 'center', fontSize: '14px', marginBottom: '16px' }}>TPQ KHOIRUL UMMAH — TAHUN AJARAN 2026/2027</h3>
      </div>

      {/* Tabel Data Rekap */}
      <Card variant="default">
        <CardBody style={{ padding: 0 }}>
          <Table
            columns={columns}
            data={filtered}
          />
        </CardBody>
      </Card>
    </div>
  )
}
