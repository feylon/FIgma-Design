<template>

    <div class="firstNav">
        <div class="container flex items-center justify-between ">
            <div class="flex gap-24">
                <div class="flex items-center gap-6">
                    <img src="@/assets/icons/headers/envelope.svg" alt="1">
                    <NuxtLink to="mailto:info@tiuglobal.uz" class="mail_section mail">
                        info@tiuglobal.uz
                    </NuxtLink>
                </div>



                <div class="flex items-center gap-6">
                    <img src="@/assets/icons/headers/phone-flip.svg" alt="1">
                    <NuxtLink to="tel:+998901234567" class="mail_section phone">
                        +998 71 244-44-44
                    </NuxtLink>
                </div>
            </div>
            <div>
                <langSwitch />
            </div>
        </div>
    </div>
    <div class="container sticky_header">
        <div class="headerB  flex items-center justify-between">
            <NuxtLink to="/">
                <img src="@/assets/img/logo/layer1000.png" alt="logo.png" class="logo-img">
            </NuxtLink>

            <div class="flex gap-6 menu items-center select-none cursor-pointer desktop-menu">
                <div class="dropdown-wrapper" @mouseleave="activedropdown = null">
                    <span class="flex item-center menu_items" @mouseenter="activedropdown = 'jurnal'">
                        Jurnal haqida <img src="@/assets/icons/headers/Arrow-up.svg" alt=""
                            :class="{ 'rotate-arrow': activedropdown === 'jurnal' }">
                    </span>
                    <div class="dropdown-menu" v-show="activedropdown === 'jurnal'">
                        <NuxtLink to="/ArticleGuidelines" class="dropdown-item">Maqolalarga qo'yiladigan talablar
                        </NuxtLink>
                        <NuxtLink to="/editorial_team" class="dropdown-item">Tahririyat jamoasi</NuxtLink>
                        <NuxtLink to="/questions" class="dropdown-item">Maxfiylik bayonoti</NuxtLink>
                    </div>
                </div>

                <div class="dropdown-wrapper" @mouseleave="activedropdown = null">
                    <span class="flex item-center menu_items" @mouseenter="activedropdown = 'mualliflar'">
                        Mualliflar uchun <img src="@/assets/icons/headers/Arrow-up.svg" alt=""
                            :class="{ 'rotate-arrow': activedropdown === 'mualliflar' }">
                    </span>
                    <div class="dropdown-menu" v-show="activedropdown === 'mualliflar'">
                    </div>
                </div>

                <div class="dropdown-wrapper" @mouseleave="activedropdown = null">
                    <span class="flex item-center menu_items" @mouseenter="activedropdown = 'resentzentlar'">
                        Resentzentlar uchun <img src="@/assets/icons/headers/Arrow-up.svg" alt=""
                            :class="{ 'rotate-arrow': activedropdown === 'resentzentlar' }">
                    </span>
                    <div class="dropdown-menu" v-show="activedropdown === 'resentzentlar'">
                    </div>
                </div>

                <span @click="router.push('/questions')" class="flex item-center menu_items">Bog'lanish </span>
            </div>

            <div class="flex items-center cursor-pointer header-actions">
                <button class="border-none background-none search-btn">
                    <img src="@/assets/icons/headers/search.svg" alt="search.svg">
                </button>

                <button
                    class="maqola_yuborish_Button flex items-center justify-center gap-8 border-none font-weight-600">
                    <img src="@/assets/icons/headers/send.svg" alt="plus.svg" />
                    <span>Мақола юбориш</span>
                </button>

                <button class="contact_Button border-none cursor-pointer">
                    <img src="@/assets/icons/headers/contact.svg" alt="contact.svg">
                </button>

                <button class="burger-btn border-none background-none"
                    @click="is_Mobile_Menu_Open = !is_Mobile_Menu_Open">
                    <span :class="{ 'open': is_Mobile_Menu_Open }"></span>
                    <span :class="{ 'open': is_Mobile_Menu_Open }"></span>
                    <span :class="{ 'open': is_Mobile_Menu_Open }"></span>
                </button>
            </div>
        </div>
    </div>

    <div class="mobile-menu-overlay" v-show="is_Mobile_Menu_Open">
        <div class="mobile-menu-content">
            <div class="mobile-dropdown-wrapper">
                <div class="mobile-menu-toggle flex justify-between items-center"
                    @click="mobileDropdownJurnal = !mobileDropdownJurnal">
                    <span class="menu_items">Jurnal haqida</span>
                    <img src="@/assets/icons/headers/Arrow-up.svg" :class="{ 'rotate-arrow': mobileDropdownJurnal }" alt="">
                </div>
                <div class="mobile-submenu" v-show="mobileDropdownJurnal">
                    <NuxtLink to="/ArticleGuidelines" class="dropdown-item" @click="is_Mobile_Menu_Open = false">
                        Maqolalarga qo'yiladigan talablar</NuxtLink>
                    <NuxtLink to="/editorial_team" class="dropdown-item" @click="is_Mobile_Menu_Open = false">Tahririyat
                        jamoasi</NuxtLink>
                    <NuxtLink to="/questions" class="dropdown-item" @click="is_Mobile_Menu_Open = false">Maxfiylik
                        bayonoti</NuxtLink>
                </div>
            </div>

            <div class="mobile-dropdown-wrapper">
                <div class="mobile-menu-toggle flex justify-between items-center"
                    @click="mobileDropdownMuallif = !mobileDropdownMuallif">
                    <span class="menu_items">Mualliflar uchun</span>
                    <img src="@/assets/icons/headers/Arrow-up.svg" :class="{ 'rotate-arrow': mobileDropdownMuallif }" alt="">
                </div>
                <div class="mobile-submenu" v-show="mobileDropdownMuallif">
                </div>
            </div>

            <div class="mobile-dropdown-wrapper">
                <div class="mobile-menu-toggle flex justify-between items-center"
                    @click="mobileDropdownResentzent = !mobileDropdownResentzent">
                    <span class="menu_items">Resentzentlar uchun</span>
                    <img src="@/assets/icons/headers/Arrow-up.svg" :class="{ 'rotate-arrow': mobileDropdownResentzent }" alt="">
                </div>
                <div class="mobile-submenu" v-show="mobileDropdownResentzent">
                </div>
            </div>

            <div class="mobile-menu-toggle">
                <span class="menu_items">Bog'lanish</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import langSwitch from './headerC/langSwitch.vue';


const router = useRouter();
const activedropdown = ref<string | null>(null)
const is_Mobile_Menu_Open = ref(false)
const mobileDropdownJurnal = ref(false)
const mobileDropdownMuallif = ref(false)
const mobileDropdownResentzent = ref(false)
</script>

<style lang="sass" scoped>
@use "../assets/sass/_variables" as variables


.gap-1_5
    gap: 6px

.header_C_social_links
    font-size: 17px
    color: variables.$headerSotcialColor



.headerB
    height: 102px
    min-width: 100%
    position: sticky
    top: 52px
    z-index: 502
    background: #ffffff
            
    // padding: 0 40px
    // max-width: 1500px

.maqola_yuborish_Button
    background: #3861A7
    cursor: pointer
    width: 205px
    height: 50px
    border-radius: 5px
    color: white    
    font-size: 18px
    margin-right: 20px

.contact_Button
    width: 50px
    height: 50px
    border-radius: 5px
    background: #E5EFF9
    color: variables.$blueBackground    
    font-size: 18px

.search-btn
    margin-right: 30px

.menu_items
    font-size: 18px
    font-family: 'SF Pro Display', sans-serif  

    gap: 6px
    img
        transition: transform 0.3s ease

.rotate-arrow
    transform: rotate(180deg)

.dropdown-wrapper
    position: relative
    display: inline-block
    padding: 20px 0
    margin: -20px 0

.dropdown-menu
    position: absolute
    top: 100%
    left: 0
    background: variables.$blueBackground
    border-radius: 8px
    min-width: 260px
    box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.15)
    display: flex
    flex-direction: column
    z-index: 2000
    overflow: hidden

.dropdown-item
    padding: 14px 18px
    color: white
    font-size: 16px
    text-decoration: none
    border-bottom: 1px solid rgba(255, 255, 255, 0.15)
    transition: background 0.2s ease

    &:last-child
        border-bottom: none

    &:hover
        background: rgba(255, 255, 255, 0.15)

.burger-btn
    display: none
    flex-direction: column
    justify-content: space-between
    width: 30px
    height: 22px
    cursor: pointer
    margin-left: 20px
    span
        display: block
        width: 100%
        height: 3px
        background: variables.$blueBackground
        transition: all 0.3s ease
        &:nth-child(1).open
            transform: translateY(9.5px) rotate(45deg)
        &:nth-child(2).open
            opacity: 0
        &:nth-child(3).open
            transform: translateY(-9.5px) rotate(-45deg)

.mobile-menu-overlay
    display: none
    position: fixed
    top: 154px
    left: 0
    width: 100%
    height: calc(100vh - 154px)
    background: white
    z-index: 1500
    overflow-y: auto
    padding: 20px

.mobile-menu-content
    display: flex
    flex-direction: column
    gap: 15px

.mobile-dropdown-wrapper
    border-bottom: 1px solid #eaeaea
    padding-bottom: 10px

.mobile-menu-toggle
    padding: 10px 0
    font-size: 18px
    font-weight: 500
    cursor: pointer

.mobile-submenu
    display: flex
    font-family: 'SF Pro Display', sans-serif  
    flex-direction: column
    padding-left: 15px
    background: #f8f9fa
    border-radius: 6px
    margin-top: 5px
    .dropdown-item
        color: variables.$blueBackground
        border-bottom: 1px solid #eaeaea
        &:hover
            background: #e9ecef
.info_tiuglobal
    font-family: 'SF Pro Display', sans-serif
@media screen and (max-width: 1200px)
    .headerC
        padding: 0 20px
    .headerB
        padding: 0 20px
    .desktop-menu
        display: none !important
    .burger-btn
        display: flex
    .mobile-menu-overlay
        display: block

@media screen and (max-width: 768px)
    .headerC
        padding: 0 10px
        font-size: 14px
    .phone-item
        display: none
    .headerB
        padding: 0 10px
        height: 80px
    .logo-img
        max-height: 40px
    .maqola_yuborish_Button
        width: auto
        padding: 0 15px
        font-size: 14px
        height: 40px
        span
            display: none
    .contact_Button
        width: 40px
        height: 40px
    .search-btn
        margin-right: 15px
    .mobile-menu-overlay
        top: 132px
        height: calc(100vh - 132px)

.firstNav
    position: sticky
    top: 0
    z-index: 600
    font-family: 'SF Pro Display', sans-serif
    width: 100%
    padding-top: 16px
    background: variables.$headerColor
    height: 52px
    .mail_section
        color: variables.$headerSotcialColor
        text-decoration: none

.sticky_header
    position:sticky
    top:54px

@media (max-width:900px)
</style>