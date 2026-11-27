import { useNavigate } from 'react-router-dom'
import './PublicInfo.css'
import Button from '../../components/Button/Button'
import Card from '../../components/Card/Card'
import Badge from '../../components/Badge/Badge'
import {
  IconCheckCircle, IconFileText, IconCalendar, IconArrowRight
} from '../../components/icons'
import { REQUIREMENTS, PPDB_SCHEDULE, PROGRAM_LIST, TPQ_PROFILE } from '../../data/mockData'

export default function PublicInfo() {
  const navigate = useNavigate()

  return (
    <div className="public-info">
      <div className="demo-notice" role="note">
        🔔 Prototipe demo. Informasi jadwal, persyaratan, dan kontak menunggu konfirmasi resmi dari pihak TPQ.
      </div>

      {/* PAGE HEADER */}
      <div className="info-header">
        <div className="container">
          <h1 className="info-page-title">Informasi PPDB</h1>
          <p className="info-page-subtitle">
            Penerimaan Peserta Didik Baru TPQ Khoirul Ummah — Semua yang perlu Anda ketahui sebelum mendaftar.
          </p>
        </div>
      </div>

      <div className="container">
        <div className="info-layout">

          {/* MAIN CONTENT */}
          <div className="info-main">

            {/* Persyaratan Umum */}
            <section id="persyaratan-umum">
              <h2 className="info-section-title">Persyaratan Umum</h2>
              <Card variant="default">
                <ul className="req-list">
                  {REQUIREMENTS.umum.map((item, i) => (
                    <li key={i} className="req-item">
                      <IconCheckCircle size={18} className="req-icon" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </section>

            {/* Dokumen */}
            <section id="dokumen">
              <h2 className="info-section-title">Dokumen yang Diperlukan</h2>
              <div className="docs-grid">
                {REQUIREMENTS.dokumen.map((doc, i) => (
                  <Card key={i} variant="outlined" className="doc-card">
                    <div className="doc-header">
                      <div className="doc-icon-wrap">
                        <IconFileText size={20} />
                      </div>
                      <div>
                        <p className="doc-name">{doc.nama}</p>
                        <div className="doc-meta">
                          <span>Format: {doc.format}</span>
                          <span>Maks: {doc.maks}</span>
                        </div>
                      </div>
                    </div>
                    <div className="doc-badge">
                      {doc.wajib
                        ? <Badge variant="fix" size="sm">Wajib</Badge>
                        : <Badge variant="draft" size="sm">Opsional</Badge>
                      }
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            {/* Program */}
            <section id="program">
              <h2 className="info-section-title">Pilihan Program</h2>
              <div className="program-info-list">
                {PROGRAM_LIST.map(prog => (
                  <Card key={prog.id} variant="default" className="program-info-card">
                    <div className="program-info-header">
                      <h3>{prog.nama}</h3>
                      <Badge variant="sage">{prog.badge}</Badge>
                    </div>
                    <div className="program-info-body">
                      <p><strong>Usia:</strong> {prog.usia}</p>
                      <p><strong>Jadwal:</strong> {prog.durasi}</p>
                      <p className="program-info-desc">{prog.deskripsi}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            {/* Jadwal */}
            <section id="jadwal-detail">
              <h2 className="info-section-title">Jadwal Lengkap PPDB</h2>
              <Card variant="default" padding="none">
                <table className="schedule-table">
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Fase / Kegiatan</th>
                      <th>Tanggal</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {PPDB_SCHEDULE.map((item) => (
                      <tr key={item.id} className={item.current ? 'schedule-row--current' : ''}>
                        <td>{item.id}</td>
                        <td className="schedule-fase">
                          {item.fase}
                          {item.current && <span className="schedule-current-badge">Sekarang</span>}
                        </td>
                        <td className="schedule-date">{item.tanggal}</td>
                        <td>
                          <Badge variant="pending" size="sm" dot>Menunggu Konfirmasi</Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Card>
            </section>

          </div>

          {/* SIDEBAR */}
          <aside className="info-sidebar">
            <Card variant="soft" className="sidebar-card">
              <h3 className="sidebar-title">Daftar Sekarang</h3>
              <p className="sidebar-desc">
                Pendaftaran dilakukan secara online melalui portal ini. Siapkan dokumen yang diperlukan.
              </p>
              <Button variant="primary" fullWidth onClick={() => navigate('/daftar')}>
                Mulai Pendaftaran
              </Button>
              <div className="sidebar-divider" />
              <p className="sidebar-login">Sudah punya akun?</p>
              <Button variant="secondary" fullWidth onClick={() => navigate('/masuk')}>
                Masuk ke Portal
              </Button>
            </Card>

            <Card variant="outlined" className="sidebar-card">
              <h3 className="sidebar-title">Kontak Informasi</h3>
              <p className="sidebar-contact-info">
                Informasi kontak resmi TPQ Khoirul Ummah akan tersedia setelah konfirmasi.
                Hubungi pengurus TPQ secara langsung untuk informasi lebih lanjut.
              </p>
              <div className="sidebar-contact-placeholder">
                <p>📍 Alamat: Menunggu konfirmasi</p>
                <p>📞 Telepon: Menunggu konfirmasi</p>
                <p>📧 Email: Menunggu konfirmasi</p>
              </div>
            </Card>
          </aside>

        </div>
      </div>
    </div>
  )
}
