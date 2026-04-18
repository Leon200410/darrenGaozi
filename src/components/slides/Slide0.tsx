import React, { useEffect, useRef } from 'react';
import anime from 'animejs';
import { presentationContent } from '../../content/presentation';

const Slide0: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const content = presentationContent.slide0;

  useEffect(() => {
    if (containerRef.current) {
      const tl = anime.timeline({
        easing: 'easeOutExpo',
      });

      tl.add({
        targets: '.slide0-logo',
        opacity: [0, 1],
        translateY: [-20, 0],
        duration: 800,
      })
      .add({
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
        width: [0, '800px'],
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
      {/* Logo */}
      <div className="absolute top-12 left-12 z-20">
        <img src="/logo.png" alt="Logo" className="slide0-logo opacity-0 h-10 md:h-12 object-contain invert brightness-0" />
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="slide0-bg-circle w-[800px] h-[800px] rounded-full border border-[#8A7CF5] opacity-0"></div>
        <div className="slide0-bg-circle w-[1200px] h-[1200px] rounded-full border border-[#58E3C2] opacity-0 absolute"></div>
        <div className="slide0-bg-circle w-[1600px] h-[1600px] rounded-full border border-[#EBCB8B] opacity-0 absolute"></div>
        {/* Glow center */}
        <div className="absolute w-[600px] h-[600px] bg-[#8A7CF5]/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="z-10 flex flex-col items-center text-center mt-8">
        <div className="slide0-badge opacity-0 mb-10 px-4 py-1.5 rounded-full border border-[#8A7CF5]/40 bg-[#8A7CF5]/10 text-[#8A7CF5] text-xs font-mono tracking-[0.2em] uppercase">
          {content.badge}
        </div>

        <h1 className="slide0-title opacity-0 flex flex-col items-center gap-4 mb-6">
          <span className="text-6xl md:text-[80px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#F5F7FA] via-[#EBCB8B] to-[#F5F7FA] tracking-tight leading-tight">
            {content.title.main}
          </span>
          <span className="text-2xl md:text-3xl font-light text-[#A0AAB2] tracking-[0.1em] uppercase">
            {content.title.sub}
          </span>
        </h1>

        <div className="slide0-line opacity-0 h-[2px] bg-gradient-to-r from-transparent via-[#58E3C2] to-transparent mb-8 w-full max-w-[800px]"></div>

        <h2 className="slide0-subtitle opacity-0 flex flex-col items-center gap-3">
          <span className="text-2xl md:text-[28px] font-medium text-gray-200 tracking-wide max-w-4xl leading-relaxed">
            {content.subtitle.main}{' '}
            <span className="font-bold text-[#58E3C2]">{content.subtitle.highlight}</span>
          </span>
          <span className="text-[15px] md:text-base font-light text-gray-500 tracking-widest uppercase">
            {content.subtitle.sub}
          </span>
        </h2>
      </div>

      <div className="absolute bottom-16 w-full flex justify-between px-24 z-10 text-xs font-mono text-gray-500 uppercase tracking-widest">
        <div className="slide0-footer opacity-0 flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-[#58E3C2] animate-pulse"></span>
          {content.footer.left}
        </div>
        <div className="slide0-footer opacity-0">
          {content.footer.right}
        </div>
      </div>
    </div>
  );
};

export default Slide0;
