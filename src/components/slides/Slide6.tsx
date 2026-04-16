import React, { useEffect, useRef } from 'react';
import anime from 'animejs';
import { ArrowRight, Building2, Landmark, ShieldCheck, TrendingUp } from 'lucide-react';
import { presentationContent } from '../../content/presentation';

const Slide6: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const content = presentationContent.slide6;
  const trendIcons = [TrendingUp, Building2, ShieldCheck, Landmark];
  const trendAccents = ['#F6D38B', '#7FE7D8', '#8AA5FF', '#F2A65A'];

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
        targets: '.slide6-panel',
        scale: [0.96, 1],
        opacity: [0, 1],
        duration: 800,
      }, '-=420')
      .add({
        targets: '.slide6-copy',
        translateY: [18, 0],
        opacity: [0, 1],
        duration: 600,
        delay: anime.stagger(90),
      }, '-=520')
      .add({
        targets: '.slide6-step',
        scale: [0.92, 1],
        opacity: [0, 1],
        duration: 600,
        delay: anime.stagger(100),
      }, '-=420')
      .add({
        targets: '.slide6-item',
        translateX: [40, 0],
        opacity: [0, 1],
        duration: 600,
        delay: anime.stagger(120),
      }, '-=520')
      .add({
        targets: '.slide6-chip',
        scale: [0.92, 1],
        opacity: [0, 1],
        duration: 450,
        delay: anime.stagger(90),
      }, '-=360');
    }
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full flex flex-col justify-center px-[5%] py-8 md:py-12 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-24 left-1/4 w-72 h-72 bg-[#F6D38B]/8 blur-[110px] rounded-full"></div>
        <div className="absolute bottom-16 right-1/4 w-80 h-80 bg-[#7FE7D8]/6 blur-[120px] rounded-full"></div>
      </div>

      <h2 className="slide6-title text-4xl font-bold text-[#F5F7FA] mb-10 opacity-0 text-center leading-tight relative z-10">
        {content.title}
      </h2>

      <div className="relative z-10 flex w-full gap-10">
        <div className="w-5/12 flex flex-col">
          <div className="slide6-panel opacity-0 bg-[#1A1F2E]/60 p-7 rounded-2xl border border-gray-700/50 backdrop-blur-sm h-full flex flex-col">
            <div className="flex items-center justify-between mb-5">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#F6D38B]/20 bg-[#F6D38B]/8 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#F6D38B]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F6D38B]"></span>
                {content.badge}
              </span>
              <span className="text-[10px] font-mono text-gray-500 uppercase tracking-[0.22em]">{content.thesisLabel}</span>
            </div>

            <div className="slide6-copy opacity-0 rounded-2xl border border-white/8 bg-white/[0.03] p-5">
              <p className="text-[22px] leading-[1.55] text-[#E8EDF6]">
                {content.statement.prefix}
                <span className="mx-2 font-semibold text-[#F6D38B]">{content.statement.highlight}</span>
                {content.statement.suffix}
              </p>
            </div>

            <div className="mt-5 flex items-center gap-3">
              {content.steps.map((step, idx) => (
                <React.Fragment key={step}>
                  <div className="slide6-step opacity-0 flex-1 rounded-2xl border border-[#8AA5FF]/20 bg-[#10182A]/80 px-4 py-4 text-center">
                    <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-gray-500">0{idx + 1}</div>
                    <div className="mt-2 text-xl font-bold text-[#F5F7FA]">{step}</div>
                  </div>
                  {idx < content.steps.length - 1 && (
                    <ArrowRight className="slide6-step opacity-0 w-4 h-4 text-[#8AA5FF] flex-shrink-0" />
                  )}
                </React.Fragment>
              ))}
            </div>

            <div className="mt-5 grid grid-cols-3 gap-3">
              {content.scarcity.tags.map((tag) => (
                <div
                  key={tag}
                  className="slide6-chip opacity-0 rounded-xl border border-gray-700/40 bg-[#0F1626]/70 px-3 py-3 text-center text-[12px] leading-5 text-[#DCE5F3]"
                >
                  {tag}
                </div>
              ))}
            </div>

            <div className="slide6-copy opacity-0 mt-5 rounded-2xl border border-[#F6D38B]/18 bg-[linear-gradient(135deg,rgba(246,211,139,0.08),rgba(246,211,139,0.02))] p-5">
              <div className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#F6D38B] mb-2">
                {content.scarcity.badge}
              </div>
              <h3 className="text-lg font-bold text-[#FDF1D4] leading-snug mb-2">
                {content.scarcity.title}
              </h3>
              <p className="text-[13px] leading-6 text-[#C9D3E2]">
                {content.scarcity.description}
              </p>
              <p className="mt-3 text-[12px] font-medium text-[#F6D38B]">
                {content.scarcity.footer}
              </p>
            </div>

            <div className="mt-auto pt-5">
              <div className="h-px w-full bg-gradient-to-r from-transparent via-white/12 to-transparent" />
              <div className="mt-4 flex items-end gap-1.5 h-12">
                {content.skyline.map((height, idx) => (
                  <div
                    key={`${height}-${idx}`}
                    className="flex-1 rounded-t-md bg-gradient-to-t from-[#283247] to-[#4B556B]/60"
                    style={{ height }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="w-7/12 flex flex-col justify-center">
          <div className="slide6-copy opacity-0 flex items-end justify-between mb-4 px-1">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#7FE7D8]">{content.trendBadge}</p>
              <h3 className="mt-2 text-[24px] font-bold text-[#F5F7FA]">{content.trendTitle}</h3>
            </div>
            <p className="text-[11px] text-gray-500 uppercase tracking-[0.18em]">{content.trendNote}</p>
          </div>

          <div className="flex flex-col gap-4">
            {content.trends.map((trend, idx) => {
              const Icon = trendIcons[idx];

              return (
                <div
                  key={trend.title}
                  className="slide6-item opacity-0 flex items-start gap-4 bg-[#1A1F2E]/40 p-5 rounded-2xl border border-gray-700/30 shadow-lg"
                >
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center border"
                    style={{
                      color: trendAccents[idx],
                      borderColor: `${trendAccents[idx]}55`,
                      backgroundColor: `${trendAccents[idx]}14`,
                    }}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="flex-shrink-0 w-10 pt-1 text-[11px] font-mono uppercase tracking-[0.22em] text-gray-500">
                    0{idx + 1}
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-[21px] font-bold text-[#F5F7FA] leading-tight">{trend.title}</h4>
                    <p className="mt-1.5 text-[13px] leading-6 text-gray-400">{trend.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide6;
