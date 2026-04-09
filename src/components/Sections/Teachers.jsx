import React from 'react';
import Reveal from '../common/Reveal';
import { teachers } from '../../data';

export default function Teachers({ onTeacherClick }) {
  return (
    <section className="section" id="teachers" style={{background:'var(--bg2)'}}>
      <div className="container">
        <div className="section-header">
          <Reveal><div className="section-tag">Our Faculty</div></Reveal>
          <Reveal delay={80}><h2 className="section-title">Learn From <em>The Best</em></h2></Reveal>
          <Reveal delay={120}><p className="section-desc">IITians, doctors, and UPSC toppers who chose to teach.</p></Reveal>
        </div>
        <div className="grid-cards">
          {teachers.map((t,i) => (
            <Reveal key={t.id} delay={i*50}>
              <div onClick={()=>onTeacherClick(t)} style={{background:'var(--card-bg)',border:'1px solid var(--border)',borderRadius:'var(--radius)',overflow:'hidden',cursor:'pointer',transition:'var(--transition)'}} onMouseEnter={e=>{e.currentTarget.style.transform='translateY(-8px)';e.currentTarget.style.boxShadow='var(--shadow-lg)';e.currentTarget.style.borderColor='rgba(245,166,35,0.3)';e.currentTarget.querySelector('.teacher-overlay').style.opacity='1'}} onMouseLeave={e=>{e.currentTarget.style.transform='';e.currentTarget.style.boxShadow='';e.currentTarget.style.borderColor='var(--border)';e.currentTarget.querySelector('.teacher-overlay').style.opacity='0'}}>
                <div style={{position:'relative',overflow:'hidden'}}>
                  <img src={t.img} alt={t.name} style={{width:'100%',height:'260px',objectFit:'cover'}} loading="lazy" />
                  <div className="teacher-overlay" style={{position:'absolute',inset:0,background:'linear-gradient(to bottom,transparent 40%,rgba(0,0,0,0.85))',display:'flex',alignItems:'flex-end',padding:'1rem',opacity:0,transition:'var(--transition)'}}>
                    <div style={{width:'100%',padding:'0.6rem',background:'var(--gradient)',color:'#fff',borderRadius:'var(--radius-sm)',fontWeight:700,fontSize:'0.9rem',textAlign:'center'}}>View Full Profile →</div>
                  </div>
                </div>
                <div style={{padding:'1.2rem'}}>
                  <h3 style={{fontSize:'1.1rem',fontWeight:800,marginBottom:'0.3rem'}}>{t.name}</h3>
                  <span style={{display:'inline-block',padding:'0.2rem 0.7rem',background:'rgba(245,166,35,0.1)',color:'var(--accent)',borderRadius:'99px',fontSize:'0.78rem',fontWeight:700,marginBottom:'0.5rem'}}>{t.subject}</span>
                  <div style={{fontSize:'0.82rem',color:'var(--text2)',marginBottom:'0.3rem'}}>{t.role}</div>
                  <div style={{fontSize:'0.82rem',color:'var(--text2)',marginBottom:'0.5rem'}}>{t.exp}</div>
                  <div style={{display:'flex',alignItems:'center',gap:'0.3rem',fontSize:'0.85rem'}}>
                    <span style={{color:'#f5a623'}}>★★★★★</span>
                    <span>{t.rating}/5.0</span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
