import { useNavigate } from 'react-router-dom'
import './PublicHome.css'
import Button from '../../components/Button/Button'
import Card from '../../components/Card/Card'
import {
  IconBook, IconUsers, IconStar, IconAward, IconArrowRight,
  IconCalendar, IconCheckCircle, IconChevronDown, IconChevronRight
} from '../../components/icons'
import { useState } from 'react'
import {
  TPQ_PROFILE, PROGRAM_LIST, PPDB_SCHEDULE, REGISTRATION_STEPS, FAQ_LIST
} from '../../data/mockData'

const ICON_MAP = {
  book: <IconBook size={22} />,
  users: <IconUsers size={22} />,
  star: <IconStar size={22} />,
  award: <IconAward size={22} />,
}

export default function PublicHome() {
  const navigate = useNavigate()
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <div className="public-home">

      {/* Demo Notice */}
      <div className="demo-notice" role="note">
        🔔 Ini adalah prototipe demo. Semua data bersifat fiktif. Informasi resmi menunggu konfirmasi pihak TPQ.
      </div>

      {/* ====== HERO ====== */}
      <section className="hero-section">
        <div className="hero-bg-pattern" aria-hidden="true" />
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <IconStar size={14} />
              <span>Penerimaan Santri Baru 2026</span>
            </div>
            <h1 className="hero-title">
              Daftarkan Putra-Putri Anda<br />
              di <span className="hero-title-accent">TPQ Khoirul Ummah</span>
            </h1>
            <p className="hero-subtitle">
              {TPQ_PROFILE.tagline}. Pendaftaran online mudah, cepat, dan transparan.
              Bersama kami, wujudkan generasi Qur'ani yang berakhlak mulia.
            </p>
            <div className="hero-actions">
              <Button
                variant="primary"
                size="lg"
                rightIcon={<IconArrowRight size={18} />}
                onClick={() => navigate('/daftar')}
              >
                Daftar Sekarang
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={() => navigate('/informasi')}
              >
                Lihat Informasi PPDB
              </Button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">3</span>
              <span className="stat-label">Program Unggulan</span>
            </div>
            <div className="stat-divider" aria-hidden="true" />
            <div className="stat-item">
              <span className="stat-number">5+</span>
              <span className="stat-label">Tahun Berpengalaman</span>
            </div>
            <div className="stat-divider" aria-hidden="true" />
            <div className="stat-item">
              <span className="stat-number">100+</span>
              <span className="stat-label">Santri Alumni</span>
            </div>
            <div className="stat-divider" aria-hidden="true" />
            <div className="stat-item">
              <span className="stat-number">4–12</span>
              <span className="stat-label">Usia Santri (Tahun)</span>
            </div>
          </div>
        </div>
      </section>

      {/* ====== KEUNGGULAN ====== */}
      <section className="section" id="keunggulan">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Mengapa TPQ Khoirul Ummah?</h2>
            <p className="section-subtitle">
              Kami berkomitmen memberikan pengalaman belajar Al-Qur'an yang terbaik,
              menyenangkan, dan berkesan bagi setiap santri.
            </p>
          </div>
          <div className="features-grid">
            {TPQ_PROFILE.keunggulan.map((item, i) => (
              <Card key={i} variant="default" className="feature-card animate-fade-in" style={{ animationDelay: `${i * 80}ms` }}>
                <div className="feature-icon">{ICON_MAP[item.icon]}</div>
                <h3 className="feature-title">{item.label}</h3>
                <p className="feature-desc">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ====== PROGRAM ====== */}
      <section className="section section-alt" id="program">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Program Belajar</h2>
            <p className="section-subtitle">
              Pilih program yang sesuai dengan usia dan kebutuhan putra-putri Anda.
            </p>
          </div>
          <div className="program-grid">
            {PROGRAM_LIST.map((prog, i) => (
              <Card key={prog.id} variant="elevated" className="program-card animate-fade-in" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="program-badge-wrap">
                  <span className="program-badge">{prog.badge}</span>
                </div>
                <h3 className="program-title">{prog.nama}</h3>
                <p className="program-usia">Usia: <strong>{prog.usia}</strong></p>
                <p className="program-desc">{prog.deskripsi}</p>
                <div className="program-meta">
                  <IconCalendar size={14} />
                  <span>{prog.durasi}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ====== JADWAL ====== */}
      <section className="section" id="jadwal">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Jadwal Penerimaan</h2>
            <p className="section-subtitle">
              Tahapan resmi PPDB 2026. Tanggal menunggu konfirmasi pihak TPQ.
            </p>
          </div>
          <div className="timeline">
            {PPDB_SCHEDULE.map((item, i) => (
              <div key={item.id} className={`timeline-item ${item.current ? 'timeline-item--current' : ''}`}>
                <div className="timeline-connector">
                  <div className={`timeline-dot ${item.current ? 'timeline-dot--current' : ''}`}>
                    {item.current ? <span className="timeline-dot-inner" /> : (
                      <span className="timeline-step">{i + 1}</span>
                    )}
                  </div>
                  {i < PPDB_SCHEDULE.length - 1 && <div className="timeline-line" />}
                </div>
                <div className="timeline-content">
                  <p className="timeline-phase">{item.fase}</p>
                  <p className="timeline-date">{item.tanggal}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== ALUR PENDAFTARAN ====== */}
      <section className="section section-alt" id="alur">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Cara Mendaftar</h2>
            <p className="section-subtitle">Empat langkah mudah untuk mendaftarkan calon santri.</p>
          </div>
          <div className="steps-grid">
            {REGISTRATION_STEPS.map((s, i) => (
              <div key={s.step} className="step-item animate-fade-in" style={{ animationDelay: `${i * 80}ms` }}>
                <div className="step-number">{s.step}</div>
                {i < REGISTRATION_STEPS.length - 1 && (
                  <div className="step-connector-line" aria-hidden="true" />
                )}
                <h3 className="step-label">{s.label}</h3>
                <p className="step-desc">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="steps-cta">
            <Button variant="primary" size="lg" onClick={() => navigate('/daftar')}>
              Mulai Pendaftaran
            </Button>
          </div>
        </div>
      </section>

      {/* ====== FAQ ====== */}
      <section className="section" id="faq">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Pertanyaan Umum</h2>
            <p className="section-subtitle">Temukan jawaban atas pertanyaan yang sering diajukan.</p>
          </div>
          <div className="faq-list">
            {FAQ_LIST.map(item => (
              <div key={item.id} className={`faq-item ${openFaq === item.id ? 'faq-item--open' : ''}`}>
                <button
                  className="faq-question"
                  onClick={() => setOpenFaq(openFaq === item.id ? null : item.id)}
                  aria-expanded={openFaq === item.id}
                  id={`faq-q-${item.id}`}
                  aria-controls={`faq-a-${item.id}`}
                >
                  <span>{item.q}</span>
                  <IconChevronDown size={18} className={`faq-chevron ${openFaq === item.id ? 'faq-chevron--open' : ''}`} />
                </button>
                {openFaq === item.id && (
                  <div
                    id={`faq-a-${item.id}`}
                    className="faq-answer"
                    role="region"
                    aria-labelledby={`faq-q-${item.id}`}
                  >
                    <p>{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== CTA BOTTOM ====== */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Siap Mendaftarkan Putra-Putri Anda?</h2>
            <p className="cta-subtitle">
              Bergabunglah bersama kami dan wujudkan generasi Qur'ani yang berakhlak mulia.
            </p>
            <div className="cta-actions">
              <Button variant="accent" size="lg" onClick={() => navigate('/daftar')}>
                Daftar Sekarang
              </Button>
              <Button variant="ghost" size="lg" onClick={() => navigate('/informasi')}
                style={{ color: 'white', borderColor: 'rgba(255,255,255,0.4)' }}>
                Pelajari Persyaratan
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
