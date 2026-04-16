import React, { useEffect, useRef } from 'react';
import anime from 'animejs';

const Slide6: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const tl = anime.timeline({
        easing: 'easeOutQuart',
      });

      tl.add({
        targets: '.slide6-title',
        translateY: [-30, 0],
        opacity: [0, 1],
        duration: 800,
        delay: 200,
      })
      .add({
        targets: '.slide6-desc',
        opacity: [0, 1],
        duration: 800,
      }, '-=400')
      .add({
        targets: '.slide6-chart',
        scale: [0.9, 1],
        opacity: [0, 1],
        duration: 800,
      }, '-=600')
      .add({
        targets: '.slide6-item',
        translateX: [50, 0],
        opacity: [0, 1],
        duration: 600,
        delay: anime.stagger(150),
      }, '-=600');
    }
  }, []);

  const points = [
    "资金流入增强，财富承接能力提升。",
    "家办数量创新高，财富管理需求快速上升。",
    "地缘不确定性提升时，香港作为配置平台更具吸引力。",
    "优质管理人、首仓能力与可前站化策略供给同步稀缺。"
  ];

  return (
    <div ref={containerRef} className="w-full h-full flex flex-col justify-center px-12 max-w-7xl mx-auto relative">
      <div className=" slide6-title opacity-0">
        <h2 className="text-4xl text-center font-bold text-[#F5F7FA] leading-tight m-auto">
          六、香港机遇
        </h2>
      </div>

      {/* <div className="absolute top-10 right-12 w-5/12 slide6-desc opacity-0 flex justify-end">
        <div className="border border-rose-500/80 rounded-lg py-3 px-6 shadow-[inset_0_0_15px_rgba(244,63,94,0.1)] inline-block">
          <p className="text-sm md:text-[15px] text-[#F5F7FA] leading-relaxed text-center font-light tracking-wide">
            香港不只是提供一个窗口，而是充当一个让新一代的<br/>能力被激活、实现成长的平台。
          </p>
        </div>
      </div> */}

      <div className="flex w-full gap-12 mt-10">
        {/* Left: Chart Module */}
        <div className="w-5/12 flex flex-col justify-center">
          <div className="slide6-chart opacity-0 bg-[#1A1F2E]/60 p-8 rounded-2xl border border-gray-700/50 backdrop-blur-sm h-full flex flex-col">
            <h3 className="text-xs font-semibold text-[#EBCB8B] mb-2 tracking-widest uppercase">OPPORTUNITY MAP</h3>
            <h4 className="text-[#F5F7FA] font-bold text-base mb-8">需求上升与供给略微滞后发生</h4>
            
            <div className="relative w-full h-64 flex mt-auto">
              {/* Mock Scatter/Line Chart */}
              <div className="w-1/3 relative h-full border-r border-gray-700/50">
                 {/* Y-axis labels */}
                 <div className="absolute -left-6 top-0 text-[10px] text-gray-400">100</div>
                 <div className="absolute -left-4 top-1/4 text-[10px] text-gray-400">80</div>
                 <div className="absolute -left-4 top-2/4 text-[10px] text-gray-400">60</div>
                 <div className="absolute -left-4 top-3/4 text-[10px] text-gray-400">40</div>
                 <div className="absolute -left-4 bottom-0 text-[10px] text-gray-400">20</div>
                 
                 {/* X-axis labels */}
                 <div className="absolute bottom-[-20px] left-0 text-[10px] text-gray-400">20</div>
                 <div className="absolute bottom-[-20px] left-1/4 text-[10px] text-gray-400">40</div>
                 <div className="absolute bottom-[-20px] left-2/4 text-[10px] text-gray-400">60</div>
                 <div className="absolute bottom-[-20px] left-3/4 text-[10px] text-gray-400">80</div>
                 <div className="absolute bottom-[-20px] right-0 text-[10px] text-gray-400">100</div>

                 {/* Grid lines */}
                 <div className="absolute top-1/4 left-0 right-0 border-b border-gray-700/30"></div>
                 <div className="absolute top-2/4 left-0 right-0 border-b border-gray-700/30"></div>
                 <div className="absolute top-3/4 left-0 right-0 border-b border-gray-700/30"></div>
                 <div className="absolute top-0 bottom-0 left-3/4 border-r border-gray-700/30"></div>

                 {/* Scatter dots */}
                 <div className="absolute bottom-[20%] left-[15%] w-4 h-4 bg-[#EBCB8B] rounded-full shadow-[0_0_10px_rgba(235,203,139,0.6)]"></div>
                 <div className="absolute bottom-[35%] left-[30%] w-5 h-5 bg-[#EBCB8B] rounded-full shadow-[0_0_10px_rgba(235,203,139,0.6)]"></div>
                 <div className="absolute bottom-[50%] left-[50%] w-6 h-6 bg-[#EBCB8B] rounded-full shadow-[0_0_10px_rgba(235,203,139,0.6)]"></div>
                 <div className="absolute bottom-[75%] left-[70%] w-5 h-5 bg-[#EBCB8B] rounded-full shadow-[0_0_10px_rgba(235,203,139,0.6)]"></div>
                 <div className="absolute bottom-[90%] right-[-12px] w-8 h-8 bg-[#EBCB8B] rounded-full shadow-[0_0_10px_rgba(235,203,139,0.6)] z-10 flex items-center justify-center">
                    <span className="text-[8px] font-bold text-black">30</span>
                 </div>
                 
                 <span className="absolute bottom-[75%] left-[85%] text-[10px] text-gray-300">25</span>
                 <span className="absolute bottom-[50%] left-[65%] text-[10px] text-gray-300">10</span>
              </div>

              <div className="w-2/3 relative h-full">
                 {/* Right Y-axis labels */}
                 <div className="absolute -left-2 top-0 text-[10px] text-gray-400">30</div>
                 <div className="absolute -left-2 top-1/4 text-[10px] text-gray-400">75</div>
                 <div className="absolute -left-2 top-2/4 text-[10px] text-gray-400">50</div>
                 <div className="absolute -left-2 top-3/4 text-[10px] text-gray-400">25</div>
                 <div className="absolute -left-2 bottom-0 text-[10px] text-gray-400">0</div>

                 {/* Bottom X-axis labels */}
                 <div className="absolute bottom-[-20px] left-0 text-[10px] text-gray-400">2022</div>
                 <div className="absolute bottom-[-20px] left-1/4 text-[10px] text-gray-400">2023</div>
                 <div className="absolute bottom-[-20px] left-2/4 text-[10px] text-gray-400">2024</div>
                 <div className="absolute bottom-[-20px] left-3/4 text-[10px] text-gray-400">2025</div>
                 <div className="absolute bottom-[-20px] right-0 text-[10px] text-gray-400">2026</div>

                 {/* Line chart area */}
                 <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                    <polygon points="10,75 100,25 100,100 10,100" fill="url(#gradBlue)" fillOpacity="0.2" />
                    <line x1="10" y1="75" x2="100" y2="25" stroke="#8A7CF5" strokeWidth="1.5" />
                    
                    <polygon points="10,65 100,10 100,100 10,100" fill="url(#gradGold)" fillOpacity="0.2" />
                    <line x1="10" y1="65" x2="100" y2="10" stroke="#EBCB8B" strokeWidth="2" />
                    
                    <defs>
                      <linearGradient id="gradBlue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#8A7CF5" stopOpacity="0.5"/>
                        <stop offset="100%" stopColor="#8A7CF5" stopOpacity="0"/>
                      </linearGradient>
                      <linearGradient id="gradGold" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#EBCB8B" stopOpacity="0.5"/>
                        <stop offset="100%" stopColor="#EBCB8B" stopOpacity="0"/>
                      </linearGradient>
                    </defs>
                 </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Bullet Cards */}
        <div className="w-7/12 flex flex-col gap-4 justify-center">
          {points.map((point, idx) => (
            <div key={idx} className="slide6-item opacity-0 flex items-center space-x-4 bg-[#1A1F2E]/40 p-6 rounded-2xl border border-gray-700/30 shadow-lg">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#EBCB8B]/10 flex items-center justify-center border border-[#EBCB8B]/30">
                {/* Flame/Droplet mock icon */}
                <svg className="w-4 h-4 text-[#EBCB8B]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path>
                </svg>
              </div>
              <p className="text-[#F5F7FA] text-base">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slide6;