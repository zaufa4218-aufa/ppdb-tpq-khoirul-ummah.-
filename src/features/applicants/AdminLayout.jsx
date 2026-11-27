import { Outlet, NavLink, useNavigate } from 'react-router-dom'
import './AdminPages.css'
import { useAuth } from '../../app/AuthContext'
import { AdminProvider } from './AdminContext'
import {
  IconMosque,
  IconHome,
  IconUsers,
  IconCheckCircle,
  IconAward,
  IconFileText,
  IconLogOut,
} from '../../components/icons'

const NAV = [
  { to: '/admin', icon: <IconHome size={18} />, label: 'Dashboard Admin', end: true },
  { to: '/admin/pendaftar', icon: <IconUsers size={18} />, label: 'Data Pendaftar' },
  { to: '/admin/verifikasi', icon: <IconCheckCircle size={18} />, label: 'Verifikasi Berkas' },
  { to: '/admin/hasil', icon: <IconAward size={18} />, label: 'Hasil Seleksi' },
  { to: '/admin/laporan', icon: <IconFileText size={18} />, label: 'Laporan PPDB' },
]

export default function AdminLayout() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  function handleLogout() {
    logout()
    navigate('/')
  }

  return (
    <AdminProvider>
      <div className="admin-layout">
        <aside className="admin-sidebar">
          <div className="admin-sidebar-brand">
            <div className="admin-sidebar-logo">
              <IconMosque size={20} />
            </div>
            <div>
              <p className="admin-sidebar-name">TPQ Khoirul Ummah</p>
              <p className="admin-sidebar-role">Portal Administrator</p>
            </div>
          </div>

          <nav className="admin-sidebar-nav" aria-label="Navigasi admin">
            {NAV.map(item => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  `admin-nav-item ${isActive ? 'admin-nav-item--active' : ''}`
                }
              >
                {item.icon}
                <span>{item.label}</span>
              </NavLink>
            ))}
          </nav>

          <div className="admin-sidebar-footer">
            <div className="admin-user-info">
              <div className="admin-user-avatar">{user?.name?.[0] || 'A'}</div>
              <div>
                <p className="admin-user-name">{user?.name || 'Admin TPQ'}</p>
                <p className="admin-user-role">Administrator PPDB</p>
              </div>
            </div>
            <button className="admin-logout" onClick={handleLogout} aria-label="Keluar">
              <IconLogOut size={16} />
              <span>Keluar</span>
            </button>
          </div>
        </aside>

        <main className="admin-main">
          <div className="demo-notice" role="note" style={{ margin: '0 0 var(--space-4)' }}>
            🛡️ Mode Administrator PPDB — Simulasi kelola data santri, verifikasi berkas, penetapan hasil, dan laporan.
          </div>
          <Outlet />
        </main>
      </div>
    </AdminProvider>
  )
}
