<script lang="ts" setup>
import telegram_icon from "@/assets/files/svg/telegram_icon.svg?url"
import { usePagesStore } from "~/stores/pages";
const config = useRuntimeConfig()
const apiUrl = config.public.apiUrl




export interface StatsItem {
  id: number
  group: string
  title: string
  sort_order: number
  status: boolean
  options: string
  files: unknown[]
  created_at: string
}

export interface StatsResponse {
  data: StatsItem[]
  total: number
}






const pagesStore = usePagesStore()
const { pagesData, isLoading } = storeToRefs(pagesStore);

const {data, refresh, pending} = useFetch<StatsResponse>(`${apiUrl}main/stats`, {
headers :{
    "accept-language" : "uz"
}
})





</script>

<template>
    <div class="index_mainHead_component">
        <div class="container">
            <div class="section">
                <div class="headSpan">
                    <span>
                        {{pagesData?.header_t}}
                    
                    
                    </span>
                </div>

                <div class="headContent">
                    <span>
                    {{ pagesData?.header_desc }}   
                    </span>
                </div>

                <div class="glassBox">
                    <div class="glassBox_flex_parent">
                        <div class="glassBox_flex">
                            <div class="glasses_2">
                                <span class="main_SPAN">
                                    Энг охирги сон
                                </span>
                                <span class="main_SPAN2">
                                    {{pagesData?.header_num}}
                                </span>
                            </div>
                            
                            <div class="left_section">
                                <span class="nashr_sanasi">
                                    Нашр санаси
                                </span>
                                <span class="Nashr_date">
                                   {{pagesData?.header_date}}
                                </span>
                            </div>
                        </div>
                    </div>

                    <div class="yangisongaMaqolaYUborish">
                        <img :src="telegram_icon" alt="Telegram icon">
                        <span>
                          {{pagesData?.header_button}}
                        </span>
                    </div>
                </div>

                <div class="card_section">
                    <div class="card_item" v-for="value in data?.data" :key="value.id">
                        <span class="title">
                            {{value.options}}
                        </span>
                        <span class="description">
                            {{value.title}}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>