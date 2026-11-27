import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import './AuthPages.css'
import { useAuth } from '../../app/AuthContext'
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'
import { IconMosque, IconAlertCircle } from '../../components/icons'

export default function LoginPage() {
  const { login, loginError } = useAuth()
  const navigate = useNavigate()
  const [form, setForm] = useState({ email: '', password: '' })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)

  function validate() {
    const errs = {}
    if (!form.email) errs.email = 'Email tidak boleh kosong.'
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = 'Format email tidak valid.'
    if (!form.password) errs.password = 'Kata sandi tidak boleh kosong.'
    return errs
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setErrors({})
    setLoading(true)
    await new Promise(r => setTimeout(r, 700)) // Simulasi network
    const result = login(form.email, form.password)
    setLoading(false)
    if (result.ok) {
      navigate(result.role === 'admin' ? '/admin' : '/portal/dashboard', { replace: true })
    }
  }

  return (
    <div className="auth-page">
      <div className="auth-card">
        {/* Header */}
        <div className="auth-brand">
          <div className="auth-logo">
            <IconMosque size={24} />
          </div>
          <div>
            <h1 className="auth-title">Masuk ke Portal</h1>
            <p className="auth-subtitle">TPQ Khoirul Ummah — PPDB Online</p>
          </div>
        </div>

        {/* Demo hint */}
        <div className="auth-demo-hint">
          <IconAlertCircle size={14} />
          <div>
            <strong>Mode Terbuka:</strong> Semua email & kata sandi bebas masuk.<br/>
            Contoh: <code>jono@gmail.com</code> (Orang Tua), atau email dengan kata <code>admin</code> (Admin).
          </div>
        </div>

        {loginError && (
          <div className="auth-error" role="alert">
            <IconAlertCircle size={16} />
            <span>{loginError}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate className="auth-form">
          <Input
            id="login-email"
            type="email"
            label="Email"
            placeholder="contoh@email.com"
            value={form.email}
            onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
            error={errors.email}
            required
            autoComplete="email"
          />
          <Input
            id="login-password"
            type="password"
            label="Kata Sandi"
            placeholder="Masukkan kata sandi"
            value={form.password}
            onChange={e => setForm(f => ({ ...f, password: e.target.value }))}
            error={errors.password}
            required
            autoComplete="current-password"
          />
          <Button
            type="submit"
            variant="primary"
            size="lg"
            fullWidth
            loading={loading}
          >
            Masuk
          </Button>
        </form>

        <p className="auth-footer-text">
          Belum punya akun?{' '}
          <Link to="/daftar" className="auth-link">Daftar sebagai orang tua/wali</Link>
        </p>
        <p className="auth-footer-text">
          <Link to="/" className="auth-link">← Kembali ke Beranda</Link>
        </p>
      </div>
    </div>
  )
}
