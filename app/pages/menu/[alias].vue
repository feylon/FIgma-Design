<script lang="ts" setup>
import type { ApiResponseMenu, PolicyData } from "~/types.index";

const config = useRuntimeConfig();
const apiUrl = config.public.apiUrl;
const route = useRoute();

definePageMeta({
  layout: "menu"
});


const { data, pending, error } = useFetch<ApiResponseMenu<PolicyData>>(
  `${apiUrl}menu/${route.params.alias}`,
  {
    headers: {
      "accept-language": "uz"
    },
    // route.params.alias o'zgarganda qayta fetch bo'lishi uchun
    watch: [() => route.params.alias] 
  }
);
</script>

<template>
    
  <div class="content_data">
    <div v-if="pending" class="loading-state">
      Yuklanmoqda...
    </div>

    <div v-else-if="data?.data?.content" v-html="data.data.content"></div>

    <!-- Ma'lumot topilmagan holatda -->
    <div v-else class="empty-state">
      Ma'lumot topilmadi.
    </div>
  </div>
</template>
