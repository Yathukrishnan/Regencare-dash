import { create } from 'zustand'

interface User { id: number; email: string; name: string; role: string }

interface AuthStore {
  user: User | null
  token: string | null
  login: (token: string, user: User) => void
  logout: () => void
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: (() => { try { return JSON.parse(localStorage.getItem('rg_user') || 'null') } catch { return null } })(),
  token: localStorage.getItem('rg_token'),
  login: (token, user) => {
    localStorage.setItem('rg_token', token)
    localStorage.setItem('rg_user', JSON.stringify(user))
    set({ token, user })
  },
  logout: () => {
    localStorage.removeItem('rg_token')
    localStorage.removeItem('rg_user')
    set({ token: null, user: null })
  },
}))
