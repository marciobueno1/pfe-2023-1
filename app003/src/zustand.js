import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useBearStore = create(
  persist(
    (set) => ({
      bears: 0,
      dmds: 1,
      increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
      removeAllBears: () => set({ bears: 0 }),
      increasePopulationBy: (value) =>
        set((state) => ({ bears: state.bears + value })),
    }),
    {
      name: "food-storage", // unique name
    }
  )
);
