<template>
  <nav class="navigation">
    <div class="container">
      <div class="elements">
        <div class="element1 flex gap-24">
          <div class="flex items-center gap-6">
            <svg
              @click="()=>{ mobileStore.setMobileMenu(true);}"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="#000000"
              viewBox="0 -0.5 25 25"
              class="MenuOpenMobile t-icon t-icon-svg t-icon-humburger"
              style="width:undefinedpx;height:undefinedpx;flex:undefinedpx 0 0;fill:transparent;stroke:transparent;"
            >
              <path
                fill="#000"
                d="M5.5 7.75a.75.75 0 0 0 0 1.5zm14 1.5a.75.75 0 0 0 0-1.5zm-14 2.5a.75.75 0 0 0 0 1.5zm12 1.5a.75.75 0 0 0 0-1.5zm-12 2.5a.75.75 0 0 0 0 1.5zm7 1.5a.75.75 0 0 0 0-1.5zm-7-8h14v-1.5h-14zm0 4h12v-1.5h-12zm0 4h7v-1.5h-7z"
              ></path>
            </svg>
            <span></span>
          </div>
          <div class="flex messageSVG1_Section items-center gap-6">
            <img :src="messageSVG1" alt="">
            <span>
              {{ pagesData?.email }}
            </span>
          </div>
          <div class="flex phoneSVG_section items-center gap-6">
            <img :src="phoneSVG" alt="">
            <span>
              {{ pagesData?.phone }}
            </span>
          </div>
        </div>
        <div class="element2">
          <div class="langSection">
            <div class="parent">
              <img :src="lang_flag" class="lang_flag" alt="">
            </div>
            <span class="selected_lang">Ўзбекча</span>
            <img :src="'@/assets/files/svg/UpdownLang.svg?url'" alt="">
          </div>
        </div>
      </div>
    </div>
  </nav>

  <!-- Mobile View -->
  <div class="MobileMenu" :class="mobileStore.isMobileMenuOpen ? 'active_MobileMenu' : 'Unactive_MobileMenu'">
  <div class="MainSection">
    <span class="menuItemCaption">Menu</span>

    <div @click="mobileStore.setMobileMenu(false)" class="CloseIcon">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" class="t-icon t-icon-svg t-icon-close" style="width:undefinedpx;height:undefinedpx;flex:undefinedpx 0 0;fill:transparent;stroke:transparent;">
        <path fill="#000" d="M18 6a1 1 0 0 0-1.414 0L12 10.586 7.414 6A1 1 0 0 0 6 7.414L10.586 12 6 16.586A1 1 0 0 0 7.414 18L12 13.414 16.586 18A1 1 0 0 0 18 16.586L13.414 12 18 7.414A1 1 0 0 0 18 6"></path>
      </svg>
    </div>
  </div>

  <div class="MenuList">
    <nav class="sidebar-menu">
      <div 
        v-for="item in menuItems" 
        :key="item.id" 
        class="menu-item"
        :class="{ 'is-open': isMenuOpen(item.id) }"
      >
        <!-- 1-holat: Bolalari (children) bor bo'lsa - Akkordeon ochish/yopish tugmasi -->
        <button 
          v-if="item.children && item.children.length"
          class="menu-header" 
          @click="toggleMenu(item.id)"
        >
          <span class="menu-title">{{ item.title }}</span>
          <svg 
            class="arrow-icon" 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            stroke-width="2" 
            stroke-linecap="round" 
            stroke-linejoin="round"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>

        <!-- 2-holat: Bolalari yo'q bo'lsa - To'g'ridan-to'g'ri boshqa sahifaga o'tkazish -->
        <NuxtLink 
          v-else
          class="menu-header"
          style="display: flex; text-decoration: none;"
          :to="item.inner_link ? `/${item.inner_link}` : `/menu/${item.alias}`"
          @click="mobileStore.setMobileMenu(false)"
        >
          <span class="menu-title">{{ item.title }}</span>
        </NuxtLink>

        <!-- Ichki (submenu) qism -->
        <transition name="accordion">
          <div v-if="isMenuOpen(item.id) && item.children && item.children.length" class="menu-content">
            <NuxtLink 
              v-for="subItem in item.children" 
              :key="subItem.id" 
              :to="subItem.inner_link ? `/${subItem.inner_link}` : `/menu/${subItem.alias}`" 
              class="submenu-link"
              @click="mobileStore.setMobileMenu(false)"
            >
              {{ subItem.title }}
            </NuxtLink>
          </div>
        </transition>
      </div>
    </nav>
  </div>

  <div class="social_items">
    <span class="mainTitle">
      Ijtimoiy tarmoqlar:
    </span>
   
    <div class="social_items_card">
      <div class="item">
        <img :src="instagramIcon" alt="">
      </div>

      <div class="item">
        <img :src="telegramICON_SOCIAL" alt="">
      </div>

      <div class="item">
        <img :src="facebook_social" alt="">
      </div>

      <div class="item">
        <img :src="youtube" alt="">
      </div>

      <div class="item">
        <img :src="x" alt="">
      </div>
    </div>
  </div>
</div>
</template>

<script lang="ts" setup>
import messageSVG1 from "@/assets/files/svg/message.svg?url";
import phoneSVG from "@/assets/files/svg/phone.svg?url";
import upDownLangSVG from "@/assets/files/svg/UpdownLang.svg?url";
import lang_flag from "@/assets/files/img/lang_flag.png";

import instagramIcon from "@/assets/files/svg/instagramIcon.svg?url";
import telegramICON_SOCIAL from "@/assets/files/svg/telegramICON_SOCIAL.svg?url";
import facebook_social from "@/assets/files/svg/facebook_social.svg?url";
import youtube from "@/assets/files/svg/youtube.svg?url";
import x from "@/assets/files/svg/X_social.svg?url";
import { usePagesStore } from "~/stores/pages";
import { useMenuStore } from "~/stores/menu";
import { useMobileMenuStore } from "~/stores/MobileMenuOpen";

const pagesStore = usePagesStore()
await useAsyncData('pages-data', () => pagesStore.fetchPagesData())
const { pagesData } = storeToRefs(pagesStore)

const menuStore = useMenuStore()
await useAsyncData('menu-data', () => menuStore.fetchMenu())
const { menuItems } = storeToRefs(menuStore)



const mobileStore = useMobileMenuStore();

const openMenuIds = ref<number[]>([])

watch(menuItems, (newVal) => {
  if (newVal && newVal.length > 0 && openMenuIds.value.length === 0) {
    openMenuIds.value.push(newVal[0].id)
  }
}, { immediate: true })

const toggleMenu = (id: number) => {
  if (openMenuIds.value.includes(id)) {
    openMenuIds.value = openMenuIds.value.filter(menuId => menuId !== id)
  } else {
    openMenuIds.value.push(id)
  }
}

const isMenuOpen = (id: number) => {
  return openMenuIds.value.includes(id)
}
</script>