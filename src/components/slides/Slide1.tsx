import React, { useEffect, useRef } from 'react';
import anime from 'animejs';
import { presentationContent } from '../../content/presentation';

const Slide1: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const content = presentationContent.slide1;

  useEffect(() => {
    if (containerRef.current) {
      const tl = anime.timeline({
        easing: 'easeOutExpo',
      });

      tl.add({
        targets: '.slide1-title',
        translateY: [30, 0],
        opacity: [0, 1],
        duration: 800,
        delay: 200,
      })
      .add({
        targets: '.slide1-subtitle',
        translateY: [20, 0],
        opacity: [0, 1],
        duration: 800,
      }, '-=400')
      .add({
        targets: '.slide1-point',
        translateX: [-30, 0],
        opacity: [0, 1],
        duration: 600,
        delay: anime.stagger(150),
      }, '-=400')
      .add({
        targets: '.slide1-chart',
        scale: [0.9, 1],
        opacity: [0, 1],
        duration: 800,
        delay: anime.stagger(200),
      }, '-=600');
    }
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full flex flex-col items-center justify-center px-[5%] py-8 md:py-12">
      <h2 className="slide1-title text-4xl font-bold text-[#F5F7FA] mb-4 leading-tight opacity-0 text-center">
        {content.title}
      </h2>
      
      <div className="slide1-subtitle opacity-0 text-center mb-6">
        <p className="text-lg text-[#F5F7FA] font-medium leading-relaxed bg-[#1A1F2E]/60 inline-block px-6 py-3 rounded-full border border-gray-700/50 backdrop-blur-sm shadow-lg">
          {content.quote.prefix}
        </p>
      </div>

      <div className="flex justify-center gap-6 w-full mb-6">
        {content.points.map((point, idx) => (
          <div key={idx} className="slide1-point opacity-0 flex flex-col items-center text-center bg-[#1A1F2E]/40 py-4 px-6 rounded-xl border border-gray-700/30 w-1/3 transition-transform hover:-translate-y-1">
            <div className="w-8 h-8 mb-2 rounded-full bg-[#8A7CF5]/20 flex items-center justify-center shadow-[0_0_15px_rgba(138,124,245,0.2)]">
              <div className="w-2.5 h-2.5 rounded-full bg-[#8A7CF5]"></div>
            </div>
            <h3 className="text-[#F5F7FA] text-base font-bold mb-1">{point.title}</h3>
            <p className="text-gray-400 text-xs">{point.desc}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-6 w-full flex-1 min-h-[250px]">
        {content.charts.map((chart, idx) => (
          <div key={idx} className="slide1-chart opacity-0 bg-[#1A1F2E]/60 p-4 rounded-xl border border-gray-700/50 backdrop-blur-sm relative flex flex-col w-1/2 h-full">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-xs font-bold text-[#8A7CF5] uppercase tracking-wider">{chart.title}</h3>
            </div>
            <div className="w-full flex-1 min-h-[150px] flex items-center justify-center bg-black/30 rounded-lg p-2">
              <img src={chart.src} alt={chart.alt} className="w-full h-full object-contain" onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement!.innerHTML = `<span class="text-gray-500 text-xs">${chart.fallback}</span>`;
              }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slide1;
