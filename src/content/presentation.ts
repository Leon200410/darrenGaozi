export const slideOrder = [
  'slide0',
  'slide1',
  'slide2',
  'slide3',
  'slide4',
  'slide5',
  'slide6',
  'slide7',
  'slide8',
] as const;

export const SLIDE_COUNT = slideOrder.length;

export const presentationContent = {
  slide0: {
    badge: 'SYSTEM TRANSITION · ALPHA EVOLUTION',
    title: {
      main: '從單一驅動邁向體系化驅動',
      sub: 'From Single-Driver to System-Driven',
    },
    subtitle: {
      main: '量化機構如何維持競爭優勢並持續產出',
      highlight: 'Alpha',
      sub: 'How Quantitative Firms Sustain Competitive Edge and Generate Alpha',
    },
    footer: {
      left: 'Institutional Quantitative Framework',
      right: 'ForthTech Confidential',
    },
  },
  slide1: {
    title: '單一驅動的時代已成過去',
    quote: {
      prefix: '「The Single-Driver Paradigm is Obsolete」',
    },
    points: [
      { title: '單一風格驅動紅利衰減', desc: '單一因子半衰期加速' },
      { title: '資金結構遷移，尾部加厚', desc: '機構占比上升改變市場生態' },
      { title: '需更強魯棒與系統化', desc: '對策略綜合要求大幅提升' },
    ],
    charts: [
      {
        title: 'ETH Funding Regime Shift (Pre vs Post 2026)',
        src: '/chart1.svg',
        alt: '資金結構遷移圖',
        fallback: '/public/chart1.svg',
      },
      {
        title: 'ETH Funding Rate Distribution Shift (Pre vs Post 2026)',
        src: '/chart2.svg',
        alt: '收益因子分佈變化圖',
        fallback: '/public/chart2.svg',
      },
    ],
  },
  slide2: {
    title: '市場結構正在發生變化',
    quote: {
      prefix: '「Structural Changes in the Market」',
    },
    subtitle: '從情緒主導到配置主導',
    donuts: [
      {
        eyebrow: 'BEFORE',
        label: '情緒驅動',
        stroke: '#8A7CF5',
        strokeDashoffset: '50',
      },
      {
        eyebrow: 'NOW',
        label: '機構配置',
        stroke: '#EBCB8B',
        strokeDashoffset: '60',
      },
    ],
    items: [
      { title: '資訊過載且無資訊差', desc: '資訊更多不代表有效更多' },
      { title: '流動性要素碎片化', desc: 'CEX, DEX, RWA, ETF 不同監管轄區' },
      { title: '風險更立體多元', desc: '技術、監管、政治、信用、交易對手、組織' },
      { title: '機構化加速', desc: '不再由散戶情緒驅動' },
    ],
    comparison: {
      title: '多因素影響強度對比',
      bars: [
        { label: '資訊過載', width: '90%', color: 'bg-[#EBCB8B]' },
        { label: '流動碎片', width: '85%', color: 'bg-[#8A7CF5]' },
        { label: '風險維度', width: '75%', color: 'bg-[#58E3C2]' },
        { label: '機構配置', width: '80%', color: 'bg-[#F6B26B]' },
      ],
    },
  },
  slide3: {
    title: '體系化驅動，構成新週期下的核心競爭優勢',
    quote: {
      prefix: '「System-Driven is the True Edge in the New Cycle」',
    },
    equationTitle: 'SYSTEM EQUATION: 體系驅動 = 系統間協同',
    systems: [
      { num: '01', title: '數據系統', desc: '數據挖掘、清洗、特徵化、可交叉驗證、即時數據流' },
      { num: '02', title: '投研系統', desc: 'Alpha建模、因子研究、回測框架、過擬合控制、策略生命週期管理' },
      { num: '03', title: '執行系統', desc: '訂單路由、滑點控制、交易成本優化、多市場執行、Alpha落地' },
      { num: '04', title: '風控系統', desc: '覆蓋組合、流動性、對手方、技術、合規的全鏈路風險' },
      { num: '05', title: '組織系統', desc: '分工、驗證、執行、放大與持續迭代、控制風險的工業化過程，並透過組織機制實現規模化複製' },
    ],
    maturityChart: {
      title: 'MATURITY SPECTRUM: 系統成熟度分佈',
      centerTitle: 'ALPHA',
      centerSubtitle: 'System',
      items: [
        { label: '投研系統', score: 92, color: '#8A7CF5' },
        { label: '風控系統', score: 91, color: '#58E3C2' },
        { label: '數據系統', score: 89, color: '#EBCB8B' },
        { label: '執行系統', score: 87, color: '#F6B26B' },
        { label: '組織系統', score: 84, color: '#A0AAB2' },
      ],
    },
  },
  slide4: {
    title: '優秀管理人：機構配置的關鍵條件',
    quote: {
      prefix: '「Core Attributes of Institutional-Quality Managers」',
    },
    radarTitle: 'INSTITUTIONAL CHECKLIST: 機構關注的多維能力譜系',
    radarLabels: [
      { text: '業績', positionClass: 'top-[-5%] left-1/2 -translate-x-1/2' },
      { text: '策略', positionClass: 'top-[15%] right-[-10%]' },
      { text: '團隊', positionClass: 'bottom-[25%] right-[-10%]' },
      { text: '執行', positionClass: 'bottom-[-10%] right-[15%]' },
      { text: '風控', positionClass: 'bottom-[-10%] left-[15%]' },
      { text: '合規', positionClass: 'bottom-[25%] left-[-10%]' },
      { text: '週期', positionClass: 'top-[15%] left-[-10%]' },
    ],
    conditions: [
      { title: '可驗證的歷史業績', desc: 'Track Record' },
      { title: '清晰可持續的 Alpha 來源', desc: 'Strategy' },
      { title: '執行閉環與風控體系', desc: 'Execution / Risk' },
      { title: '穿越過週期，經歷牛熊黑天鵝', desc: 'Cycle-tested, including tail events' },
      { title: '穩定且專業的團隊結構', desc: 'A stable, institutional-grade team structure' },
      { title: '合規與運營體系', desc: 'Compliance and operational infrastructure' },
      { title: '管理過一定體量的大資金', desc: 'Proven experience managing significant capital' },
    ],
  },
  slide5: {
    title: {
      line1: 'AI 實踐：內嵌於企業生產經營體系',
    },
    quote: {
      prefix: '「AI in Practice: Embedded in Enterprise Operating Systems」',
    },
    funnel: {
      eyebrow: 'FUNNEL',
      title: 'AI 讓生產摩擦層層下降',
      score: '摩擦指數分數: 63 / 100',
      labels: ['數據獲取', '研究特徵', '全員協同'],
    },
    items: [
      {
        title: 'AI 不是直接替代決策',
        desc: '人機協同，最後一跳由人完成，AI 不在模型輸出本身。',
        icon: 'M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6',
      },
      {
        title: '重構研發與運營效率',
        desc: '從洞察、實驗、評估到上線，極大提升效率與迭代速度。',
        icon: 'M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z',
      },
      {
        title: '讓風控與 SOP 更可嵌入',
        desc: '讓操作動作、運營流程和標準化明確嵌入日常系統。',
        icon: 'M9 11l3 3L22 4',
      },
      {
        title: '促進知識沉澱與複用',
        desc: '打造企業級知識庫、特徵庫與案例庫，減少重複造輪子。',
        icon: 'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4',
      },
    ],
  },
  slide6: {
    badge: 'Hong Kong Opportunity',
    title: '香港機遇與未來',
    quote: {
      prefix: '「Hong Kong: Opportunities and the Future」',
    },
    thesisLabel: 'Platform Thesis',
    statement: {
      prefix: '香港正在形成讓新一代機構能力被',
      highlight: '構建、驗證和放大',
      suffix: '的平台。',
    },
    flywheelTitle: 'Platform Flywheel',
    steps: ['構建', '驗證', '放大'],
    trendBadge: 'Trend Shift',
    trendTitle: '香港當前的趨勢',
    trendNote: '平台吸引力增強，但供給擴張更慢。',
    trends: [
      {
        title: '資金流入增強',
        desc: '財富承接能力持續提升，承載更大規模配置需求。',
      },
      {
        title: '家辦數量創新高',
        desc: '高淨值與機構客戶擴張，財富管理需求快速上升。',
      },
      {
        title: '法律土壤與地緣優勢',
        desc: '制度與區位共同作用，平台吸引力進一步增強。',
      },
      {
        title: '優秀管理人稀缺',
        desc: '優質供給沒有同步放大，稀缺性正在被市場重估。',
      },
    ],
    scarcity: {
      badge: 'Scarcity Premium',
      title: '吸引力提升的同時，優質供給正變得更稀缺。',
      description:
        '在地緣不確定性上升的背景下，香港作為財富承接與配置平台的吸引力進一步提升。與此同時，優質投資管理人、前台關係經理和可機構化配置的策略供給，正在變得更加稀缺。',
      tags: ['優質投資管理人', '扁平化結構', '可機構化配置策略'],
      footer: '需求抬升，平台成形，稀缺供給開始獲得更高溢價。',
    },
    skyline: [
      '18%',
      '34%',
      '26%',
      '48%',
      '32%',
      '58%',
      '28%',
      '72%',
      '40%',
      '65%',
      '30%',
      '52%',
      '24%',
      '38%',
    ],
  },
  slide7: {
    title: '機構級智能高效的數字資產管理系統',
    quote: {
      prefix: '「Institutional-Grade Intelligent Digital Asset Management Platform」',
    },
    systems: [
      { name: '策略管理\n系統', angle: 30 },
      { name: '風控系統', angle: 90 },
      { name: '運營管理\n系統', angle: 150 },
      { name: '投資組合\n管理系統', angle: 210 },
      { name: '交易執行\n系統', angle: 270 },
      { name: '數據管理\n系統', angle: 330 },
    ],
    dashboards: [
      {
        title: '全市場、多品類、高質量數據庫',
        img: '/數據管理.png',
        pos: { top: '0%', left: '2%' },
        lineEnd: { x: '14%', y: '15%' },
        color: '#58E3C2',
      },
      {
        title: '最佳執行價格、速度和成本',
        img: '/交易執行系統.png',
        pos: { top: '35%', left: '12%' },
        lineEnd: { x: '24%', y: '50%' },
        color: '#58E3C2',
      },
      {
        title: '多策略、多資產、多維度的投資組合管理',
        img: '/投資組合管理系統.png',
        pos: { top: '70%', left: '2%' },
        lineEnd: { x: '14%', y: '85%' },
        color: '#58E3C2',
      },
      {
        title: 'AI賦能的一站式策略研發系統',
        img: '/策略管理系統.png',
        pos: { top: '0%', right: '2%' },
        lineEnd: { x: '86%', y: '15%' },
        color: '#EBCB8B',
      },
      {
        title: '7*24小時全緯度智能監控',
        img: '/風控系統.png',
        pos: { top: '35%', right: '12%' },
        lineEnd: { x: '76%', y: '50%' },
        color: '#EBCB8B',
      },
      {
        title: 'AI部署提高工作流協作和運營管理',
        img: '/運營管理系統.jpg',
        pos: { top: '70%', right: '2%' },
        lineEnd: { x: '86%', y: '85%' },
        color: '#EBCB8B',
      },
    ],
    logo: {
      alt: 'ForthTech Logo',
      fallback: 'FT',
    },
    lightboxAlt: 'Enlarged system view',
  },
  slide8: {
    title: ['誰先完成體系化，', '誰更可能贏下新週期。'],
    description: {
      text: 'In the new cycle, competition is defined not by single strategies, but by scalable and repeatable alpha production systems.',
    },
    points: [
      { text: '單一驅動仍然重要，但它只是優勢的入口，\n而不再是勝負的終點。', accent: '#8A7CF5' },
      { text: '機構競爭的核心，正從捕捉機會，\n轉向持續生產 Alpha 的體系能力。', accent: '#58E3C2' },
      { text: '香港的制度紅利與 AI 的生產力槓桿，\n將放大率先完成體系化升級機構的優勢。', accent: '#EBCB8B' },
    ],
  },
} as const;
