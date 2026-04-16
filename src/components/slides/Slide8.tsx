import React, { useEffect, useRef } from 'react';
import anime from 'animejs';

const Slide8: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const tl = anime.timeline({
        easing: 'easeOutExpo',
      });

      tl.add({
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

  const points = [
    { text: "单一驱动仍然重要，但它更像入\n口，而不是终局。", color: "from-[#8A7CF5]" },
    { text: "机构竞争力的核心，正在从抓机\n会转向生产 Alpha。", color: "from-[#58E3C2]" },
    { text: "香港与 AI，会放大那些已经完成\n系统化升级的团队。", color: "from-[#EBCB8B]" }
  ];

  return (
    <div ref={containerRef} className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden px-[5%] py-8 md:py-12">
      
      {/* Main Title Group */}
      <div className="text-center w-full flex flex-col items-center mb-16 z-10">
        <h2 className="slide8-title text-6xl md:text-[80px] font-black text-[#F2F2F2] leading-[1.1] opacity-0 tracking-tight drop-shadow-md mb-8">
          谁先完成体系化，<br/>
          谁更可能赢下新周期。
        </h2>
        
        <div className="slide8-desc w-full opacity-0 flex justify-center">
          <p className="text-base md:text-lg text-[#BFC6D0] leading-relaxed font-normal tracking-wide text-center">
            从策略驱动到体系驱动，本质上不是从“聪明”走向“笨重”，而是从
            <span className="text-white font-semibold mx-2 px-3 py-1 rounded-full bg-[#8A7CF5]/20 shadow-[0_0_10px_rgba(138,124,245,0.15)]">“局部成效”</span>
            走向
            <span className="text-white font-semibold mx-2 px-3 py-1 rounded-full bg-[#58E3C2]/20 shadow-[0_0_10px_rgba(88,227,194,0.15)]">“长期可复制”</span>。
          </p>
        </div>
      </div>

      {/* 3 Summary Cards */}
      <div className="flex justify-between gap-6 w-full z-10 px-4">
        {points.map((point, idx) => (
          <div key={idx} className="slide8-item opacity-0 flex flex-col items-center justify-center bg-[#1A1F2E]/80 p-8 rounded-2xl border border-gray-700/50 backdrop-blur-sm shadow-xl hover:-translate-y-1 transition-transform duration-300 relative w-1/3 min-h-[160px]">
            <div className={`absolute top-0 left-10 right-10 h-[2px] bg-gradient-to-r transparent via-${point.color.replace('from-', '')} to-transparent opacity-60`}></div>
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