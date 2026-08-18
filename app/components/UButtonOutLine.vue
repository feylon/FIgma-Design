<template>
    <button class="UButton">
        <slot />
    </button>
</template>
<script lang="ts" setup>

</script>

<style lang="sass" scoped>
@use "../assets/sass/_variables" as variables;
@use "../assets/sass/main" as *;

.UButton
    display: flex
    align-items: center
    gap: 10px
    border-radius: 10px
    padding: 12.5px 20px
    background: white
    color: variables.$blueBackground
    border: variables.$blueBackground 1px solid
    cursor: pointer 
    
</style>