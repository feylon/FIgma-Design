// app/stores/pages.ts
import type { PagesData } from "~/types.index"

export const usePagesStore = defineStore('pages', () => {
  const config = useRuntimeConfig()

  // State
  const pagesData = ref<PagesData | null>(null)
  const isLoading = ref<boolean>(false)
  const error = ref<string | null>(null)

  // Action
  async function fetchPagesData(force = false) {
    if (pagesData.value && !force) return

    isLoading.value = true
    error.value = null

    try {
      const baseUrl = config.public.apiUrl.replace(/\/+$/, '')
      
    
      const data = await $fetch<PagesData>(`${baseUrl}/pages`,{
         headers : {
            "accept-language" : "uz"
        }
      })
      console.log("data")
      pagesData.value = data
    } catch (err: any) {
      error.value = err?.message || 'Ma\'lumotlarni yuklashda xatolik yuz berdi'
      console.error('Fetch pages error:', err)
    } finally {
      isLoading.value = false
    }
  }

  return {
    pagesData,
    isLoading,
    error,
    fetchPagesData,
  }
})