import { create } from 'zustand';
import { SLIDE_COUNT } from '../content/presentation';

interface AppState {
  currentPage: number;
  totalPages: number;
  nextPage: () => void;
  prevPage: () => void;
  setPage: (page: number) => void;
}

export const useAppStore = create<AppState>((set) => ({
  currentPage: 0,
  totalPages: SLIDE_COUNT,
  nextPage: () => set((state) => ({ 
    currentPage: Math.min(state.currentPage + 1, state.totalPages - 1) 
  })),
  prevPage: () => set((state) => ({ 
    currentPage: Math.max(state.currentPage - 1, 0) 
  })),
  setPage: (page: number) => set((state) => ({
    currentPage: Math.max(0, Math.min(page, state.totalPages - 1))
  })),
}));
