import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../applicants/AdminPages.css'
import Card, { CardBody } from '../../components/Card/Card'
import Badge from '../../components/Badge/Badge'
import Button from '../../components/Button/Button'
import Table from '../../components/Table/Table'
import Modal from '../../components/Modal/Modal'
import { IconAward, IconCheckCircle, IconX, IconFilter } from '../../components/icons'
import { useAdmin } from '../applicants/AdminContext'
import { STATUS_LABELS } from '../../data/mockData'

export default function ResultsPage() {
  const { applicants, updateApplicantStatus } = useAdmin()

  const [selectedApplicant, setSelectedApplicant] = useState(null)
  const [decision, setDecision] = useState(null) // 'accepted' | 'rejected'

  const columns = [
    { key: 'id', label: 'No. Reg', width: '130px', render: (val) => <span style={{ fontFamily: 'monospace', fontWeight: '600' }}>{val}</span> },
    { key: 'namaSantri', label: 'Nama Santri', render: (val) => <strong>{val}</strong> },
    { key: 'program', label: 'Program Pilihan' },
    {
      key: 'status',
      label: 'Keputusan Seleksi',
      render: (val) => <Badge variant={val} size="sm" dot>{STATUS_LABELS[val] || val}</Badge>,
    },
    {
      key: 'actions',
      label: 'Penetapan Hasil',
      width: '180px',
      render: (_, row) => (
        <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
          <Button
            size="sm"
            variant="ghost"
            style={{ color: 'var(--success)' }}
            onClick={() => { setSelectedApplicant(row); setDecision('accepted') }}
          >
            Terima
          </Button>
          <Button
            size="sm"
            variant="ghost"
            style={{ color: 'var(--error)' }}
            onClick={() => { setSelectedApplicant(row); setDecision('rejected') }}
          >
            Tolak
          </Button>
        </div>
      ),
    },
  ]

  const handleConfirmDecision = () => {
    if (selectedApplicant && decision) {
      updateApplicantStatus(selectedApplicant.id, decision)
      setSelectedApplicant(null)
      setDecision(null)
    }
  }

  return (
    <div className="results-page">
      <div className="parent-page-header">
        <h1 className="parent-page-title">Penetapan Hasil Seleksi & Pengumuman</h1>
        <p className="parent-page-desc">
          Tentukan status akhir penerimaan calon santri baru yang telah melewati tahapan verifikasi administrasi.
        </p>
      </div>

      <Card variant="default">
        <CardBody style={{ padding: 0 }}>
          <Table
            columns={columns}
            data={applicants}
          />
        </CardBody>
      </Card>

      {/* Modal Penetapan Keputusan */}
      <Modal
        isOpen={!!selectedApplicant}
        onClose={() => setSelectedApplicant(null)}
        title={`Konfirmasi Keputusan: ${decision === 'accepted' ? 'Penerimaan Santri' : 'Penolakan Santri'}`}
        footer={
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 'var(--space-3)' }}>
            <Button variant="ghost" onClick={() => setSelectedApplicant(null)}>
              Batal
            </Button>
            <Button
              variant={decision === 'rejected' ? 'destructive' : 'primary'}
              onClick={handleConfirmDecision}
            >
              Tetapkan Hasil
            </Button>
          </div>
        }
      >
        <p style={{ fontSize: 'var(--font-size-sm)', lineHeight: '1.6' }}>
          Apakah Anda yakin menetapkan calon santri <strong>{selectedApplicant?.namaSantri}</strong> (No. Reg: {selectedApplicant?.id}) dengan status <strong>&quot;{decision === 'accepted' ? 'Diterima' : 'Tidak Diterima'}&quot;</strong>?
        </p>
        <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', marginTop: '8px' }}>
          Keputusan ini akan langsung tercermin pada portal status orang tua / wali santri.
        </p>
      </Modal>
    </div>
  )
}
