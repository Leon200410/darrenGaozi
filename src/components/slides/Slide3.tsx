import React, { useEffect, useRef } from 'react';
import anime from 'animejs';
import { presentationContent } from '../../content/presentation';

const Slide3: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const content = presentationContent.slide3;

  useEffect(() => {
    if (containerRef.current) {
      const tl = anime.timeline({
        easing: 'easeOutExpo',
      });

      tl.add({
        targets: '.slide3-title',
        translateY: [-30, 0],
        opacity: [0, 1],
        duration: 800,
        delay: 200,
      })
      .add({
        targets: '.slide3-subtitle',
        translateY: [20, 0],
        opacity: [0, 1],
        duration: 800,
      }, '-=400')
      .add({
        targets: '.slide3-sys-box',
        translateX: [-50, 0],
        opacity: [0, 1],
        duration: 600,
        delay: anime.stagger(100),
      }, '-=400')
      .add({
        targets: '.slide3-chart',
        scale: [0.8, 1],
        opacity: [0, 1],
        duration: 800,
      }, '-=600');
    }
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full flex flex-col justify-center px-[5%] py-8 md:py-12">
      <h2 className="slide3-title text-4xl font-bold text-[#F5F7FA] mb-4 opacity-0 text-center leading-tight">
        {content.title}
      </h2>
      {content.quote.prefix && (
        <div className="slide3-subtitle opacity-0 text-center mb-6">
          <p className="text-lg text-[#F5F7FA] font-medium leading-relaxed bg-[#1A1F2E]/60 inline-block px-6 py-3 rounded-full border border-gray-700/50 backdrop-blur-sm shadow-lg">
            {content.quote.prefix}
          </p>
        </div>
      )}

      <div className="flex w-full gap-12">
        <div className="w-1/2 flex flex-col justify-center">
          <h3 className="slide3-title text-sm font-semibold text-[#8A7CF5] mb-6 tracking-widest opacity-0">{content.equationTitle}</h3>
          <div className="grid grid-cols-2 gap-4">
            {content.systems.map((sys, idx) => (
              <div key={idx} className={`slide3-sys-box opacity-0 bg-[#1A1F2E]/60 p-5 rounded-xl border border-gray-700/50 backdrop-blur-sm flex flex-col ${idx === 4 ? 'col-span-2' : ''}`}>
                <div className="flex items-center gap-3 mb-2">
                  <span className="bg-[#8A7CF5]/20 text-[#8A7CF5] text-xs font-bold px-2 py-1 rounded">{sys.num}</span>
                  <h4 className="text-[#F5F7FA] font-bold text-lg">{sys.title}</h4>
                </div>
                <p className="text-gray-400 text-xs mt-1 leading-relaxed">{sys.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="w-1/2 flex flex-col justify-center">
          <div className="slide3-chart opacity-0 bg-[#1A1F2E]/40 p-8 rounded-2xl border border-gray-700/30 backdrop-blur-sm h-full flex flex-col">
            <h3 className="text-sm font-semibold text-[#8A7CF5] mb-8 tracking-widest">{content.maturityChart.title}</h3>
            
            <div className="flex-1 flex items-center justify-between">
              {/* Concentric Circles Chart */}
              <div className="relative w-48 h-48 ml-4">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  {/* Background tracks */}
                  {[45, 38, 31, 24, 17].map((r, i) => (
                    <circle key={`bg-${i}`} cx="50" cy="50" r={r} fill="transparent" stroke="#1f2937" strokeWidth="5" />
                  ))}
                  {/* Foreground tracks */}
                  {content.maturityChart.items.map((m, i) => {
                    const r = 45 - i * 7;
                    const c = 2 * Math.PI * r;
                    const offset = c - (m.score / 100) * c;
                    return (
                      <circle 
                        key={`fg-${i}`} 
                        cx="50" cy="50" r={r} 
                        fill="transparent" 
                        stroke={m.color} 
                        strokeWidth="5" 
                        strokeLinecap="round"
                        strokeDasharray={c} 
                        strokeDashoffset={offset} 
                      />
                    );
                  })}
                </svg>
                <div className="absolute inset-0 flex items-center justify-center flex-col">
                  <span className="text-[#F5F7FA] font-bold text-sm tracking-widest">{content.maturityChart.centerTitle}</span>
                  <span className="text-gray-400 text-xs">{content.maturityChart.centerSubtitle}</span>
                </div>
              </div>

              {/* Legend & Scores */}
              <div className="flex-1 flex flex-col gap-4 ml-10">
                {content.maturityChart.items.map((m, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: m.color }}></div>
                      <span className="text-gray-300 text-sm">{m.label}</span>
                    </div>
                    <span className="text-[#F5F7FA] font-mono font-bold">{m.score}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide3;
