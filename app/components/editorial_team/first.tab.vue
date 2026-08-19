<template>
    <div class="main_content">
        <div class="card" v-for="value in members">
            <img class="member_img" :src="value.image" alt="">
            
           <div class="content">
             <div class="member_name">
                {{ value.name }}
            </div>
            
            <span class="position">{{value.position}}</span>
           </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { Value } from 'sass';
import member1 from "@/assets/img/editorial_team/member1.jpg"
import member2 from "@/assets/img/editorial_team/member2.jpg"

import member3 from "@/assets/img/editorial_team/member3.jpg"
import member4 from "@/assets/img/editorial_team/member4.jpg"


const members = ref<{
    name: string,
    position: string,
    image: string
}[]>([
    {
        name: 'Yuldashev Iskandar Baxramovich',
        position: 'Директор',
        image: member1
    },
    {
        name: 'Bekmuradov Adxam Sharipovich',
        position: 'Ректор маслаҳатчиси',
        image: member2
    },
    {
        name: 'Xannayev Sherzod Qurbonnazarovich',
        position: 'Илмий ишлар ва халқаро алоқалар бўйича проректор',
        image: member3
    },
    {
        name: 'Raxmonov Dilshodjon Alidjonovich',
        position: 'Илмий тадқиқотлар ва инновациялар департаменти бошлиғи',
        image: member4
    }
])

</script>


<style scoped lang="sass">

.main_content
    grid-template-columns: repeat(4, 1fr)
    display: grid
    gap: 16px

    .card
        background: white
        border-radius: 12px
        padding: 6px    
        .content
            padding-left: 8px
            padding-top: 14px
            .member_name
                font-family: SF Pro Display;
                font-weight: 600;
                font-style: Semibold;
                font-size: 20px;
                leading-trim: NONE;
                line-height: 140%;
                letter-spacing: 0px;
            .position
                font-family: SF Pro Display;
                font-weight: 400;
                font-style: Regular;
                font-size: 18px;
                leading-trim: NONE;
                line-height: 140%;
                letter-spacing: 0px;

@media  (max-width:1380px)
   .main_content
    grid-template-columns: repeat(3, 1fr)

@media  (max-width:1075px)
   .main_content
    grid-template-columns: repeat(2, 1fr)

@media  (max-width:780px)
   .main_content
    grid-template-columns: repeat(1, 1fr)
    .card
        padding: 40px
        max-width: 500px
        display: flex
        flex-direction: column
        align-items: center
        .member_img
            


.member_img
    width: 100%
    object-fit: cover
    border-radius: 6px

</style>