import { Outlet, NavLink, useNavigate } from 'react-router-dom'
import './ParentLayout.css'
import { useAuth } from '../../app/AuthContext'
import { RegistrationProvider } from './RegistrationContext'
import { IconMosque, IconHome, IconClipboard, IconUpload, IconCheckCircle, IconLogOut } from '../../components/icons'

const NAV = [
  { to: '/portal/dashboard', icon: <IconHome size={18} />, label: 'Dashboard' },
  { to: '/portal/pendaftaran', icon: <IconClipboard size={18} />, label: 'Formulir Pendaftaran' },
  { to: '/portal/berkas', icon: <IconUpload size={18} />, label: 'Unggah Berkas' },
  { to: '/portal/status', icon: <IconCheckCircle size={18} />, label: 'Status Pendaftaran' },
]

export default function ParentLayout() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  function handleLogout() {
    logout()
    navigate('/')
  }

  return (
    <RegistrationProvider>
      <div className="parent-layout">
        <aside className="parent-sidebar">
          <div className="parent-sidebar-brand">
            <div className="parent-sidebar-logo">
              <IconMosque size={20} />
            </div>
            <div>
              <p className="parent-sidebar-name">TPQ Khoirul Ummah</p>
              <p className="parent-sidebar-role">Portal Orang Tua</p>
            </div>
          </div>

          <nav className="parent-sidebar-nav" aria-label="Navigasi portal">
            {NAV.map(item => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `parent-nav-item ${isActive ? 'parent-nav-item--active' : ''}`
                }
              >
                {item.icon}
                <span>{item.label}</span>
              </NavLink>
            ))}
          </nav>

          <div className="parent-sidebar-footer">
            <div className="parent-user-info">
              <div className="parent-user-avatar">{user?.name?.[0] || 'U'}</div>
              <div>
                <p className="parent-user-name">{user?.name}</p>
                <p className="parent-user-role">Orang Tua / Wali</p>
              </div>
            </div>
            <button className="parent-logout" onClick={handleLogout} aria-label="Keluar">
              <IconLogOut size={18} />
              <span>Keluar</span>
            </button>
          </div>
        </aside>

        <main className="parent-main">
          <div className="demo-notice" role="note" style={{ margin: '0 0 var(--space-4)' }}>
            🔔 Portal Demo — Data tidak tersimpan secara permanen. Gunakan untuk simulasi alur pendaftaran.
          </div>
          <Outlet />
        </main>
      </div>
    </RegistrationProvider>
  )
}
