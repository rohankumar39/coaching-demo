import { useEffect, useRef, useState } from 'react';
import styles from './Hero.module.css';

const stats = [
  { target: 15000, label: 'Students Enrolled', suffix: '+' },
  { target: 98, label: 'Success Rate', suffix: '%' },
  { target: 14, label: 'Years of Excellence', suffix: '+' },
  { target: 250, label: 'AIR Top Ranks', suffix: '+' },
];

function Counter({ target, suffix }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        let start = 0;
        const step = target / 80;
        const timer = setInterval(() => {
          start += step;
          if (start >= target) { setVal(target); clearInterval(timer); }
          else setVal(Math.floor(start));
        }, 20);
        obs.disconnect();
      }
    }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target]);
  return <span ref={ref}>{val.toLocaleString()}{suffix}</span>;
}

export default function Hero() {
  const particlesRef = useRef(null);

  useEffect(() => {
    const c = particlesRef.current;
    if (!c) return;
    for (let i = 0; i < 25; i++) {
      const p = document.createElement('div');
      p.className = styles.particle;
      p.style.left = Math.random() * 100 + '%';
      p.style.width = p.style.height = (Math.random() * 4 + 2) + 'px';
      p.style.animationDuration = (Math.random() * 15 + 10) + 's';
      p.style.animationDelay = (Math.random() * 15) + 's';
      p.style.opacity = String(Math.random() * 0.7);
      c.appendChild(p);
    }
  }, []);

  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={styles.hero} id="home">
      <div className={styles.bg}>
        <img src="/top_student.png" alt="Top Student" className={styles.bgImg} />
        <div className={styles.overlay} />
        <div className={styles.particles} ref={particlesRef} />
      </div>

      <div className={styles.content}>
        <div className={styles.badge} style={{ animationDelay: '0.2s' }}>🏆 India's #1 Coaching Institute</div>
        <h1 className={styles.title} style={{ animationDelay: '0.4s' }}>
          Where <span className="gradient-text">Toppers</span><br />Are Born
        </h1>
        <p className={styles.subtitle} style={{ animationDelay: '0.6s' }}>
          Join 50,000+ students who cracked IIT-JEE, NEET, UPSC & more.<br />
          Your rank. Our mission.
        </p>
        <div className={styles.cta} style={{ animationDelay: '0.8s' }}>
          <button className="btn-primary" onClick={() => scrollTo('#courses')}>Explore Courses</button>
          <button className="btn-secondary" onClick={() => scrollTo('#achievers')}>See Results</button>
        </div>

        <div className={styles.stats} style={{ animationDelay: '1s' }}>
          {stats.map((s, i) => (
            <div key={i} className={styles.statItem}>
              {i > 0 && <div className={styles.divider} />}
              <div className={styles.statInner}>
                <div className={styles.statNum}><Counter target={s.target} suffix={s.suffix} /></div>
                <div className={styles.statLabel}>{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.topperTag}>
        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face" alt="Topper" />
        <div>
          <div className={styles.topperName}>Aryan Sharma</div>
          <div className={styles.topperRank}>AIR 1 — IIT-JEE 2024</div>
        </div>
        <div className={styles.topperBadge}>★ Our Star</div>
      </div>

      <div className={styles.scrollIndicator}>
        <div className={styles.scrollDot} />
        <span>Scroll to explore</span>
      </div>
    </section>
  );
}
