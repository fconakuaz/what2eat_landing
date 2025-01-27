// src/stores/useStore.js
import create from 'zustand';

// Definir el estado global con Zustand
const useStore = create((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));

export default useStore;
