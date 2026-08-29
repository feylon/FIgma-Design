<template>
<div class="container">
    <div class="Partners">
       <div class="elements">
         <span class="mainHeader">
            {{pagesData?.partners}}
        </span>


        <span class="descriptions">
        {{ pagesData?.partners_desc }}    
        </span>
       </div>


       <div class="picturesListGrid">
        <div class="gridElement" v-for="(value, index) in data?.data" :key="index">
            <img :src="value?.files[0]?.img" alt="">
        </div>

       </div>
    </div>
</div>    
</template>
<script lang="ts" setup>
import type { BaseResponse, Partner } from "~/types.index";
import { usePagesStore } from "~/stores/pages";


const config = useRuntimeConfig()
const apiUrl = config.public.apiUrl

const {data, refresh, pending, status} = useFetch<BaseResponse<Partner>>(`${apiUrl}main/partners`);
watch(data, (newVal)=>console.log(newVal));


const pagesStore = usePagesStore()
const { pagesData, isLoading } = storeToRefs(pagesStore)

</script>