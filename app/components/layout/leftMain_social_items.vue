<template>
  <div class="leftMain_social_items">
    <div class="IconsList">
      <NuxtLink
        v-for="item in socialLinks"
        :key="item.id"
        :to="item.options"
        class="icon_item"
        :title="item.alias"
      >
        <img :src="item.files[0]?.img" :alt="item.alias" />
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { BaseResponse, SocialItem } from '~/types.index';

const config = useRuntimeConfig()
const apiUrl = config.public.apiUrl



const { data: socialResponse } =  useFetch<BaseResponse<SocialItem>>(
  `${apiUrl}main/social`
);

const socialLinks = computed(() => {
  if (!socialResponse.value?.data) return [];
  return socialResponse.value.data.filter((item) => item.status);
});
</script>