import React, { useEffect, useRef } from 'react';
import anime from 'animejs';

const Slide0: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const tl = anime.timeline({
        easing: 'easeOutExpo',
      });

      tl.add({
        targets: '.slide0-bg-circle',
        scale: [0.5, 1],
        opacity: [0, 0.15],
        duration: 1500,
      })
      .add({
        targets: '.slide0-badge',
        translateY: [20, 0],
        opacity: [0, 1],
        duration: 800,
      }, '-=1000')
      .add({
        targets: '.slide0-title',
        translateY: [30, 0],
        opacity: [0, 1],
        duration: 1000,
      }, '-=600')
      .add({
        targets: '.slide0-subtitle',
        translateY: [20, 0],
        opacity: [0, 1],
        duration: 800,
      }, '-=800')
      .add({
        targets: '.slide0-line',
        width: [0, '100px'],
        opacity: [0, 1],
        duration: 600,
      }, '-=600')
      .add({
        targets: '.slide0-footer',
        translateY: [20, 0],
        opacity: [0, 1],
        duration: 800,
        delay: anime.stagger(200),
      }, '-=400');
    }
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="slide0-bg-circle w-[800px] h-[800px] rounded-full border border-[#8A7CF5] opacity-0"></div>
        <div className="slide0-bg-circle w-[1200px] h-[1200px] rounded-full border border-[#58E3C2] opacity-0 absolute"></div>
        <div className="slide0-bg-circle w-[1600px] h-[1600px] rounded-full border border-[#EBCB8B] opacity-0 absolute"></div>
        {/* Glow center */}
        <div className="absolute w-[600px] h-[600px] bg-[#8A7CF5]/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="z-10 flex flex-col items-center text-center">
        <div className="slide0-badge opacity-0 mb-8 px-4 py-1.5 rounded-full border border-[#8A7CF5]/40 bg-[#8A7CF5]/10 text-[#8A7CF5] text-xs font-mono tracking-[0.2em] uppercase">
          Strategy To System · Stage Narrative
        </div>

        <h1 className="slide0-title opacity-0 text-6xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-[#F5F7FA] to-[#A0AAB2] tracking-tight leading-tight mb-6">
          从策略驱动到<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8A7CF5] to-[#58E3C2]">体系驱动</span>
        </h1>

        <div className="slide0-line opacity-0 h-[2px] bg-gradient-to-r from-transparent via-[#EBCB8B] to-transparent mb-6"></div>

        <h2 className="slide0-subtitle opacity-0 text-2xl md:text-3xl font-light text-gray-300 tracking-wide max-w-3xl leading-relaxed">
          量化机构如何保持竞争力与持续生产 <span className="font-semibold text-[#EBCB8B]">Alpha</span>
        </h2>
      </div>

      <div className="absolute bottom-16 w-full flex justify-between px-24 z-10 text-xs font-mono text-gray-500 uppercase tracking-widest">
        <div className="slide0-footer opacity-0 flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-[#58E3C2] animate-pulse"></span>
          Institutional Quantitative Framework
        </div>
        <div className="slide0-footer opacity-0">
          ForthTech Confidential
        </div>
      </div>
    </div>
  );
};

export default Slide0;