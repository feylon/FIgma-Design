<script setup lang="ts">
const containerRef = ref(null)
const swiper = useSwiper(containerRef, {
    slidesPerView: 5,
    spaceBetween: 12,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 5,
        },
    },
});

onMounted(() => {
    console.log(swiper.instance)
})
</script>

<template>
   <div class="bg-white">
     <div class="container">

    
    
    <div class="title_indexi">
        <span class="title">
            Халқаро индексация базалари
        </span>

        <span class="content_indexi">
            Журналимиз қуйидаги халқаро маълумот базаларида индексланган
        </span>

    </div>

    <ClientOnly>
        <div class="partners-slider">
            <button class="slider-btn slider-prev" @click="swiper?.instance?.value.slidePrev()">
                ‹
            </button>

            <swiper-container ref="containerRef" pagination-clickable="true" :pagination="{
      clickable: true,
    }"       :init="false">
                <swiper-slide>
                    <img src="/doi.png" alt="BASE">
                </swiper-slide>

                <swiper-slide>
                    <img src="/doi.png" alt="DOI">
                </swiper-slide>

                <swiper-slide>
                    <img src="/google-scholar.png" alt="Google Scholar">
                </swiper-slide>

                <swiper-slide>
                    <img src="/inlibrary.png" alt="inLibrary">
                </swiper-slide>

                <swiper-slide>
                    <img src="/google-scholar.png" alt="Google Scholar">
                </swiper-slide>

                <swiper-slide>
                    <img src="/inlibrary.png" alt="inLibrary">
                </swiper-slide>

            </swiper-container>

            <button class="slider-btn slider-next flex justify-center" @click="swiper.instance.value.slideNext()">
                ›
            </button>
        </div>
    </ClientOnly>



    </div>
   </div>
</template>

<style scoped lang="sass">
.title_indexi
    display: flex
    flex-direction: column
    margin-bottom: 32px
    padding-top: 120px

.title_indexi
    font-family: 'SF Pro Display', sans-serif
    font-weight: 600
    font-style: normal
    font-size: 36px
    line-height: 40px
    letter-spacing: 0
    text-align: center
    color: #1E2939

.content_indexi
    font-family: 'SF Pro Display', sans-serif
    font-weight: 400
    font-style: normal
    font-size: 20px
    line-height: 28px
    letter-spacing: 0
    text-align: center
    margin-top: 12px
    color: #4A5565

.partners-slider
    width: 100%
    position: relative
    padding: 0 35px 30px

swiper-container
    width: 100%

swiper-slide
    width: 206px
    height: 128px
    display: flex
    align-items: center
    justify-content: center

    img
        width: 206px
        height: 128px
        object-fit: contain
        display: block

.slider-btn
    position: absolute
    top: 50%
    transform: translateY(-50%)
    z-index: 10
    width: 24px
    height: 24px
    padding: 0
    border: 0
    border-radius: 50%
    background: #fff
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12)
    display: flex
    align-items: center
    justify-content: center
    cursor: pointer
    color: #6b7280
    font-size: 20px

.slider-prev
    left: 5px

.slider-next
    right: 5px


.swiper-pagination
    margin-top: 124px
    position: inherit

@media (max-width: 1024px)
    swiper-slide,
    swiper-slide img
        width: 206px
        height: 128px

@media (max-width: 767px)
    .partners-slider
        padding: 0 30px 30px

    swiper-slide,
    swiper-slide img
        width: 206px
        height: 128px



</style>