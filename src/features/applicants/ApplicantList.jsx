import { useState } from 'react'
import { Link } from 'react-router-dom'
import './AdminPages.css'
import Card, { CardBody } from '../../components/Card/Card'
import Badge from '../../components/Badge/Badge'
import Button from '../../components/Button/Button'
import Input, { Select } from '../../components/Input/Input'
import Table from '../../components/Table/Table'
import { IconSearch, IconEye, IconFilter } from '../../components/icons'
import { useAdmin } from './AdminContext'
import { STATUS_LABELS } from '../../data/mockData'

export default function ApplicantList() {
  const { applicants } = useAdmin()

  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [programFilter, setProgramFilter] = useState('all')

  // Filter logika
  const filteredApplicants = applicants.filter(app => {
    const matchSearch =
      app.namaSantri.toLowerCase().includes(search.toLowerCase()) ||
      app.namaWali.toLowerCase().includes(search.toLowerCase()) ||
      app.id.toLowerCase().includes(search.toLowerCase())

    const matchStatus = statusFilter === 'all' || app.status === statusFilter
    const matchProgram = programFilter === 'all' || app.program === programFilter

    return matchSearch && matchStatus && matchProgram
  })

  const columns = [
    {
      key: 'id',
      label: 'No. Registrasi',
      width: '140px',
      render: (val) => <span style={{ fontFamily: 'monospace', fontWeight: '600' }}>{val}</span>,
    },
    {
      key: 'namaSantri',
      label: 'Nama Calon Santri',
      render: (val, row) => (
        <div>
          <strong>{val}</strong>
          <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>
            Wali: {row.namaWali} ({row.usia} tahun)
          </div>
        </div>
      ),
    },
    { key: 'program', label: 'Program Belajar' },
    { key: 'tanggalDaftar', label: 'Tgl Masuk' },
    {
      key: 'status',
      label: 'Status Pendaftaran',
      render: (val) => <Badge variant={val} size="sm" dot>{STATUS_LABELS[val] || val}</Badge>,
    },
    {
      key: 'actions',
      label: 'Aksi',
      width: '120px',
      render: (_, row) => (
        <div className="table-action-btns">
          <Link to={`/admin/pendaftar/${row.id}`}>
            <Button variant="secondary" size="sm" leftIcon={<IconEye size={14} />}>
              Detail
            </Button>
          </Link>
        </div>
      ),
    },
  ]

  return (
    <div className="applicant-list-page">
      <div className="parent-page-header">
        <h1 className="parent-page-title">Pengelolaan Data Santri Pendaftar</h1>
        <p className="parent-page-desc">
          Daftar seluruh calon santri baru, pencarian nama, filter program mengaji, dan peninjauan berkas.
        </p>
      </div>

      {/* Toolbar Filter dan Pencarian */}
      <div className="admin-toolbar">
        <div className="admin-search-box">
          <Input
            id="search"
            placeholder="Cari nama santri, wali, atau no. registrasi..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            leftIcon={<IconSearch size={18} />}
          />
        </div>

        <div className="admin-filter-group">
          <Select
            id="statusFilter"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            options={[
              { value: 'all', label: 'Semua Status' },
              { value: 'draft', label: 'Draf' },
              { value: 'pending', label: 'Menunggu Verifikasi' },
              { value: 'fix', label: 'Perlu Perbaikan' },
              { value: 'verified', label: 'Terverifikasi' },
              { value: 'accepted', label: 'Diterima' },
              { value: 'rejected', label: 'Tidak Diterima' },
            ]}
          />

          <Select
            id="programFilter"
            value={programFilter}
            onChange={(e) => setProgramFilter(e.target.value)}
            options={[
              { value: 'all', label: 'Semua Program' },
              { value: 'Tahsin & Tilawati', label: 'Tahsin & Tilawati' },
              { value: "Tahfidz Juz 'Amma", label: "Tahfidz Juz 'Amma" },
              { value: 'Adab & Karakter Islami', label: 'Adab & Karakter Islami' },
            ]}
          />
        </div>
      </div>

      {/* Tabel Data */}
      <Card variant="default">
        <CardBody style={{ padding: 0 }}>
          <Table
            columns={columns}
            data={filteredApplicants}
            emptyMessage="Tidak ada data pendaftar yang cocok dengan filter pencarian."
          />
        </CardBody>
      </Card>
    </div>
  )
}
