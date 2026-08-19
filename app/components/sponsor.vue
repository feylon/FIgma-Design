<template>
    <div class="bg-white">
        <div class="container pt-110 pb-100">
            <div class="content">
                <div class="head_sponser">
                    <span class="head_sponser_title">
                        Ҳамкорлар
                    </span>


                    <span class="sponser_description">
                        Биз етакчи илмий ва таълим муассасалари билан ҳамкорлик қиламиз
                    </span>
                </div>

                <div>
                    <div class="slider_sponsers_list">
                        <div class="images_sponser" v-for="value in partners">
                            <img :src="value.image" :alt="value.alt">
                        </div>
                    </div>

                </div>


            </div>

            <div class="button_section">
                <button class="hamkor_bulish">
                    Ҳамкор бўлиш
                </button>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import jurnalTvImg from '@/assets/img/sponsors/jurnal-tv.png'
import jurnalImg from '@/assets/img/sponsors/jurnal.png'
import digitalJournalImg from '@/assets/img/sponsors/digital-journal.png'
import jurnalIlmiahImg from '@/assets/img/sponsors/jurnal-ilmiah.png'
import journalStoriesImg from '@/assets/img/sponsors/journal-stories.png'
import rumahJurnalImg from '@/assets/img/sponsors/rumah-jurnal.png'

const partners = ref<{ image: string; alt: string }[]>([
    {
        image: jurnalTvImg,
        alt: 'Jurnal TV 7',
    },
    {
        image: jurnalImg,
        alt: 'Jurnal by Mekari',
    },
    {
        image: digitalJournalImg,
        alt: 'Digital Journal',
    },
    {
        image: jurnalIlmiahImg,
        alt: 'Jurnal Ilmiah',
    },
    {
        image: journalStoriesImg,
        alt: 'Journal Stories',
    },
    {
        image: rumahJurnalImg,
        alt: 'Rumah Jurnal UIN Bukittinggi',
    },
])




</script>

<style lang="sass">
.head_sponser_title
  font-weight: 600
  font-size: 36px
  line-height: 40px
  letter-spacing: 0px
  text-align: center
  

.sponser_description
  font-family: Arial, sans-serif
  font-weight: 400
  font-size: 20px
  line-height: 28px
  letter-spacing: 0px
  text-align: center
  color: #4b5563 
  margin-top: 12px

.head_sponser
  display: flex
  align-items: center
  flex-direction: column
  gap: 10px 

.images_sponser
    margin-top: 6px
    // max-width: 230px
    padding: 12px
    border: #E5E7EB 1px solid
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06) 
    background: white
    border-radius: 10px
    display: flex
    justify-content: center
    align-items: center
    @media(max-width : 600px)
        margin-left: auto
        margin-right: auto
        max-width: 300px
   

    img
        object-fit: center
        width: 206px




.slider_sponsers_list
    display: grid
    grid-template-columns: repeat(6, 1fr)
    margin-top: 32px
    gap: 12px
    margin-left: auto
    margin-right: auto
    

    @media(max-width: 1200px)
        grid-template-columns: repeat(4, 1fr)

    @media(max-width: 1000px)
        grid-template-columns: repeat(3, 1fr)

    @media(max-width: 768px)
        grid-template-columns: repeat(2, 1fr)

    @media(max-width: 600px)
        grid-template-columns: repeat(1, 1fr) 



.button_section
    display: flex
    justify-content: center
    align-items: center
    padding-top: 24px
    .hamkor_bulish   
        background: #3861A7
        border-radius: 10px
        border: none
        color: white
        font-size: 18px
        padding: 12.5px 16px
        cursor: pointer
        &:hover
            background: #3861A5



</style>