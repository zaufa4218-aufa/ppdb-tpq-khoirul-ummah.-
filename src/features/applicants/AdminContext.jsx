import { createContext, useContext, useState } from 'react'
import { DEMO_APPLICANTS } from '../../data/mockData'

const AdminContext = createContext(null)

export function AdminProvider({ children }) {
  const [applicants, setApplicants] = useState(DEMO_APPLICANTS)

  // Update status dan catatan pendaftar
  const updateApplicantStatus = (id, newStatus, catatan = '') => {
    setApplicants(prev =>
      prev.map(app =>
        app.id === id
          ? {
              ...app,
              status: newStatus,
              catatan: catatan !== undefined ? catatan : app.catatan,
            }
          : app
      )
    )
  }

  // Toggle verifikasi berkas spesifik
  const toggleBerkas = (id, berkasKey) => {
    setApplicants(prev =>
      prev.map(app => {
        if (app.id === id) {
          return {
            ...app,
            berkas: {
              ...app.berkas,
              [berkasKey]: !app.berkas[berkasKey],
            },
          }
        }
        return app
      })
    )
  }

  // Hitung ringkasan statistik
  const stats = {
    total: applicants.length,
    draft: applicants.filter(a => a.status === 'draft').length,
    pending: applicants.filter(a => a.status === 'pending').length,
    fix: applicants.filter(a => a.status === 'fix').length,
    verified: applicants.filter(a => a.status === 'verified').length,
    accepted: applicants.filter(a => a.status === 'accepted').length,
    rejected: applicants.filter(a => a.status === 'rejected').length,
  }

  return (
    <AdminContext.Provider value={{
      applicants,
      stats,
      updateApplicantStatus,
      toggleBerkas,
    }}>
      {children}
    </AdminContext.Provider>
  )
}

export function useAdmin() {
  return useContext(AdminContext)
}
