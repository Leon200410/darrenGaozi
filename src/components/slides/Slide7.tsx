import React, { useEffect, useRef, useState } from 'react';
import anime from 'animejs';
import { presentationContent } from '../../content/presentation';

const Slide7: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeImg, setActiveImg] = useState<string | null>(null);
  const content = presentationContent.slide7;

  useEffect(() => {
    if (containerRef.current) {
      const tl = anime.timeline({
        easing: 'easeOutQuint',
      });

      tl.add({
        targets: '.slide7-title',
        opacity: [0, 1],
        translateY: [-50, 0],
        duration: 1000,
        delay: 200,
      })
      .add({
        targets: '.slide7-center',
        scale: [0, 1],
        opacity: [0, 1],
        duration: 800,
      }, '-=600')
      .add({
        targets: '.slide7-ring-item',
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 600,
        delay: anime.stagger(100),
      }, '-=400')
      .add({
        targets: '.slide7-dashboard',
        opacity: [0, 1],
        scale: [0.9, 1],
        duration: 800,
        delay: anime.stagger(150),
      }, '-=800')
      .add({
        targets: '.slide7-line',
        opacity: [0, 0.5],
        duration: 1000,
        delay: anime.stagger(150),
      }, '-=1000');
    }
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full flex flex-col items-center justify-center px-[5%] py-8 md:py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>
      
      <h2 className="slide7-title text-4xl font-bold text-center text-white mb-8 opacity-0 relative z-30">
        {content.title}
      </h2>

      <div className="w-full relative flex-1 min-h-0 max-w-[1800px] mx-auto mt-4">
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
          {content.dashboards.map((board, idx) => (
            <line
              key={`line-${idx}`}
              x1="50%"
              y1="50%"
              x2={board.lineEnd.x}
              y2={board.lineEnd.y}
              stroke={board.color}
              strokeWidth="1.5"
              strokeDasharray="6 6"
              className="slide7-line opacity-0"
            />
          ))}
        </svg>

        {content.dashboards.map((item, idx) => (
          <div
            key={`card-${idx}`}
            onClick={() => setActiveImg(item.img)}
            className="slide7-dashboard opacity-0 absolute flex flex-col bg-[#1A1F2E]/70 border border-gray-700/50 backdrop-blur-md rounded-xl p-3 shadow-2xl transition-all duration-300 hover:scale-[1.1] hover:z-50 hover:border-[#8A7CF5]/60 hover:shadow-[0_0_30px_rgba(138,124,245,0.4)] cursor-pointer group"
            style={{
              top: item.pos.top,
              left: 'left' in item.pos ? item.pos.left : undefined,
              right: 'right' in item.pos ? item.pos.right : undefined,
              width: '24%',
              height: '30%',
            }}
          >
            <div className="flex items-center gap-2 mb-2 flex-shrink-0">
              <div className="w-1.5 h-1.5 rounded-full transition-transform group-hover:scale-150" style={{ backgroundColor: item.color, boxShadow: `0 0 8px ${item.color}` }}></div>
              <span className="text-[10px] lg:text-xs text-gray-200 font-semibold tracking-wide truncate">{item.title}</span>
            </div>
            <div className="w-full flex-1 min-h-0 relative rounded-lg overflow-hidden bg-black/60 border border-gray-800/60 group-hover:border-[#8A7CF5]/50 transition-colors">
              <img src={item.img} alt={item.title} className="absolute inset-0 w-full h-full object-contain" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-[#8A7CF5]/10 transition-colors pointer-events-none"></div>
            </div>
          </div>
        ))}

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] flex items-center justify-center flex-shrink-0 z-20">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200">
            <circle cx="100" cy="100" r="95" fill="#0f1225" stroke="#4F46E5" strokeWidth="0.5" strokeDasharray="2 3"/>
            <line x1="100" y1="100" x2="100" y2="5" stroke="#4F46E5" strokeWidth="0.5" strokeDasharray="2 3"/>
            <line x1="100" y1="100" x2="182.2" y2="50" stroke="#4F46E5" strokeWidth="0.5" strokeDasharray="2 3"/>
            <line x1="100" y1="100" x2="182.2" y2="150" stroke="#4F46E5" strokeWidth="0.5" strokeDasharray="2 3"/>
            <line x1="100" y1="100" x2="100" y2="195" stroke="#4F46E5" strokeWidth="0.5" strokeDasharray="2 3"/>
            <line x1="100" y1="100" x2="17.8" y2="150" stroke="#4F46E5" strokeWidth="0.5" strokeDasharray="2 3"/>
            <line x1="100" y1="100" x2="17.8" y2="50" stroke="#4F46E5" strokeWidth="0.5" strokeDasharray="2 3"/>
          </svg>

          <div className="slide7-center opacity-0 z-10 w-24 h-24 bg-black rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(138,124,245,0.4)] overflow-hidden p-4 relative">
            <img src="/logo.svg" alt={content.logo.alt} className="w-full h-full object-contain" onError={(e) => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.parentElement!.innerHTML = `<span class="text-3xl font-black italic text-white">${content.logo.fallback}</span>`;
            }} />
            <div className="absolute inset-0 rounded-full border border-indigo-500/50"></div>
          </div>

          {content.systems.map((sys, idx) => {
            const rad = (sys.angle - 90) * (Math.PI / 180);
            const radius = 115;
            const x = Math.cos(rad) * radius;
            const y = Math.sin(rad) * radius;

            return (
              <div
                key={idx}
                className="slide7-ring-item opacity-0 absolute text-center w-20 text-sm text-indigo-100 font-medium whitespace-pre-line leading-snug"
                style={{ transform: `translate(${x}px, ${y}px)` }}
              >
                {sys.name}
              </div>
            );
          })}
        </div>
      </div>

      {activeImg && (
        <div
          className="fixed inset-0 z-[100] bg-[#0A0E17]/90 backdrop-blur-sm flex items-center justify-center p-8 md:p-16 cursor-zoom-out transition-all duration-300"
          onClick={() => setActiveImg(null)}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <img
              src={activeImg}
              alt={content.lightboxAlt}
              className="max-w-full max-h-full object-contain rounded-xl shadow-[0_0_50px_rgba(0,0,0,0.8)] border border-gray-700/50 animate-[zoomIn_0.3s_ease-out]"
            />
            <button
              className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white backdrop-blur-md transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setActiveImg(null);
              }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Slide7;
