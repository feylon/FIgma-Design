<template>
    <div class="bg-white pb-120 ">
        <div class="about_Journal_box"></div>
        <div class="container">
            <div class="about_Journal">

                <div class="flex gap-24 items-center section_Y">
                    <div class="book_card">
                        <div class="icon_section">
                            <img src="@/assets/icons/main/book.svg" alt="">
                        </div>

                        <div class="book_picture_section">
                            <img src="@/assets/img/logo/index/book.png" alt="">
                        </div>

                    </div>
                    <span class="uzbek_iqdisoyot">
                        Ўзбекистон иқтисодиётида рақамли трансформация жараёнларининг ўрни
                    </span>
                </div>

                <div class="button_about_Journal_section">
                    <div class="button_about_Journal">
                        <img src="@/assets/icons/main/downloadIcon.svg" alt="">
                        <span>Jurnalni yuklab oling</span>
                    </div>
                </div>

            </div>
            <div>
                <div class="lastNews">

                    <span class="last_news_title">
                        Сўнги янгиликлар
                    </span>

                    <span class="last_nes_description">
                        Университет ҳақидаги сўнги воқеалардан ҳабардор бўлинг
                    </span>


                    <div class="card_list_news">
                        <div v-for="value in 5" class="news_card">
                            <img class="news_card_img" src="@/assets/img/logo/index/card_news.png" alt="">

                            <div class="card_description">
                                <span class="contenr_card">
                                    Бугун, 18-ноябрь – Ўзбекистон Республикаси Давлат байроғи қабул қилинган кун!

                                </span>

                                <div class="card_details">
                                    <div class="time ">
                                        <img src="@/assets/icons/main/calendar.svg" alt="">
                                        <span>18-ноябрь, 2025</span>
                                    </div>

                                    <div class="views">
                                        <img src="@/assets/icons/main/eye.svg" alt="eye.svg">
                                        238
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="button_blue_news">
                    <button class="barcha_yangilliklarni_kurish">
                        <span>
                            Барча янгиликларни кўриш
                        </span>
                    </button>

                </div>


            </div>
        </div>
    </div>
</template>


<style scoped lang="sass">
.lastNews

.about_Journal 
    margin-bottom: 120px;
    max-width: 1500px;
    height: 309px;
    display: flex;
    align-items: center;
    top: 1639px;
    left: 210px;
    border-radius: 14px;
    opacity: 1;
    
    background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('~/assets/img/logo/index/background.png'); 
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover; 
    
    padding: 20px 23.5px 20px 20px;

    @media (max-width:990px)  
        display: flex
        flex-direction: column
        height: auto
    
    .book_card
        width: 250px
        height: 309px
        border-radius: 14px
        background: white


    .book_card
        display: flex
        height: 269px
    .icon_section
        justify-content: center
        align-items: center
        display: flex
        background:  linear-gradient(180deg, #3861A7 0%, #224E98 100%);
        width: 50px
        height: 100%
        border-bottom-left-radius: 14px
        border-top-left-radius: 14px


    .book_picture_section
        border-bottom-right-radius: 14px
        border-top-right-radius: 14px
        background: white
        display: flex
        justify-content: center
        padding: 16px

.uzbek_iqdisoyot
    display: block
    font-family: 'SF Pro Display', sans-serif
    font-weight: 600;
    font-style: Semibold;
    font-size: 24px;
    leading-trim: NONE;
    line-height: 130%;
    letter-spacing: 0px;
    color: white
    // max-width: 400px


.button_about_Journal_section
    display: flex
    justify-content: end
    width: 100%
    @media (max-width :990px)
        justify-content: center
        display: flex
        margin-top: 40px   
    .button_about_Journal
        background:  linear-gradient(180deg, #4172C7 0%, #3861A7 100%);
        align-items: center
        display: flex
        font-family: 'SF Pro Display', sans-serif
        color: white
        justify-content: center;
        padding : 12.5px 20px
        angle: 0 deg;
        gap: 12.5px
        opacity: 1;
        border-radius : 10px
        max-width: 232px

.lastNews
    display: flex
    flex-direction: column
    .last_news_title
        font-weight: 600;
        font-style: Semibold;
        font-size: 36px;
        leading-trim: NONE;
        line-height: 40px;
        letter-spacing: 0px;
        text-align: center;
        font-family: 'SF Pro Display', sans-serif
        color: #1E2939

    .last_nes_description
        color: #4A5565
        font-family: SF Pro Display;
        font-weight: 400;
        font-style: Regular;
        font-size: 20px;
        leading-trim: NONE;
        line-height: 28px;
        letter-spacing: 0px;
        margin-top: 12px
        display: block
        text-align: center;
        font-family: 'SF Pro Display', sans-serif


    .card_list_news
        display: grid
        justify-content: center
        gap:24px
            margin: auto
        margin-top: 32px
        grid-template-columns: repeat(5, 1fr) 
        @media (max-width:1300px)
            grid-template-columns: repeat(3, 1fr)
        @media (max-width:900)
            grid-template-columns: repeat(2, 1fr)    
        @media (max-width:768px)
            grid-template-columns: repeat(2, 1fr)
        @media (max-width:630px)
            grid-template-columns: repeat(1, 1fr)
            align-items: center
            justify-content: center
        .news_card
            width:100%
            top: 2180px;
            left: 210px;
            border-radius: 12px;
            angle: 0 deg;
            opacity: 1;
            background: #EBF0F6
            @media (max-width:630px)
                max-width: 400px
                display: flex
                flex-direction: column
                align-items: center
                margin-left: auto
                margin-right: auto
            .news_card_img
                border-top-right-radius: 12px
                border-top-left-radius: 12px
                width: 100%

            img
            .card_description
                .contenr_card
                    font-family: 'SF Pro Display', sans-serif
                    font-weight: 500;
                    font-style: Medium;
                    font-size: 18px;
                    leading-trim: NONE;
                    line-height: 130%;
                    letter-spacing: 0%;
                    display: block
                    padding: 12px
                    border-bottom: 1px solid #DDE0E4
                    color: #011024
               
               
                .card_details
                    padding: 12px 12px    
                    display: flex
                    justify-content: space-between
                    align-items: center
                    color: #3861A7
                    .time
                        display: flex
                        gap:4px
                        align-items: center
                        span    
                            color: #3861A7
                            font-family: 'SF Pro Display', sans-serif;
                            font-weight: 400;
                            font-style: Regular;
                            font-size: 16px;
                            leading-trim: NONE;
                            letter-spacing: 0%;

                    .views
                        display: flex
                        align-items: center
                        gap: 4px

.about_Journal_box
    padding-top: 120px


.section_Y
    @media (max-width: 630px)
        display: flex
        flex-direction: column
        justify-content: center
        .uzbek_iqdisoyot
            text-align: center


</style>