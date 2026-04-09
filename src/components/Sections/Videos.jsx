import React, { useState } from 'react';
import Reveal from '../common/Reveal';
import { videosData } from '../../data';

export default function Videos({ onVideoClick }) {
  const [tab, setTab] = useState('demo');
  const tabs = [{key:'demo',label:'Demo Classes'},{key:'success',label:'Success Stories'},{key:'motivation',label:'Motivation'}];
  return (
    <section className="section" id="videos" style={{background:'var(--bg2)'}}>
      <div className="container">
        <div className="section-header">
          <Reveal><div className="section-tag">Video Library</div></Reveal>
          <Reveal delay={80}><h2 className="section-title">Watch, Learn, <em>Excel</em></h2></Reveal>
          <Reveal delay={120}><p className="section-desc">Demo classes, success stories, and motivational talks.</p></Reveal>
        </div>
        <Reveal delay={150}>
          <div style={{display:'flex',flexWrap:'wrap',gap:'0.5rem',justifyContent:'center',marginBottom:'2.5rem'}}>
            {tabs.map(t=>(
              <button 
                key={t.key} 
                onClick={()=>setTab(t.key)} 
                style={{
                  padding:'0.6rem 1.5rem',
                  borderRadius:'99px',
                  border:`1px solid ${tab===t.key?'transparent':'var(--border)'}`,
                  background:tab===t.key?'var(--gradient2)':'var(--surface)',
                  color:tab===t.key?'#fff':'var(--text2)',
                  fontWeight:600,
                  fontSize:'0.9rem',
                  cursor:'pointer',
                  transition:'var(--transition)',
                  fontFamily:'var(--font-body)'
                }}
              >
                {t.label}
              </button>
            ))}
          </div>
        </Reveal>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(300px,1fr))',gap:'1.5rem'}}>
          {(videosData[tab]||[]).map((v,i)=>(
            <Reveal key={i} delay={i*60}>
              <div onClick={()=>onVideoClick(v.id)} style={{background:'var(--card-bg)',border:'1px solid var(--border)',borderRadius:'var(--radius)',overflow:'hidden',cursor:'pointer',transition:'var(--transition)'}} onMouseEnter={e=>{e.currentTarget.style.transform='translateY(-4px)';e.currentTarget.style.boxShadow='var(--shadow-lg)'}} onMouseLeave={e=>{e.currentTarget.style.transform='';e.currentTarget.style.boxShadow=''}}>
                <div style={{position:'relative',paddingBottom:'56.25%',background:'#000',overflow:'hidden'}}>
                  <img src={v.thumb} alt={v.title} style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover'}} loading="lazy" />
                  <div style={{position:'absolute',inset:0,display:'flex',alignItems:'center',justifyContent:'center'}}>
                    <div style={{width:'60px',height:'60px',background:'rgba(255,255,255,0.9)',borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'1.5rem',transition:'var(--transition)'}}>▶</div>
                  </div>
                  <div style={{position:'absolute',bottom:'0.5rem',right:'0.5rem',background:'rgba(0,0,0,0.8)',color:'#fff',fontSize:'0.75rem',fontWeight:700,padding:'0.2rem 0.5rem',borderRadius:'4px'}}>{v.duration}</div>
                </div>
                <div style={{padding:'1rem'}}>
                  <h4 style={{fontWeight:700,fontSize:'0.95rem',marginBottom:'0.4rem'}}>{v.title}</h4>
                  <p style={{color:'var(--text2)',fontSize:'0.82rem'}}>{v.teacher}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
