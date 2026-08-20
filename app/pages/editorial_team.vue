<template>
    <HeaderRoute :url="['Журнал ҳақида', 'Таҳририят жамоаси']" title="Таҳририят жамоаси" />

    <div class="container">

        <div class="head_tahriyat_jamoa">


            <div class="content_main">
                <div class="tabs">
                    <div class="tabs_items">
                        <div class="tabs-content">
                            <div v-for="value in tabs_Items" :key="value.id"
                                :class="['tabs_item', value.active ? 'active_tab' : 'disactive_tab']"
                                @click="selectComponent(value.id)">
                                <span>
                                    {{ value.title }}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>


                <div>
                    <div class="component_show">
                        <firstTab v-if="tabs_Items[0]?.active" />
                        <secondTab v-else-if="tabs_Items[1]?.active" />

                    </div>
                </div>
            </div>




            <JournalAboutCard />


        </div>



    </div>
</template>
<script lang="ts" setup>

import firstTab from '~/components/editorial_team/first.tab.vue';
import secondTab from '~/components/editorial_team/second.tab.vue';

useHead(
    {
        title: "Таҳририят жамоаси"
    }
)
const router = useRouter();
console.log(router.currentRoute.value.fullPath)
definePageMeta(
    {
        layout: "main"
    }
);

const tabs_Items = ref<{
    id: number,
    title: string,
    active: boolean
}[]>([
    {
        title: "Таҳрир кенгаши таркиби",
        id: 1,
        active: true,
    },
    {
        title: "Таҳрир кенгаши аъзолари",
        id: 2,
        active: false
    }
]);

const selectComponent = (id: number) => {
    console.log(id);
    tabs_Items.value.forEach(tab => {
        tab.active = tab.id === id;
    });
}

</script>


<style lang="sass" scoped>
.component_show
    margin-top: 16px

.tabs-content
    background: #EEF2F6
    display: flex
    border-radius: 10px
    padding: 3px
.tabs_items
    display: flex
    justify-content: start
    align-items: center
    gap: 3px
    padding: 12px
    width: 100%

    .tabs_item
        border-radius: 10px
        padding: 12px 10px
        display: flex
        justify-content: center
        align-items: center
        cursor: pointer
        user-select: none
        
        span
            font-weight: 500;
            font-style: Medium;
            font-size: 18px;
            line-height: 130%;
            color: #364153
            letter-spacing: 0%;
                 

.active_tab
    background: white
.disactive_tab
    &:hover
        background: #FAFAFA

.head_tahriyat_jamoa
    width: 100%
    display: grid
    grid-template-columns: 4fr 1fr
    gap: 20px
    margin-top: -30px
    position: relative
    align-items: start
    @media (max-width:1170px)
        grid-template-columns: 1fr 
        
    


.tabs
    background: white
    min-width: 100%
    height: 74px
    border-radius: 12px
    @media (max-width:768px) 
        height: auto
.content_main
    min-width: 100%
    margin-left: auto
    margin-right: auto
</style>