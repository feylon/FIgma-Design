import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useMobileMenuStore = defineStore('mobileMenu', () => {
  const isMobileMenuOpen = ref<boolean>(false)

  watch(isMobileMenuOpen, (val) => {
    console.log('Mobile menu state:', val)
  })

  function toggleMobileMenu() {
    isMobileMenuOpen.value = !isMobileMenuOpen.value
  }

  function setMobileMenu(status: boolean) {
    isMobileMenuOpen.value = status
  }

  return {
    isMobileMenuOpen,
    toggleMobileMenu,
    setMobileMenu
  }
})