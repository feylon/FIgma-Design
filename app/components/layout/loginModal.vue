<template>
  <Teleport to="body">
    <Transition name="modal-fade">
      <div 
        v-if="authModal.isOpen" 
        class="auth-modal-backdrop"
        @click.self="authModal.close()"
      >
        <div class="auth-modal">
          <!-- Header: Mode ga qarab sarlavha o'zgaradi -->
          <div class="auth-modal__header">
            <h2 class="auth-modal__title">
              {{ authModal.mode === 'login' ? 'Тизимга кириш' : 'Рўйхатдан ўтиш' }}
            </h2>
            <button 
              type="button" 
              class="auth-modal__close-btn" 
              aria-label="Yopish"
              @click="authModal.close()"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          <!-- Mode tablarining kontenti silliq almashishi uchun Transition -->
          <Transition name="fade-slide" mode="out-in">
            <!-- 1. LOGIN FORM -->
            <form 
              v-if="authModal.mode === 'login'" 
              key="login" 
              class="auth-modal__form" 
              @submit.prevent="handleLogin"
            >
              <div class="auth-modal__field">
                <input 
                  v-model="loginForm.identifier"
                  type="text" 
                  placeholder="Email ёки телефон рақамингиз"
                  class="auth-modal__input"
                  required
                />
              </div>

              <div class="auth-modal__field auth-modal__field--password">
                <input 
                  v-model="loginForm.password"
                  :type="showPassword ? 'text' : 'password'" 
                  placeholder="Парол"
                  class="auth-modal__input"
                  required
                />
                <button 
                  type="button" 
                  class="auth-modal__toggle-pwd"
                  @click="showPassword = !showPassword"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                </button>
              </div>

              <button type="submit" class="auth-modal__btn auth-modal__btn--primary">
                Кириш
              </button>

              <button 
                type="button" 
                class="auth-modal__btn auth-modal__btn--secondary"
                @click="authModal.setMode('register')"
              >
                Рўйхатдан ўтиш
              </button>
            </form>

            <!-- 2. REGISTER FORM -->
            <form 
              v-else 
              key="register" 
              class="auth-modal__form" 
              @submit.prevent="handleRegister"
            >
              <div class="auth-modal__field">
                <input 
                  v-model="registerForm.email"
                  type="email" 
                  placeholder="Email"
                  class="auth-modal__input"
                  required
                />
              </div>

              <div class="auth-modal__field">
                <input 
                  v-model="registerForm.username"
                  type="text" 
                  placeholder="Фойдаланувчи номи"
                  class="auth-modal__input"
                  required
                />
              </div>

              <div class="auth-modal__field">
                <input 
                  v-model="registerForm.phone"
                  type="tel" 
                  placeholder="Телефон"
                  class="auth-modal__input"
                  required
                />
              </div>

              <div class="auth-modal__field">
                <input 
                  v-model="registerForm.fullName"
                  type="text" 
                  placeholder="ФИШ"
                  class="auth-modal__input"
                  required
                />
              </div>

              <div class="auth-modal__field auth-modal__field--password">
                <input 
                  v-model="registerForm.password"
                  :type="showRegisterPassword ? 'text' : 'password'" 
                  placeholder="Парол"
                  class="auth-modal__input"
                  required
                />
                <button 
                  type="button" 
                  class="auth-modal__toggle-pwd"
                  @click="showRegisterPassword = !showRegisterPassword"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                </button>
              </div>

              <div class="auth-modal__field auth-modal__field--password">
                <input 
                  v-model="registerForm.confirmPassword"
                  :type="showConfirmPassword ? 'text' : 'password'" 
                  placeholder="Паролни қайта киритинг"
                  class="auth-modal__input"
                  required
                />
                <button 
                  type="button" 
                  class="auth-modal__toggle-pwd"
                  @click="showConfirmPassword = !showConfirmPassword"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                </button>
              </div>

              <button type="submit" class="auth-modal__btn auth-modal__btn--primary">
                Рўйхатдан ўтиш
              </button>

              <button 
                type="button" 
                class="auth-modal__btn auth-modal__btn--secondary"
                @click="authModal.setMode('login')"
              >
                Кириш
              </button>
            </form>
          </Transition>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { useAuthModalStore } from '~/stores/authModal'

const emit = defineEmits(['login', 'register'])
const authModal = useAuthModalStore()

const showPassword = ref(false)
const showRegisterPassword = ref(false)
const showConfirmPassword = ref(false)

const loginForm = reactive({
  identifier: '',
  password: ''
})

const registerForm = reactive({
  email: '',
  username: '',
  phone: '',
  fullName: '',
  password: '',
  confirmPassword: ''
})

watch(
  () => authModal.isOpen, 
  (isOpen) => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  },
  { immediate: true }
)


onUnmounted(() => {
  document.body.style.overflow = ''
})

const handleLogin = () => {
  emit('login', { ...loginForm })
}

const handleRegister = () => {
  emit('register', { ...registerForm })
}
</script>

