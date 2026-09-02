<script lang="ts" setup>

import calendarIcon from "@/assets/icons/calendar-clock.svg?url"
import envelope_Contact from "@/assets/icons/envelope_Contact.svg?url";
import phoneIcon from "@/assets/icons/phoneIconContact.svg?url";
import locationContact from "@/assets/icons/locationContact.svg?url"
import instagramIconContact from "@/assets/icons/instagramIconContact.svg?url"
import likeContact from "@/assets/icons/LikeContact.svg?url"
import telegramIcon from "@/assets/icons/telegramIcon.svg?url"
import faceBookIcon from "@/assets/icons/facebookIcon.svg?url"
import youtubeIcon from "@/assets/icons/youtube.svg?url";
import XIcon from "@/assets/icons/X_Icon.svg?url"


definePageMeta({
    layout: "menu"
});
useHead({
    title: "Bogʻlanish | Toshkent xalqaro universiteti"
});

const toast = useToastStore()
const config = useRuntimeConfig();
const apiUrl = config.public.apiUrl;

const pagesStore = usePagesStore()
const { pagesData, isLoading } = storeToRefs(pagesStore)

console.log("Kelgan ma'lumot", pagesData.value)


const socialList = computed(() => [
    { name: 'Instagram', icon: instagramIconContact, link: pagesData?.value?.instagram || '#' },
    { name: 'Telegram', icon: telegramIcon, link: pagesData?.value?.telegram || '#' },
    { name: 'Facebook', icon: faceBookIcon, link: pagesData?.value?.facebook || '#' },
    { name: 'YouTube', icon: youtubeIcon, link: pagesData?.value?.youtube || '#' },
    { name: 'X', icon: XIcon, link: pagesData?.value?.x || '#' }
]);


const formData = reactive<{
    fio: string,
    phone: string,
    email: string,
    message: string
}>({
    fio: "",
    phone: "",
    email: "",
    message: ""
});

const submitForm = async () => {
    try {
        const response = await $fetch(
            `${apiUrl}feedback-send`,
            {
                method: "POST",
                body: formData
            }
        )

        console.log(response)

        toast.success("Мурожаатингиз муваффақиятли юборилди!")

        Object.assign(formData, {
            fio: "",
            phone: "",
            email: "",
            message: ""
        })

    } catch (error: any) {
        console.error("Xatolik:", error)

        // API dan kelgan error xabarini olish
        const message =
            error?.data?.error ||
            error?.response?._data?.error ||
            "Мурожаатни юборишда хатолик юз берди."

        toast.danger(message)
    }
}

</script>

<template>
    <div class="ContactPage">
        <div class="grid_Section">
            <!-- Elektron manzil -->
            <div class="card">
                <div class="iconSection">
                    <img :src="envelope_Contact" alt="email" />
                </div>
                <div class="descriptionCard">Elektron manzil</div>
                <a :href="`mailto:${pagesData?.email}`" class="link">
                    {{ pagesData?.email }}
                </a>
            </div>

            <!-- Telefon raqam -->
            <div class="card">
                <div class="iconSection">
                    <img :src="phoneIcon" alt="phone" />
                </div>
                <div class="descriptionCard">Телефон рақам:</div>
                <a :href="`tel:${pagesData?.phone}`" class="link">
                    {{ pagesData?.phone }}
                </a>
            </div>

            <!-- Ish kunlari -->
            <div class="card">
                <div class="iconSection">
                    <img :src="calendarIcon" alt="calendar" />
                </div>
                <div class="descriptionCard">Иш кунлари:</div>
                <span class="link">{{ pagesData?.work_time }}</span>
            </div>

            <!-- Manzil -->
            <div class="card">
                <div class="iconSection">
                    <img :src="locationContact" alt="location" />
                </div>
                <div class="descriptionCard">Манзил:</div>
                <span class="link">{{ pagesData?.address }}</span>
            </div>

            <!-- Ijtimoiy tarmoqlar -->
            <div class="card">
                <div class="iconSection">
                    <img :src="likeContact" alt="socials" />
                </div>
                <div class="descriptionCard">Ижтимоий тармоқлар:</div>
                <div class="socialIcons">
                    <a v-for="(social, index) in socialList" :key="index" :href="social.link" target="_blank"
                        class="socialIcon">
                        <img :src="social.icon" :alt="social.name" />
                    </a>
                </div>
            </div>
        </div>



        <div class="contact-section">
            <div class="contact-section__form">
                <form @submit.prevent="submitForm">

                    <span class="headSection">Саволларингиз борми?</span>

                    <span class="description">
                        Саволингиз бизга юборинг биз кўриб чиқиб сизга алоқага чиқамиз
                    </span>

                    <div class="form_Element">
                        <label>ФИШ:</label>
                        <input required v-model="formData.fio" placeholder="Киритинг" type="text">
                    </div>

                    <div class="gridForm">

                        <div class="form_Element">
                            <label>Телефон рақам:</label>

                            <ClientOnly>
                                <input required v-maska v-model="formData.phone" data-maska="+998 ## ### ## ##" data-maska-eager
                                    placeholder="+998 -- --- -- --" type="text">
                            </ClientOnly>
                        </div>

                        <div class="form_Element">
                            <label>Электрон манзил:</label>

                            <input required v-model="formData.email" placeholder="example@email.com" type="email">
                        </div>

                    </div>

                    <div class="form_Element mt_20pxTextarea">
                        <label>Матн:</label>

                        <textarea required v-model="formData.message" rows="4" placeholder="Савол мазмуни"></textarea>
                    </div>

                    <div class="submit_button_Section">
                        <button class="submit_button" type="submit">
                            <span>Мурожаатни юбориш</span>
                        </button>
                    </div>

                </form>

            </div>

            <div class="contact-section__map">
                <iframe :src="pagesData?.iframe_footer" width="100%" height="100%" style="border:0;"
                    :allowfullscreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>


    </div>
</template>
