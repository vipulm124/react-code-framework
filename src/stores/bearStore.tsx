import create from 'zustand';
import {persist} from 'zustand/middleware';

const useBearStore = create(
    persist(
    (set) => ({
    bears: 10,
    increasePopulation: () => set((state:any) => ({ bears: state.bears + 1 })),
    removeAllBears: () => set({ bears: 0 }),
  })))

  export default useBearStore;