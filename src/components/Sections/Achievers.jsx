import React, { useState } from 'react';
import Reveal from '../common/Reveal';
import { achievers } from '../../data';

export default function Achievers({ onAchieverClick }) {
  const [filter, setFilter] = useState('all');
  const filters = ['all','iit','neet','upsc','boards'];
  const filtered = filter === 'all' ? achievers : achievers.filter(a => a.category === filter);
  return (
    <section className="section" id="achievers">
      <div className="container">
        <div className="section-header">
          <Reveal><div className="section-tag">Hall of Fame</div></Reveal>
          <Reveal delay={80}><h2 className="section-title">Our <em>Pride & Achievers</em></h2></Reveal>
          <Reveal delay={120}><p className="section-desc">Every rank. Every dream. Every name here is family.</p></Reveal>
        </div>
        <Reveal delay={150}>
          <div style={{display:'flex',flexWrap:'wrap',gap:'0.5rem',justifyContent:'center',marginBottom:'2.5rem'}}>
            {filters.map(f=>(
              <button 
                key={f} 
                onClick={()=>setFilter(f)} 
                style={{
                  padding:'0.5rem 1.3rem',
                  borderRadius:'99px',
                  border:`1px solid ${filter===f?'transparent':'var(--border)'}`,
                  background:filter===f?'var(--gradient)':'var(--surface)',
                  color:filter===f?'#fff':'var(--text2)',
                  fontWeight:600,
                  fontSize:'0.88rem',
                  cursor:'pointer',
                  transition:'var(--transition)',
                  fontFamily:'var(--font-body)',
                  textTransform:'capitalize'
                }}
              >
                {f === 'all' ? 'All' : f.toUpperCase()}
              </button>
            ))}
          </div>
        </Reveal>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(200px,1fr))',gap:'1.2rem'}}>
          {filtered.map((a,i)=>(
            <Reveal key={a.id} delay={i*40}>
              <div onClick={()=>onAchieverClick(a)} style={{background:'var(--card-bg)',border:`1px solid ${a.rank.includes('1')?'#f5a623':'var(--border)'}`,borderRadius:'var(--radius)',padding:'1.5rem',textAlign:'center',cursor:'pointer',transition:'var(--transition)',position:'relative',overflow:'hidden'}} onMouseEnter={e=>{e.currentTarget.style.transform='translateY(-6px)';e.currentTarget.style.boxShadow='var(--shadow-lg)'}} onMouseLeave={e=>{e.currentTarget.style.transform='';e.currentTarget.style.boxShadow=''}}>
                <div style={{position:'absolute',top:'0.8rem',right:'0.8rem',background:'var(--gradient)',color:'#fff',fontSize:'0.72rem',fontWeight:800,padding:'0.2rem 0.6rem',borderRadius:'99px'}}>{a.year}</div>
                <img src={a.img} alt={a.name} style={{width:'80px',height:'80px',borderRadius:'50%',objectFit:'cover',margin:'0 auto 1rem',border:'3px solid var(--accent)'}} loading="lazy" />
                <div style={{fontWeight:800,fontSize:'1rem',marginBottom:'0.3rem'}}>{a.name}</div>
                <div style={{fontFamily:'var(--font-display)',fontSize:'1.4rem',color:'var(--accent)'}}>{a.rank}</div>
                <div style={{fontSize:'0.78rem',color:'var(--text2)',fontWeight:600,textTransform:'uppercase',letterSpacing:'1px'}}>{a.exam}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
