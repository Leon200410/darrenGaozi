import React, { useEffect, useRef } from 'react';
import anime from 'animejs';
import { presentationContent } from '../../content/presentation';

const Slide8: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const content = presentationContent.slide8;

  useEffect(() => {
    if (containerRef.current) {
      const tl = anime.timeline({
        easing: 'easeOutExpo',
      });

      tl.add({
        targets: '.slide8-logo',
        opacity: [0, 1],
        translateY: [-20, 0],
        duration: 800,
      })
      .add({
        targets: '.slide8-title',
        translateY: [30, 0],
        opacity: [0, 1],
        duration: 1000,
        delay: 200,
      })
      .add({
        targets: '.slide8-desc',
        translateY: [20, 0],
        opacity: [0, 1],
        duration: 800,
      }, '-=600')
      .add({
        targets: '.slide8-item',
        translateX: [30, 0],
        opacity: [0, 1],
        duration: 600,
        delay: anime.stagger(150),
      }, '-=600');
    }
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden px-[5%] py-8 md:py-12">
      
      {/* Logo */}
      <div className="absolute top-12 left-12 z-20">
        <img src="/logo.png" alt="Logo" className="slide8-logo opacity-0 h-10 md:h-12 object-contain invert brightness-0" />
      </div>

      {/* Main Title Group */}
      <div className="text-center w-full flex flex-col items-center mb-16 z-10">
        <h2 className="slide8-title text-6xl md:text-[80px] font-black text-[#F2F2F2] leading-[1.1] opacity-0 tracking-tight drop-shadow-md mb-8">
          {content.title[0]}<br/>
          {content.title[1]}
        </h2>
        
        <div className="slide8-desc w-full opacity-0 flex justify-center">
          <p className="max-w-5xl text-base md:text-lg text-[#BFC6D0] leading-relaxed font-normal tracking-wide text-center">
            {content.description.text}
          </p>
        </div>
      </div>

      {/* 3 Summary Cards */}
      <div className="flex justify-between gap-6 w-full z-10 px-4">
        {content.points.map((point, idx) => (
          <div key={idx} className="slide8-item opacity-0 flex flex-col items-center justify-center bg-[#1A1F2E]/80 p-8 rounded-2xl border border-gray-700/50 backdrop-blur-sm shadow-xl hover:-translate-y-1 transition-transform duration-300 relative w-1/3 min-h-[160px]">
            <div
              className="absolute top-0 left-10 right-10 h-[2px] opacity-60"
              style={{ background: `linear-gradient(90deg, transparent, ${point.accent}, transparent)` }}
            ></div>
            <p className="text-[#F5F7FA] text-[15px] font-normal tracking-wide leading-7 text-center whitespace-pre-line z-10">
              {point.text}
            </p>
          </div>
        ))}
      </div>

      {/* Subtle background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <div className="w-[800px] h-[800px] bg-[#EBCB8B]/5 blur-[150px] rounded-full"></div>
      </div>

    </div>
  );
};

export default Slide8;
