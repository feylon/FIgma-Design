<script lang="ts" setup>
withDefaults(
  defineProps<{
    type?: 'button' | 'submit' | 'reset'
    text?: string
  }>(),
  {
    type: 'button',
    text: ''
  }
)

defineEmits<{
  (e: 'click', event: MouseEvent): void
}>()
</script>

<template>
  <button :type="type" class="partners-btn" @click="$emit('click', $event)">
    <slot>{{ text }}</slot>
  </button>
</template>

<style lang="sass" scoped>
$bg-btn: #3b66ac
$bg-btn-hover: #2d528e

.partners-btn
  display: inline-block
  background-color: $bg-btn
  color: #ffffff
  padding: 12px 28px
  border-radius: 8px
  font-size: 15px
  font-weight: 500
  text-decoration: none
  border: none
  cursor: pointer
  transition: background-color 0.2s ease

  &:hover
    background-color: $bg-btn-hover
</style>