# 技术架构文档 (TAD)

## 1. 技术栈选型
- **框架**: React 18
- **语言**: TypeScript
- **构建工具**: Vite
- **样式**: Tailwind CSS (用于快速布局和暗黑风格原子类)
- **3D 渲染**: Three.js (@react-three/fiber 和 @react-three/drei 以便于在 React 中使用)
- **动画库**: Anime.js (用于 DOM 元素的复杂文字/排版动画)
- **状态管理**: Zustand (用于管理当前页码和控制 3D 相机移动触发)
- **图标**: lucide-react

## 2. 目录结构
```text
src/
├── components/
│   ├── Background3D.tsx     # Three.js 渲染的全局背景
│   ├── PageContainer.tsx    # 页面容器，处理点击翻页逻辑
│   └── slides/              # 7个页面的具体内容组件
│       ├── Slide1.tsx
│       ├── Slide2.tsx
│       ├── ...
│       └── Slide7.tsx
├── store/
│   └── useAppStore.ts       # 状态管理 (当前页码等)
├── utils/
│   └── animations.ts        # Anime.js 动画封装
├── App.tsx                  # 根组件
└── main.tsx                 # 入口文件
```

## 3. 核心架构设计

### 3.1 页面控制器 (PageController)
- 监听鼠标左键点击 (`onClick`) 以及键盘事件 (`ArrowRight`, `ArrowLeft`, `Space`)。
- 修改 Zustand store 中的 `currentPage` 状态 (范围 0 到 6)。
- CSS 容器固定为宽高比 12:3（例如 width: 100vw, height: 25vw，或者使用 aspect-ratio 配合 flex 居中以适应不同屏幕）。

### 3.2 3D 背景层 (Background3D)
- 使用 `@react-three/fiber` 构建。
- 在场景中放置大量粒子 (Points) 或者抽象的几何体 (Icosahedron 等)。
- 监听 `currentPage` 变化，使用 `gsap` 或 `anime.js` 平滑移动相机的 `position` 和 `lookAt` 目标，或者改变场景中物体的旋转速度/颜色，给用户带来场景穿越的沉浸感。
- 深色背景 (`#050505` 等)，粒子使用荧光蓝/紫/绿等赛博朋克色系。

### 3.3 DOM 内容层 (Slide Components)
- 浮在 3D Canvas 之上的 HTML 层 (`pointer-events-none` 配合特定交互区域)。
- 每个 Slide 组件监听挂载和卸载事件。
- 入场动画：文字从下往上浮现、淡入、文字分裂错位等科技感效果。
- 离场动画：淡出或向两侧散开。
- 利用 `Anime.js` 给 DOM 元素绑定 `ref` 进行复杂 timeline 动画。

### 4. 具体页面技术实现建议
- **图表页 (Slide 1, Slide 7)**: 考虑使用 `recharts` 加上极简的暗黑样式，或者直接用带发光滤镜的 SVG 图形模拟数据流。第 7 页的环形布局使用 CSS 绝对定位和 `transform: rotate` 实现。
- **排版页 (Slide 2, 4)**: 列表项依次出现，可以利用 Anime.js 的 `stagger` 属性实现优雅的级联动画。

### 5. 性能优化
- Three.js 场景限制粒子数量 (如 5000-10000 个)。
- 使用 `useFrame` 控制基础旋转动画，避免复杂的每帧计算。
- 确保 React 组件的重渲染只发生在页码切换时。