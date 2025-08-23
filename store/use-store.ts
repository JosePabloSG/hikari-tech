import { create } from 'zustand'

export type StoreState = {
  isMobileMenuOpen: boolean
  setMobileMenuOpen: (v: boolean) => void
  toggleMobileMenu: () => void
}

export const useStore = create<StoreState>(
  (set: (partial: Partial<StoreState> | ((s: StoreState) => Partial<StoreState>)) => void) => ({
  isMobileMenuOpen: false,
  setMobileMenuOpen: (v: boolean) => set({ isMobileMenuOpen: v }),
  toggleMobileMenu: () => set((s: StoreState) => ({ isMobileMenuOpen: !s.isMobileMenuOpen })),
  })
)

export default useStore
