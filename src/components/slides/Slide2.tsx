import React, { useEffect, useRef } from 'react';
import anime from 'animejs';

const Slide2: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

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

  const items = [
    { title: "信息获取门槛显著降低", desc: "信息更多不代表有效更多", color: "bg-[#8A7CF5]" },
    { title: "流动性要素碎片化", desc: "CEX/DEX, RWA, ETF 并存", color: "bg-[#EBCB8B]" },
    { title: "风险更立体多元", desc: "技术、监管、政治、信用、组织", color: "bg-[#58E3C2]" },
    { title: "机构化加速", desc: "不再由散户情绪驱动", color: "bg-[#F6B26B]" }
  ];

  return (
    <div ref={containerRef} className="w-full h-full flex flex-col justify-center px-12 max-w-7xl mx-auto">
      <h2 className="slide2-title text-4xl font-bold text-[#F5F7FA] mb-2 opacity-0 text-center">
        二、特征表现：市场结构发生变化
      </h2>
      <h3 className="slide2-title text-xl text-[#8A7CF5] mb-12 opacity-0 pl-10 font-medium tracking-wide">
        从情绪主导到配置主导
      </h3>

      <div className="flex w-full gap-12">
        <div className="w-5/12 flex gap-6">
          {/* Donut Chart 1 */}
          <div className="slide2-chart opacity-0 flex-1 bg-[#1A1F2E]/60 p-6 rounded-2xl border border-gray-700/50 backdrop-blur-sm flex flex-col items-center justify-center">
            <h4 className="text-gray-400 text-sm mb-6 font-mono tracking-wider">BEFORE</h4>
            <div className="relative w-32 h-32">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" fill="transparent" stroke="#1f2937" strokeWidth="12" />
                <circle cx="50" cy="50" r="40" fill="transparent" stroke="#8A7CF5" strokeWidth="12" strokeDasharray="251.2" strokeDashoffset="50" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center flex-col">
                <span className="text-[#F5F7FA] font-bold text-sm">情绪更强</span>
              </div>
            </div>
          </div>

          {/* Donut Chart 2 */}
          <div className="slide2-chart opacity-0 flex-1 bg-[#1A1F2E]/60 p-6 rounded-2xl border border-gray-700/50 backdrop-blur-sm flex flex-col items-center justify-center">
            <h4 className="text-gray-400 text-sm mb-6 font-mono tracking-wider">NOW</h4>
            <div className="relative w-32 h-32">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" fill="transparent" stroke="#1f2937" strokeWidth="12" />
                <circle cx="50" cy="50" r="40" fill="transparent" stroke="#EBCB8B" strokeWidth="12" strokeDasharray="251.2" strokeDashoffset="60" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center flex-col">
                <span className="text-[#F5F7FA] font-bold text-sm">配置更强</span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-7/12 flex flex-col gap-6 justify-center">
          <div className="grid grid-cols-2 gap-4">
            {items.map((item, idx) => (
              <div key={idx} className="slide2-item opacity-0 bg-[#1A1F2E]/40 p-5 rounded-xl border border-gray-700/30 flex flex-col justify-center">
                <h4 className="text-[#F5F7FA] font-semibold text-lg mb-1">{item.title}</h4>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="slide2-item opacity-0 mt-4 bg-[#1A1F2E]/40 p-6 rounded-xl border border-gray-700/30">
            <h4 className="text-sm text-gray-400 mb-4 uppercase tracking-wider font-mono">多因素影响强度对比</h4>
            <div className="space-y-3">
              {[
                { label: '信息门槛', w: '90%', c: 'bg-[#EBCB8B]' },
                { label: '流动碎片', w: '85%', c: 'bg-[#8A7CF5]' },
                { label: '风险维度', w: '75%', c: 'bg-[#58E3C2]' },
                { label: '机构配置', w: '80%', c: 'bg-[#F6B26B]' }
              ].map((bar, i) => (
                <div key={i} className="flex items-center text-xs">
                  <span className="w-20 text-gray-400 text-right pr-4">{bar.label}</span>
                  <div className="flex-1 bg-gray-800 h-2.5 rounded-full overflow-hidden">
                    <div className={`h-full ${bar.c} rounded-full`} style={{ width: bar.w }}></div>
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