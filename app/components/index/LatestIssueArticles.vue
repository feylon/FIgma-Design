<template>
    <div class="LatestIssueArticles">
        <div class="container">
            <div class="elements">
                <div class="captions">
                    <div class="spanMainCaption">
                        {{pagesData?.latest_news_article}}
                    </div>

                    <span class="description">
                       {{pagesData?.latest_news_article_desc}}
                    </span>
                </div>




                <div class="card_grid">

                    <div v-for="value in data?.data" :key="value.id" class="card_item">
                        <div class="first">
                            <div class="Tags">
                                <span>{{ value.category.title }}</span>
                            </div>


                            <div class="right_section">
                                <span>{{ value.page }} саҳифа</span>
                            </div>


                        </div>


                        <div class="second">
                            <div class="secondCaption">
                                Ўзбекистон иқтисодиётида рақамли трансформация жараёнларининг ўрни
                            </div>


                            <span class="Link_TO_FILE">
                                <span>DOI: </span>
                                <nuxt-link to="#"></nuxt-link>

                            </span>


                            <span class="card_content">
                                <!-- title -->
                            </span>



                            <div class="third">
                                <div>
                                    <img :src="user_card" alt="">
                                    <span class="Author">{{ value.authors[0]?.title }}</span>
                                </div>
                            </div>



                            <div class="card__footer">
                                <div class="left__side">

                                    <span class="first_section">
                                        <img :src="calendar_svg_card" alt="">
                                        <span>{{ value.created_at }}</span>
                                    </span>


                                    <span class="second_section">
                                        <img :src="eyeSection" alt="">

                                        <span>{{ value.views }}</span>
                                    </span>


                                    <span class="third">
                                        <img :src="download_CARD" alt="">
                                        <span>{{ value.download }}</span>
                                    </span>



                                </div>


                                <div class="right_side">
                                    <button @click="ViewFile(value.files, value.alias)" class="uqishButton">
                                        <span>Ўқиш</span>
                                    </button>


                                    <button @click="DownloadFile(value.files, value.download_url)" class="yuklab_olish">
                                        <span> Юклаб олиш</span>
                                    </button>


                                </div>
                            </div>

                        </div>

                    </div>

                </div>

                <div class="barcha_maqollalarni_kurish">
                    <button><span>Барча мақолаларни кўри</span></button>
                </div>


            </div>



        </div>


    </div>



</template>
<script lang="ts" setup>
import user_card from "@/assets/files/svg/user_card.svg?url";
import calendar_svg_card from "@/assets/files/svg/calendar_svg_card.svg?url"
import eyeSection from "@/assets/files/svg/eyeSection.svg?url"
import download_CARD from "@/assets/files/svg/download_CARD.svg?url"
import { usePagesStore } from "~/stores/pages";
const config = useRuntimeConfig()
const apiUrl = config.public.apiUrl;

const pagesStore = usePagesStore()
const { pagesData, isLoading } = storeToRefs(pagesStore)


export interface Author {
    title: string;
}

export interface Category {
    title: string;
}

export interface Issue {
    id: number;
    title: string;
    alias: string;
}

export interface PostItem {
    id: number;
    group: string;
    sort_order: number;
    status: boolean;
    views: number;
    page?: string;
    issue: Issue;
    download: number;
    files: string;
    alias: string;
    created_at: string;
    authors: Author[];
    category: Category;
    download_url: string;
}

export interface PostsResponse {
    total: number;
    limit: number;
    offset: number;
    data: PostItem[];
}



const { data, error, pending } = useFetch<PostsResponse>(`${apiUrl}posts?limit=6&offset=0`, {
    headers: {
        "accept-language": "uz"
    }
});


const DownloadFile = async (file: string, download_url: string) => {
    const link = document.createElement('a')

    link.href = file
    link.setAttribute('download', '')
    link.setAttribute('target', '_blank')

    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)


    await $fetch(download_url, {
        method: 'POST'
    })
}


const ViewFile = async (file: string, changeView: string) => {

    const link = document.createElement('a')

    link.href = file
    link.setAttribute('download', '')
    link.setAttribute('target', '_blank')

    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)


    await $fetch(apiUrl + 'posts/' + changeView, {
        method: 'GET'
    })

}

</script>


