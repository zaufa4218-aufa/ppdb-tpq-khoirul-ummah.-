import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './ParentPages.css'
import Card, { CardBody } from '../../components/Card/Card'
import Input, { Textarea, Select } from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import {
  IconCheck,
  IconArrowRight,
  IconArrowLeft,
  IconUser,
  IconUsers,
  IconFileText,
} from '../../components/icons'
import { useRegistration } from './RegistrationContext'
import { PROGRAM_LIST } from '../../data/mockData'

export default function RegistrationForm() {
  const navigate = useNavigate()
  const { formData, updateFormData, lastSaved } = useRegistration()

  const [activeTab, setActiveTab] = useState('santri') // 'santri' | 'wali' | 'review'
  const [localData, setLocalData] = useState({ ...formData })
  const [errors, setErrors] = useState({})
  const [saveToast, setSaveToast] = useState(false)

  const programOptions = PROGRAM_LIST.map(p => ({
    value: p.id,
    label: `${p.nama} (${p.usia})`,
  }))

  const handleChange = (e) => {
    const { id, value } = e.target
    setLocalData(prev => ({ ...prev, [id]: value }))
    if (errors[id]) {
      setErrors(prev => ({ ...prev, [id]: '' }))
    }
  }

  const validateSantri = () => {
    const errs = {}
    if (!localData.namaLengkap?.trim()) errs.namaLengkap = 'Nama lengkap santri wajib diisi.'
    if (!localData.nik?.trim() || localData.nik.length < 16) errs.nik = 'NIK santri wajib diisi 16 digit angka.'
    if (!localData.tempatLahir?.trim()) errs.tempatLahir = 'Tempat lahir wajib diisi.'
    if (!localData.tanggalLahir) errs.tanggalLahir = 'Tanggal lahir wajib diisi.'
    if (!localData.jenisKelamin) errs.jenisKelamin = 'Pilih jenis kelamin santri.'
    if (!localData.program) errs.program = 'Pilih program mengaji yang dituju.'
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const validateWali = () => {
    const errs = {}
    if (!localData.namaAyah?.trim() && !localData.namaIbu?.trim()) {
      errs.namaAyah = 'Minimal salah satu nama orang tua wajib diisi.'
    }
    if (!localData.noWa?.trim() || localData.noWa.length < 10) {
      errs.noWa = 'Nomor WhatsApp aktif wajib diisi (minimal 10 digit).'
    }
    if (!localData.alamat?.trim()) {
      errs.alamat = 'Alamat domisili lengkap wajib diisi.'
    }
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleSaveDraft = () => {
    updateFormData(localData)
    setSaveToast(true)
    setTimeout(() => setSaveToast(false), 3000)
  }

  const handleNextToWali = (e) => {
    e.preventDefault()
    if (validateSantri()) {
      updateFormData(localData)
      setActiveTab('wali')
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const handleNextToReview = (e) => {
    e.preventDefault()
    if (validateWali()) {
      updateFormData(localData)
      setActiveTab('review')
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const handleGoToUpload = () => {
    updateFormData(localData)
    navigate('/portal/berkas')
  }

  return (
    <div className="registration-form-page">
      <div className="parent-page-header">
        <h1 className="parent-page-title">Formulir Pendaftaran Calon Santri</h1>
        <p className="parent-page-desc">
          Isi dan lengkapi biodata calon santri serta identitas orang tua/wali dengan data yang benar dan akurat.
        </p>
      </div>

      {saveToast && (
        <div className="notice-box success" role="alert" style={{ marginBottom: 'var(--space-4)' }}>
          <IconCheck size={20} />
          <div>Draf formulir berhasil disimpan pada sistem demo.</div>
        </div>
      )}

      {/* Tabs Navigasi Form */}
      <div className="form-step-tabs" role="tablist">
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === 'santri'}
          className={`form-step-btn ${activeTab === 'santri' ? 'active' : ''}`}
          onClick={() => setActiveTab('santri')}
        >
          <IconUser size={16} />
          <span>1. Data Calon Santri</span>
        </button>

        <button
          type="button"
          role="tab"
          aria-selected={activeTab === 'wali'}
          className={`form-step-btn ${activeTab === 'wali' ? 'active' : ''}`}
          onClick={() => {
            if (validateSantri()) {
              updateFormData(localData)
              setActiveTab('wali')
            }
          }}
        >
          <IconUsers size={16} />
          <span>2. Data Orang Tua / Wali</span>
        </button>

        <button
          type="button"
          role="tab"
          aria-selected={activeTab === 'review'}
          className={`form-step-btn ${activeTab === 'review' ? 'active' : ''}`}
          onClick={() => {
            if (validateSantri() && validateWali()) {
              updateFormData(localData)
              setActiveTab('review')
            }
          }}
        >
          <IconFileText size={16} />
          <span>3. Pratinjau & Simpan</span>
        </button>
      </div>

      <Card variant="default">
        <CardBody>
          {/* TAB 1: DATA SANTRI */}
          {activeTab === 'santri' && (
            <form onSubmit={handleNextToWali}>
              <h2 className="form-section-title">A. Biodata Calon Santri</h2>
              
              <div className="form-grid-2">
                <Input
                  id="namaLengkap"
                  label="Nama Lengkap Santri"
                  required
                  placeholder="Contoh: Ahmad Fauzi Ramadhan"
                  value={localData.namaLengkap}
                  onChange={handleChange}
                  error={errors.namaLengkap}
                  hint="Sesuai Akta Kelahiran atau Kartu Keluarga"
                />

                <Input
                  id="namaPanggilan"
                  label="Nama Panggilan"
                  placeholder="Contoh: Fauzi"
                  value={localData.namaPanggilan}
                  onChange={handleChange}
                />

                <Input
                  id="nik"
                  label="Nomor Induk Kependudukan (NIK)"
                  required
                  maxLength={16}
                  placeholder="16 digit NIK santri"
                  value={localData.nik}
                  onChange={handleChange}
                  error={errors.nik}
                  hint="Lihat pada kolom NIK Kartu Keluarga"
                />

                <Select
                  id="jenisKelamin"
                  label="Jenis Kelamin"
                  required
                  value={localData.jenisKelamin}
                  onChange={handleChange}
                  error={errors.jenisKelamin}
                  options={[
                    { value: 'L', label: 'Laki-laki' },
                    { value: 'P', label: 'Perempuan' },
                  ]}
                />

                <Input
                  id="tempatLahir"
                  label="Tempat Lahir"
                  required
                  placeholder="Contoh: Jakarta"
                  value={localData.tempatLahir}
                  onChange={handleChange}
                  error={errors.tempatLahir}
                />

                <Input
                  id="tanggalLahir"
                  type="date"
                  label="Tanggal Lahir"
                  required
                  value={localData.tanggalLahir}
                  onChange={handleChange}
                  error={errors.tanggalLahir}
                />

                <Input
                  id="anakKe"
                  type="number"
                  min="1"
                  label="Anak Ke-"
                  placeholder="1"
                  value={localData.anakKe}
                  onChange={handleChange}
                />

                <Input
                  id="jumlahSaudara"
                  type="number"
                  min="0"
                  label="Jumlah Saudara Kandung"
                  placeholder="2"
                  value={localData.jumlahSaudara}
                  onChange={handleChange}
                />
              </div>

              <h2 className="form-section-title" style={{ marginTop: 'var(--space-6)' }}>
                B. Pilihan Program & Kebutuhan Khusus
              </h2>

              <div className="form-grid-2">
                <Select
                  id="program"
                  label="Program TPQ yang Dipilih"
                  required
                  placeholder="-- Pilih Program Belajar --"
                  value={localData.program}
                  onChange={handleChange}
                  error={errors.program}
                  options={programOptions}
                  hint="Pilihan dapat disesuaikan hasil tes penempatan TPQ"
                />

                <Input
                  id="riwayatPenyakit"
                  label="Riwayat Alergi / Penyakit (Bila Ada)"
                  placeholder="Contoh: Asma ringan, alergi debu"
                  value={localData.riwayatPenyakit}
                  onChange={handleChange}
                  hint="Kosongkan jika tidak ada"
                />
              </div>

              <div className="form-actions">
                <div className="save-indicator">
                  <span>Terakhir disimpan: {lastSaved}</span>
                </div>
                <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
                  <Button variant="secondary" onClick={handleSaveDraft}>
                    Simpan Draf
                  </Button>
                  <Button type="submit" variant="primary" rightIcon={<IconArrowRight size={16} />}>
                    Lanjut ke Data Wali
                  </Button>
                </div>
              </div>
            </form>
          )}

          {/* TAB 2: DATA ORANG TUA / WALI */}
          {activeTab === 'wali' && (
            <form onSubmit={handleNextToReview}>
              <h2 className="form-section-title">A. Identitas Orang Tua / Wali</h2>

              <div className="form-grid-2">
                <Input
                  id="namaAyah"
                  label="Nama Lengkap Ayah"
                  placeholder="Contoh: Budi Santoso"
                  value={localData.namaAyah}
                  onChange={handleChange}
                  error={errors.namaAyah}
                />

                <Input
                  id="pekerjaanAyah"
                  label="Pekerjaan Ayah"
                  placeholder="Contoh: Karyawan Swasta"
                  value={localData.pekerjaanAyah}
                  onChange={handleChange}
                />

                <Input
                  id="namaIbu"
                  label="Nama Lengkap Ibu"
                  placeholder="Contoh: Siti Rahmah"
                  value={localData.namaIbu}
                  onChange={handleChange}
                />

                <Input
                  id="pekerjaanIbu"
                  label="Pekerjaan Ibu"
                  placeholder="Contoh: Ibu Rumah Tangga"
                  value={localData.pekerjaanIbu}
                  onChange={handleChange}
                />
              </div>

              <h2 className="form-section-title" style={{ marginTop: 'var(--space-6)' }}>
                B. Kontak & Alamat Domisili
              </h2>

              <div className="form-grid-2">
                <Input
                  id="noWa"
                  label="No. WhatsApp Aktif (Utama)"
                  required
                  placeholder="Contoh: 081234567890"
                  value={localData.noWa}
                  onChange={handleChange}
                  error={errors.noWa}
                  hint="Untuk koordinasi verifikasi dan pengumuman seleksi"
                />

                <Input
                  id="emailWali"
                  type="email"
                  label="Alamat Email"
                  placeholder="Contoh: wali@email.com"
                  value={localData.emailWali}
                  onChange={handleChange}
                />
              </div>

              <div style={{ marginTop: 'var(--space-4)' }}>
                <Textarea
                  id="alamat"
                  label="Alamat Domisili Lengkap"
                  required
                  placeholder="Jalan, No. Rumah, RT/RW, Kelurahan, Kecamatan, Kota/Kabupaten"
                  value={localData.alamat}
                  onChange={handleChange}
                  error={errors.alamat}
                  rows={3}
                />
              </div>

              <div style={{ marginTop: 'var(--space-4)' }}>
                <Textarea
                  id="catatanKhusus"
                  label="Catatan Khusus Santri (Opsional)"
                  placeholder="Catatan dari orang tua tentang kebiasaan mengaji, minat anak, dll."
                  value={localData.catatanKhusus}
                  onChange={handleChange}
                  rows={2}
                />
              </div>

              <div className="form-actions">
                <Button variant="ghost" leftIcon={<IconArrowLeft size={16} />} onClick={() => setActiveTab('santri')}>
                  Kembali ke Data Santri
                </Button>
                <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
                  <Button variant="secondary" onClick={handleSaveDraft}>
                    Simpan Draf
                  </Button>
                  <Button type="submit" variant="primary" rightIcon={<IconArrowRight size={16} />}>
                    Pratinjau Data
                  </Button>
                </div>
              </div>
            </form>
          )}

          {/* TAB 3: REVIEW / PRATINJAU */}
          {activeTab === 'review' && (
            <div>
              <h2 className="form-section-title">Ringkasan Data Pendaftaran</h2>
              <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)', marginBottom: 'var(--space-4)' }}>
                Periksa kembali kelengkapan seluruh data sebelum melanjutkan ke tahap unggah berkas dokumen.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 'var(--space-4)', marginBottom: 'var(--space-6)' }}>
                <div style={{ backgroundColor: 'var(--color-bg)', padding: 'var(--space-4)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
                  <h3 style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-primary)', fontWeight: '600', marginBottom: 'var(--space-3)' }}>
                    Data Calon Santri
                  </h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--space-3)', fontSize: 'var(--font-size-sm)' }}>
                    <div><span style={{ color: 'var(--color-text-muted)' }}>Nama Lengkap:</span> <strong>{localData.namaLengkap}</strong></div>
                    <div><span style={{ color: 'var(--color-text-muted)' }}>Nama Panggilan:</span> <strong>{localData.namaPanggilan || '-'}</strong></div>
                    <div><span style={{ color: 'var(--color-text-muted)' }}>NIK:</span> <strong>{localData.nik}</strong></div>
                    <div><span style={{ color: 'var(--color-text-muted)' }}>Jenis Kelamin:</span> <strong>{localData.jenisKelamin === 'L' ? 'Laki-laki' : 'Perempuan'}</strong></div>
                    <div><span style={{ color: 'var(--color-text-muted)' }}>TTL:</span> <strong>{localData.tempatLahir}, {localData.tanggalLahir}</strong></div>
                    <div><span style={{ color: 'var(--color-text-muted)' }}>Program Dipilih:</span> <strong>{localData.program}</strong></div>
                  </div>
                </div>

                <div style={{ backgroundColor: 'var(--color-bg)', padding: 'var(--space-4)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
                  <h3 style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-primary)', fontWeight: '600', marginBottom: 'var(--space-3)' }}>
                    Data Orang Tua / Kontak
                  </h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--space-3)', fontSize: 'var(--font-size-sm)' }}>
                    <div><span style={{ color: 'var(--color-text-muted)' }}>Ayah:</span> <strong>{localData.namaAyah || '-'}</strong> ({localData.pekerjaanAyah || '-'})</div>
                    <div><span style={{ color: 'var(--color-text-muted)' }}>Ibu:</span> <strong>{localData.namaIbu || '-'}</strong> ({localData.pekerjaanIbu || '-'})</div>
                    <div><span style={{ color: 'var(--color-text-muted)' }}>No. WhatsApp:</span> <strong>{localData.noWa}</strong></div>
                    <div><span style={{ color: 'var(--color-text-muted)' }}>Email:</span> <strong>{localData.emailWali || '-'}</strong></div>
                    <div style={{ gridColumn: '1 / -1' }}><span style={{ color: 'var(--color-text-muted)' }}>Alamat:</span> <strong>{localData.alamat}</strong></div>
                  </div>
                </div>
              </div>

              <div className="form-actions">
                <Button variant="ghost" leftIcon={<IconArrowLeft size={16} />} onClick={() => setActiveTab('wali')}>
                  Koreksi Data Wali
                </Button>
                <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
                  <Button variant="secondary" onClick={handleSaveDraft}>
                    Simpan Draf
                  </Button>
                  <Button variant="primary" rightIcon={<IconArrowRight size={16} />} onClick={handleGoToUpload}>
                    Lanjut ke Unggah Berkas
                  </Button>
                </div>
              </div>
            </div>
          )}
        </CardBody>
      </Card>
    </div>
  )
}
