import React from 'react';

export default function Footer() {
  return (
    <footer style={{background:'var(--bg)',borderTop:'1px solid var(--border)',padding:'4rem 0 0'}}>
      <div className="container">
        <div style={{display:'grid',gridTemplateColumns:'2fr 1fr 1fr 1fr',gap:'3rem',marginBottom:'3rem'}}>
          <div>
            <div style={{fontFamily:'var(--font-display)',fontSize:'3rem',background:'var(--gradient)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text',lineHeight:1,marginBottom:'1rem'}}>APEX</div>
            <p style={{color:'var(--text2)',fontSize:'0.92rem',lineHeight:1.7,marginBottom:'1.5rem'}}>Shaping India's brightest minds since 2010. Your success is our legacy.</p>
            <div style={{display:'flex',gap:'0.5rem'}}>
              {['📺','📸','✈️','📘'].map(s=>(
                <a key={s} href="#" style={{width:'38px',height:'38px',borderRadius:'50%',background:'var(--surface)',border:'1px solid var(--border)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'1.1rem',transition:'var(--transition)',textDecoration:'none'}} onMouseEnter={e=>{e.currentTarget.style.background='var(--gradient)';e.currentTarget.style.transform='translateY(-2px)'}} onMouseLeave={e=>{e.currentTarget.style.background='var(--surface)';e.currentTarget.style.transform=''}}>{s}</a>
              ))}
            </div>
          </div>
          {[{title:'Quick Links',links:['About Us','Faculty','Courses','Achievers','Contact']},{title:'Courses',links:['IIT-JEE','NEET','UPSC','Foundation','Class 11–12']},{title:'Resources',links:['Free Study Material','Test Series','Previous Papers','Video Lectures','Scholarship Test']}].map(col=>(
            <div key={col.title}>
              <h4 style={{fontSize:'1rem',fontWeight:800,marginBottom:'1rem',color:'var(--text)'}}>{col.title}</h4>
              {col.links.map(l=>(
                <a key={l} href="#" style={{display:'block',color:'var(--text2)',fontSize:'0.9rem',marginBottom:'0.5rem',transition:'var(--transition)',textDecoration:'none'}} onMouseEnter={e=>{e.target.style.color='var(--accent)';e.target.style.transform='translateX(4px)'}} onMouseLeave={e=>{e.target.style.color='var(--text2)';e.target.style.transform=''}}>{l}</a>
              ))}
            </div>
          ))}
        </div>
        <div style={{borderTop:'1px solid var(--border)',padding:'1.5rem 0',textAlign:'center',color:'var(--text2)',fontSize:'0.88rem'}}>
          © 2024 APEX Coaching Institute. All rights reserved. | Made with ❤️ for Toppers
        </div>
      </div>
    </footer>
  );
}
