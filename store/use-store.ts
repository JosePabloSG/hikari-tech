import { create } from 'zustand'

type StoreState = {
  isMobileMenuOpen: boolean
  setMobileMenuOpen: (v: boolean) => void
  toggleMobileMenu: () => void
}

export const useStore = create<StoreState>((set: any) => ({
  isMobileMenuOpen: false,
  setMobileMenuOpen: (v: boolean) => set({ isMobileMenuOpen: v }),
  toggleMobileMenu: () => set((s: any) => ({ isMobileMenuOpen: !s.isMobileMenuOpen })),
}))

export default useStore
