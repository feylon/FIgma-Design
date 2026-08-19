<template>
    <div class="section">
        <div class="container">
            <span class="main_title text-white">
                Тошкент Халқаро Университети Илмий онлайн журнали
            </span>
            <div class="main_section">

                <span class="text-center block mt-29 main_title_sibling">
                    Замонавий тадқиқотлар ва инновацион ғояларингизни дунёга етказинг
                </span>

                <div class="card_glass">
                    <div>
                        <div class="flex card_glass_responsible justify-center gap-16">
                            <div class="flex" style="justify-content: end;">
                                <div class="glass-rounded flex">
                                    <span class="span_title">Энг охирги сон</span>
                                    <span class="span_content">№ 12 (2025)</span>
                                </div>
                            </div>

                            <div class="right_span_content">
                                <span class="span_title">Нашр санаси</span>
                                <span class="span_content">Ноябрь 2025</span>
                            </div>



                        </div>
                    </div>

                    <div class="flex justify-center">
                        <button class="whiteButton">
                            <img src="@/assets/icons/main/message.svg" alt="app/assets/icons/main/message.svg">
                            <span>
                                Янги сонга мақола юбориш
                            </span>
                        </button>
                    </div>
                </div>
                <div class="card_lists">
                    <div class="card_item">
                        <span class="main_title_card">500+</span>
                        <span class="main_content_card">Нашр этилган мақолалар</span>
                    </div>


                     <div class="card_item">
                        <span class="main_title_card">200+</span>
                        <span class="main_content_card">Муаллифлар</span>
                    </div>


                     <div class="card_item">
                        <span class="main_title_card">15+</span>
                        <span class="main_content_card">Мамлакатлар</span>
                    </div>
                    

                </div>
            </div>
        </div>
    </div>


</template>

<script lang="ts" setup></script>
<style scoped lang="sass">
@use "../assets/sass/main" as *
@use "../assets/sass/_variables" as variables

.section
  width: 100%
  background: linear-gradient(90deg, #3861A7 0%, #224E98 100%)
//   height: 400px
.main_section
    display: flex
    flex-direction: column;
    justify-content: center
    align-items: center
    padding: 0 231px
    padding-bottom: 75px
    @media (max-width:768px) 
        padding: 15px 0px
       
    
.main_title
    font-family: SF Pro Display;
    font-weight: 500;
    font-style: Medium;
    font-size: 48px;
    text-align: center
    line-height: 48px;
    letter-spacing: 0px;
    font-family: 'SF Pro Display', sans-serif  
    display: block  
    padding-top: 75px

.main_title_sibling
    font-family: Arial
    font-weight: 400
    font-style: normal
    font-size: 20px
    leading-trim: NONE
    line-height: 28px
    letter-spacing: 0px
    text-align: center
    color: #DBEAFE  


.card_glass
    width: 672px
    height: 198px
    angle: 0 deg
    opacity: 1
    border-radius: 10px
    border-width: 1px
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(11px); 
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    margin-top: 32px
    padding: 25px
    @media(max-width:768px)
        max-width: 90%
        .card_glass_responsible
            display: flex
            flex-direction: column
            align-items: center
    
    .whiteButton
        margin-top: 16px
        border: none
        border-radius: 10px
        display: flex
        justify-content: space-around
        align-items: center
        padding: 12px 32px
        width: 622;
        cursor: pointer
        angle: 0 deg;
        opacity: 1;
        gap: 16px;
        &:hover
            background: FFFFFF1D;
        span
            font-family: Arial;
            font-weight: 400;
            font-style: Regular;
            font-size: 16px;
            leading-trim: NONE;
            line-height: 24px;
            letter-spacing: 0px;
            text-align: center;
            color: variables.$blueBackground



        


.glass-rounded
    border-radius: 33554400px
    background: rgba(255, 255, 255, 0.15)
    backdrop-filter: blur(12px)
    -webkit-backdrop-filter: blur(11px) 
    width: 230.234375px
    height: 84px
    angle: 0 deg
    opacity: 1
    gap: 4px
    border-radius: 33554400px
    padding-right: 24px
    padding-left: 24px
    align-items: center
    justify-content: center
    display: flex
    flex-direction: column
    color: white
    

    .span_title
        font-family: Arial
        font-weight: 400
        font-style: Regular
        font-size: 14px
        line-height: 20px
        letter-spacing: 0px
        text-align: center

    .span_content
        font-family: Arial;
        font-weight: 400;
        font-style: Regular;
        font-size: 30px;
        leading-trim: NONE;
        line-height: 36px;
        letter-spacing: 0px;
        text-align: center;

.right_span_content
    color: white
    display: flex
    justify-content: center
    flex-direction: column
    border: none
    border-left: 1px #FFFFFF4D solid
    padding:16px 
    padding-top: 10px;
    padding-bottom: 10px
    padding-left: 16px

    .span_title
        font-family: Arial;
        font-weight: 400;
        font-style: Regular;
        font-size: 14px;
        line-height: 20px;
        letter-spacing: 0px;
    .span_content
        font-family: Arial;
        font-weight: 400;
        font-style: Regular;
        font-size: 18px;
        leading-trim: NONE;
        line-height: 28px;
        letter-spacing: 0px;

.card_lists
    display: flex
    gap: 24px
    padding-top: 32px
    @media(max-width:1200px)
        flex-direction: column
        margin-top: 40px 
    .card_item
        border-radius: 10px
        width: 282px
        height: 102px
        background: rgba(255, 255, 255, 0.15)
        backdrop-filter: blur(12px)
        -webkit-backdrop-filter: blur(11px)
        display: flex
        justify-content: center
        flex-direction: column
        align-items: center
        .main_title_card
            font-family: Arial;
            font-weight: 400;
            font-style: Regular;
            font-size: 30px;
            leading-trim: NONE;
            line-height: 36px;
            letter-spacing: 0px;
            text-align: center;
            color: white

        .main_content_card
            font-family: Arial;
            font-weight: 400;
            font-style: Regular;
            font-size: 16px;
            leading-trim: NONE;
            line-height: 24px;
            letter-spacing: 0px;
            text-align: center;
            color: #DBEAFE
            


      
</style>