import React from 'react';
import Reveal from '../common/Reveal';
import { notices, adsData, calEvents } from '../../data';

export default function NoticeBoard() {
  const tagColors = { urgent:{bg:'rgba(230,57,70,0.15)',c:'#e63946'}, info:{bg:'rgba(76,201,240,0.15)',c:'#4cc9f0'}, success:{bg:'rgba(46,204,113,0.15)',c:'#2ecc71'} };
  return (
    <section className="section" id="notice" style={{background:'var(--bg2)'}}>
      <div className="container">
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'2rem'}}>
          <Reveal>
            <div style={{background:'var(--surface)',border:'1px solid var(--border)',borderRadius:'var(--radius)',overflow:'hidden'}}>
              <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'1.2rem 1.5rem',background:'var(--bg3)',borderBottom:'1px solid var(--border)'}}>
                <h2 style={{fontSize:'1.2rem',fontWeight:800}}>📋 Notice Board</h2>
                <span style={{color:'#e63946',fontSize:'0.8rem',fontWeight:700,animation:'blink 1.5s infinite'}}>● Live</span>
              </div>
              <div style={{maxHeight:'480px',overflowY:'auto',padding:'0.5rem'}}>
                {notices.map((n,i)=>(
                  <div key={i} style={{padding:'1rem',borderRadius:'var(--radius-sm)',marginBottom:'0.3rem',borderLeft:`3px solid ${tagColors[n.type]?.c||'var(--accent)'}`,cursor:'pointer',transition:'var(--transition)'}} onMouseEnter={e=>e.currentTarget.style.background='var(--surface2)'} onMouseLeave={e=>e.currentTarget.style.background=''}>
                    <div style={{display:'inline-block',padding:'0.15rem 0.6rem',borderRadius:'99px',fontSize:'0.7rem',fontWeight:700,marginBottom:'0.3rem',background:tagColors[n.type]?.bg,color:tagColors[n.type]?.c}}>{n.tag}</div>
                    <div style={{fontWeight:700,fontSize:'0.92rem',marginBottom:'0.3rem'}}>{n.title}</div>
                    <div style={{fontSize:'0.78rem',color:'var(--text2)'}}>{n.date}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <div style={{display:'flex',flexDirection:'column',gap:'1.5rem'}}>
            <Reveal delay={100}>
              <div style={{background:'var(--surface)',border:'1px solid var(--border)',borderRadius:'var(--radius)',overflow:'hidden'}}>
                <div style={{padding:'1rem 1.5rem',background:'var(--bg3)',borderBottom:'1px solid var(--border)',fontWeight:800,fontSize:'1rem'}}>📢 Announcements & Ads</div>
                <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'0.8rem',padding:'1rem'}}>
                  {adsData.map((a,i)=>(
                    <div key={i} style={{background:'var(--surface2)',borderRadius:'var(--radius-sm)',overflow:'hidden',cursor:'pointer',border:'1px solid var(--border)',transition:'var(--transition)'}} onMouseEnter={e=>{e.currentTarget.style.transform='translateY(-2px)';e.currentTarget.style.boxShadow='var(--shadow)'}} onMouseLeave={e=>{e.currentTarget.style.transform='';e.currentTarget.style.boxShadow=''}}>
                      <img src={a.img} alt="" style={{width:'100%',height:'80px',objectFit:'cover'}} loading="lazy" />
                      <div style={{padding:'0.6rem',fontSize:'0.78rem',fontWeight:700}}>{a.text}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div style={{background:'var(--surface)',border:'1px solid var(--border)',borderRadius:'var(--radius)',overflow:'hidden'}}>
                <div style={{padding:'1rem 1.5rem',background:'var(--bg3)',borderBottom:'1px solid var(--border)',fontWeight:800,fontSize:'1rem'}}>📅 Upcoming Exams</div>
                <div style={{padding:'1rem',display:'flex',flexDirection:'column',gap:'0.5rem'}}>
                  {calEvents.map((e,i)=>(
                    <div key={i} style={{display:'flex',alignItems:'center',gap:'1rem',padding:'0.7rem',borderRadius:'var(--radius-sm)',background:'var(--surface2)'}}>
                      <div style={{minWidth:'50px',textAlign:'center',background:'var(--gradient)',color:'#fff',borderRadius:'var(--radius-sm)',padding:'0.3rem'}}>
                        <div style={{fontFamily:'var(--font-display)',fontSize:'1.4rem',lineHeight:1}}>{e.day}</div>
                        <div style={{fontSize:'0.65rem',fontWeight:700,letterSpacing:'1px'}}>{e.mon}</div>
                      </div>
                      <div>
                        <div style={{fontWeight:700,fontSize:'0.88rem'}}>{e.name}</div>
                        <div style={{fontSize:'0.75rem',color:'var(--text2)'}}>{e.detail}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
      <style>{`@keyframes blink{0%,100%{opacity:1}50%{opacity:0.3}}`}</style>
    </section>
  );
}
