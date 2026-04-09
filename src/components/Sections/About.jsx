import React from 'react';
import Reveal from '../common/Reveal';

export default function About() {
  return (
    <section className="section about" id="about" style={{background:'var(--bg2)'}}>
      <div className="container">
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'5rem',alignItems:'center'}}>
          <Reveal>
            <div style={{position:'relative'}}>
              <img src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=80" alt="About" style={{width:'100%',borderRadius:'24px',boxShadow:'var(--shadow-lg)',transform:'rotate(-2deg)',transition:'var(--transition-slow)'}} onMouseEnter={e=>e.target.style.transform='rotate(0) scale(1.02)'} onMouseLeave={e=>e.target.style.transform='rotate(-2deg)'} />
              <div style={{position:'absolute',top:'-20px',right:'-20px',width:'200px',height:'200px',background:'var(--gradient)',borderRadius:'50%',opacity:0.15,zIndex:-1}} />
              <div style={{position:'absolute',bottom:'-20px',left:'-20px',background:'var(--gradient)',color:'#fff',borderRadius:'var(--radius)',padding:'1rem 1.5rem',textAlign:'center',boxShadow:'var(--shadow)'}}>
                <span style={{fontFamily:'var(--font-display)',fontSize:'3rem',display:'block',lineHeight:1}}>14</span>
                <span style={{fontSize:'0.8rem',fontWeight:700,opacity:0.9}}>Years of<br/>Excellence</span>
              </div>
            </div>
            <div style={{marginTop:'2.5rem'}}>
              {['🥇 Best Coaching — India 2023','📚 ISO 9001:2015 Certified','🏆 500+ Selections 2024'].map(a=>(
                <div key={a} style={{padding:'0.6rem 1rem',background:'var(--surface)',borderRadius:'var(--radius-sm)',fontWeight:600,fontSize:'0.9rem',borderLeft:'3px solid var(--accent)',marginBottom:'0.5rem'}}>{a}</div>
              ))}
            </div>
          </Reveal>

          <div>
            <Reveal delay={100}><div className="section-tag">About APEX</div></Reveal>
            <Reveal delay={150}><h2 className="section-title">We Don't Just Teach,<br/><em>We Transform</em></h2></Reveal>
            <Reveal delay={200}><p style={{color:'var(--text2)',lineHeight:1.8,fontSize:'1.05rem',marginBottom:'1.5rem'}}>Founded in 2010, APEX Coaching Institute has been at the forefront of competitive exam preparation. Our pedagogy blends rigorous academics with mentorship, mental fitness, and modern technology to produce toppers consistently.</p></Reveal>
            <Reveal delay={250}>
              <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'1rem',marginBottom:'1.5rem'}}>
                {[{icon:'🎯',title:'Targeted Curriculum',sub:'Curated by IIT/AIIMS alumni'},{icon:'📊',title:'Performance Analytics',sub:'Weekly reports & AI tracking'},{icon:'🧠',title:'Doubt Sessions Daily',sub:'24/7 online support'},{icon:'🏅',title:'Scholarship Program',sub:'Merit-based fee waiver'}].map(f=>(
                  <div key={f.title} style={{display:'flex',alignItems:'flex-start',gap:'0.8rem',padding:'1rem',background:'var(--surface)',borderRadius:'var(--radius-sm)',border:'1px solid var(--border)',transition:'var(--transition)'}} onMouseEnter={e=>e.currentTarget.style.borderColor='var(--accent)'} onMouseLeave={e=>e.currentTarget.style.borderColor='var(--border)'}>
                    <span style={{fontSize:'1.5rem',flexShrink:0}}>{f.icon}</span>
                    <div><strong style={{display:'block',fontSize:'0.95rem'}}>{f.title}</strong><small style={{color:'var(--text2)',fontSize:'0.82rem'}}>{f.sub}</small></div>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={300}><button className="btn-primary" onClick={()=>document.querySelector('#contact')?.scrollIntoView({behavior:'smooth'})}>Book Free Counselling →</button></Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
