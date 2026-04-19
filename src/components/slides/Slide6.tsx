import React, { useEffect, useRef } from 'react';
import anime from 'animejs';
import { useLocation } from 'react-router-dom';
import { ArrowRight, Building2, Landmark, ShieldCheck, TrendingUp } from 'lucide-react';
import { presentationContent } from '../../content/presentation';

const Slide6: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const isNormal = location.pathname === '/normal';
  const isSimple = location.pathname === '/simple';
  const content = presentationContent.slide6;
  const trendIcons = [TrendingUp, Building2, ShieldCheck, Landmark];
  const trendAccents = ['#F6D38B', '#7FE7D8', '#8AA5FF', '#F2A65A'];

  const S = {
    gap: isNormal ? "gap-10" : "gap-8",
    panelP: isNormal ? "p-7" : "p-5",
    badge: isNormal ? "px-3 py-1 text-[10px]" : "px-2 py-0.5 text-[9px]",
    statement: isSimple ? "text-[26px] leading-[1.6] p-8" : (isNormal ? "text-[22px] leading-[1.55] p-5" : "text-[17px] leading-[1.4] p-3.5"),
    stepP: isSimple ? "px-6 py-6" : (isNormal ? "px-4 py-4" : "px-2 py-2.5"),
    stepTitle: isSimple ? "text-3xl mt-4" : (isNormal ? "text-xl mt-2" : "text-base mt-1"),
    stepIcon: isSimple ? "w-6 h-6" : (isNormal ? "w-4 h-4" : "w-3 h-3"),
    chip: isNormal ? "px-3 py-3 text-[12px] leading-5" : "px-2 py-2 text-[11px] leading-snug",
    scarcityP: isSimple ? "p-8 mt-8" : (isNormal ? "p-5 mt-5" : "p-3.5 mt-3"),
    scarcityBadge: isSimple ? "text-[12px] mb-3" : (isNormal ? "text-[10px] mb-2" : "text-[9px] mb-1.5"),
    scarcityTitle: isSimple ? "text-2xl mb-3" : (isNormal ? "text-lg mb-2" : "text-base mb-1.5"),
    scarcityDesc: isNormal ? "text-[13px] leading-6" : "text-xs leading-5",
    scarcityFooter: isSimple ? "text-[16px] mt-4" : (isNormal ? "text-[12px] mt-3" : "text-[11px] mt-2"),
    skylineWrap: isNormal ? "pt-5 mt-auto" : "pt-3 mt-auto",
    skylineH: isNormal ? "h-12 mt-4" : "h-6 mt-3",
    trendBadge: isSimple ? "text-sm" : (isNormal ? "text-xs" : "text-[10px]"),
    trendTitle: isSimple ? "text-[32px] mt-3" : (isNormal ? "text-[24px] mt-2" : "text-[20px] mt-1.5"),
    trendNoteWrap: isNormal ? "mb-4" : "mb-3",
    trendNoteText: isSimple ? "text-[14px]" : (isNormal ? "text-[11px]" : "text-[9px]"),
    trendGap: isSimple ? "gap-6" : (isNormal ? "gap-4" : "gap-2.5"),
    itemP: isSimple ? "p-6 gap-6 items-center" : (isNormal ? "p-5 gap-4 items-start" : "p-3.5 gap-3 items-start"),
    iconWrap: isSimple ? "w-14 h-14" : (isNormal ? "w-10 h-10" : "w-8 h-8"),
    icon: isSimple ? "w-6 h-6" : (isNormal ? "w-4 h-4" : "w-3.5 h-3.5"),
    itemTitle: isSimple ? "text-[26px]" : (isNormal ? "text-[21px]" : "text-[17px]"),
    itemDesc: isNormal ? "text-[13px] leading-6 mt-1.5" : "text-xs leading-5 mt-1"
  };

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
        targets: '.slide6-subtitle',
        translateY: [20, 0],
        opacity: [0, 1],
        duration: 800,
      }, '-=400')
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

      <h2 className={`slide6-title font-bold text-[#F5F7FA] mb-4 opacity-0 text-center leading-tight relative z-10 ${isSimple ? 'text-6xl' : 'text-4xl'}`}>
        {content.title}
      </h2>
      {content.quote.prefix && (
        <div className="slide6-subtitle opacity-0 text-center mb-6 relative z-10">
          <p className={`text-[#F5F7FA] font-medium leading-relaxed bg-[#1A1F2E]/60 inline-block rounded-full border border-gray-700/50 backdrop-blur-sm shadow-lg ${isSimple ? 'text-2xl px-8 py-4' : 'text-lg px-6 py-3'}`}>
            {content.quote.prefix}
          </p>
        </div>
      )}

      <div className={`relative z-10 flex w-full ${S.gap}`}>
        <div className="w-5/12 flex flex-col">
          <div className={`slide6-panel opacity-0 bg-[#1A1F2E]/60 rounded-2xl border border-gray-700/50 backdrop-blur-sm h-full flex flex-col ${S.panelP}`}>
            <div className="flex items-center justify-between mb-3">
              <span className={`inline-flex items-center gap-2 rounded-full border border-[#F6D38B]/20 bg-[#F6D38B]/8 font-semibold uppercase tracking-[0.24em] text-[#F6D38B] ${S.badge}`}>
                <span className="w-1.5 h-1.5 rounded-full bg-[#F6D38B]"></span>
                {content.badge}
              </span>
              <span className={`font-mono text-gray-500 uppercase tracking-[0.22em] ${isNormal ? 'text-[10px]' : 'text-[9px]'}`}>{content.thesisLabel}</span>
            </div>

            <div className={`slide6-copy opacity-0 rounded-xl border border-white/8 bg-white/[0.03] ${S.statement}`}>
              <p className="text-[#E8EDF6]">
                {content.statement.prefix}
                <span className="mx-2 font-semibold text-[#F6D38B]">{content.statement.highlight}</span>
                {content.statement.suffix}
              </p>
            </div>

            <div className={`flex items-center gap-2 ${isNormal ? 'mt-5' : 'mt-3'}`}>
              {content.steps.map((step, idx) => (
                <React.Fragment key={step}>
                  <div className={`slide6-step opacity-0 flex-1 rounded-xl border border-[#8AA5FF]/20 bg-[#10182A]/80 text-center ${S.stepP}`}>
                    <div className={`font-mono uppercase tracking-[0.22em] text-gray-500 ${isNormal ? 'text-[10px]' : 'text-[9px]'}`}>0{idx + 1}</div>
                    <div className={`font-bold text-[#F5F7FA] ${S.stepTitle}`}>{step}</div>
                  </div>
                  {idx < content.steps.length - 1 && (
                    <ArrowRight className={`slide6-step opacity-0 text-[#8AA5FF] flex-shrink-0 ${S.stepIcon}`} />
                  )}
                </React.Fragment>
              ))}
            </div>

            <div className={`slide6-copy opacity-0 rounded-xl border border-[#F6D38B]/18 bg-[linear-gradient(135deg,rgba(246,211,139,0.08),rgba(246,211,139,0.02))] ${S.scarcityP}`}>
              <div className={`font-semibold uppercase tracking-[0.24em] text-[#F6D38B] ${S.scarcityBadge}`}>
                {content.scarcity.badge}
              </div>
              <h3 className={`font-bold text-[#FDF1D4] leading-snug ${S.scarcityTitle}`}>
                {content.scarcity.title}
              </h3>
              {!isSimple && <p className={`text-[#C9D3E2] ${S.scarcityDesc}`}>
                {content.scarcity.description}
              </p>}
              <p className={`font-medium text-[#F6D38B] ${S.scarcityFooter}`}>
                {content.scarcity.footer}
              </p>
            </div>

            <div className={S.skylineWrap}>
              <div className="h-px w-full bg-gradient-to-r from-transparent via-white/12 to-transparent" />
              <div className={`flex items-end gap-1 ${S.skylineH}`}>
                {content.skyline.map((height, idx) => (
                  <div
                    key={`${height}-${idx}`}
                    className="flex-1 rounded-t-sm bg-gradient-to-t from-[#283247] to-[#4B556B]/60"
                    style={{ height }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="w-7/12 flex flex-col justify-center">
          <div className={`slide6-copy opacity-0 flex items-end justify-between px-1 ${S.trendNoteWrap}`}>
            <div>
              <p className={`font-semibold uppercase tracking-[0.26em] text-[#7FE7D8] ${S.trendBadge}`}>{content.trendBadge}</p>
              <h3 className={`font-bold text-[#F5F7FA] ${S.trendTitle}`}>{content.trendTitle}</h3>
            </div>
            <p className={`text-gray-500 uppercase tracking-[0.18em] ${S.trendNoteText}`}>{content.trendNote}</p>
          </div>

          <div className={`flex flex-col ${S.trendGap}`}>
            {content.trends.map((trend, idx) => {
              const Icon = trendIcons[idx];

              return (
                <div
                  key={trend.title}
                  className={`slide6-item opacity-0 flex items-start bg-[#1A1F2E]/40 rounded-xl border border-gray-700/30 shadow-md ${S.itemP}`}
                >
                  <div
                    className={`flex-shrink-0 rounded-full flex items-center justify-center border ${S.iconWrap}`}
                    style={{
                      color: trendAccents[idx],
                      borderColor: `${trendAccents[idx]}55`,
                      backgroundColor: `${trendAccents[idx]}14`,
                    }}
                  >
                    <Icon className={S.icon} />
                  </div>
                  <div className={`flex-shrink-0 w-8 pt-1 font-mono uppercase tracking-[0.22em] text-gray-500 ${isNormal ? 'text-[11px]' : 'text-[10px]'}`}>
                    0{idx + 1}
                  </div>
                  <div className="min-w-0">
                    <h4 className={`font-bold text-[#F5F7FA] leading-tight ${S.itemTitle}`}>{trend.title}</h4>
                    {!isSimple && <p className={`text-gray-400 ${S.itemDesc}`}>{trend.desc}</p>}
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
