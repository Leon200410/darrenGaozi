import React from 'react';
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

function App() {
  const currentPage = useAppStore(state => state.currentPage);
  const CurrentSlide = slides[currentPage] ?? Slide0;

  return (
    <div className="relative w-screen h-screen bg-[#0B0F1A] overflow-hidden flex items-center justify-center">
      {/* <Background3D /> */}
      
      <PageContainer>
        <CurrentSlide />
      </PageContainer>
    </div>
  );
}

export default App;
