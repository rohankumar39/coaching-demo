import { useState, useEffect } from 'react';
import './styles/global.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import {
  Ticker, About, Courses, Teachers, Achievers,
  Videos, Gallery, NoticeBoard, Testimonials, Contact, Footer
} from './components/Sections';
import {
  TeacherPopup, AchieverPopup, CoursePopup,
  VideoPopup, GalleryPopup
} from './components/Popups';

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('apex-theme') || 'dark');
  const [teacherPopup, setTeacherPopup] = useState(null);
  const [achieverPopup, setAchieverPopup] = useState(null);
  const [coursePopup, setCoursePopup] = useState(null);
  const [videoPopup, setVideoPopup] = useState(null);
  const [galleryPopup, setGalleryPopup] = useState(null);
  const [toast, setToast] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('apex-theme', theme);
  }, [theme]);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const showToast = () => {
    setToast(true);
    setTimeout(() => setToast(false), 3200);
  };

  return (
    <div>
      <Navbar theme={theme} toggleTheme={() => setTheme(t => t === 'dark' ? 'light' : 'dark')} />

      <main>
        <Hero />
        <Ticker />
        <About />
        <Courses onCourseClick={k => setCoursePopup(k)} />
        <Teachers onTeacherClick={t => setTeacherPopup(t)} />
        <Achievers onAchieverClick={a => setAchieverPopup(a)} />
        <Videos onVideoClick={id => setVideoPopup(id)} />
        <Gallery onImageClick={g => setGalleryPopup(g)} />
        <NoticeBoard />
        <Testimonials />
        <Contact showToast={showToast} />
      </main>

      <Footer />

      {/* Popups */}
      {teacherPopup && <TeacherPopup teacher={teacherPopup} onClose={() => setTeacherPopup(null)} />}
      {achieverPopup && <AchieverPopup achiever={achieverPopup} onClose={() => setAchieverPopup(null)} />}
      {coursePopup && <CoursePopup courseKey={coursePopup} onClose={() => setCoursePopup(null)} />}
      {videoPopup && <VideoPopup videoId={videoPopup} onClose={() => setVideoPopup(null)} />}
      {galleryPopup && <GalleryPopup item={galleryPopup} onClose={() => setGalleryPopup(null)} />}

      {/* Toast */}
      {toast && <div className="toast">✅ Enquiry sent successfully! We'll contact you soon.</div>}

      {/* Back to Top */}
      {showTop && (
        <button className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>↑</button>
      )}
    </div>
  );
}
