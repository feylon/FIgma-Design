<template>
    <Mainheader />
        <Journal_Scope />
        <LastNews />
        <Article />
        <indexi />
        <questions />
        <Sponsor />
  
</template>
<script lang="ts" setup>
import Journal_Scope from "@/components/index/Journal_Scope.vue"
import LastNews from "~/components/lastNews.vue";

definePageMeta({
    layout: 'main'
});
useHead(
    {
        title : "Бош саҳифа"
    }
)
</script>

<style scoped lang="sass">
@use "../assets/sass/main" as *
@use "../assets/sass/_variables" as variables
  
.jadval_buyicha_bulim
    width: 100%
    max-width: 357px
    height: 216px
    border-radius: 14px
    background: #708FC3
    margin-left: auto
    margin-right: auto


.columns
    grid-template-columns: repeat(4, 1fr)
    min-width: 100%
    gap: 20px
    padding: 0 16px

.columns_icon
    border-radius: 10px
    display: flex
    justify-content: center
    align-items: center
    background: rgba(255, 255, 255, 0.1)
    backdrop-filter: blur(10px)
    -webkit-backdrop-filter: blur(10px)


.barcha_catagory_kurish
    background: variables.$blueBackground
    border-radius: 10px
    width: 276px
    height: 50px
    color: white
    border: none
    margin-top: 20px
    margin-bottom: 20px

.ilm_fan
    background: url('/Investmentincommercialproperty-2.webp')
    background-repeat: no-repeat
    margin-bottom: 40px
    background-position: center
    background-size: cover
    width: 100%
    display: flex
    justify-content: space-around
    align-items: center
    padding: 20px
    box-sizing: border-box


.raqamli_iqtisodiyot
    max-width: 400px
    color: white

.Jurnalni_yuklab_olish
    display: flex
    align-items: center
    gap: 10px
    border-radius: 10px
    padding: 12.5px 20px
    background: variables.$blueBackground
    color: white
    border: none

.jurnal_yunalishlari
    font-family: 'SF Pro Display', sans-serif 
.turli_fan
    font-family: 'SF Pro Display', sans-serif
    color: #4A5565
    font-family: SF Pro Display;
    font-weight: 400
    font-style: Regular
    font-size: 20px
    leading-trim: NONE
    line-height: 28px
    letter-spacing: 0px
    text-align: center


@media (max-width: 1200px)
    .columns
        grid-template-columns: repeat(3, 1fr)

@media (max-width: 900px)
    .columns
        grid-template-columns: repeat(2, 1fr)

@media (max-width: 640px)
    .columns
        grid-template-columns: 1fr

    .ilm_fan
        flex-direction: column
        height: auto
        gap: 20px
        text-align: center

    .ilm_fan_content
        flex-direction: column
        text-align: center

    .raqamli_iqtisodiyot
        max-width: 100%
        text-align: center
</style>