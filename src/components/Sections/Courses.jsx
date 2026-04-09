import React from 'react';
import Reveal from '../common/Reveal';

export default function Courses({ onCourseClick }) {
  const courseList = [
    { key:'jee', icon:'⚛️', badge:'Most Popular', name:'IIT-JEE', desc:'Mains + Advanced preparation with test series, DPPs, and live doubt sessions.', meta:['📅 2 Years','👥 40 Students/Batch'], price:'₹75,000', priceNote:'/year' },
    { key:'neet', icon:'🩺', badge:null, name:'NEET', desc:'Biology-focused intense program with NCERT mastery and mock test series.', meta:['📅 2 Years','👥 35 Students/Batch'], price:'₹70,000', priceNote:'/year' },
    { key:'foundation', icon:'📚', badge:'New', name:'Foundation (8–10)', desc:'Build the base for competitive exams with Olympiad preparation.', meta:['📅 1 Year','👥 30 Students/Batch'], price:'₹45,000', priceNote:'/year' },
    { key:'upsc', icon:'🏛️', badge:null, name:'UPSC Civil Services', desc:'Prelims to Interview — comprehensive coaching with current affairs & GS papers.', meta:['📅 1 Year','👥 25 Students/Batch'], price:'₹85,000', priceNote:'/year' },
    { key:'boards', icon:'🎓', badge:null, name:'Class 11–12 Boards', desc:'PCM/PCB crash course with CBSE / ICSE / State Board focus.', meta:['📅 1 Year','👥 45 Students/Batch'], price:'₹35,000', priceNote:'/year' },
  ];
  return (
    <section className="section" id="courses">
      <div className="container">
        <div className="section-header">
          <Reveal><div className="section-tag">Our Programs</div></Reveal>
          <Reveal delay={80}><h2 className="section-title">Courses That <em>Create Toppers</em></h2></Reveal>
          <Reveal delay={120}><p className="section-desc">From foundation to advanced — every course is engineered for rank.</p></Reveal>
        </div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(300px,1fr))',gap:'1.5rem'}}>
          {courseList.map((c,i) => (
            <Reveal key={c.key} delay={i*60}>
              <div onClick={()=>onCourseClick(c.key)} style={{background:'var(--card-bg)',border:'1px solid var(--border)',borderRadius:'var(--radius)',padding:'2rem',cursor:'pointer',transition:'var(--transition)',position:'relative',overflow:'hidden'}} onMouseEnter={e=>{e.currentTarget.style.transform='translateY(-6px)';e.currentTarget.style.borderColor='rgba(245,166,35,0.3)';e.currentTarget.style.boxShadow='var(--shadow-lg)'}} onMouseLeave={e=>{e.currentTarget.style.transform='';e.currentTarget.style.borderColor='var(--border)';e.currentTarget.style.boxShadow=''}}>
                {c.badge && <div style={{position:'absolute',top:'1rem',right:'1rem',background: c.badge==='New'?'linear-gradient(135deg,#4cc9f0,#7b2ff7)':'var(--gradient)',color:'#fff',fontSize:'0.7rem',fontWeight:800,padding:'0.25rem 0.7rem',borderRadius:'99px'}}>{c.badge}</div>}
                <div style={{fontSize:'2.5rem',marginBottom:'1rem'}}>{c.icon}</div>
                <h3 style={{fontSize:'1.4rem',fontWeight:800,marginBottom:'0.7rem'}}>{c.name}</h3>
                <p style={{color:'var(--text2)',fontSize:'0.92rem',lineHeight:1.6,marginBottom:'1rem'}}>{c.desc}</p>
                <div style={{display:'flex',gap:'1rem',marginBottom:'1rem',flexWrap:'wrap'}}>{c.meta.map(m=><span key={m} style={{fontSize:'0.82rem',color:'var(--text2)',fontWeight:500}}>{m}</span>)}</div>
                <div style={{fontFamily:'var(--font-display)',fontSize:'1.8rem',color:'var(--accent)',marginBottom:'1rem'}}>{c.price}<small style={{fontFamily:'var(--font-body)',fontSize:'0.85rem',color:'var(--text2)'}}>{c.priceNote}</small></div>
                <div style={{width:'100%',padding:'0.7rem',background:'rgba(245,166,35,0.1)',border:'1px solid rgba(245,166,35,0.3)',borderRadius:'var(--radius-sm)',color:'var(--accent)',fontWeight:700,fontSize:'0.9rem',textAlign:'center'}}>View Details →</div>
              </div>
            </Reveal>
          ))}
          <Reveal delay={300}>
            <div style={{background:'var(--gradient)',borderRadius:'var(--radius)',display:'flex',alignItems:'center',justifyContent:'center',minHeight:'250px',padding:'2rem'}}>
              <div style={{textAlign:'center',color:'#fff'}}>
                <div style={{fontSize:'3rem',marginBottom:'1rem'}}>🤝</div>
                <h3 style={{fontSize:'1.8rem',fontWeight:800,marginBottom:'0.5rem',color:'#fff'}}>Not Sure?</h3>
                <p style={{opacity:0.9,fontSize:'0.95rem',marginBottom:'1rem'}}>Book a free 30-minute counselling with our academic advisor.</p>
                <button className="btn-primary" style={{background:'rgba(255,255,255,0.2)',border:'2px solid rgba(255,255,255,0.5)',boxShadow:'none'}} onClick={()=>document.querySelector('#contact')?.scrollIntoView({behavior:'smooth'})}>Free Counselling</button>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
