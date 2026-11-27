import { Routes, Route, Navigate } from 'react-router-dom'
import { useAuth } from './AuthContext'

// Public
import PublicLayout from '../features/public/PublicLayout'
import PublicHome from '../features/public/PublicHome'
import PublicInfo from '../features/public/PublicInfo'
import AllPagesHub from '../features/public/AllPagesHub'

// Auth
import LoginPage from '../features/auth/LoginPage'
import RegisterPage from '../features/auth/RegisterPage'

// Portal Orang Tua
import ParentLayout from '../features/registration/ParentLayout'
import ParentDashboard from '../features/registration/ParentDashboard'
import RegistrationForm from '../features/registration/RegistrationForm'
import UploadFiles from '../features/registration/UploadFiles'
import ApplicationStatus from '../features/registration/ApplicationStatus'

// Admin
import AdminLayout from '../features/applicants/AdminLayout'
import AdminDashboard from '../features/applicants/AdminDashboard'
import ApplicantList from '../features/applicants/ApplicantList'
import ApplicantDetail from '../features/applicants/ApplicantDetail'
import VerificationPage from '../features/verification/VerificationPage'
import ResultsPage from '../features/results/ResultsPage'
import ReportsPage from '../features/reports/ReportsPage'

function RequireAuth({ children, allowedRoles }) {
  const { user, loginAs } = useAuth()

  // Pada prototipe demo, jika user mengakses langsung link internal tanpa login,
  // aktifkan otomatis akun demo yang sesuai agar link langsung terbuka
  if (!user || (allowedRoles && !allowedRoles.includes(user.role))) {
    const defaultRole = allowedRoles?.[0] || 'parent'
    loginAs(defaultRole)
  }

  return children
}

export default function AppRoutes() {
  return (
    <Routes>
      {/* Public */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<PublicHome />} />
        <Route path="/informasi" element={<PublicInfo />} />
        <Route path="/semua" element={<AllPagesHub />} />
        <Route path="/keseluruhan" element={<AllPagesHub />} />
        <Route path="/hub" element={<AllPagesHub />} />
      </Route>

      {/* Auth */}
      <Route path="/masuk" element={<LoginPage />} />
      <Route path="/daftar" element={<RegisterPage />} />

      {/* Portal Orang Tua */}
      <Route path="/portal" element={
        <RequireAuth allowedRoles={['parent']}>
          <ParentLayout />
        </RequireAuth>
      }>
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<ParentDashboard />} />
        <Route path="pendaftaran" element={<RegistrationForm />} />
        <Route path="berkas" element={<UploadFiles />} />
        <Route path="status" element={<ApplicationStatus />} />
      </Route>

      {/* Portal Admin */}
      <Route path="/admin" element={
        <RequireAuth allowedRoles={['admin']}>
          <AdminLayout />
        </RequireAuth>
      }>
        <Route index element={<AdminDashboard />} />
        <Route path="pendaftar" element={<ApplicantList />} />
        <Route path="pendaftar/:id" element={<ApplicantDetail />} />
        <Route path="verifikasi" element={<VerificationPage />} />
        <Route path="hasil" element={<ResultsPage />} />
        <Route path="laporan" element={<ReportsPage />} />
      </Route>

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
