import React, { useEffect, useRef } from 'react';
import anime from 'animejs';
import { useLocation } from 'react-router-dom';
import { presentationContent } from '../../content/presentation';

const Slide2: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const isSimple = location.pathname === '/simple';
  const content = presentationContent.slide2;

  useEffect(() => {
    if (containerRef.current) {
      const tl = anime.timeline({
        easing: 'easeOutExpo',
      });

      tl.add({
        targets: '.slide2-title',
        translateY: [-30, 0],
        opacity: [0, 1],
        duration: 800,
        delay: 200,
      })
      .add({
        targets: '.slide2-subtitle',
        translateY: [20, 0],
        opacity: [0, 1],
        duration: 800,
      }, '-=400')
      .add({
        targets: '.slide2-chart',
        scale: [0.8, 1],
        opacity: [0, 1],
        duration: 800,
      }, '-=400')
      .add({
        targets: '.slide2-item',
        translateX: [50, 0],
        opacity: [0, 1],
        duration: 600,
        delay: anime.stagger(150),
      }, '-=600');
    }
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full flex flex-col justify-center px-[5%] py-8 md:py-12">
      <h2 className="slide2-title text-4xl font-bold text-[#F5F7FA] mb-4 leading-tight opacity-0 text-center">
        {content.title}
      </h2>
      <div className="slide2-subtitle opacity-0 text-center mb-6">
        <p className="text-lg text-[#F5F7FA] font-medium leading-relaxed bg-[#1A1F2E]/60 inline-block px-6 py-3 rounded-full border border-gray-700/50 backdrop-blur-sm shadow-lg">
          {content.quote.prefix}
        </p>
      </div>
      <h3 className="slide2-title text-xl text-[#8A7CF5] mb-12 opacity-0 pl-10 font-medium tracking-wide">
        {content.subtitle}
      </h3>

      <div className="flex w-full gap-12">
        <div className="w-5/12 flex gap-6">
          {content.donuts.map((donut, idx) => (
            <div key={idx} className="slide2-chart opacity-0 flex-1 bg-[#1A1F2E]/60 p-6 rounded-2xl border border-gray-700/50 backdrop-blur-sm flex flex-col items-center justify-center">
              <h4 className="text-gray-400 text-sm mb-6 font-mono tracking-wider">{donut.eyebrow}</h4>
              <div className="relative w-32 h-32">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="40" fill="transparent" stroke="#1f2937" strokeWidth="12" />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                    stroke={donut.stroke}
                    strokeWidth="12"
                    strokeDasharray="251.2"
                    strokeDashoffset={donut.strokeDashoffset}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center flex-col">
                  <span className="text-[#F5F7FA] font-bold text-sm">{donut.label}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="w-7/12 flex flex-col gap-6 justify-center">
          <div className="grid grid-cols-2 gap-4">
            {content.items.map((item, idx) => (
              <div key={idx} className="slide2-item opacity-0 bg-[#1A1F2E]/40 p-5 rounded-xl border border-gray-700/30 flex flex-col justify-center">
                <h4 className="text-[#F5F7FA] font-semibold text-lg mb-1">{item.title}</h4>
                {!isSimple && <p className="text-gray-400 text-sm">{item.desc}</p>}
              </div>
            ))}
          </div>
          
          <div className="slide2-item opacity-0 mt-4 bg-[#1A1F2E]/40 p-6 rounded-xl border border-gray-700/30">
            <h4 className="text-sm text-gray-400 mb-4 uppercase tracking-wider font-mono">{content.comparison.title}</h4>
            <div className="space-y-3">
              {content.comparison.bars.map((bar, i) => (
                <div key={i} className="flex items-center text-xs">
                  <span className="w-20 text-gray-400 text-right pr-4">{bar.label}</span>
                  <div className="flex-1 bg-gray-800 h-2.5 rounded-full overflow-hidden">
                    <div className={`h-full ${bar.color} rounded-full`} style={{ width: bar.width }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide2;
