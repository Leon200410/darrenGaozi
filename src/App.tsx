import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Background3D } from './components/Background3D';
import { PageContainer } from './components/PageContainer';
import { useAppStore } from './store/useAppStore';

import Slide0 from './components/slides/Slide0';
import Slide1 from './components/slides/Slide1';
import Slide2 from './components/slides/Slide2';
import Slide3 from './components/slides/Slide3';
import Slide4 from './components/slides/Slide4';
import Slide5 from './components/slides/Slide5';
import Slide6 from './components/slides/Slide6';
import Slide7 from './components/slides/Slide7';
import Slide8 from './components/slides/Slide8';

const slides = [
  Slide0,
  Slide1,
  Slide2,
  Slide3,
  Slide4,
  Slide5,
  Slide6,
  Slide7,
  Slide8,
];

function Presentation({ isCenter = false }: { isCenter?: boolean }) {
  const currentPage = useAppStore(state => state.currentPage);
  const CurrentSlide = slides[currentPage] ?? Slide0;

  if (isCenter) {
    return (
      <div className="relative bg-[#0B0F1A] overflow-hidden flex items-center justify-center w-full h-full max-h-screen rounded-xl shadow-[0_0_50px_rgba(0,0,0,0.5)]">
        <PageContainer className="w-full h-full">
          <CurrentSlide />
        </PageContainer>
      </div>
    );
  }

  return (
    <div className="relative w-screen h-screen bg-[#0B0F1A] overflow-hidden flex items-center justify-center">
      <PageContainer className="w-full h-full">
        <CurrentSlide />
      </PageContainer>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Presentation />} />
      <Route path="/center" element={
        <div className="w-screen min-h-screen bg-[#050810] flex items-center justify-center p-4 md:p-12">
          <div className="w-full max-w-[1600px] aspect-[21/9] relative ring-1 ring-white/10 rounded-xl overflow-hidden shadow-2xl">
            <Presentation isCenter={true} />
          </div>
        </div>
      } />
      <Route path="/normal" element={
        <div className="w-screen min-h-screen bg-[#050810] flex items-center justify-center p-4 md:p-12">
          <div className="w-full max-w-[1600px] aspect-video relative ring-1 ring-white/10 rounded-xl overflow-hidden shadow-2xl">
            <Presentation isCenter={true} />
          </div>
        </div>
      } />
    </Routes>
  );
}

export default App;
