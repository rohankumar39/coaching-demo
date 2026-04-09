import { useState, useEffect, useRef } from 'react';

export function useReveal(delay = 0) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { 
        setTimeout(() => setVisible(true), delay); 
        obs.disconnect(); 
      }
    }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [delay]);
  return [ref, visible];
}

export default function Reveal({ children, delay = 0, style = {} }) {
  const [ref, visible] = useReveal(delay);
  return (
    <div 
      ref={ref} 
      style={{ 
        opacity: visible ? 1 : 0, 
        transform: visible ? 'translateY(0)' : 'translateY(40px)', 
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`, 
        ...style 
      }}
    >
      {children}
    </div>
  );
}
