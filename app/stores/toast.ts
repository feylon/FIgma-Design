import { defineStore } from 'pinia'

export type ToastType = 'success' | 'warning' | 'danger'

export interface ToastItem {
  id: string
  message: string
  type: ToastType
  duration?: number
}

export const useToastStore = defineStore('toast', () => {
  const toasts = ref<ToastItem[]>([])

  const add = (message: string, type: ToastType = 'success', duration = 3000) => {
    const id = Date.now().toString() + Math.random().toString(36).substring(2, 5)
    
    toasts.value.push({ id, message, type, duration })

    if (duration > 0) {
      setTimeout(() => {
        remove(id)
      }, duration)
    }
  }

  const remove = (id: string) => {
    toasts.value = toasts.value.filter((t) => t.id !== id)
  }

  const success = (msg: string, duration?: number) => add(msg, 'success', duration)
  const warning = (msg: string, duration?: number) => add(msg, 'warning', duration)
  const danger = (msg: string, duration?: number) => add(msg, 'danger', duration)

  return {
    toasts,
    add,
    remove,
    success,
    warning,
    danger
  }
})