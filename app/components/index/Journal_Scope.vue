<template>
    <div class="bg-white pt-120">


        <div class="container">

            <div class="journal_scope_section">


                <div class="head_section">
                    Журнал йўналишлари ва бўлимлари
                </div>

                <div class="head_section_description">
                    <span>
                        Турли фан соҳалари бўйича илмий тадқиқотларингизни нашр қилинг
                    </span>
                </div>


                <div class="card_main_section">

                    <div v-for="value in 8" class="card">
                        <div class="flex justify-between">

                            <div class="icon_card">
                                <img src="/icons/main/graf.svg" alt="">
                            </div>


                            <div class="count_content">
                                <span>

                                    124 мақола
                                </span>

                            </div>



                        </div>


                        <div class="card_content">
                            <span class="card_title">
                                Хукукшунослик, сиёсатшунослик ва давлат бошқаруви
                            </span>

                            <span class="card_content">
                                Ёшларни тарбиялаш, маънавият масалалари
                            </span>

                        </div>
                    </div>

                </div>


                <div class="flex justify-center mt-24">
                    <nuxt-link class="barcha_yangilliklarni_kurish_button" to="#">
                        Барча категорияларни кўриш

                    </nuxt-link>

                </div>
            </div>
        </div>

    </div>
</template>

<style lang="sass" scoped>

@use "../../assets/sass/_variables" as variables


.journal_scope_section
    padding-top: 120px
    .head_section
        font-family: 'SF Pro Display', sans-serif
        font-family: SF Pro Display;
        font-weight: 600;
        font-style: Semibold;
        font-size: 36px;
        line-height: 40px;
        letter-spacing: 0px;
        text-align: center;
    .head_section_description
        span
            font-family: 'SF Pro Display', sans-serif;
            font-weight: 400;
            display: block
            color: #4A5565
            margin-top: 12px
            font-style: Regular;
            font-size: 20px;
            leading-trim: NONE;
            line-height: 28px;
            letter-spacing: 0px;
            text-align: center;


    .card_main_section
        display: grid
        gap: 24px
        margin-top: 32px
        grid-template-columns: repeat(4, 1fr) 
        max-width: 100%
        @media (max-width: 1024px) 
            grid-template-columns: repeat(2, 1fr) 
        
        @media(max-width: 768px)
            display: flex
            align-items: center
            flex-direction: column
        
        .card
            max-width: 357px;
            padding: 20px
            max-height: 250px;
            padding-bottom: 20px
            top: 1010px;
            left: 210px;
            border-radius: 14px;
            angle: 0 deg;
            opacity: 1;
            background: variables.$background_social_icon
            .icon_card
                width: 56px;
                height: 56px;
                top: 20px;
                left: 20px;
                border-radius: 10px;
                padding-top: 12px;
                padding-right: 12px;
                padding-left: 12px;
                angle: 0 deg;
                opacity: 1;
                background: #FFFFFF33;

            .count_content
                width: 97.5625px;
                height: 28px
                background: #FFFFFF33
                top: 20px
                left: 239px;
                border-radius: 33554400px;
                angle: 0 deg;
                opacity: 1;
            
                span
                    font-family: Arial;
                    font-weight: 400;
                    font-style: Regular;
                    font-size: 14px;
                    leading-trim: NONE;
                    line-height: 20px;
                    letter-spacing: 0px;
                    color: white
                    display: flex
                    align-items: center
                    justify-content: center

    .card_content
        display: flex
        flex-direction: column
        color: white
        margin-top: 16px

        gap: 10px
    .card_title
        font-family: 'SF Pro Display', sans-serif;
        font-weight: 600;
        font-style: Semibold;
        font-size: 20px;
        leading-trim: NONE;
        line-height: 130%;
        letter-spacing: 0px;
        
    .card_content
        font-family: 'SF Pro Display', sans-serif;
        font-weight: 400;
        font-style: Regular;
        font-size: 16px;
        leading-trim: NONE;
        line-height: 130%;
        letter-spacing: 0px;

    .barcha_yangilliklarni_kurish_button
        margin-top: 24px
        color: white
        max-width: 276px;
        height: 50pax;
        top: 1469px;
        left: 822px;
        border-radius: 10px;
        padding-top: 12.5px;
        padding-right: 16px;
        padding-bottom: 12.5px;
        padding-left: 16px;
        gap: 10px;
        angle: 0 deg;
        opacity: 1;
        background: variables.$blueBackground
        margin: auto 24px
        display: flex
        justify-content: center
        align-items: center
        font-family: 'SF Pro Display', sans-serif;
        text-decoration: none
        cursor: pointer
        @media (max-width: 768px)
            // max-width:  
            
        



</style>