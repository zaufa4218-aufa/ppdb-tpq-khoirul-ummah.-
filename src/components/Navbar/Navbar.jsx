import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import './Navbar.css'
import Button from '../Button/Button'
import { IconMenu, IconX, IconMosque } from '../icons'

const NAV_LINKS = [
  { to: '/', label: 'Beranda', end: true },
  { to: '/informasi', label: 'Informasi PPDB' },
  { to: '/semua', label: '🌟 Semua Halaman (Hub)' },
]

export default function Navbar({ role = 'public', user = null, onLogout }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const navigate = useNavigate()

  const closeMobile = () => setMobileOpen(false)

  return (
    <header className="navbar" role="banner">
      <div className="navbar-inner container">
        {/* Logo */}
        <NavLink to="/" className="navbar-brand" onClick={closeMobile}>
          <div className="navbar-logo">
            <IconMosque size={22} />
          </div>
          <div className="navbar-brand-text">
            <span className="navbar-brand-name">TPQ Khoirul Ummah</span>
            <span className="navbar-brand-sub">PPDB Online</span>
          </div>
        </NavLink>

        {/* Desktop Nav */}
        <nav className="navbar-nav" aria-label="Navigasi utama">
          {role === 'public' && NAV_LINKS.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) => `navbar-link ${isActive ? 'navbar-link--active' : ''}`}
            >
              {link.label}
            </NavLink>
          ))}
          {role === 'parent' && (
            <>
              <NavLink to="/portal/dashboard" className={({ isActive }) => `navbar-link ${isActive ? 'navbar-link--active' : ''}`}>Dashboard</NavLink>
              <NavLink to="/portal/pendaftaran" className={({ isActive }) => `navbar-link ${isActive ? 'navbar-link--active' : ''}`}>Pendaftaran</NavLink>
              <NavLink to="/portal/status" className={({ isActive }) => `navbar-link ${isActive ? 'navbar-link--active' : ''}`}>Status</NavLink>
            </>
          )}
          {role === 'admin' && (
            <>
              <NavLink to="/admin" end className={({ isActive }) => `navbar-link ${isActive ? 'navbar-link--active' : ''}`}>Ringkasan</NavLink>
              <NavLink to="/admin/pendaftar" className={({ isActive }) => `navbar-link ${isActive ? 'navbar-link--active' : ''}`}>Pendaftar</NavLink>
            </>
          )}
        </nav>

        {/* CTA Desktop */}
        <div className="navbar-actions">
          {!user ? (
            <>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate('/masuk')}
              >
                Masuk
              </Button>
              <Button
                variant="primary"
                size="sm"
                onClick={() => navigate('/daftar')}
              >
                Daftar Sekarang
              </Button>
            </>
          ) : (
            <>
              <span className="navbar-user">{user.name}</span>
              <Button variant="ghost" size="sm" onClick={onLogout}>Keluar</Button>
            </>
          )}
        </div>

        {/* Mobile Toggle */}
        <button
          className="navbar-mobile-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Tutup menu' : 'Buka menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <IconX size={22} /> : <IconMenu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="navbar-mobile" role="navigation" aria-label="Menu mobile">
          <div className="navbar-mobile-inner container">
            {NAV_LINKS.map(link => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                className={({ isActive }) => `navbar-mobile-link ${isActive ? 'navbar-mobile-link--active' : ''}`}
                onClick={closeMobile}
              >
                {link.label}
              </NavLink>
            ))}
            <div className="navbar-mobile-actions">
              <Button variant="secondary" fullWidth onClick={() => { navigate('/masuk'); closeMobile() }}>Masuk</Button>
              <Button variant="primary" fullWidth onClick={() => { navigate('/daftar'); closeMobile() }}>Daftar Sekarang</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
