<template>
    <div class="bg-white">
        <div class="lastNewsComponet">
            <div class="container">
                <div class="element">
                    <div class="captions">
                        <span class="sungi_yangilliklar">
                            Сўнги янгиликлар
                        </span>

                        <span class="UNIVERSETHAQIDA">
                            Университет ҳақидаги сўнги воқеалардан ҳабардор бўлинг
                        </span>
                    </div>
                </div>
                <div class="card_grid">
                    <div class="card_element" v-for="value in data?.data" :key="value.id">
                        <div class="card_img">
                            <img :src="value.files"
                                alt="card_Back_54f994859b0c54866ba59c9a44a4e018923603bd">
                        </div>
                        <div class="content">

                            <div class="title">
                               {{ value.title }}
                            </div>
                            <div class="card_details">
                                <div class="left_section">
                                    <img :src="calendar_svg_" alt="calendar_svg_">
                                    <span>{{value.created_at}}</span>
                                </div>
                                <div class="right_section">
                                    <img :src="eyesSvg" alt="eyesSvg">
                                    <span>{{value.views }}</span>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="BarchaYangilliklarniKurish">
                    <button><span>Барча янгиликларни кўриш</span></button>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import card_Back_54f994859b0c54866ba59c9a44a4e018923603bd from "@/assets/files/svg/54f994859b0c54866ba59c9a44a4e018923603bd.png?url";
import calendar_svg_ from "@/assets/files/svg/calendar_svg_.svg?url";
import eyesSvg from "@/assets/files/svg/eyesSvg.svg?url";


const config = useRuntimeConfig()
const apiUrl = config.public.apiUrl;
import type { NewsResponse, BaseResponse } from "~/types.index";
// https://journal.tiu.uz/api/v1/news/list/news?limit=5&offset=0

const {data,  refresh, pending} = 
useFetch<BaseResponse<NewsResponse>>(`${apiUrl}news/list/news?limit=5&offset=0`,{ headers : {
            "accept-language" : "uz"
        }})

watch(data,(_newValue)=>{
    console.log(_newValue)
})

</script>
