import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default defineNuxtPlugin(() => {
  // Plaginlarni ro'yxatdan o'tkazish
  if (process.client) {
    gsap.registerPlugin(ScrollTrigger)
  }

  return {
    provide: {
      gsap,
      ScrollTrigger
    }
  }
})