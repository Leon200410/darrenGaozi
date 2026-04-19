import React, { useEffect, useRef } from 'react';
import anime from 'animejs';
import { useLocation } from 'react-router-dom';
import { presentationContent } from '../../content/presentation';

const Slide5: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const isSimple = location.pathname === '/simple';
  const content = presentationContent.slide5;

  useEffect(() => {
    if (containerRef.current) {
      const tl = anime.timeline({
        easing: 'easeOutSine',
      });

      tl.add({
        targets: '.slide5-title',
        translateY: [-30, 0],
        opacity: [0, 1],
        duration: 800,
        delay: 200,
      })
      .add({
        targets: '.slide5-subtitle',
        translateY: [20, 0],
        opacity: [0, 1],
        duration: 800,
      }, '-=400')
      .add({
        targets: '.slide5-funnel',
        scale: [0.8, 1],
        opacity: [0, 1],
        duration: 800,
      }, '-=400')
      .add({
        targets: '.slide5-item',
        translateX: [50, 0],
        opacity: [0, 1],
        duration: 600,
        delay: anime.stagger(150),
      }, '-=600');
    }
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full flex flex-col justify-center px-[5%] py-8 md:py-12 relative">
      <h2 className={`slide5-title font-bold text-[#F5F7FA] mb-4 leading-tight opacity-0 text-center ${isSimple ? 'text-6xl' : 'text-4xl'}`}>
        {content.title.line1}
      </h2>
      {content.quote.prefix && (
        <div className="slide5-subtitle opacity-0 text-center mb-6">
          <p className={`text-[#F5F7FA] font-medium leading-relaxed bg-[#1A1F2E]/60 inline-block rounded-full border border-gray-700/50 backdrop-blur-sm shadow-lg ${isSimple ? 'text-2xl px-8 py-4' : 'text-lg px-6 py-3'}`}>
            {content.quote.prefix}
          </p>
        </div>
      )}

      <div className="flex w-full gap-12 mt-4">
        {/* Left: Funnel Chart */}
        <div className="w-5/12 flex flex-col">
          <div className="slide5-funnel opacity-0 bg-[#1A1F2E]/60 p-8 rounded-2xl border border-gray-700/50 backdrop-blur-sm flex-1 flex flex-col items-center">
            <div className={`w-full flex justify-between items-center ${isSimple ? 'mb-12' : 'mb-8'}`}>
              <h3 className={`font-semibold text-[#8A7CF5] tracking-widest uppercase ${isSimple ? 'text-xl' : 'text-sm'}`}>{content.funnel.eyebrow}</h3>
              <h4 className={`text-[#F5F7FA] font-bold ${isSimple ? 'text-2xl' : 'text-base'}`}>{content.funnel.title}</h4>
            </div>
            
            <div className="relative w-full flex-1 min-h-[16rem] flex flex-col items-center justify-start mt-4">
              <svg className="w-full h-full absolute inset-0" viewBox="0 0 100 100" preserveAspectRatio="none">
                <polygon points="0,0 100,0 80,33 20,33" fill="#8A7CF5" fillOpacity="0.8" />
                <polygon points="20,34 80,34 65,66 35,66" fill="#8A7CF5" fillOpacity="0.5" />
                <polygon points="35,67 65,67 55,100 45,100" fill="#EBCB8B" fillOpacity="0.8" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center">
                <div className="h-[33%] w-full flex items-center justify-center">
                   <span className={`text-white font-bold ${isSimple ? 'text-lg' : 'text-xs'}`}>{content.funnel.score}</span>
                </div>
                <div className="h-[33%] w-full flex items-center justify-center"></div>
                <div className="h-[34%] w-full flex items-center justify-center"></div>
              </div>
              
              {/* Labels beside funnel */}
              <div className={`absolute right-0 top-[15%] text-gray-300 ${isSimple ? 'text-base' : 'text-xs'}`}>{content.funnel.labels[0]}</div>
              <div className={`absolute right-[5%] top-[48%] text-gray-300 ${isSimple ? 'text-base' : 'text-xs'}`}>{content.funnel.labels[1]}</div>
              <div className={`absolute right-[15%] top-[82%] text-[#EBCB8B] font-bold ${isSimple ? 'text-base' : 'text-xs'}`}>{content.funnel.labels[2]}</div>
            </div>
          </div>
        </div>

        {/* Right: AI Feature Blocks */}
        <div className="w-7/12 flex flex-col gap-4 justify-center">
          {content.items.map((item, idx) => (
            <div key={idx} className={`slide5-item opacity-0 flex items-start space-x-4 bg-[#1A1F2E]/40 rounded-xl border border-gray-700/30 ${isSimple ? 'p-8' : 'p-5'}`}>
              <div className={`flex-shrink-0 rounded-full bg-[#8A7CF5]/20 flex items-center justify-center ${isSimple ? 'w-16 h-16' : 'w-10 h-10'}`}>
                <svg className={`text-[#8A7CF5] ${isSimple ? 'w-8 h-8' : 'w-5 h-5'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d={item.icon}></path>
                </svg>
              </div>
              <div className="flex flex-col justify-center">
                <h3 className={`font-bold text-[#F5F7FA] mb-1 ${isSimple ? 'text-2xl mt-3' : 'text-lg'}`}>{item.title}</h3>
                {!isSimple && <p className="text-sm text-gray-400">{item.desc}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slide5;
