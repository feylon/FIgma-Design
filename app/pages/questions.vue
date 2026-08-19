<template>
    <div class="">
        <div class="contact-page">
            <HeaderRoute :url="['Боғланиш']" :title="'Боғланиш'" />

            <div class="container">
                <div class="contact-container">
                    <div class="info-cards-grid">
                        <div class="info-card">
                            <div class="card-icon-box">
                                <img src="@/assets/icons/questions/envelope.svg" alt="envelope" />
                            </div>
                            <span class="card-label">Электрон манзил:</span>
                            <span class="card-value">info@tiuglobal.uz</span>
                        </div>

                        <div class="info-card">
                            <div class="card-icon-box">
                                <img src="@/assets/icons/questions/phone-flip.svg" alt="phone" />
                            </div>
                            <span class="card-label">Телефон рақам:</span>
                            <span class="card-value">+998 71 244-44-44</span>
                        </div>

                        <div class="info-card">
                            <div class="card-icon-box">
                                <img src="@/assets/icons/questions/calendar.svg" alt="calendar" />
                            </div>
                            <span class="card-label">Иш кунлари:</span>
                            <span class="card-value">Душанба - Жума<br>09:00 - 18:00</span>
                        </div>

                        <div class="info-card">
                            <div class="card-icon-box">
                                <img src="@/assets/icons/questions/location.svg" alt="location" />
                            </div>
                            <span class="card-label">Манзил:</span>
                            <span class="card-value">Юнособод тумани, Шараф Рашидов Шоҳ кўчаси</span>
                        </div>

                        <div class="info-card">
                            <div class="card-icon-box">
                                <img src="@/assets/icons/questions/socials.svg" alt="socials" />
                            </div>
                            <span class="card-label">Ижтимоий тармоқлар:</span>
                            <div class="social-icons-row flex gap-2 mt-2">
                                <a href="#" class="soc-icon"><img src="@/assets/icons/questions/instagram.svg"
                                        alt="instagram"></a>
                                <a href="#" class="soc-icon"><img src="@/assets/icons/questions/telegram.svg"
                                        alt="telegram"></a>
                                <a href="#" class="soc-icon"><img src="@/assets/icons/questions/facebook.svg"
                                        alt="facebook"></a>
                                <a href="#" class="soc-icon"><img src="@/assets/icons/questions/youtube.svg" alt="youtube"></a>
                                <a href="#" class="soc-icon"><img src="@/assets/icons/questions/x.svg" alt="x"></a>
                            </div>
                        </div>
                    </div>

                    <div class="form-map-section flex gap-6">
                        <div class="form-card">
                            <h2 class="form-heading">Саволларингиз борми?</h2>
                            <p class="form-subheading">Саволингиз бизга юборинг биз кўриб чиқиб сизга алоқага чиқамиз
                            </p>

                            <form @submit.prevent class="contact-form flex flex-col gap-4">
                                <div class="input-group">
                                    <label>ФИШ:</label>
                                    <input type="text" placeholder="Киритинг" v-model="formData.name" />
                                </div>
                                <ClientOnly>
                                    <div class="form-row flex gap-4">
                                        <div class="input-group w-full">
                                            <label>Телефон рақам:</label>
                                            <input type="text" v-maska data-maska="+998 ## ### ## ##" data-maska-eager
                                                placeholder="+998 -- --- -- --" v-model="formData.phone" />
                                        </div>
                                        <div class="input-group w-full">
                                            <label>Электрон манзил:</label>
                                            <input type="email" placeholder="example@email.com"
                                                v-model="formData.email" />
                                        </div>
                                    </div>
                                </ClientOnly>

                                <div class="input-group">
                                    <label>Матн:</label>
                                    <textarea placeholder="Савол мазмуни" rows="4"
                                        v-model="formData.message"></textarea>
                                </div>

                                <div class="submit-btn-wrapper">
                                    <button class="murojaatni_yuborish" type="submit">
                                        <span>
                                            Мурожаатни юбориш
                                        </span>
                                    </button>
                                </div>
                            </form>
                        </div>

                        <div class="map-card">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.368686127456!2d69.27901777651877!3d41.31115510000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e9c3%3A0xa5a9323b4aa5cb98!2sTashkent%20International%20University!5e0!3m2!1suz!2suz!4v1710000000000!5m2!1suz!2suz"
                                width="100%" height="100%" style="border:0;" loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

definePageMeta({
    layout: "main"
})

const formData = reactive({
    name: '',
    phone: '',
    email: '',
    message: ''
})
</script>

<style scoped lang="sass">
@use "../assets/sass/_variables" as variables

.contact-page
    width: 100%
    min-height: 100vh
    background: #F4F7FB
    padding-bottom: 80px

.contact-hero
    width: 100%
    height: 300px
    // background: url('/Investmentincommercialproperty-2.webp') center/cover no-repeat
    background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('~/assets/img/logo/index/background.png');
    background-position: center
    background-repeat: no-repeat
    background-size: cover

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
    a
        color: white
        opacity: 0.8
        text-decoration: none
        display: flex
        align-items: center
    .current
        opacity: 1
        font-weight: 500

.contact-title
    font-size: 42px
    font-weight: 700
    line-height: 50px

.contact-container
    margin: -30px auto 0 auto
    padding: 0 0px
    position: relative
    z-index: 10

.info-cards-grid
    display: grid
    grid-template-columns: repeat(5, 1fr)
    gap: 20px
    margin-bottom: 30px

.info-card
    background: white
    border-radius: 12px
    padding: 16px
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05)
    display: flex
    flex-direction: column
    gap: 8px
    width: 100%
    // min-width: 284px
    height: auto
    min-height: 179px

.card-icon-box
    width: 50px
    height: 50px
    background: variables.$blueBackground
    border-radius: 10px
    display: flex
    align-items: center
    justify-content: center
    margin-bottom: 8px
    img
        filter: brightness(0) invert(1)
        width: 24px
        height: 24px

.card-label
    font-size: 18px
    color: #6B7889

.card-value
    font-size: 20px
    font-weight: 600
    color: #212529

.social-icons-row
    display: flex
    gap: 8px
    flex-wrap: wrap

.soc-icon
    width: 40px
    height: 40px
    background: #F3F4F6
    border-radius: 8px
    display: flex
    align-items: center
    justify-content: center
    transition: background 0.2s
    img
        width: 24px
        height: 24px
    &:hover
        background: variables.$blueBackground
        img
            filter: brightness(0) invert(1)

.form-map-section
    display: grid
    grid-template-columns: 1.2fr 1fr
    gap: 24px

.form-card
    background: white
    border-radius: 16px
    padding: 40px
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05)

.form-heading
    font-size: 28px
    font-weight: 700
    color: #212529
    margin-bottom: 8px

.form-subheading
    font-size: 15px
    color: #6C757D
    margin-bottom: 24px

.contact-form
    display: flex
    flex-direction: column
    gap: 20px

.form-row
    display: flex
    gap: 20px

.input-group
    display: flex
    flex-direction: column
    gap: 8px
    label
        font-size: 14px
        font-weight: 600
        color: #495057
    input, textarea
        width: 100%
        padding: 14px 16px
        border: 1px solid #DEE2E6
        border-radius: 8px
        font-size: 15px
        outline: none
        background: #F8F9FA
        transition: border-color 0.2s
        &:focus
            border-color: variables.$blueBackground
            background: white

.submit-btn-wrapper
    max-width: 210px
    width: 100%

.submit-btn
    background: variables.$blueBackground
    color: white
    font-size: 16px
    font-weight: 600
    height: 52px
    width: 100%
    border: none
    border-radius: 8px
    cursor: pointer
    margin-top: 10px
    transition: opacity 0.2s
    &:hover
        opacity: 0.9

.map-card
    background: white
    border-radius: 16px
    overflow: hidden
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05)
    min-height: 520px

@media screen and (max-width: 1200px)
    .info-cards-grid
        grid-template-columns: repeat(2, 1fr)
    .form-map-section
        grid-template-columns: 1fr

@media screen and (max-width: 768px)
    .info-cards-grid
        grid-template-columns: 1fr
    .form-card
        padding: 20px
    .form-row
        flex-direction: column
        gap: 20px
    .contact-title
        font-size: 28px
        line-height: 36px
    .contact-hero
        height: 200px
    .map-card
        min-height: 350px
    .submit-btn-wrapper
        max-width: 100%
    .form-heading
        font-size: 22px
    .form-subheading
        font-size: 14px


.murojaatni_yuborish
    width: 210px
    height: 50px
    background: #3861A7
    border: none
    color: white
    border-radius: 10px
    cursor: pointer
    &:hover
        background: #2d508c
    span
        color: white
        font-size: 18px
</style>