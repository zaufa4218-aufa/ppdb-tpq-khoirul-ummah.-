import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import './AuthPages.css'
import { useAuth } from '../../app/AuthContext'
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'
import { IconMosque, IconInfo } from '../../components/icons'

export default function RegisterPage() {
  const navigate = useNavigate()
  const { login } = useAuth()
  const [form, setForm] = useState({ namaWali: '', email: '', phone: '', password: '', confirm: '' })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  function validate() {
    const errs = {}
    if (!form.namaWali.trim()) errs.namaWali = 'Nama wali tidak boleh kosong.'
    if (!form.email) errs.email = 'Email tidak boleh kosong.'
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = 'Format email tidak valid.'
    if (!form.phone) errs.phone = 'Nomor telepon tidak boleh kosong.'
    if (!form.password) errs.password = 'Kata sandi tidak boleh kosong.'
    else if (form.password.length < 4) errs.password = 'Kata sandi minimal 4 karakter.'
    if (form.password !== form.confirm) errs.confirm = 'Konfirmasi kata sandi tidak cocok.'
    return errs
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setErrors({})
    setLoading(true)
    await new Promise(r => setTimeout(r, 600))
    setLoading(false)
    // Langsung loginkan dengan data yang didaftarkan
    login(form.email, form.password, form.namaWali)
    navigate('/portal/dashboard', { replace: true })
  }

  if (success) {
    return (
      <div className="auth-page">
        <div className="auth-card">
          <div className="auth-success">
            <div className="auth-success-icon">✅</div>
            <h2>Akun Demo Berhasil Dibuat!</h2>
            <p>
              Ini adalah prototipe — akun tidak tersimpan secara permanen.
              Untuk masuk, gunakan akun demo yang tersedia.
            </p>
            <Button variant="primary" fullWidth onClick={() => navigate('/masuk')}>
              Masuk dengan Akun Demo
            </Button>
            <Button variant="ghost" fullWidth onClick={() => navigate('/')}>
              Kembali ke Beranda
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-brand">
          <div className="auth-logo">
            <IconMosque size={24} />
          </div>
          <div>
            <h1 className="auth-title">Daftar Akun</h1>
            <p className="auth-subtitle">Orang Tua / Wali Santri — TPQ Khoirul Ummah</p>
          </div>
        </div>

        <div className="auth-info-notice">
          <IconInfo size={14} />
          <span>Prototipe demo. Data yang Anda masukkan tidak disimpan secara permanen.</span>
        </div>

        <form onSubmit={handleSubmit} noValidate className="auth-form">
          <Input
            id="reg-nama"
            label="Nama Lengkap Orang Tua/Wali"
            placeholder="Masukkan nama lengkap"
            value={form.namaWali}
            onChange={e => setForm(f => ({ ...f, namaWali: e.target.value }))}
            error={errors.namaWali}
            required
          />
          <Input
            id="reg-email"
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
            id="reg-phone"
            type="tel"
            label="Nomor Telepon / WhatsApp"
            placeholder="08xxxxxxxxxx"
            value={form.phone}
            onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
            error={errors.phone}
            required
          />
          <Input
            id="reg-password"
            type="password"
            label="Kata Sandi"
            placeholder="Minimal 8 karakter"
            value={form.password}
            onChange={e => setForm(f => ({ ...f, password: e.target.value }))}
            error={errors.password}
            required
            hint="Minimal 8 karakter."
            autoComplete="new-password"
          />
          <Input
            id="reg-confirm"
            type="password"
            label="Konfirmasi Kata Sandi"
            placeholder="Ulangi kata sandi"
            value={form.confirm}
            onChange={e => setForm(f => ({ ...f, confirm: e.target.value }))}
            error={errors.confirm}
            required
            autoComplete="new-password"
          />
          <Button
            type="submit"
            variant="primary"
            size="lg"
            fullWidth
            loading={loading}
          >
            Buat Akun
          </Button>
        </form>

        <p className="auth-footer-text">
          Sudah punya akun?{' '}
          <Link to="/masuk" className="auth-link">Masuk ke Portal</Link>
        </p>
        <p className="auth-footer-text">
          <Link to="/" className="auth-link">← Kembali ke Beranda</Link>
        </p>
      </div>
    </div>
  )
}
