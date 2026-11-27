import { createContext, useContext, useState, useEffect } from 'react'
import { DEMO_APPLICANTS } from '../../data/mockData'
import { useAuth } from '../../app/AuthContext'

const RegistrationContext = createContext(null)

const INITIAL_FORM = {
  // Data Santri
  namaLengkap: 'Ahmad Fauzi Ramadhan',
  namaPanggilan: 'Fauzi',
  nik: '3201012304190001',
  tempatLahir: 'Jakarta',
  tanggalLahir: '2019-05-15',
  jenisKelamin: 'L',
  anakKe: '1',
  jumlahSaudara: '2',
  program: 'tahsin',
  riwayatPenyakit: '',
  
  // Data Orang Tua / Wali
  namaAyah: 'Budi Santoso',
  pekerjaanAyah: 'Karyawan Swasta',
  namaIbu: 'Siti Rahmah',
  pekerjaanIbu: 'Ibu Rumah Tangga',
  noWa: '081234567890',
  emailWali: 'budi.santoso@email.com',
  alamat: 'Jl. Melati No. 12, RT 02/RW 05, Kel. Sukamaju',
  catatanKhusus: 'Anak sangat antusias belajar membaca Iqro.',
}

const INITIAL_FILES = {
  aktaKelahiran: { name: 'akta_kelahiran_fauzi.pdf', size: '1.2 MB', uploadedAt: '2026-10-10 14:20' },
  kartuKeluarga: { name: 'kk_keluarga_santoso.pdf', size: '1.8 MB', uploadedAt: '2026-10-10 14:22' },
  pasFoto: { name: 'pasfoto_fauzi_3x4.jpg', size: '640 KB', uploadedAt: '2026-10-10 14:25' },
  ktpWali: { name: 'ktp_budi_santoso.jpg', size: '850 KB', uploadedAt: '2026-10-10 14:26' },
}

export function RegistrationProvider({ children }) {
  const { user } = useAuth()
  
  // State pendaftaran aktif untuk akun demo orang tua
  const [formData, setFormData] = useState(INITIAL_FORM)
  const [uploadedFiles, setUploadedFiles] = useState(INITIAL_FILES)
  const [status, setStatus] = useState('verified') // draft, pending, fix, verified, accepted, rejected
  const [catatanVerifikasi, setCatatanVerifikasi] = useState('')
  const [lastSaved, setLastSaved] = useState('10 Oktober 2026, 14:30 WIB')
  const [registrationId] = useState('PPD-2026-001')

  // Bila login sebagai user baru atau demo lain
  useEffect(() => {
    if (user?.applicantId) {
      const applicant = DEMO_APPLICANTS.find(a => a.id === user.applicantId)
      if (applicant) {
        setStatus(applicant.status)
        setCatatanVerifikasi(applicant.catatan || '')
      }
    }
  }, [user])

  const updateFormData = (fields) => {
    setFormData(prev => ({ ...prev, ...fields }))
    setLastSaved(new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }) + ' WIB')
  }

  const uploadFile = (fileKey, fileObj) => {
    setUploadedFiles(prev => ({
      ...prev,
      [fileKey]: fileObj,
    }))
  }

  const removeFile = (fileKey) => {
    setUploadedFiles(prev => {
      const copy = { ...prev }
      delete copy[fileKey]
      return copy
    })
  }

  const submitRegistration = () => {
    setStatus('pending')
    setLastSaved(new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }) + ', ' + new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }) + ' WIB')
  }

  return (
    <RegistrationContext.Provider value={{
      registrationId,
      formData,
      updateFormData,
      uploadedFiles,
      uploadFile,
      removeFile,
      status,
      setStatus,
      catatanVerifikasi,
      setCatatanVerifikasi,
      lastSaved,
      submitRegistration,
    }}>
      {children}
    </RegistrationContext.Provider>
  )
}

export function useRegistration() {
  return useContext(RegistrationContext)
}
