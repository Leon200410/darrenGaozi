import React, { useEffect, useRef } from 'react';
import anime from 'animejs';

const Slide5: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

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

  const items = [
    {
      title: "AI 不是直接替代决策",
      desc: "人机协同，最后一跳由人完成，AI 不在模型输出本身。",
      icon: "M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" // Mock SVG path
    },
    {
      title: "重构研发与运营效率",
      desc: "从洞察、实验、评估到上线，极大提升效率与迭代速度。",
      icon: "M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" 
    },
    {
      title: "让风控与 SOP 更可嵌入",
      desc: "让操作动作、运营流程和标准化明确嵌入日常系统。",
      icon: "M9 11l3 3L22 4"
    },
    {
      title: "促进知识沉淀与复用",
      desc: "打造企业级知识库、特征库与案例库，减少重复造轮子。",
      icon: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
    }
  ];

  return (
    <div ref={containerRef} className="w-full h-full flex flex-col justify-center px-12 max-w-7xl mx-auto relative">
      <h2 className="slide5-title text-center text-4xl font-bold text-[#F5F7FA] mb-10 opacity-0 leading-tight">
        五、AI 的作用不是替代人或替你决策<br/>
        <span className="text-[#8A7CF5] mt-2 block">而是把 AI 内嵌到企业生产力经营</span>
      </h2>

      <div className="flex w-full gap-12 mt-4">
        {/* Left: Funnel Chart */}
        <div className="w-5/12 flex flex-col justify-center">
          <div className="slide5-funnel opacity-0 bg-[#1A1F2E]/60 p-8 rounded-2xl border border-gray-700/50 backdrop-blur-sm h-full flex flex-col items-center">
            <div className="w-full flex justify-between items-center mb-8">
              <h3 className="text-sm font-semibold text-[#8A7CF5] tracking-widest uppercase">FUNNEL</h3>
              <h4 className="text-[#F5F7FA] font-bold">AI 让生产摩擦层层下降</h4>
            </div>
            
            <div className="relative w-full h-64 flex flex-col items-center justify-start mt-4">
              <svg className="w-full h-full absolute inset-0" viewBox="0 0 100 100" preserveAspectRatio="none">
                <polygon points="0,0 100,0 80,33 20,33" fill="#8A7CF5" fillOpacity="0.8" />
                <polygon points="20,34 80,34 65,66 35,66" fill="#8A7CF5" fillOpacity="0.5" />
                <polygon points="35,67 65,67 55,100 45,100" fill="#EBCB8B" fillOpacity="0.8" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center">
                <div className="h-[33%] w-full flex items-center justify-center">
                   <span className="text-white font-bold text-xs">摩擦指数分数: 63 / 100</span>
                </div>
                <div className="h-[33%] w-full flex items-center justify-center"></div>
                <div className="h-[34%] w-full flex items-center justify-center"></div>
              </div>
              
              {/* Labels beside funnel */}
              <div className="absolute right-0 top-[15%] text-xs text-gray-300">数据获取</div>
              <div className="absolute right-[5%] top-[48%] text-xs text-gray-300">研究特征</div>
              <div className="absolute right-[15%] top-[82%] text-xs text-[#EBCB8B] font-bold">全员协同</div>
            </div>
          </div>
        </div>

        {/* Right: AI Feature Blocks */}
        <div className="w-7/12 flex flex-col gap-4 justify-center">
          {items.map((item, idx) => (
            <div key={idx} className="slide5-item opacity-0 flex items-start space-x-4 bg-[#1A1F2E]/40 p-5 rounded-xl border border-gray-700/30">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#8A7CF5]/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-[#8A7CF5]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d={item.icon}></path>
                </svg>
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-lg font-bold text-[#F5F7FA] mb-1">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slide5;