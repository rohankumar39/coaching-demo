import React from 'react';
import Reveal from '../common/Reveal';
import { galleryData } from '../../data';

export default function Gallery({ onImageClick }) {
  return (
    <section className="section" id="gallery">
      <div className="container">
        <div className="section-header">
          <Reveal><div className="section-tag">Campus Life</div></Reveal>
          <Reveal delay={80}><h2 className="section-title">Inside <em>APEX</em></h2></Reveal>
        </div>
        <Reveal>
          <div className="grid-4" style={{gridAutoRows:'200px'}}>
            {galleryData.map((g,i)=>(
              <div 
                key={i} 
                onClick={()=>onImageClick(g)} 
                style={{
                  gridColumn: i === 0 || i === 3 ? 'span 2' : '',
                  gridRow: i === 0 ? 'span 2' : '',
                  borderRadius:'var(--radius-sm)',
                  overflow:'hidden',
                  cursor:'pointer',
                  position:'relative'
                }} 
                onMouseEnter={e=>{e.currentTarget.querySelector('img').style.transform='scale(1.08)';e.currentTarget.querySelector('.gcap').style.opacity='1'}} 
                onMouseLeave={e=>{e.currentTarget.querySelector('img').style.transform='scale(1)';e.currentTarget.querySelector('.gcap').style.opacity='0'}}
              >
                <img src={g.img} alt={g.caption} style={{width:'100%',height:'100%',objectFit:'cover',transition:'var(--transition-slow)'}} loading="lazy" />
                <div className="gcap" style={{position:'absolute',inset:0,background:'rgba(0,0,0,0.5)',color:'#fff',display:'flex',alignItems:'flex-end',padding:'1rem',fontWeight:700,fontSize:'0.9rem',opacity:0,transition:'var(--transition)'}}>{g.caption}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
