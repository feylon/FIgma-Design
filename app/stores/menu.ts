import type { MenuItem, MenuResponse } from "~/types.index"

export const useMenuStore = defineStore('menu', () => {
  const config = useRuntimeConfig()

  // State
  const menuItems = ref<MenuItem[]>([])
  const isLoading = ref<boolean>(false)
  const error = ref<string | null>(null)

  async function fetchMenu(force = false) {
    if (menuItems.value.length > 0 && !force) return

    isLoading.value = true
    error.value = null

    try {
      const baseUrl = config.public.apiUrl.replace(/\/+$/, '')

      const response = await $fetch<MenuResponse>(`${baseUrl}/menu`, {
        headers: {
          'accept-language': 'uz',
        },
      })

      menuItems.value = response.data
    } catch (err: any) {
      error.value = err?.message || 'Menyularni yuklashda xatolik yuz berdi'
      console.error('Fetch menu error:', err)
    } finally {
      isLoading.value = false
    }
  }

  return {
    menuItems,
    isLoading,
    error,
    fetchMenu,
  }
})