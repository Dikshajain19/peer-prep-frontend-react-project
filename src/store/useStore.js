
import { create } from 'zustand';

const useStore = create((set) => ({
  mode: 'practice', // default mode
  setMode: (newMode) => set({ mode: newMode }),
}));

export default useStore;
