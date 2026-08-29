<template>
    <div class="manageSection">
        <div class="navigationTabs">

            <div class="tabsItems">

                <div class="tabItem tabItem_active"><span>Таҳрир кенгаши таркиби</span></div>
                <div class="tabItem"><span>Таҳрир кенгаши аъзолари</span></div>
            </div>


        </div>


        <div class="manages_List">

            <div v-for="value in 8" class="manege_Item">
                <img src="https://journal.tiu.uz/storage/uploads/manage/6eaf3c5be03de5f8f4da6b284c8c3742f498c029_694153b9d89916.51330901.jpg" alt="">

                <div class="NameOfFullName">
                    Matkarimova Gulchexra Abdusamatovna
                </div>

                <span class="contentOfManage">
                   Huquqiy fanlar kafedrasi mudiri
                </span>
            </div>


        </div>

    </div>
</template>


<script lang="ts" setup>

definePageMeta({
    layout : "menu"
})

</script>