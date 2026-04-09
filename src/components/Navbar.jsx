import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#teachers', label: 'Faculty' },
  { href: '#courses', label: 'Courses' },
  { href: '#achievers', label: 'Achievers' },
  { href: '#videos', label: 'Videos' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#notice', label: 'Notice Board' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 200) setActive(s.id);
      });
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <>
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.container}>
          <a className={styles.logo} onClick={() => scrollTo('#home')} style={{cursor:'pointer'}}>
            <span className={styles.logoApex}>APEX</span>
            <span className={styles.logoSub}>Coaching Institute</span>
          </a>

          <div className={styles.navLinks}>
            {navLinks.map(l => (
              <button key={l.href} className={`${styles.navLink} ${active === l.href.slice(1) ? styles.active : ''}`} onClick={() => scrollTo(l.href)}>
                {l.label}
              </button>
            ))}
          </div>

          <div className={styles.actions}>
            <button className={styles.themeBtn} onClick={toggleTheme} title="Toggle theme">
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
            <button className={styles.enrollBtn} onClick={() => scrollTo('#contact')}>Enroll Now</button>
            <button className={`${styles.hamburger} ${mobileOpen ? styles.open : ''}`} onClick={() => setMobileOpen(v => !v)}>
              <span /><span /><span />
            </button>
          </div>
        </div>
      </nav>

      <div className={`${styles.mobileMenu} ${mobileOpen ? styles.mobileOpen : ''}`}>
        {navLinks.map(l => (
          <button key={l.href} className={styles.mobLink} onClick={() => scrollTo(l.href)}>{l.label}</button>
        ))}
        <button className={styles.enrollBtn} style={{margin:'0.5rem 0'}} onClick={() => scrollTo('#contact')}>Enroll Now</button>
      </div>
    </>
  );
}
