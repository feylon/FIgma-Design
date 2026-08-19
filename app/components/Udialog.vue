<template>
  <button class="floating-chat-btn" @click="()=>{}" aria-label="Chatni ochish">
    <img src="@/assets/icons/chat/dialog.svg" alt="Chat icon" class="chat-icon" />
  </button>
</template>

<script setup>

</script>

<style lang="sass" scoped>
$secondary-500: #738fc2

.floating-chat-btn
  position: fixed
  bottom: 30px
  right: 30px
  z-index: 1000

  width: 60px
  height: 60px
  border-radius: 50%
  background-color: $secondary-500

  display: flex
  align-items: center
  justify-content: center

  border: none
  cursor: pointer
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2)
  transition: transform 0.2s ease, background-color 0.2s ease

  &:hover
    transform: scale(1.1)
    background-color: darken($secondary-500, 5%)

  .chat-icon
    width: 30px
    height: 30px
</style>