<template>
  <div class="toast-container">
    <TransitionGroup name="toast">
      <div
        v-for="toast in toastStore.toasts"
        :key="toast.id"
        :class="['toast', `toast--${toast.type}`]"
      >
        <span class="toast__message">
          {{ toast.message }}
        </span>

        <button
          type="button"
          class="toast__close"
          @click="toastStore.remove(toast.id)"
        >
          ✕
        </button>
      </div>
    </TransitionGroup>
  </div>
</template>

<script setup lang="ts">
import { useToastStore } from '~/stores/toast'

const toastStore = useToastStore()
</script>

<style lang="scss" scoped>
$toast-colors: (
  'success': #10b981,
  'warning': #f59e0b,
  'danger': #ef4444
);

.toast-container {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  gap: 10px;
  pointer-events: none;
}

.toast {
  pointer-events: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  
  min-width: 280px;
  max-width: 420px;
  padding: 14px 20px;
  
  color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.15), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4px);

  @each $name, $color in $toast-colors {
    &--#{$name} {
      background-color: $color;
    }
  }

  &__message {
    font-size: 14px;
    font-weight: 500;
    line-height: 1.4;
  }

  &__close {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: none;
    color: rgba(255, 255, 255, 0.8);
    font-size: 16px;
    cursor: pointer;
    padding: 0;
    line-height: 1;
    transition: color 0.2s ease;

    &:hover {
      color: #ffffff;
    }
  }
}

// Animations
.toast-enter-active {
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.toast-leave-active {
  transition: opacity 0.4s ease, transform 0.4s ease;
}

.toast-enter-from {
  opacity: 0;
  transform: translateX(100%);
}

.toast-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>