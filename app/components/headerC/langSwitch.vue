<template>
    <div class="langSwitch">
        <div class="flex items-center">
            <img class="w-20 w-20 flag" src="@/assets/img/logo/headers/flag.png" alt="">
            <span class="content">
                Ўзбекча
            </span>
            <img class="up_lang_icon" src="@/assets/icons/headers/up_lang.svg" alt="">

        </div>


        <div class="lang__items">
            <div v-for="value in langItems" :key="value.id" class="lang__item">
                <img class="lang_icon" :src="value.img" alt="">
                {{ value.name }}
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import RussianFlag from "@/assets/img/langPics/rus.avif";
import UzFlag from "@/assets/img/langPics/uz.webp";
import UkFlag from "@/assets/img/langPics/en.jpg";


const langItems = <{
    id: string,
    name: string,
    img: string
}[]>[
        {
            id: "ru",
            name: "Русский",
            img: RussianFlag
        },
        {
            id: "uz",
            name: "Ўзбекча",
            img: UzFlag
        },
        {
            id: "en",
            name: "English",
            img: UkFlag
        }
    ]
</script>


<style lang="sass">
@use "../../assets/sass/_variables" as variables

.langSwitch
    max-width: 110px
    cursor: pointer
    display: flex
    justify-content: end
    position: relative
    &:hover
        .lang__items
            visibility: visible
            transform: translateY(0px)
            opacity: 1
        .up_lang_icon
            rotate: 180deg
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





.lang__items
    visibility: hidden
    top: 20px
    transition: all 0.3s ease
    opacity: 0
    transform: translateY(-10px)
    left: 0px
    background: white
    display: flex
    flex-direction: column
    border-radius: 5px
    position: absolute
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px 
    &:hover
        visibility: visible
    @media (max-width:1000px)
        left: -40px
    



.lang__item
    display: flex
    gap: 8px
    padding: 14px 10px
    padding-right: 35px
    border-top: 1px #dadde3 solid
    align-items: center
    display: flex
    border-radius: 5px
    &:hover
        background: #f2f4f7
    .lang_icon
        width: 30px
.up_lang_icon
    transition: all 0.3s ease
</style>