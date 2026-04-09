import React from 'react';

export default function Ticker() {
  const text = '🎉 Riya Patel AIR 3 NEET 2024 — APEX Student \u00a0|\u00a0 📢 New Batch for JEE 2025 starting Jan 15 \u00a0|\u00a0 🏆 250+ IITians from APEX in 2024 \u00a0|\u00a0 📝 Scholarship test on Dec 20 \u00a0|\u00a0 🎯 UPSC batch enrollment open \u00a0|\u00a0 ✅ Free demo class every Sunday 10 AM \u00a0|\u00a0';
  return (
    <div style={{background:'var(--accent2)',display:'flex',alignItems:'center',overflow:'hidden',height:'42px'}}>
      <div style={{background:'rgba(0,0,0,0.3)',color:'#fff',padding:'0 1.2rem',fontWeight:800,fontSize:'0.8rem',letterSpacing:'1px',height:'100%',display:'flex',alignItems:'center',flexShrink:0}}>🔴 LIVE</div>
      <div style={{flex:1,overflow:'hidden'}}>
        <div style={{display:'inline-flex',whiteSpace:'nowrap',color:'#fff',fontWeight:600,fontSize:'0.88rem',animation:'ticker 40s linear infinite'}}>
          {text}{text}
        </div>
      </div>
      <style>{`@keyframes ticker { from{transform:translateX(0)} to{transform:translateX(-50%)} }`}</style>
    </div>
  );
}
