<template>
    <div class="digitalTransformationRole">
        <div class="container">

            <div class="element">

                <div class="elementChild1">
                    <div class="book_section">
                        <div class="left_section">
                            <img :src="bookIcon" alt="">
                        </div>

                        <div class="bookElement">
                            <img :src="data?.data[0]?.files[1]?.img" class="bookPiccture" alt="">
                        </div>
                    </div>
                    <span class="uzbekistan_iqtisodiyot_raqamli">
                        {{ data?.data[0]?.title }}
                    </span>
                </div>

                <button @click="downloadFunction('data?.data[0]?.files[1].img')" class="jurnalni_yuklab_olish">
                    <img :src="downloadIcon" alt="">
                    <span>Jurnalni yuklab olish</span>
                </button>


            </div>




        </div>
    </div>
</template>
<script lang="ts" setup>
import bookIcon from "@/assets/files/svg/book.svg?url"
import downloadIcon from "@/assets/files/svg/downloadIcon.svg?url";
import type { GalleryItem, PaginatedResponse } from "~/types.index";
const config = useRuntimeConfig()
const apiUrl = config.public.apiUrl


const { data, pending, error } = useFetch<PaginatedResponse<GalleryItem>>(
    `${apiUrl}gallery`,
    {
        headers: {
            "accept-language": "uz"
        }
    }
);


const downloadFunction = async (link: string) => {
    try {
        const response = await fetch(link);
        if (!response.ok) throw new Error('Faylni yuklab bo\'lmadi');

        const blob = await response.blob();

        const blobUrl = window.URL.createObjectURL(blob);

        const fileName = link.split('/').pop() || 'fayl.pdf';

        const a = document.createElement('a');
        a.href = blobUrl;
        a.download = fileName; 

        document.body.appendChild(a);
        a.click();

        a.remove();
        window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
        console.error('Yuklab olishda xatolik yuz berdi:', error);
    }
};
</script>
