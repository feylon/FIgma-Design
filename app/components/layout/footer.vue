<template>
    <footer>
        <div class="container">

            <div class="elementLists">

                <div class="element">
                    <div class="active">{{ footerData.about.title }}</div>

                    <div class="element_items">
                        <span class="element_item" v-for="value in footerData.about.links">
                            {{ value }}
                        </span>
                    </div>

                </div>



                <div class="element">
                    <div class="active">{{ footerData.authors.title }}</div>

                    <div class="element_items">
                        <span class="element_item" v-for="value in footerData.authors.links">
                            {{ value }}
                        </span>
                    </div>

                </div>




                <div class="element">
                    <div class="active">{{ footerData.reviewers.title }}</div>

                    <div class="element_items">
                        <span class="element_item" v-for="value in footerData.reviewers.links">
                            {{ value }}
                        </span>
                    </div>

                </div>



                <div class="element">
                    <div class="active">{{ footerData.contact.title }}</div>

                    <div class="element_items">
                        <span class="element_item share_footer">
                    
                            <img :src="locationFooter" alt="">
                            <span>
                            <!-- {{ footerData.contact.address }} -->
                    </span>
                        </span>


                        <span class="element_item share_footer">
                            <img :src="phoneFooter" alt="">
                            <span>{{ footerData.contact.phone }}</span>
                        </span>


                        <span class="element_item share_footer">
                            <img :src="messageInbox_footer" alt="">
                            <span>{{ footerData.contact.email }}</span>
                        </span>
                    </div>

                    <div class="sotcial_items">

                        <div class="item"><img :src="facebook_footer" alt=""></div>
                        <div class="item"><img :src="twitter_footer" alt=""></div>
                        <div class="item"><img :src="linkedin" alt=""></div>
                        <div class="item"><img :src="youtube_footer" alt=""></div>


                    </div>



                </div>



            </div>


            <div class="line">

            </div>

            <div class="p-5"> </div>


<div class="footerElement2">
    <span v-if="pagesData" class="footerCopyright">
       {{ pagesData.footer_rights }}
    </span>

    <div class="footerLinks">
        <span class="footerLink">
            Фойдаланиш шартлари
        </span>

        <span class="footerLink">
            Махфийлик сиёсати
        </span>

        <span class="footerLink">
            Сайт харитаси
        </span>
    </div>
</div>

        </div>
    </footer>


</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import locationFooter from "@/assets/files/svg/locationFooter.svg?url";
import phoneFooter from "@/assets/files/svg/phone_footer.svg?url";
import messageInbox_footer from "@/assets/files/svg/message_footer.svg?url"
import facebook_footer from "@/assets/files/svg/facebook_footer.svg?url";
import twitter_footer from "@/assets/files/svg/twitter_footer.svg?url";
import linkedin from "@/assets/files/svg/linkedin.svg?url";
import youtube_footer from "@/assets/files/svg/youtube_footer.svg?url"
import { usePagesStore } from "~/stores/pages";

const pagesStore = usePagesStore()
const { pagesData, isLoading } = storeToRefs(pagesStore)

interface FooterLinkGroup {
    title: string
    links: string[]
}

interface FooterContact {
    title: string
    address: string
    phone: string
    email: string
}

interface FooterData {
    about: FooterLinkGroup
    authors: FooterLinkGroup
    reviewers: FooterLinkGroup
    contact: FooterContact
}

// pagesData o'zgarganda footerData ham avtomatik yangilanishi uchun computed ishlatildi
const footerData = computed<FooterData>(() => ({
    about: {
        title: 'Журнал ҳақида',
        links: [
            'Мақолаларга қўйиладиган талаблар',
            'Таҳририят жамоаси',
            'Махфийлик баёноти',
        ],
    },

    authors: {
        title: 'Муаллифлар учун',
        links: [
            'Манускрипт шакл',
            'Тақриз олиш бўйича йўриқнома',
            'Тўлов бўйича реквизитлар',
        ],
    },

    reviewers: {
        title: 'Рецензентлар учун',
        links: [
            'Рецензия жараёни тартиби',
            'Рецензиялаш сиёсати',
            'Рецензент этик қоидалари',
        ],
    },

    contact: {
        title: 'Контакт маълумотлар',
        address: pagesData.value?.address ?? '',
        phone: pagesData.value?.phone ?? '',
        email: pagesData.value?.email ?? '',
    },
}))
</script>