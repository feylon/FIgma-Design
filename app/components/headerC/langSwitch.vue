
<template>
    <div class="w-110 w-20 langSwitch">
   <div class="flex items-center">
     <img class="w-20 w-20 flag" src="/flag.png" alt="">
     <span class="content">
        Ўзбекча
     </span>
     <img src="/icons/headers/up_lang.svg" alt="">

     <img src="" alt="">
   </div>
    </div>
</template>
<script lang="ts" setup>

</script>


<style lang="sass">
@use "../../assets/sass/_variables" as variables

.langSwitch
    .flag
        border-radius: 50%
        object-fit: fill
        display: block
        margin-right: 8px
        
    .content
        font-family: 'SF Pro Display', sans-serif
        color: variables.$headerSotcialColor
        margin-right: 2px
        font-size: 17px

</style>