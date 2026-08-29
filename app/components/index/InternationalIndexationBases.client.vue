<template>
    <div class="bg-white">
        <div class="container">
            <div class="title_indexi">
                <span class="title">
                   {{pagesData?.index_bases}}
                </span>

                <span class="content_indexi">
                    {{
                        pagesData?.index_bases_desc
                }}</span>
            </div>

            <ClientOnly>
                <div class="partners-slider">
                    <button type="button" class="slider-btn slider-prev " aria-label="Previous slide"
                        @click="prevSlide">
                        ‹
                    </button>

                    <swiper-container ref="containerRef" class="mt-60 swiper_slide_img swiper-container" :init="false">
                        <swiper-slide
                        
                        v-for="value in data?.data"
                        class="swiper-slide">
                            <img :src="value.files[0]?.img " alt="BASE">
                        </swiper-slide>

                       
                    </swiper-container>

                    <button type="button" class="slider-btn slider-next" aria-label="Next slide" @click="nextSlide">
                        ›
                    </button>

                    <div class="custom-pagination">
                        <button v-for="(_, index) in slidesCount" :key="index" type="button" class="pagination-bullet"
                            :class="{ 'pagination-bullet-active': activeIndex === index }"
                            :aria-label="`Go to slide ${index + 1}`"
                            :aria-current="activeIndex === index ? 'true' : undefined" @click="goToSlide(index)" />
                    </div>
                </div>
            </ClientOnly>
        </div>
        <div class="xalqaro_darajada_tan_olish">
            <span>
                {{
                    pagesData?.index_bases_desc2
            }}</span>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue';
import { usePagesStore } from '~/stores/pages';
import type {  BaseResponse, PicturesList } from '~/types.index';

const pagesStore = usePagesStore()
const { pagesData, isLoading } = storeToRefs(pagesStore)


const config = useRuntimeConfig()

const apiUrl = config.public.apiUrl

const containerRef = ref<any>(null)

const slidesCount = 6
const activeIndex = ref(0)

const {data, error, pending, refresh,  } = useFetch<BaseResponse<PicturesList>>(`${apiUrl}main/bases`)

watch(data, (newVal)=>console.log(newVal))



const swiper = useSwiper(containerRef, {
    slidesPerView: 5,
    spaceBetween: 12,
    loop: true,
    speed: 700,
    centeredSlides: false,


    observer: true,
    observeParents: true,
    updateOnWindowResize: true,

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
            centeredSlides: true,
        },
        480: {
            slidesPerView: 1,
            centeredSlides: true,
        },
        768: {
            slidesPerView: 3,
            centeredSlides: false,
        },
        1024: {
            slidesPerView: 5,
            centeredSlides: false,
        },
    },
});

const updatePagination = (e: any) => {
    const instance = swiper?.instance?.value
    if (!instance) {
        return
    }

    activeIndex.value = instance.realIndex ?? 0
}

const goToSlide = (index: number) => {
    const instance = swiper?.instance?.value
    if (!instance) {
        return
    }

    instance.slideToLoop(index, 700)
}

const prevSlide = () => {
    const instance = swiper?.instance?.value

    if (!instance) {
        return
    }

    instance.slidePrev()
}

const nextSlide = () => {
    const instance = swiper?.instance?.value

    if (!instance) {
        return
    }

    instance.slideNext()
}

onMounted(async () => {
    await nextTick()

    const instance = swiper?.instance?.value

    if (!instance) {
        return
    }

    updatePagination()

    containerRef.value?.addEventListener('swiperslidechange', updatePagination)
})

onBeforeUnmount(() => {
    containerRef.value?.removeEventListener('swiperslidechange', updatePagination)
})
</script>
<style scoped lang="scss">
:deep(.swiper-container) {
    // border: 1px red solid;
    padding-left: 13px;
    padding-right: 13px;
    display: flex;
    top: 20px;
    // left: 13px;
    // right: 13px;
}

.title_indexi {
    display: flex;
    flex-direction: column;
    padding-top: 120px;
    font-family: 'SF Pro Display', sans-serif;
    font-weight: 600;
    font-size: 36px;
    line-height: 40px;
    text-align: center;
    color: #1E2939;
}

.title {
    display: block;
}

.content_indexi {
    margin-top: 12px;
    font-family: 'SF Pro Display', sans-serif;
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
    text-align: center;
    color: #4A5565;
}

.partners-slider {
    width: 100%;
    max-width: 1248px;
    position: relative;
    padding: 0 35px 72px;
    margin: auto;
}

.swiper-container {
    width: 100%;
    overflow: hidden;
    justify-content: center;
    align-items: center;

    :deep(.swiper-wrapper) {
        align-items: center;
    }

    :deep(.swiper-slide) {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 128px;
        flex-shrink: 0;
    }

    :deep(.swiper-slide img) {
        max-width: 100%;
        max-height: 100%;
        display: block;
        object-fit: contain;
    }
}

.slider-btn {
    position: absolute;
    top: 40%;
    transform: translateY(-50%);
    z-index: 10;
    width: 32px;
    height: 32px;
    padding: 0;
    margin: 0;
    border: 0;
    border-radius: 50%;
    background: #FFFFFF;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: #6B7280;
    font-family: Arial, sans-serif;
    font-size: 25px;
    line-height: 1;
    transition: all 0.2s ease;

    &:hover {
        background: #F8FAFC;
        color: #365FAE;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.16);
    }

    &:active {
        transform: translateY(-50%) scale(0.92);
    }
}

.slider-prev {
    left: 0;
}

.slider-next {
    right: 0;
}

.custom-pagination {
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    z-index: 5;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
}

.pagination-bullet {
    width: 8px;
    height: 8px;
    padding: 0;
    margin: 0;
    border: 0;
    border-radius: 50%;
    background: #D1D5DB;
    cursor: pointer;
    display: block;
    transition: all 0.35s ease;

    &:hover {
        background: #AEB8C8;
        transform: scale(1.08);
    }

    &:focus-visible {
        outline: 2px solid #3B66B1;
        outline-offset: 2px;
    }
}

.pagination-bullet-active {
    width: 40px;
    border-radius: 999px;
    background: #3B66B1;

    &:hover {
        background: #3B66B1;
        transform: none;
    }
}

.xalqaro_darajada_tan_olish {
    display: flex;
    justify-content: center;
    padding: 0 15px;

    span {
        font-family: Arial, sans-serif;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        text-align: center;
        color: #4A5565;
        margin-top: 30px;
    }
}

// @media (max-width: 767px) {
//     .title_indexi {
//         padding-top: 70px;
//         margin-bottom: 24px;
//         font-size: 28px;
//         line-height: 34px;
//     }

//     .content_indexi {
//         margin-top: 10px;
//         padding: 0 15px;
//         font-size: 17px;
//         line-height: 24px;
//     }

//     .partners-slider {
//         padding-left: 30px;
//         padding-right: 30px;
//         padding-bottom: 60px;
//     }

//     .slider-btn {
//         width: 28px;
//         height: 28px;
//         font-size: 22px;
//     }

//     .custom-pagination {
//         gap: 8px;
//     }

//     .pagination-bullet {
//         width: 10px;
//         height: 10px;
//     }

//     .pagination-bullet-active {
//         width: 65px;
//     }
// }


@media (max-width: 767px) {

    // 1. Yon tomondagi ortiqcha bo'shliqlarni kamaytiramiz (slayder kengayadi)
    .partners-slider {
        padding-left: 10px;
        padding-right: 10px;
        padding-bottom: 60px;
    }

    .swiper-container {
        // Top va left surilishlarni mobilda nolga tenglashtiramiz
        top: 0;
        left: 0;
        right: 0;
        padding-left: 0;
        padding-right: 0;

        // 2. Slide va Rasm o'lchamlarini oshiramiz
        :deep(.swiper-slide) {
            height: 200px; // Balandlikni 128px dan 200px ga oshiramiz
        }

        :deep(.swiper-slide img) {
            width: 80%; // Kengligini oshirish uchun
            height: 100%; // To'liq balandlikni egallashi uchun
            max-height: 180px;
            object-fit: contain; // Rasm nisbatlari buzilmaydi
        }
    }

    // Qolgan mavjud media uslublaringiz...
    .title_indexi {
        padding-top: 70px;
        margin-bottom: 24px;
        font-size: 28px;
        line-height: 34px;
    }

    .content_indexi {
        margin-top: 10px;
        padding: 0 15px;
        font-size: 17px;
        line-height: 24px;
    }

    .slider-btn {
        width: 28px;
        height: 28px;
        font-size: 22px;
    }

    .custom-pagination {
        gap: 8px;
    }

    .pagination-bullet {
        width: 10px;
        height: 10px;
    }

    .pagination-bullet-active {
        width: 65px;
    }
}
</style>