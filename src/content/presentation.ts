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
    badge: 'Strategy To System · Stage Narrative',
    title: {
      prefix: '从策略驱动到',
      highlight: '体系驱动',
    },
    subtitle: {
      prefix: '量化机构如何保持竞争力与持续生产',
      highlight: 'Alpha',
    },
    footer: {
      left: 'Institutional Quantitative Framework',
      right: 'ForthTech Confidential',
    },
  },
  slide1: {
    title: '一、市场变了：單一驅動的時代已成為過去式',
    quote: {
      prefix: '“过去拼抓住一个好策略，现在拼',
      highlight: '把策略做成系统',
      suffix: '。”',
    },
    points: [
      { title: '单一风格驱动红利衰减', desc: '单一因子半衰期加速' },
      { title: '资金结构迁移，尾部加厚', desc: '机构占比上升改变市场生态' },
      { title: '需更强鲁棒与系统化', desc: '对策略综合要求大幅提升' },
    ],
    charts: [
      {
        title: '资金结构迁移 (投资者构成)',
        desc: '市场参与者结构深刻演变',
        src: '/chart1.svg',
        alt: '资金结构迁移图',
        fallback: '/public/chart1.svg',
      },
      {
        title: '分布形态变化 (收益因子)',
        desc: '收益分布尾部加厚',
        src: '/chart2.svg',
        alt: '收益因子分布变化图',
        fallback: '/public/chart2.svg',
      },
    ],
  },
  slide2: {
    title: '二、特征表现：市场结构发生变化',
    subtitle: '从情绪主导到配置主导',
    donuts: [
      {
        eyebrow: 'BEFORE',
        label: '情绪驱动',
        stroke: '#8A7CF5',
        strokeDashoffset: '50',
      },
      {
        eyebrow: 'NOW',
        label: '机构配置',
        stroke: '#EBCB8B',
        strokeDashoffset: '60',
      },
    ],
    items: [
      { title: '信息过载且无信息差', desc: '信息更多不代表有效更多' },
      { title: '流动性要素碎片化', desc: 'CEX, DEX, RWA, ETF 不同监管辖区' },
      { title: '风险更立体多元', desc: '技术、监管、政治、信用、交易对手、组织' },
      { title: '机构化加速', desc: '不再由散户情绪驱动' },
    ],
    comparison: {
      title: '多因素影响强度对比',
      bars: [
        { label: '信息过载', width: '90%', color: 'bg-[#EBCB8B]' },
        { label: '流动碎片', width: '85%', color: 'bg-[#8A7CF5]' },
        { label: '风险维度', width: '75%', color: 'bg-[#58E3C2]' },
        { label: '机构配置', width: '80%', color: 'bg-[#F6B26B]' },
      ],
    },
  },
  slide3: {
    title: '三、核心答案：体系驱动，才是新周期里真正的竞争力',
    equationTitle: 'SYSTEM EQUATION: 体系驱动 = 系统间协同',
    systems: [
      { num: '01', title: '数据系统', desc: '数据挖掘、清洗、特征化、可交叉验证、实时数据流' },
      { num: '02', title: '投研系统', desc: 'Alpha建模、因子研究、回测框架、过拟合控制、策略生命周期管理' },
      { num: '03', title: '执行系统', desc: '订单路由、滑点控制、交易成本优化、多市场执行、Alpha落地' },
      { num: '04', title: '风控系统', desc: '覆盖组合、流动性、对手方、技术、合规的全链路风险' },
      { num: '05', title: '组织系统', desc: '分工、验证、执行、放大与持续迭代、控制风险的工业化过程，并通过组织机制实现规模化复制' },
    ],
    maturityChart: {
      title: 'MATURITY SPECTRUM: 系统成熟度分布',
      centerTitle: 'ALPHA',
      centerSubtitle: 'System',
      items: [
        { label: '投研系统', score: 92, color: '#8A7CF5' },
        { label: '风控系统', score: 91, color: '#58E3C2' },
        { label: '数据系统', score: 89, color: '#EBCB8B' },
        { label: '执行系统', score: 87, color: '#F6B26B' },
        { label: '组织系统', score: 84, color: '#A0AAB2' },
      ],
    },
  },
  slide4: {
    title: '四、优秀管理人满足机构配置的条件',
    radarTitle: 'INSTITUTIONAL CHECKLIST: 机构关注的多维能力谱系',
    radarLabels: [
      { text: '业绩', positionClass: 'top-[-5%]' },
      { text: '策略', positionClass: 'top-[20%] right-[-5%]' },
      { text: '执行', positionClass: 'bottom-[20%] right-[-5%]' },
      { text: '风控', positionClass: 'bottom-[-5%]' },
      { text: '合规', positionClass: 'bottom-[20%] left-[-5%]' },
      { text: '周期', positionClass: 'top-[20%] left-[-5%]' },
      { text: '体量', positionClass: 'top-[20%]' },
    ],
    conditions: [
      { title: '可验证的历史业绩', desc: 'Track Record' },
      { title: '清晰可持续的Alpha来源', desc: 'Strategy' },
      { title: '执行闭环与风控体系', desc: 'Execution / Risk' },
      { title: '穿越过周期，经历牛熊黑天鹅', desc: 'Cycle-tested, including tail events' },
      { title: '稳定且专业的团队结构', desc: 'A stable, institutional-grade team structure' },
      { title: '合规与运营体系', desc: 'Compliance and operational infrastructure' },
      { title: '管理过一定体量的大资金', desc: 'Proven experience managing significant capital' },
    ],
  },
  slide5: {
    title: {
      line1: '五、AI 的作用不是替代人或替你决策',
      line2: '而是把 AI 内嵌到企业生产力经营',
    },
    funnel: {
      eyebrow: 'FUNNEL',
      title: 'AI 让生产摩擦层层下降',
      score: '摩擦指数分数: 63 / 100',
      labels: ['数据获取', '研究特征', '全员协同'],
    },
    items: [
      {
        title: 'AI 不是直接替代决策',
        desc: '人机协同，最后一跳由人完成，AI 不在模型输出本身。',
        icon: 'M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6',
      },
      {
        title: '重构研发与运营效率',
        desc: '从洞察、实验、评估到上线，极大提升效率与迭代速度。',
        icon: 'M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z',
      },
      {
        title: '让风控与 SOP 更可嵌入',
        desc: '让操作动作、运营流程和标准化明确嵌入日常系统。',
        icon: 'M9 11l3 3L22 4',
      },
      {
        title: '促进知识沉淀与复用',
        desc: '打造企业级知识库、特征库与案例库，减少重复造轮子。',
        icon: 'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4',
      },
    ],
  },
  slide6: {
    badge: 'Hong Kong Opportunity',
    title: '六，香港机遇',
    thesisLabel: 'Platform Thesis',
    statement: {
      prefix: '香港正在形成让新一代机构能力被',
      highlight: '构建、验证和放大',
      suffix: '的平台。',
    },
    flywheelTitle: 'Platform Flywheel',
    steps: ['构建', '验证', '放大'],
    trendBadge: 'Trend Shift',
    trendTitle: '香港当前的趋势',
    trendNote: '平台吸引力增强，但供给扩张更慢。',
    trends: [
      {
        title: '资金流入增强',
        desc: '财富承接能力持续提升，承载更大规模配置需求。',
      },
      {
        title: '家办数量创新高',
        desc: '高净值与机构客户扩张，财富管理需求快速上升。',
      },
      {
        title: '法律土壤与地缘优势',
        desc: '制度与区位共同作用，平台吸引力进一步增强。',
      },
      {
        title: '优秀管理人稀缺',
        desc: '优质供给没有同步放大，稀缺性正在被市场重估。',
      },
    ],
    scarcity: {
      badge: 'Scarcity Premium',
      title: '吸引力提升的同时，优质供给正变得更稀缺。',
      description:
        '在地缘不确定性上升的背景下，香港作为财富承接与配置平台的吸引力进一步提升。与此同时，优质投资管理人、前台关系经理和可机构化配置的策略供给，正在变得更加稀缺。',
      tags: ['优质投资管理人', '扁平化结构', '可机构化配置策略'],
      footer: '需求抬升，平台成形，稀缺供给开始获得更高溢价。',
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
    title: '七、机构级智能高效的数字资产管理系统',
    systems: [
      { name: '策略管理\n系统', angle: 30 },
      { name: '风控系统', angle: 90 },
      { name: '运营管理\n系统', angle: 150 },
      { name: '投资组合\n管理系统', angle: 210 },
      { name: '交易执行\n系统', angle: 270 },
      { name: '数据管理\n系统', angle: 330 },
    ],
    dashboards: [
      {
        title: '全市场、多品类、高质量数据库',
        img: '/数据管理.png',
        pos: { top: '0%', left: '2%' },
        lineEnd: { x: '14%', y: '15%' },
        color: '#58E3C2',
      },
      {
        title: '最佳执行价格、速度和成本',
        img: '/交易执行系统.png',
        pos: { top: '35%', left: '12%' },
        lineEnd: { x: '24%', y: '50%' },
        color: '#58E3C2',
      },
      {
        title: '多策略、多资产、多维度的投资组合管理',
        img: '/投资组合管理系统.png',
        pos: { top: '70%', left: '2%' },
        lineEnd: { x: '14%', y: '85%' },
        color: '#58E3C2',
      },
      {
        title: 'AI赋能的一站式策略研发系统',
        img: '/策略管理系统.png',
        pos: { top: '0%', right: '2%' },
        lineEnd: { x: '86%', y: '15%' },
        color: '#EBCB8B',
      },
      {
        title: '7*24小时全纬度智能监控',
        img: '/风控系统.png',
        pos: { top: '35%', right: '12%' },
        lineEnd: { x: '76%', y: '50%' },
        color: '#EBCB8B',
      },
      {
        title: 'AI部署提高工作流协作和运营管理',
        img: '/运营管理系统.jpg',
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
    title: ['谁先完成体系化，', '谁更可能赢下新周期。'],
    description: {
      prefix: '从策略驱动到体系驱动，本质上不是从“聪明”走向“笨重”，而是从',
      primaryHighlight: '“局部成效”',
      connector: '走向',
      secondaryHighlight: '“长期可复制”',
      suffix: '。',
    },
    points: [
      { text: '单一驱动仍然重要，但它更像入\n口，而不是终局。', accent: '#8A7CF5' },
      { text: '机构竞争力的核心，正在从抓机\n会转向生产 Alpha。', accent: '#58E3C2' },
      { text: '香港与 AI，会放大那些已经完成\n系统化升级的团队。', accent: '#EBCB8B' },
    ],
  },
} as const;
