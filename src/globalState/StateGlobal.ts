import { create } from "zustand";
import { persist } from "zustand/middleware";

interface IStore {
  count: number;
  status: string;
  increment: () => void;
  decrement: () => void;
  handleStatusChange: (estado: string) => void;
}

const useStore = create<IStore>()(
  persist(
    (set) => ({
      count: 0,
      status: "",
      increment: () => set((state) => ({ count: state.count + 2 })),
      decrement: () => set((state) => ({count: state.count - 1})),
      handleStatusChange: (estado) => set(() => ({ status: estado}))
    }),
    { name: "count-storage" }
  )
);

type State = {
  name: string;
  lastName: string;
}

type Action = {
  updateName: (dataName: string) => void;
  updateLastName: (dataLastName: string) => void;
}

const usePersonStore = create<State & Action>()(
  persist(
    (set) => ({
      name: "",
      lastName: "",
      updateName: (dataName) => set((state) => ({...state, name: dataName})),
      updateLastName: (dataLastName) => set(() => ({lastName: dataLastName})),
    }),
    {name: "person"}
  )
)

export { useStore, usePersonStore };
