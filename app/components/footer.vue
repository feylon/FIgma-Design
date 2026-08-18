    <template>
    <footer class="footer">
<div class="container">
            <div class="footer_child1">
            
            <div v-for="(value, index) in 3" :key="index" class="footer_column">
                <span class="Main_Title_footer">Jurnal haqida</span>
                <span class="Text_footer">Мақолаларга қўйиладиган талаблар</span>
                <span class="Text_footer">Таҳририят жамоаси</span>
                <span class="Text_footer">Махфийлик баёноти</span>
                <span class="Text_footer">Архив сонлар</span>
            </div>

            <div class="footer_column ">
                <span class="Main_Title_footer">Kontakt ma'lumotlari</span>

                <span class="Text_footer contact_item">
                    <img src="/icons/footer/location.svg" alt="location">
                    <span>Тошкент шаҳри, Абдулла Қодирий кўчаси, 11</span>
                </span>

                <span class="Text_footer contact_item">
                    <img src="/icons/footer/phone.svg" alt="phone">
                    <span>+998 71 234 56 78</span>
                </span>

                <span class="Text_footer contact_item">
                    <img src="/icons/footer/message.svg" alt="message">
                    <span>info@tiuglobal.uz</span>
                </span>

                <div class="social_items">
                    <img class="social_item_footer" src="/icons/footer/facebook.svg" alt="facebook">
                    <img class="social_item_footer" src="/icons/footer/twitter.svg" alt="twitter">
                    <img class="social_item_footer" src="/icons/footer/in.svg" alt="linkedin">
                    <img class="social_item_footer" src="/icons/footer/youtube.svg" alt="youtube">
                </div>
            </div>
        </div>

        <div class="footer_child2">
            <span class="copyright">
                © 2024 TIU Global tadqiqotlar va innovatsiyalar ilmiy jurnali, Барча ҳуқуқлар ҳимояланган
            </span>

            <div class="footer_links">
                <span>Фойдаланиш шартлари</span>
                <span>Махфийлик сиёсати</span>
                <span>Сайт харитаси</span>
            </div>
        </div>
</div>
    </footer>
</template>

<style scoped lang="sass">
@use "../assets/sass/_variables" as variables

.footer
    margin-top: 120px
    width: 100%
    padding-top: 40px
    // padding: 40px 70px 
    background: variables.$footerBackground
    box-sizing: border-box
    font-family: 'SF Pro Display', sans-serif

.footer_child1
    width: 100%
    margin: 0 auto
    padding-bottom: 30px
    border-bottom: 1px solid #334155
    display: grid
    grid-template-columns: repeat(4, 1fr)
    gap: 40px   

.footer_column
    display: flex
    flex-direction: column
    gap: 16px
    min-width: 0
   

.Main_Title_footer
    font-size: 20px
    line-height: 1.4
    font-weight: 600
    color: variables.$footer_main_title_color
    margin-bottom: 4px  

.Text_footer
    font-size: 16px
    line-height: 1.5
    color: white
    overflow-wrap: anywhere

.contact_item
    display: grid
    grid-template-columns: 20px 1fr
    align-items: flex-start
    gap: 10px

.contact_item img
    width: 20px
    height: 20px
    margin-top: 2px

.social_items
    display: grid
    grid-template-columns: repeat(4, 1fr)
    justify-content: start
    align-items: center
    gap: 8px
    margin-top: 4px

.social_item_footer
    width: 36px
    height: 36px
    padding: 6px
    box-sizing: border-box
    display: flex
    justify-content: center
    align-items: center
    background: #1E2939
    border-radius: 50%
    cursor: pointer
    transition: 0.2s ease

.social_item_footer:hover
    background: #334155

.footer_child2
    width: 100%
    max-width: 1440px
    margin: 0 auto
    padding-top: 20px
    display: grid
    grid-template-columns: 1fr auto
    align-items: center
    gap: 30px
    color: #99A1AF
    font-size: 14px
    line-height: 1.5

.copyright
    max-width: 600px

.footer_links
    display: grid
    grid-auto-flow: column
    justify-content: end
    align-items: center
    gap: 20px

@media (max-width: 1200px)
    .footer
        padding-left: 40px
        padding-right: 40px

    .footer_child1
        gap: 25px

    .Main_Title_footer
        font-size: 18px

    .Text_footer
        font-size: 15px

    .footer_child2
        gap: 20px

    .footer_links
        gap: 15px

@media (max-width: 900px)
    .footer
        padding: 35px 30px 20px

    .footer_child1
        grid-template-columns: repeat(2, 1fr)
        row-gap: 35px
        column-gap: 30px

    .footer_child2
        grid-template-columns: 1fr
        align-items: flex-start
        gap: 15px

    .footer_links
        justify-content: start
        grid-auto-flow: row

@media (max-width: 600px)
    .footer_column
        // margin-left: auto
        // margin-right: auto      
    .footer
        margin-top: 30px
        // padding: 30px 20px 20px

    .footer_child1
        // gap: 30px
        padding-bottom: 25px

    .footer_column
        gap: 12px

    .Main_Title_footer
        font-size: 18px

    .Text_footer
        font-size: 14px
        line-height: 1.6

    .contact_item
        gap: 4px
        
    .social_items
        margin-top: 5px

    .footer_child2
        padding-top: 18px
        font-size: 13px
        gap: 18px

    .copyright
        max-width: none

    .footer_links
        width: 100%
        grid-auto-flow: row
        justify-content: start
        gap: 10px


</style>