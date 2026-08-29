<template>
  <div>
  
    <div class="stickky_element">
       <headerNav />
       
       <MainMenu />
    </div>

    <slot />
    <LeftMain_social_items/>
    <ChatMenu />

    <footerElement />


  </div>

  <div v-if="authModal.isOpen" class="modalLoginBackground modalLoginmodalLoginBackground_Show">
    <LoginModal />
  </div>





</template>

<script lang="ts" setup>
import headerNav from '~/components/layout/headerNav.vue';
import MainMenu from '~/components/layout/mainMenu.vue';
import footerElement from '~/components/layout/footer.vue';
import LeftMain_social_items from '~/components/layout/leftMain_social_items.vue';
import ChatMenu from '~/components/layout/chat.menu.vue';
import { usePagesStore } from '~/stores/pages';
import { useMenuStore } from '~/stores/menu';
import LoginModal from '~/components/layout/loginModal.vue';
import { useAuthModalStore } from '~/stores/authModal';

const authModal = useAuthModalStore()


const pagesStore = usePagesStore();

await useAsyncData('pages-data', () => pagesStore.fetchPagesData())


const menuStore = useMenuStore()

await useAsyncData('menu-data', () => menuStore.fetchMenu())
</script>

<style lang="scss" >
.stickky_element{
  position: sticky;
  top: 0;
}

</style>