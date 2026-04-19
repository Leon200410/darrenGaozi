import React, { useEffect, useRef } from 'react';
import anime from 'animejs';
import { useLocation } from 'react-router-dom';
import { presentationContent } from '../../content/presentation';

const Slide4: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const isSimple = location.pathname === '/simple';
  const content = presentationContent.slide4;

  useEffect(() => {
    if (containerRef.current) {
      const tl = anime.timeline({
        easing: 'easeOutQuart',
      });

      tl.add({
        targets: '.slide4-title',
        translateY: [-30, 0],
        opacity: [0, 1],
        duration: 800,
        delay: 200,
      })
      .add({
        targets: '.slide4-subtitle',
        translateY: [20, 0],
        opacity: [0, 1],
        duration: 800,
      }, '-=400')
      .add({
        targets: '.slide4-radar',
        scale: [0.8, 1],
        opacity: [0, 1],
        duration: 800,
      }, '-=400')
      .add({
        targets: '.slide4-item',
        translateX: [50, 0],
        opacity: [0, 1],
        duration: 600,
        delay: anime.stagger(100),
      }, '-=600');
    }
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full flex flex-col justify-center px-[5%] py-8 md:py-12">
      <h2 className="slide4-title text-4xl font-bold text-[#F5F7FA] mb-4 opacity-0 text-center leading-tight">
        {content.title}
      </h2>
      {content.quote.prefix && (
        <div className="slide4-subtitle opacity-0 text-center mb-6">
          <p className="text-lg text-[#F5F7FA] font-medium leading-relaxed bg-[#1A1F2E]/60 inline-block px-6 py-3 rounded-full border border-gray-700/50 backdrop-blur-sm shadow-lg">
            {content.quote.prefix}
          </p>
        </div>
      )}

      <div className="flex w-full gap-12">
        {/* Left: Radar Chart Box */}
        <div className="w-5/12 flex flex-col">
          <div className="slide4-radar opacity-0 bg-[#1A1F2E]/60 p-8 rounded-2xl border border-gray-700/50 backdrop-blur-sm flex-1 flex flex-col items-center justify-center">
            <h3 className="text-sm font-semibold text-[#EBCB8B] mb-10 tracking-widest w-full text-left">{content.radarTitle}</h3>
            <div className="relative w-64 h-64 flex items-center justify-center">
              {/* Radar Chart Mock (SVG Heptagon) */}
              <svg className="w-full h-full" viewBox="0 0 100 100">
                {/* Background grids */}
                <polygon points="50,5 85.2,21.9 93.9,60 69.5,90.6 30.5,90.6 6.1,60 14.8,21.9" fill="none" stroke="#374151" strokeWidth="0.5"/>
                <polygon points="50,20 73.5,31.3 79.2,56.7 63,77 37,77 20.8,56.7 26.5,31.3" fill="none" stroke="#374151" strokeWidth="0.5"/>
                <polygon points="50,35 61.7,40.6 64.6,53.3 56.5,63.5 43.5,63.5 35.4,53.3 38.3,40.6" fill="none" stroke="#374151" strokeWidth="0.5"/>
                {/* Axes */}
                <line x1="50" y1="50" x2="50" y2="5" stroke="#374151" strokeWidth="0.5"/>
                <line x1="50" y1="50" x2="85.2" y2="21.9" stroke="#374151" strokeWidth="0.5"/>
                <line x1="50" y1="50" x2="93.9" y2="60" stroke="#374151" strokeWidth="0.5"/>
                <line x1="50" y1="50" x2="69.5" y2="90.6" stroke="#374151" strokeWidth="0.5"/>
                <line x1="50" y1="50" x2="30.5" y2="90.6" stroke="#374151" strokeWidth="0.5"/>
                <line x1="50" y1="50" x2="6.1" y2="60" stroke="#374151" strokeWidth="0.5"/>
                <line x1="50" y1="50" x2="14.8" y2="21.9" stroke="#374151" strokeWidth="0.5"/>
                {/* Data Polygon */}
                <polygon points="50,10 82.8,23.8 84.1,57.8 67.4,86 33.5,84.2 11,58.9 26.5,31.3" fill="#EBCB8B" fillOpacity="0.2" stroke="#EBCB8B" strokeWidth="2"/>
                {/* Data Points */}
                <circle cx="50" cy="10" r="2" fill="#EBCB8B"/>
                <circle cx="82.8" cy="23.8" r="2" fill="#EBCB8B"/>
                <circle cx="84.1" cy="57.8" r="2" fill="#EBCB8B"/>
                <circle cx="67.4" cy="86" r="2" fill="#EBCB8B"/>
                <circle cx="33.5" cy="84.2" r="2" fill="#EBCB8B"/>
                <circle cx="11" cy="58.9" r="2" fill="#EBCB8B"/>
                <circle cx="26.5" cy="31.3" r="2" fill="#EBCB8B"/>
              </svg>
              {/* Labels */}
              {content.radarLabels.map((label, idx) => (
                <span key={idx} className={`absolute text-xs text-gray-300 ${label.positionClass}`}>
                  {label.text}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right: 7 Conditions */}
        <div className="w-7/12 flex flex-col">
          <div className="grid grid-cols-2 grid-rows-4 gap-x-6 gap-y-4 w-full h-full flex-1">
            {content.conditions.slice(0, 6).map((item, idx) => (
              <div key={idx} className="slide4-item opacity-0 flex items-center space-x-4 bg-[#1A1F2E]/40 p-4 rounded-xl border border-gray-700/30">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#EBCB8B]/20 text-[#EBCB8B] flex items-center justify-center font-bold font-mono text-sm">
                  {idx + 1}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#F5F7FA]">{item.title}</h3>
                  {!isSimple && <p className="text-[10px] text-gray-400 font-mono mt-1">{item.desc}</p>}
                </div>
              </div>
            ))}
            <div className="col-span-2 slide4-item opacity-0 flex items-center space-x-4 bg-[#1A1F2E]/40 p-4 rounded-xl border border-gray-700/30">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#EBCB8B]/20 text-[#EBCB8B] flex items-center justify-center font-bold font-mono text-sm">
                7
              </div>
              <div>
                <h3 className="text-sm font-semibold text-[#F5F7FA]">{content.conditions[6].title}</h3>
                {!isSimple && <p className="text-[10px] text-gray-400 font-mono mt-1">{content.conditions[6].desc}</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide4;
