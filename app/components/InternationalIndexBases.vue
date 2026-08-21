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
                    <button type="button" class="slider-btn slider-prev " aria-label="Previous slide" @click="prevSlide">
                        ‹
                    </button>

                    <swiper-container ref="containerRef" class="mt-60 swiper_slide_img swiper-container" :init="false">
                        <swiper-slide>
                            <img src="@/assets/img/logo/index/doi.png" alt="BASE">
                        </swiper-slide>

                        <swiper-slide>
                            <img src="@/assets/img/logo/index/doi.png" alt="DOI">
                        </swiper-slide>

                        <swiper-slide>
                            <img src="@/assets/img/logo/index/google-scholar.png" alt="Google Scholar">
                        </swiper-slide>

                        <swiper-slide>
                            <img src="@/assets/img/logo/index/inlibrary.png" alt="inLibrary">
                        </swiper-slide>

                        <swiper-slide>
                            <img src="@/assets/img/logo/index/google-scholar.png" alt="Google Scholar">
                        </swiper-slide>

                        <swiper-slide>
                            <img src="@/assets/img/logo/index/inlibrary.png" alt="inLibrary">
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
                Мақолаларингиз халқаро даражада тан олинади ва кенг аудиторияга етиб боради
            </span>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue';

const containerRef = ref<any>(null)

const slidesCount = 6
const activeIndex = ref(0)

const swiper = useSwiper(containerRef, {
    slidesPerView: 5,
    spaceBetween: 12,
    loop: true,
    speed: 700,
    centerInsufficientSlides: true,

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
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
})

const updatePagination = () => {
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
.title_indexi {
    display: flex;
    flex-direction: column;
    margin-bottom: 32px;
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
    position: relative;
    padding: 0 35px 72px;
}

.swiper-container {
    width: 100%;
    display: flex; /* 'fle' xatosi to'g'irlandi */
    overflow: hidden;
    justify-content: center;
    align-items: center;
    
    :deep(.swiper-wrapper) {
        align-items: center;
    }

    :deep(.swiper-slide) {
        /* display: none; o'rniga flex ishlatildi */
        display: flex;
        align-items: center;
        justify-content: center;
        height: 128px;
        flex-shrink: 0;
    }

    :deep(.swiper-slide img) {
        /* Qat'iy o'lchamlar o'rniga responsiv yondashuv */
        max-width: 100%;
        max-height: 100%;
        display: block;
        object-fit: contain;
    }
}

.slider-btn {
    position: absolute;
    top: 40%; /* Tugmalarni vizual o'rtaga moslash */
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

/* --- RESPONSIV QISMI --- */
@media (max-width: 767px) {
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

    .partners-slider {
        padding-left: 30px;
        padding-right: 30px;
        padding-bottom: 60px;
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