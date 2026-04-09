import Overlay from './common/Overlay';
import { coursesData } from '../data';

/* ===================== TEACHER POPUP ===================== */
export function TeacherPopup({ teacher, onClose }) {
  return (
    <Overlay onClose={onClose}>
      <div className="popup-box" style={{ width: 'min(700px, calc(100vw - 2rem))' }}>
        <button className="popup-close" onClick={onClose}>✕</button>
        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
          <img src={teacher.img} alt={teacher.name} style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover', border: '3px solid var(--accent)', flexShrink: 0 }} />
          <div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.3rem' }}>{teacher.name}</h2>
            <div style={{ color: 'var(--accent)', fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.3rem' }}>{teacher.role}</div>
            <div style={{ color: 'var(--text2)', fontSize: '0.85rem' }}>{teacher.exp}</div>
          </div>
        </div>

        <p style={{ color: 'var(--text2)', lineHeight: 1.8, marginBottom: '1.5rem', fontSize: '0.95rem' }}>{teacher.bio}</p>

        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ fontWeight: 800, marginBottom: '0.8rem' }}>📘 Subjects Taught</h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {teacher.subjects.map(s => (
              <span key={s} style={{ padding: '0.3rem 0.8rem', background: 'rgba(76,201,240,0.1)', color: 'var(--accent3)', borderRadius: '99px', fontSize: '0.8rem', fontWeight: 700 }}>{s}</span>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ fontWeight: 800, marginBottom: '0.8rem' }}>🏆 Key Achievements</h4>
          <ul style={{ listStyle: 'none' }}>
            {teacher.achievements.map((a, i) => (
              <li key={i} style={{ padding: '0.4rem 0', borderBottom: '1px solid var(--border)', fontSize: '0.9rem', color: 'var(--text2)' }}>🏆 {a}</li>
            ))}
          </ul>
        </div>

        <div style={{ background: 'var(--surface2)', borderRadius: 'var(--radius-sm)', padding: '1rem' }}>
          <h4 style={{ fontWeight: 800, marginBottom: '0.5rem' }}>🗓 Class Schedule</h4>
          <p style={{ fontSize: '0.9rem', color: 'var(--text2)' }}>{teacher.schedule}</p>
        </div>
      </div>
    </Overlay>
  );
}

/* ===================== ACHIEVER POPUP ===================== */
export function AchieverPopup({ achiever, onClose }) {
  return (
    <Overlay onClose={onClose}>
      <div className="popup-box" style={{ width: 'min(500px, calc(100vw - 2rem))' }}>
        <button className="popup-close" onClick={onClose}>✕</button>
        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
          <img src={achiever.img} alt={achiever.name} style={{ width: '90px', height: '90px', borderRadius: '50%', objectFit: 'cover', border: '3px solid var(--accent)' }} />
          <div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.3rem' }}>{achiever.name}</h2>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', color: 'var(--accent)', lineHeight: 1 }}>{achiever.rank}</div>
            <div style={{ color: 'var(--text2)', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>{achiever.exam} — {achiever.year}</div>
          </div>
        </div>

        <blockquote style={{ borderLeft: '3px solid var(--accent)', paddingLeft: '1rem', fontStyle: 'italic', color: 'var(--text2)', marginBottom: '1.5rem', lineHeight: 1.7 }}>
          "{achiever.quote}"
        </blockquote>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {Object.entries(achiever.details).map(([k, v]) => (
            <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.6rem', background: 'var(--surface2)', borderRadius: 'var(--radius-sm)', fontSize: '0.9rem' }}>
              <strong style={{ color: 'var(--text2)' }}>{k}</strong>
              <span style={{ fontWeight: 600 }}>{v}</span>
            </div>
          ))}
        </div>
      </div>
    </Overlay>
  );
}

/* ===================== COURSE POPUP ===================== */
export function CoursePopup({ courseKey, onClose }) {
  const c = coursesData[courseKey];
  if (!c) return null;
  return (
    <Overlay onClose={onClose}>
      <div className="popup-box" style={{ width: 'min(600px, calc(100vw - 2rem))' }}>
        <button className="popup-close" onClick={onClose}>✕</button>
        <div style={{ marginBottom: '1.5rem' }}>
          <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>{c.icon}</div>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '0.5rem' }}>{c.name}</h2>
          {c.badge && <span style={{ background: 'var(--gradient)', color: '#fff', fontSize: '0.75rem', fontWeight: 800, padding: '0.2rem 0.8rem', borderRadius: '99px', marginBottom: '0.5rem', display: 'inline-block' }}>{c.badge}</span>}
          <p style={{ color: 'var(--text2)', lineHeight: 1.7 }}>{c.desc}</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
          {[['Duration', c.duration], ['Batch Size', c.seats]].map(([k, v]) => (
            <div key={k} style={{ padding: '0.8rem', background: 'var(--surface2)', borderRadius: 'var(--radius-sm)', textAlign: 'center' }}>
              <div style={{ fontWeight: 800, color: 'var(--accent)', fontSize: '0.8rem', textTransform: 'uppercase', marginBottom: '0.3rem' }}>{k}</div>
              <div style={{ fontWeight: 700 }}>{v}</div>
            </div>
          ))}
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ fontWeight: 800, marginBottom: '0.8rem' }}>✅ What's Included</h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {c.features.map(f => (
              <span key={f} style={{ padding: '0.3rem 0.8rem', background: 'rgba(245,166,35,0.1)', color: 'var(--accent)', borderRadius: '99px', fontSize: '0.8rem', fontWeight: 600, border: '1px solid rgba(245,166,35,0.2)' }}>{f}</span>
            ))}
          </div>
        </div>

        <div style={{ background: 'var(--surface2)', borderRadius: 'var(--radius-sm)', padding: '1rem', marginBottom: '1.5rem' }}>
          <div style={{ fontWeight: 800, color: 'var(--accent)', fontSize: '0.8rem', textTransform: 'uppercase', marginBottom: '0.3rem' }}>🏆 Results</div>
          <div style={{ fontWeight: 700 }}>{c.results}</div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text2)', fontWeight: 600 }}>Fee</div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', color: 'var(--accent)' }}>{c.fee}</div>
          </div>
          <button className="btn-primary" onClick={() => { onClose(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
            Enroll Now 🚀
          </button>
        </div>
      </div>
    </Overlay>
  );
}

/* ===================== VIDEO POPUP ===================== */
export function VideoPopup({ videoId, onClose }) {
  return (
    <Overlay onClose={onClose}>
      <div style={{ width: 'min(800px, calc(100vw - 2rem))', background: '#000', borderRadius: 'var(--radius)', overflow: 'hidden', position: 'relative' }}>
        <button className="popup-close" onClick={onClose} style={{ background: 'rgba(255,255,255,0.2)', color: '#fff' }}>✕</button>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          width="100%"
          style={{ aspectRatio: '16/9', border: 0, display: 'block' }}
          allowFullScreen
          allow="autoplay"
          title="Video"
        />
      </div>
    </Overlay>
  );
}

/* ===================== GALLERY POPUP ===================== */
export function GalleryPopup({ item, onClose }) {
  return (
    <Overlay onClose={onClose}>
      <div className="popup-box" style={{ width: 'min(700px, calc(100vw - 2rem))', padding: '1.5rem' }}>
        <button className="popup-close" onClick={onClose}>✕</button>
        <img src={item.img} alt={item.caption} style={{ width: '100%', borderRadius: '12px' }} />
        <div style={{ textAlign: 'center', marginTop: '1rem', fontWeight: 600, fontSize: '1rem' }}>{item.caption}</div>
      </div>
    </Overlay>
  );
}
