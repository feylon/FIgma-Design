<template>
    <div class="manageSection">
        <div class="navigationTabs">

            <div class="tabsItems">

                <div class="tabItem tabItem_active"><span>Таҳрир кенгаши таркиби</span></div>
                <div class="tabItem"><span>Таҳрир кенгаши аъзолари</span></div>
            </div>


        </div>


        <div class="manages_List">

            <div v-for="value in data?.data" :key="value.id" class="manege_Item">
                <img :src="value?.files[0]?.img" alt="">

                <div class="NameOfFullName">
                        {{ value.title }}
                </div>

                <span class="contentOfManage">
                  {{value.short_content}}
                </span>
            </div>


        </div>

    </div>
</template>


<script lang="ts" setup>

definePageMeta({
    layout : "menu"
});

const config = useRuntimeConfig();
const apiUrl = config.public.apiUrl;

export interface FileItem {
  img: string;
  is_main: number;
  size: number;
  type: string;
  url: string;
}

export interface ManagementMember {
  id: number;
  group: string;
  title: string;
  sort_order: number;
  status: boolean;
  short_content: string;
  options: string;
  files: FileItem[];
  created_at: string;
}

export interface ManagementResponse {
  data: ManagementMember[];
  total: number;
}



const { data, pending, error } = await useFetch<ManagementResponse>(`${apiUrl}main/manage?option=1&limit=12&offset=0&order=id%2Bdesc&lang=uz`, {
    headers :{
        "accept-language" : "uz"
    }
});

</script>