<template>
    <div class="JournalSections bg-white">
        <div class="container">

            <div class="element">
                <span class="element_caption">
                   {{pagesData?.juranal_cat_t}}
                </span>

                <span class="element_description">
                   {{pagesData?.juranal_cat_desc}}
                </span>



                <div class="card_list">

                    <div class="cardL" v-for="value in data?.data" :key="value.id">

                        <div class="card_head">

                            <div class="Icon_Section">
                                <img :src="value.files[0]?.img" alt="">
                            </div>



                            <div class="summ_Check">
                                <span>{{ value.posts }} мақола</span>
                            </div>


                        </div>


                        <div class="content">
                            <span class="content_head">
                                {{ value.title }}
                            </span>


                            <span class="content_content">
                                {{ value.content }}
                            </span>
                        </div>



                    </div>

                </div>

            </div>


            <div class="button_Section">
                <button class="button">
                    <span>
                        Барча категорияларни кўриш
                    </span>
                </button>
            </div>

        </div>
    </div>
</template>
<script lang="ts" setup>
import { usePagesStore } from '~/stores/pages';



const config = useRuntimeConfig()
const apiUrl = config.public.apiUrl;
const pagesStore = usePagesStore()
const { pagesData, isLoading } = storeToRefs(pagesStore)


export interface CategoryFile {
    img: string
    is_main: number
    size: number
    type: string
    url: string
}

export interface Category {
    id: number
    group: string
    title: string
    sort_order: number
    status: boolean
    content: string
    posts: number
    files: CategoryFile[]
    alias: string
    created_at: string
}

const { data, refresh, pending } = useFetch<{
    data: Category[],
    total: number
}>(
    `${apiUrl}main/category?limit=8&offset=0`,
    {
        headers: {
            "accept-language": "uz"
        }
    }
)


</script>
