<template>
<div ref="container">
  <div ref="icons_List" class="scoial_icon_list">
    <div v-for="value in socialItems" class="scoial_icon w-44 h-44">
        <img :src="value.icon" alt="">

    </div>
</div>
</div>
</template>

<script setup lang="ts">
const {$gsap} = useNuxtApp();

const icons_List = ref<HTMLElement | null>(null);
const containerRef = ref<HTMLElement | null>(null);

let ctx : gsap.Context ;
onUnmounted(() => {
  ctx?.revert()
})



const socialItems = [
  {
    name: 'Instagram',
    icon: '/icons/main/instagram.svg',
    alt: 'instagram.svg'
  },
  {
    name: 'Telegram',
    icon: '/icons/main/telegram.svg',
    alt: 'telegram.svg'
  },
  {
    name: 'Facebook',
    icon: '/icons/main/facebook.svg',
    alt: 'facebook.svg'
  },
  {
    name: 'YouTube',
    icon: '/icons/main/youtube.svg',
    alt: 'youtube.svg'
  },
  {
    name: 'X',
    icon: '/icons/main/x.svg',
    alt: 'x.svg'
  }
];

onMounted(()=>{
  console.log(icons_List.value);
// if(!containerRef.value) return ;

  ctx = $gsap.context(()=>{
    $gsap.fromTo(icons_List.value, 
      {

        left : -44
      },
      {
        left : 0,
        duration: 1.5,
        ease : 'power3.out'

      }
    )
  }, containerRef.value)
  })






</script>

<style lang="sass" scoped>
@use "../assets/sass/main" as *
@use "../assets/sass/_variables" as variables

.scoial_icon_list
    display: flex
    flex-direction: column
    gap: 6px
    position: fixed
    left: 0
    z-index: 600
    top: 30%
    

.scoial_icon
    display: flex
    justify-content: center
    align-items: center
    width: 44px
    border-top-right-radius: 8px
    border-bottom-right-radius: 8px
    height: 44px
    background: variables.$background_social_icon
    cursor: pointer
    &:hover
      transform: scale(1.1)

 

</style>
