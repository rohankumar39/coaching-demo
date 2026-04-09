import React, { useState, useEffect } from 'react';
import Reveal from '../common/Reveal';
import { testimonialsData } from '../../data';

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx(v => (v + 1) % testimonialsData.length), 5000);
    return () => clearInterval(t);
  }, []);
  return (
    <section className="section" style={{background:'var(--bg)'}}>
      <div className="container">
        <div className="section-header">
          <Reveal><div className="section-tag">Testimonials</div></Reveal>
          <Reveal delay={80}><h2 className="section-title">What Our <em>Students Say</em></h2></Reveal>
        </div>
        <div style={{overflow:'hidden',position:'relative'}}>
          <div style={{display:'flex',transition:'transform 0.5s cubic-bezier(0.4,0,0.2,1)',transform:`translateX(-${idx*100}%)`}}>
            {testimonialsData.map((slide,si)=>(
              <div key={si} style={{minWidth:'100%',display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'1.5rem',padding:'0.5rem'}}>
                {slide.map((t,ti)=>(
                  <div key={ti} style={{background:'var(--card-bg)',border:'1px solid var(--border)',borderRadius:'var(--radius)',padding:'1.5rem',transition:'var(--transition)'}} onMouseEnter={e=>{e.currentTarget.style.transform='translateY(-4px)';e.currentTarget.style.boxShadow='var(--shadow-lg)'}} onMouseLeave={e=>{e.currentTarget.style.transform='';e.currentTarget.style.boxShadow=''}}>
                    <div style={{fontSize:'3rem',color:'var(--accent)',opacity:0.3,lineHeight:1}}>"</div>
                    <p style={{fontStyle:'italic',color:'var(--text2)',lineHeight:1.7,marginBottom:'1.2rem'}}>{t.text}</p>
                    <div style={{display:'flex',alignItems:'center',gap:'0.8rem'}}>
                      <img src={t.img} alt={t.name} style={{width:'44px',height:'44px',borderRadius:'50%',objectFit:'cover',border:'2px solid var(--accent)'}} loading="lazy" />
                      <div>
                        <div style={{fontWeight:700,fontSize:'0.92rem'}}>{t.name}</div>
                        <div style={{fontSize:'0.78rem',color:'var(--accent)',fontWeight:600}}>{t.detail}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div style={{display:'flex',justifyContent:'center',gap:'0.5rem',marginTop:'2rem'}}>
          {testimonialsData.map((_,i)=>(
            <button 
              key={i} 
              onClick={()=>setIdx(i)} 
              style={{
                width:'10px',
                height:'10px',
                borderRadius:'50%',
                border:'none',
                cursor:'pointer',
                background:idx===i?'var(--accent)':'var(--border)',
                transform:idx===i?'scale(1.3)':'scale(1)',
                transition:'var(--transition)'
              }} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
