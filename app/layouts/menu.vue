<script lang="ts" setup>
import backgroundPictture from "@/assets/files/img/tiu_banner.BazJeT54.png?url";
import HomeIconSVG from "@/assets/files/svg/HomeIconSVG.svg?url";
import type { BannerSampleFormResponse } from "~/types.index";

const config = useRuntimeConfig();
const apiUrl = config.public.apiUrl;
const route = useRoute();
const router = useRouter();



console.log(route.path)
const { data: MenuData } = useFetch<BannerSampleFormResponse>(
 ()=> `${apiUrl}banner/${route.params.alias}`,
  {
    headers: {
      "accept-language": "uz"
    }
  }
);

useSeoMeta({
  title: () => MenuData.value?.data?.child?.title || 'Bosh sahifa'
});
</script>

<template>
  <NuxtLayout name="main">
    <div class="menuAlias">
      <div 
        class="backgroundPicture"
        :style="{
          backgroundImage: `linear-gradient(180deg, rgba(10, 31, 63, 0.2), rgba(10, 31, 63, 0.8)), url('${backgroundPictture}')`
        }"
      >
        <div class="container">
          <div class="backgroundSections">
            <div class="URL_Section">
              <div @click="router.push('/')">
                <img style="cursor: pointer;" :src="HomeIconSVG" alt="Home">
              </div>
              <span>
                {{ MenuData?.data.parent.title }} / {{ MenuData?.data.child.title }}
              </span>
            </div>
            <div class="content_Head">
              {{ MenuData?.data.child.title }}
            </div>
          </div>
        </div>
      </div>

      <div class="Main_coontent">
        <div class="container">
          <div class="flex_box_main_content">
            <!-- v-html o'rniga Slot -->
            <div class="Content_section">
                <slot />
              
            </div>

            <div v-if="'/contacts'  != route.path" class="menuSection">
              <div class="head">
                <span>
                  {{ MenuData?.data.parent.title }}
                </span>
              </div>
              <div class="content">
                <NuxtLink 
                  v-for="value in MenuData?.data.child.siblings"
                  :key="value.alias"
                  class="items_url"
                  :class="{ activeLink: value.alias === route.params.alias }"
                  :to="`/menu/${value.alias}`"
                >
                  <div v-if="value.alias === route.params.alias" class="active_icon"></div>
                  <span>{{ value.title }}</span>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

