import { create } from "zustand";
import { persist } from "zustand/middleware";

interface IStore {
  count: number;
  increment: () => void;
  decrement: () => void;
}

const useStore = create<IStore>()(
  persist(
    (set) => ({
      count: 0,
      increment: () =>
        set((state) => ({ count: state.count + 2 })),
      decrement: () => set((state) => ({count: state.count - 1}))
    }),
    { name: "count-storage" }
  )
);

export { useStore };
