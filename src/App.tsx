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

function App() {
  const currentPage = useAppStore(state => state.currentPage);

  return (
    <div className="relative w-screen h-screen bg-[#0B0F1A] overflow-hidden flex items-center justify-center">
      {/* <Background3D /> */}
      
      <PageContainer>
        {currentPage === 0 && <Slide0 />}
        {currentPage === 1 && <Slide1 />}
        {currentPage === 2 && <Slide2 />}
        {currentPage === 3 && <Slide3 />}
        {currentPage === 4 && <Slide4 />}
        {currentPage === 5 && <Slide5 />}
        {currentPage === 6 && <Slide6 />}
        {currentPage === 7 && <Slide7 />}
        {currentPage === 8 && <Slide8 />}
      </PageContainer>
    </div>
  );
}

export default App;
