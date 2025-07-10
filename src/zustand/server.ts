import { create } from 'zustand';

interface ServerState {
    baseUrl: string;
    setBaseUrl: (url: string) => void;

    store_id: number;
    setStore: (url: any) => void;

    categoryId: number;
    setCategoryId: (url: any) => void;
}

const useServerStore = create<ServerState>((set) => ({
    baseUrl: 'https://jllc-back.com/eleganza/', // URL por defecto
    setBaseUrl: (url) => set({ baseUrl: url }),

    store_id: 1,
    setStore: (x) => set({ store_id: x }),

    categoryId: 0,
    setCategoryId: (x) => set({ categoryId: x }),
}));

export default useServerStore;
