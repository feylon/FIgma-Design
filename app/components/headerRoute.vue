<template>
    <div class="contact-hero">
        <div class="breadcrumb">
            <NuxtLink to="/">
                <img src="@/assets/icons/articleguidelines/home.svg" alt="home" />
            </NuxtLink>

            <span>/</span>

            <span class="current">
                {{ props.url?.join(' / ') }}
            </span>
        </div>

        <h1 class="contact-title">{{ props.title }}</h1>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
    title?: string
    url?: string[]
}>()
</script>
<style scoped lang="sass">
.contact-hero
    width: 100%
    height: 300px
    background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('~/assets/img/logo/index/background.png');
    background-position: center
    background-size: cover
    background-repeat: no-repeat
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center
    color: white
    position: relative
    padding: 0 20px
    text-align: center

.breadcrumb
    font-size: 14px
    margin-bottom: 10px
    display: flex
    align-items: center
    justify-content: center
    gap: 8px

    padding: 10px 18px
    background: rgba(255, 255, 255, 0.12)
    backdrop-filter: blur(12px)
    -webkit-backdrop-filter: blur(10px)
    border: 1px solid rgba(255, 255, 255, 0.2)
    border-radius: 12px
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08)
    a
        color: white
        opacity: 0.8
        text-decoration: none
        display: flex
        align-items: center
    .current
        opacity: 1
        font-weight: 500
        font-size: 17px

.contact-title
    font-size: 42px
    font-weight: 700
    line-height: 50px

@media screen and (max-width: 768px)
    .contact-title
        font-size: 28px
        line-height: 36px
    .contact-hero
        height: 200px
</style>