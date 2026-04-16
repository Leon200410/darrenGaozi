import { create } from 'zustand';

interface AppState {
  currentPage: number;
  totalPages: number;
  nextPage: () => void;
  prevPage: () => void;
  setPage: (page: number) => void;
}

export const useAppStore = create<AppState>((set) => ({
  currentPage: 0,
  totalPages: 9,
  nextPage: () => set((state) => ({ 
    currentPage: Math.min(state.currentPage + 1, state.totalPages - 1) 
  })),
  prevPage: () => set((state) => ({ 
    currentPage: Math.max(state.currentPage - 1, 0) 
  })),
  setPage: (page: number) => set({ 
    currentPage: Math.max(0, Math.min(page, 8)) 
  }),
}));
