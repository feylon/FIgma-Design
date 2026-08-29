<template>
  <div class="MainMenu">
    <div class="container MainMenuElements">
      
      <div @click="useRouter().push('/')" class="MainLogo">
        <img :src="LogoSVG" alt="Logo">
      </div>

      <!-- Loading / Error holatlari -->
      <div v-if="isLoading" class="loading-state">
        Yuklanmoqda...
      </div>

      <div v-else-if="error" class="error-state">
        {{ error }}
      </div>

      <!-- Menu Ro'yxati -->
      <div v-else class="menuList_List">
        <div v-for="value in menuItems" :key="value.id" class="MenuList">
          <div class="menuItem">
            <span>{{ value.title }}</span>
            
            <img
              v-if="value.children?.length"
              class="upDown"
              :src="anglesmallrightsvg"
              alt=""
            >

            <!-- Submenu items -->
            <div v-if="value.children?.length" class="items">
              <NuxtLink
              style="display: block;"
                :to="`/menu/${item.alias}`"
                v-for="item in value.children"
                :key="item.id"
                class="item"

               
              >
                <span>{{ item.title }}</span>
              </NuxtLink>
            </div>

          </div>
        </div>
      </div>

      <div class="Buttons">
        <div class="lupa">
          <img :src="lupa" alt="">
        </div>

        <div class="button_maqola_yuborish">
          <img :src="sendTelegram" alt="">
          <span>Мақола юбориш</span>
        </div>

        <div @click="authModal.open('login')" class="userIcon">
          <img :src="UserIcon" alt="">
        </div>
      </div>

    </div>
  </div>
</template>

<script lang="ts" setup>
import LogoSVG from "@/assets/files/img/Logo.svg?url";
import anglesmallrightsvg from "@/assets/files/svg/angle-small-right.svg?url";
import sendTelegram from "@/assets/files/svg/sendTelegram.svg?url";
import UserIcon from "@/assets/files/svg/userIconHeader.svg?url";
import lupa from "@/assets/files/svg/lupa.svg?url";
import { useMenuStore } from "~/stores/menu";
import { useAuthModalStore } from "~/stores/authModal";



const authModal = useAuthModalStore()
const menuStore = useMenuStore()

await useAsyncData('menu-data', () => menuStore.fetchMenu())

const { menuItems, isLoading, error } = storeToRefs(menuStore)
</script>