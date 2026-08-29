import { defineStore } from 'pinia'

export type AuthMode = 'login' | 'register'

export const useAuthModalStore = defineStore('authModal', () => {
  const isOpen = ref(false)
  const mode = ref<AuthMode>('login')

  const open = (targetMode: AuthMode = 'login') => {
    mode.value = targetMode
    isOpen.value = true
  }

  const close = () => {
    isOpen.value = false
  }

  const toggleMode = () => {
    mode.value = mode.value === 'login' ? 'register' : 'login'
  }

  const setMode = (targetMode: AuthMode) => {
    mode.value = targetMode
  }

  return {
    isOpen,
    mode,
    open,
    close,
    toggleMode,
    setMode
  }
})