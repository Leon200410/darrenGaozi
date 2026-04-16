import React, { useEffect, useCallback } from 'react';
import { useAppStore } from '../store/useAppStore';

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const PageContainer: React.FC<PageContainerProps> = ({ children, className = "" }) => {
  const { nextPage, prevPage } = useAppStore();

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'ArrowRight' || e.key === 'Space' || e.key === 'Enter') {
      nextPage();
    } else if (e.key === 'ArrowLeft' || e.key === 'Backspace') {
      prevPage();
    }
  }, [nextPage, prevPage]);

  const handleClick = useCallback((e: MouseEvent) => {
    // Only go next on left click if it's not on a button or link
    const target = e.target as HTMLElement;
    if (target.tagName.toLowerCase() !== 'button' && target.tagName.toLowerCase() !== 'a') {
      nextPage();
    }
  }, [nextPage]);

  const handleContextMenu = useCallback((e: MouseEvent) => {
    e.preventDefault();
    prevPage();
  }, [prevPage]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('click', handleClick);
    window.addEventListener('contextmenu', handleContextMenu);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('click', handleClick);
      window.removeEventListener('contextmenu', handleContextMenu);
    };
  }, [handleKeyDown, handleClick, handleContextMenu]);

  return (
    <div className={`presentation-container z-10 flex items-center justify-center p-8 bg-[#0B0F1A] ${className}`}>
      {children}
    </div>
  );
};
