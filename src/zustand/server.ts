import { create } from 'zustand';

interface ServerState {
    baseUrl: string;
    setBaseUrl: (url: string) => void;

    store_id: number;
    setStore: (url: any) => void;
}

const useServerStore = create<ServerState>((set) => ({
    baseUrl: 'http://localhost:3000', // URL por defecto
    setBaseUrl: (url) => set({ baseUrl: url }),

    store_id: 1,
    setStore: (x) => set({ store_id: x }),
}));

export default useServerStore;
