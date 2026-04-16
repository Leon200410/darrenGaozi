import React, { useEffect, useRef } from 'react';
import anime from 'animejs';

const Slide7: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

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
        delay: anime.stagger(200),
      }, '-=800');
    }
  }, []);

  const systems = [
    "数据管理系统", "策略管理系统", "风控系统", 
    "运营管理系统", "投资组合管理系统", "交易执行系统"
  ];

  return (
    <div ref={containerRef} className="w-full h-full flex flex-col items-center justify-center px-12 max-w-7xl mx-auto relative overflow-hidden">
      <h2 className="slide7-title text-4xl font-bold text-center text-white mb-20 opacity-0 relative z-20">
        七、机构级智能高效的数字资产管理系统
      </h2>

      <div className="flex w-full justify-between items-center relative">
        {/* Left Dashboards */}
        <div className="flex flex-col space-y-4 w-1/4">
          <div className="slide7-dashboard opacity-0 h-20 bg-gray-900/60 border border-gray-700 rounded-xl p-3 flex flex-col justify-between backdrop-blur-md relative overflow-hidden">
            <span className="text-[10px] text-gray-400 font-mono">全市场、多品类、高质量数据库</span>
            <div className="h-2/3 flex items-end space-x-1">
              {[...Array(10)].map((_, i) => <div key={i} className="flex-1 bg-cyan-500/50 rounded-t" style={{height: `${Math.random() * 100}%`}}></div>)}
            </div>
          </div>
          <div className="slide7-dashboard opacity-0 h-20 bg-gray-900/60 border border-gray-700 rounded-xl p-3 flex flex-col justify-between backdrop-blur-md">
            <span className="text-[10px] text-gray-400 font-mono">最佳执行价格、速度和成本</span>
            <div className="flex space-x-2 h-2/3 items-center">
              <div className="h-full w-1/3 bg-green-500/40 rounded"></div>
              <div className="h-1/2 w-1/3 bg-red-500/40 rounded"></div>
              <div className="h-3/4 w-1/3 bg-green-500/40 rounded"></div>
            </div>
          </div>
        </div>

        {/* Center Ring */}
        <div className="relative w-80 h-80 flex items-center justify-center">
          <div className="slide7-center opacity-0 z-10 w-24 h-24 bg-black rounded-full border-2 border-[#8A7CF5] flex items-center justify-center shadow-[0_0_40px_rgba(138,124,245,0.6)] overflow-hidden p-3">
            <img src="/logo.svg" alt="ForthTech Logo" className="w-full h-full object-contain" onError={(e) => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.parentElement!.innerHTML = '<span class="text-2xl font-black italic text-white">FT</span>';
            }} />
          </div>

          {systems.map((sys, idx) => {
            const angle = (idx * 360) / systems.length;
            const rad = angle * (Math.PI / 180);
            const radius = 110;
            const x = Math.sin(rad) * radius;
            const y = -Math.cos(rad) * radius;

            return (
              <div 
                key={idx} 
                className="slide7-ring-item opacity-0 absolute text-center w-24 bg-indigo-900/40 border border-indigo-500/30 rounded-lg p-1.5 text-xs text-indigo-100 backdrop-blur-xl"
                style={{ transform: `translate(${x}px, ${y}px)` }}
              >
                {sys}
              </div>
            );
          })}

          {/* Background circles */}
          <div className="absolute inset-0 border border-indigo-500/20 rounded-full animate-spin-slow"></div>
          <div className="absolute inset-4 border border-indigo-500/10 rounded-full animate-reverse-spin"></div>
        </div>

        {/* Right Dashboards */}
        <div className="flex flex-col space-y-4 w-1/4">
          <div className="slide7-dashboard opacity-0 h-20 bg-gray-900/60 border border-gray-700 rounded-xl p-3 flex flex-col justify-between backdrop-blur-md">
            <span className="text-[10px] text-gray-400 font-mono">AI赋能的一站式策略研发系统</span>
            <div className="grid grid-cols-3 gap-1 h-2/3 mt-2">
              {[...Array(6)].map((_, i) => <div key={i} className="bg-purple-500/30 rounded-sm"></div>)}
            </div>
          </div>
          <div className="slide7-dashboard opacity-0 h-20 bg-gray-900/60 border border-gray-700 rounded-xl p-3 flex flex-col justify-between backdrop-blur-md">
            <span className="text-[10px] text-gray-400 font-mono">7*24小时全链路智能监控</span>
            <div className="relative w-full h-2/3 mt-2 flex items-center">
              <div className="w-full h-px bg-gray-600"></div>
              <div className="absolute w-2 h-2 rounded-full bg-yellow-400 shadow-[0_0_10px_yellow]" style={{left: '30%'}}></div>
              <div className="absolute w-3 h-3 rounded-full bg-red-500 shadow-[0_0_10px_red]" style={{left: '70%'}}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide7;
