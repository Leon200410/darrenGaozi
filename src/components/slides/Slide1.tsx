import React, { useEffect, useRef } from 'react';
import anime from 'animejs';

const Slide1: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

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

  const points = [
    { title: "单一事件难复用", desc: "单一风格驱动红利衰减" },
    { title: "资金结构迁移，尾部加厚", desc: "机构占比上升改变市场生态" },
    { title: "需更强鲁棒与系统化", desc: "对策略综合要求大幅提升" }
  ];

  return (
    <div ref={containerRef} className="w-full h-full flex flex-col items-center justify-center px-12 max-w-7xl mx-auto py-8">
      {/* Title */}
      <h2 className="slide1-title text-4xl font-bold text-[#F5F7FA] mb-4 leading-tight opacity-0 text-center">
        一、市场变了：单一驱动的时代已过去
      </h2>
      
      {/* Subtitle / Quote */}
      <div className="slide1-subtitle opacity-0 text-center mb-6">
        <p className="text-lg text-[#F5F7FA] font-medium leading-relaxed bg-[#1A1F2E]/60 inline-block px-6 py-3 rounded-full border border-gray-700/50 backdrop-blur-sm shadow-lg">
          “过去拼抓住一个好策略，现在拼<span className="text-[#EBCB8B] font-bold text-xl mx-2">把策略做成系统</span>。”
        </p>
      </div>

      {/* 3 Points Horizontal */}
      <div className="flex justify-center gap-6 w-full mb-6">
        {points.map((point, idx) => (
          <div key={idx} className="slide1-point opacity-0 flex flex-col items-center text-center bg-[#1A1F2E]/40 py-4 px-6 rounded-xl border border-gray-700/30 w-1/3 transition-transform hover:-translate-y-1">
            <div className="w-8 h-8 mb-2 rounded-full bg-[#8A7CF5]/20 flex items-center justify-center shadow-[0_0_15px_rgba(138,124,245,0.2)]">
               <div className="w-2.5 h-2.5 rounded-full bg-[#8A7CF5]"></div>
            </div>
            <h3 className="text-[#F5F7FA] text-base font-bold mb-1">{point.title}</h3>
            <p className="text-gray-400 text-xs">{point.desc}</p>
          </div>
        ))}
      </div>

      {/* 2 Charts Horizontal */}
      <div className="flex justify-center gap-6 w-full flex-1 min-h-0">
        {/* Chart 1 */}
        <div className="slide1-chart opacity-0 bg-[#1A1F2E]/60 p-4 rounded-xl border border-gray-700/50 backdrop-blur-sm relative flex flex-col w-1/2 h-full min-h-0">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-xs font-bold text-[#8A7CF5] uppercase tracking-wider">资金结构迁移 (投资者构成)</h3>
            <p className="text-[10px] text-gray-400">市场参与者结构深刻演变</p>
          </div>
          <div className="w-full flex-1 min-h-0 flex items-center justify-center bg-black/30 rounded-lg p-2">
             <img src="/chart1.svg" alt="Chart 1" className="w-full h-full object-contain" onError={(e) => {
               e.currentTarget.style.display = 'none';
               e.currentTarget.parentElement!.innerHTML = '<span class="text-gray-500 text-xs">/public/chart1.svg</span>';
             }} />
          </div>
        </div>

        {/* Chart 2 */}
        <div className="slide1-chart opacity-0 bg-[#1A1F2E]/60 p-4 rounded-xl border border-gray-700/50 backdrop-blur-sm relative flex flex-col w-1/2 h-full min-h-0">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-xs font-bold text-[#8A7CF5] uppercase tracking-wider">分布形态变化 (收益因子)</h3>
            <p className="text-[10px] text-gray-400">收益分布尾部加厚</p>
          </div>
          <div className="w-full flex-1 min-h-0 flex items-center justify-center bg-black/30 rounded-lg p-2">
             <img src="/chart2.svg" alt="Chart 2" className="w-full h-full object-contain" onError={(e) => {
               e.currentTarget.style.display = 'none';
               e.currentTarget.parentElement!.innerHTML = '<span class="text-gray-500 text-xs">/public/chart2.svg</span>';
             }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide1;