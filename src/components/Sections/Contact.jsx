import React from 'react';
import Reveal from '../common/Reveal';

export default function Contact({ showToast }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    showToast();
    e.target.reset();
  };
  return (
    <section className="section" id="contact" style={{background:'var(--bg2)'}}>
      <div className="container">
        <div className="section-header">
          <Reveal><div className="section-tag">Contact Us</div></Reveal>
          <Reveal delay={80}><h2 className="section-title">Start Your <em>Journey Today</em></h2></Reveal>
        </div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1.5fr',gap:'2rem',marginBottom:'2rem'}}>
          <Reveal>
            <div style={{display:'flex',flexDirection:'column',gap:'1rem'}}>
              {[{icon:'📍',title:'Address',content:'12 Knowledge Park, Civil Lines,\nKanpur, Uttar Pradesh — 208001'},{icon:'📞',title:'Phone',content:'+91 98765 43210\n+91 80000 12345'},{icon:'✉️',title:'Email',content:'info@apexcoaching.in\nadmissions@apexcoaching.in'},{icon:'🕐',title:'Hours',content:'Mon–Sat: 7:00 AM – 9:00 PM\nSunday: 9:00 AM – 2:00 PM'}].map(c=>(
                <div key={c.title} style={{display:'flex',alignItems:'flex-start',gap:'1rem',padding:'1.2rem',background:'var(--surface)',border:'1px solid var(--border)',borderRadius:'var(--radius-sm)',transition:'var(--transition)'}} onMouseEnter={e=>{e.currentTarget.style.borderColor='var(--accent)';e.currentTarget.style.transform='translateX(4px)'}} onMouseLeave={e=>{e.currentTarget.style.borderColor='var(--border)';e.currentTarget.style.transform=''}}>
                  <span style={{fontSize:'1.5rem',flexShrink:0}}>{c.icon}</span>
                  <div>
                    <strong style={{display:'block',fontWeight:700,marginBottom:'0.3rem'}}>{c.title}</strong>
                    <p style={{fontSize:'0.9rem',color:'var(--text2)',lineHeight:1.6,whiteSpace:'pre-line'}}>{c.content}</p>
                  </div>
                </div>
              ))}
              <div style={{display:'flex',flexWrap:'wrap',gap:'0.5rem'}}>
                {['YouTube','Instagram','Telegram','Facebook'].map(s=>(
                  <a key={s} href="#" style={{padding:'0.5rem 1rem',background:'var(--surface)',border:'1px solid var(--border)',borderRadius:'99px',fontSize:'0.82rem',fontWeight:700,transition:'var(--transition)'}} onMouseEnter={e=>{e.target.style.background='var(--gradient)';e.target.style.color='#fff';e.target.style.borderColor='transparent'}} onMouseLeave={e=>{e.target.style.background='var(--surface)';e.target.style.color='var(--text)';e.target.style.borderColor='var(--border)'}}>{s}</a>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <form onSubmit={handleSubmit} style={{background:'var(--surface)',border:'1px solid var(--border)',borderRadius:'var(--radius)',padding:'2rem'}}>
              <h3 style={{fontSize:'1.3rem',fontWeight:800,marginBottom:'1.5rem'}}>📩 Send an Enquiry</h3>
              <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'1rem',marginBottom:'1rem'}}>
                <input type="text" placeholder="Your Name *" required style={{width:'100%',padding:'0.85rem 1rem',background:'var(--surface2)',border:'1px solid var(--border)',borderRadius:'var(--radius-sm)',color:'var(--text)',fontFamily:'var(--font-body)',fontSize:'0.95rem'}} />
                <input type="tel" placeholder="Phone Number *" required style={{width:'100%',padding:'0.85rem 1rem',background:'var(--surface2)',border:'1px solid var(--border)',borderRadius:'var(--radius-sm)',color:'var(--text)',fontFamily:'var(--font-body)',fontSize:'0.95rem'}} />
              </div>
              <input type="email" placeholder="Email Address" style={{width:'100%',padding:'0.85rem 1rem',background:'var(--surface2)',border:'1px solid var(--border)',borderRadius:'var(--radius-sm)',color:'var(--text)',fontFamily:'var(--font-body)',fontSize:'0.95rem',marginBottom:'1rem'}} />
              <select style={{width:'100%',padding:'0.85rem 1rem',background:'var(--surface2)',border:'1px solid var(--border)',borderRadius:'var(--radius-sm)',color:'var(--text)',fontFamily:'var(--font-body)',fontSize:'0.95rem',marginBottom:'1rem'}}>
                <option value="">Course Interested In</option>
                {['IIT-JEE','NEET','UPSC','Foundation (8–10)','Class 11–12 Boards'].map(c=><option key={c}>{c}</option>)}
              </select>
              <textarea placeholder="Your Message or Query..." rows={4} style={{width:'100%',padding:'0.85rem 1rem',background:'var(--surface2)',border:'1px solid var(--border)',borderRadius:'var(--radius-sm)',color:'var(--text)',fontFamily:'var(--font-body)',fontSize:'0.95rem',resize:'vertical',marginBottom:'1rem'}} />
              <button type="submit" className="btn-primary" style={{width:'100%',justifyContent:'center'}}>Send Enquiry 🚀</button>
            </form>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3571.5!2d80.3319!3d26.4499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c47a1a266e981%3A0x1bb95a9f85d2fd7b!2sKanpur%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" width="100%" height="350" style={{border:0,borderRadius:'var(--radius)'}} allowFullScreen loading="lazy" title="APEX Location" />
        </Reveal>
      </div>
    </section>
  );
}
