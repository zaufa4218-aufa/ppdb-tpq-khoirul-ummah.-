import { NavLink } from 'react-router-dom'
import './Footer.css'
import { IconMosque, IconPhone, IconMail, IconMapPin } from '../icons'

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo">
              <IconMosque size={20} />
            </div>
            <div>
              <p className="footer-name">TPQ Khoirul Ummah</p>
              <p className="footer-tagline">Membentuk Generasi Qur'ani yang Berakhlak Mulia</p>
            </div>
            <p className="footer-desc">
              Sistem Informasi PPDB ini adalah prototipe demo. Data yang ditampilkan
              bersifat fiktif dan tidak mewakili data santri sungguhan.
            </p>
          </div>

          {/* Links */}
          <div className="footer-col">
            <h3 className="footer-heading">Tautan</h3>
            <ul className="footer-links">
              <li><NavLink to="/" className="footer-link">Beranda</NavLink></li>
              <li><NavLink to="/informasi" className="footer-link">Informasi PPDB</NavLink></li>
              <li><NavLink to="/daftar" className="footer-link">Daftar Sekarang</NavLink></li>
              <li><NavLink to="/masuk" className="footer-link">Masuk Portal</NavLink></li>
            </ul>
          </div>

          {/* Kontak */}
          <div className="footer-col">
            <h3 className="footer-heading">Kontak</h3>
            <ul className="footer-contact">
              <li>
                <IconMapPin size={14} />
                <span>Jl. Contoh No. 1, Kota Demo — <em>Alamat menunggu konfirmasi TPQ</em></span>
              </li>
              <li>
                <IconPhone size={14} />
                <span>+62 xxx-xxxx-xxxx — <em>Menunggu konfirmasi</em></span>
              </li>
              <li>
                <IconMail size={14} />
                <span>info@tpq-demo.id — <em>Menunggu konfirmasi</em></span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 TPQ Khoirul Ummah · Sistem PPDB Online — Prototipe Demo</p>
          <p className="footer-disclaimer">Informasi jadwal, persyaratan, dan kontak resmi menunggu konfirmasi pihak TPQ.</p>
        </div>
      </div>
    </footer>
  )
}
