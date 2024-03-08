import { create } from "zustand";

const useAuthStore = create((set) => ({
  /* 
    initally, no user logged in 
    use local storage to check if user logged in
  */
  user: JSON.parse(localStorage.getItem("user-info")),
  /* actions that manipulate user state */
  login: (user) => set({ user }),
  logout: () => set({ user: null }),
  setUser: (user) => set({ user }),
}));

export default useAuthStore;
