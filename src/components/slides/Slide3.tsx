import React, { useEffect, useRef } from 'react';
import anime from 'animejs';

const Slide3: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

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

  const systems = [
    { num: '01', title: '数据系统', desc: '数据接入、清洗、特征化、统一事后监控' },
    { num: '02', title: '投研系统', desc: '把假设、回测、归因连成研究闭环' },
    { num: '03', title: '执行系统', desc: '把研究闭环向路由、成交质量与成本控制延伸' },
    { num: '04', title: '风控系统', desc: '让风险从最后解释变成事中动作' },
    { num: '05', title: '组织系统', desc: '通过分工、SOP、复盘实现规模化复制' }
  ];

  const maturity = [
    { label: '投研系统', score: 92, color: '#8A7CF5', strokeDash: '231' },
    { label: '风控系统', score: 91, color: '#58E3C2', strokeDash: '228' },
    { label: '数据系统', score: 89, color: '#EBCB8B', strokeDash: '223' },
    { label: '执行系统', score: 87, color: '#F6B26B', strokeDash: '218' },
    { label: '组织系统', score: 84, color: '#A0AAB2', strokeDash: '211' }
  ];

  return (
    <div ref={containerRef} className="w-full h-full flex flex-col justify-center px-12 max-w-7xl mx-auto">
      <h2 className="slide3-title text-4xl font-bold text-[#F5F7FA] mb-10 opacity-0 text-center leading-tight">
        三、核心答案：体系驱动，才是新周期里真正的竞争力
      </h2>

      <div className="flex w-full gap-12">
        <div className="w-1/2 flex flex-col justify-center">
          <h3 className="slide3-title text-sm font-semibold text-[#8A7CF5] mb-6 tracking-widest opacity-0">SYSTEM EQUATION: 体系驱动 = 五套系统协同</h3>
          <div className="grid grid-cols-2 gap-4">
            {systems.map((sys, idx) => (
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
            <h3 className="text-sm font-semibold text-[#8A7CF5] mb-8 tracking-widest">MATURITY SPECTRUM: 系统成熟度分布</h3>
            
            <div className="flex-1 flex items-center justify-between">
              {/* Concentric Circles Chart */}
              <div className="relative w-48 h-48 ml-4">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  {/* Background tracks */}
                  {[45, 38, 31, 24, 17].map((r, i) => (
                    <circle key={`bg-${i}`} cx="50" cy="50" r={r} fill="transparent" stroke="#1f2937" strokeWidth="5" />
                  ))}
                  {/* Foreground tracks */}
                  {maturity.map((m, i) => {
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
                  <span className="text-[#F5F7FA] font-bold text-sm tracking-widest">ALPHA</span>
                  <span className="text-gray-400 text-xs">System</span>
                </div>
              </div>

              {/* Legend & Scores */}
              <div className="flex-1 flex flex-col gap-4 ml-10">
                {maturity.map((m, i) => (
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