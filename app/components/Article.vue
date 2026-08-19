<template>
  <div class="container mt-120">
    <div class="mx-auto px-4 flex flex-col gap-6 mb-50">

        <div class="flex flex-col gap-2">
            <span class="oxirgi_son">
                Охирги сон мақолалари
            </span>

            <span class="nashrVaqt">
                Журналнинг № 12 (2024) сонида нашр этилган илмий мақолалар
            </span>
        </div>

        <div class="card_grid">
            <div
                v-for="value in 6"
                :key="value"
                class="card"
            >
                <div class="card_top">
                    <div class="tags_U">
                        Iqdisodiyot fanlari
                    </div>

                    <div class="pages">
                        5 - 12 sahifa
                    </div>
                </div>

                <div class="card_content_U">

                    <div class="child1 text-30">
                        Ўзбекистон иқтисодиётида рақамли трансформация
                        жараёнларининг ўрни
                    </div>

                    <div class="doi text-18">
                        DOI:
                        <a href="https://doi.org/10.35465/ku.v16i.1254">
                            https://doi.org/10.35465/ku.v16i.1254
                        </a>
                    </div>

                    <div class="content_U text-22">
                        Мақолада Ўзбекистон Республикасида рақамли иқтисодиётни
                        ривожлантириш масалалари, рақамли технологияларнинг
                        иқтисодий жараёнларга таъсири таҳлил қилинган...
                    </div>

                    <span class="author_item">
                        <img src="@/assets/icons/main/user.svg" alt="">
                        А.Н. Қодиров, М.С. Усмонова
                    </span>


                    <div class="line_article">

                    </div>
                    <div class="author_U">
                        <div class="author_info">
                          <span class="article_time">
                            <img src="@/assets/icons/main/calendar_white.svg" alt="calendar_white">
                            <span>
                              21 Ноябрь 2025
                            </span>
                          </span>

                            <span class="author_item">
                                <img src="@/assets/icons/main/eye2.svg" alt="">
                                876
                            </span>

                            <span class="author_item">
                                <img src="@/assets/icons/main/download.svg" alt="">
                                298
                            </span>

                        </div>

                        <div class="card_actions">
                            <div class="read_button">
                                <span>
                                 Ўқиш
                                </span>
                            </div>

                            <div class="downloadbuttonnws">
                               Юклаб олиш
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>

    <div class="all_articles">
        <UButton>
            Barcha maqolalarni ko'rish
        </UButton>
    </div>


    </div>
</template>

<style scoped lang="sass">
@use "../assets/sass/_variables" as variables
@use "../assets/sass/main" as *

.read_button
  background: #3861A7
  span
    font-family: Arial;
  font-weight: 400;
  font-style: Regular;
  font-size: 14px;
  leading-trim: NONE;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: center;
  color: white
  padding: 8px 15px
  border-radius: 4px
  height: 38px
  width: 66.7px
  text-align: center
  display: flex
  justify-content: center
  align-content: center



.downloadbuttonnws
  color: #3861A7
  height: 38px;
  border-radius: 4px;
  padding-top: 8px;
  padding-right: 16px;
  padding-bottom: 8px;
  padding-left: 16px;
  angle: 0 deg;
  opacity: 1;
  border: 1px #3861A7 solid;

.oxirgi_son
  font-size: 36px
  font-weight: 600
  text-align: center
  color: #1E2939
  line-height: 1.2
  font-family: 'SF Pro Display', sans-serif;

.nashrVaqt
  font-size: 20px
  font-weight: 400
  color: #4A5565
  text-align: center
  font-family: 'SF Pro Display', sans-serif;
  line-height: 1.5
  margin-top: 12px


.card_grid
  width: 100%
  display: grid
  padding-top: 25px
  padding-bottom: 25px


  grid-template-columns: repeat(2, minmax(0, 1fr))
  gap: 20px

.card
  width: 100%
  min-width: 0
  background: #ffffff
  padding: 20px
  padding-bottom: 24px
  border-radius: 8px
  min-height: 344px
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1)
  box-sizing: border-box
  display: flex
  flex-direction: column

.card_top
  width: 100%
  display: flex
  justify-content: space-between
  align-items: center
  gap: 15px
  flex-wrap: wrap

.tags_U
  background: #DBEAFE
  color: variables.$blueBackground
  border-radius: 9999px
  padding: 4px 12px
  font-size: 14px
  white-space: nowrap
  color: #1447E6
  // width: 158px
  height: 28px
  display: flex
  align-items: center
  justify-content: center

.pages
  color: #6A7282
  font-size: 14px
  white-space: nowrap

.card_content_U
  height: 100%
  display: flex
  flex-direction: column
  justify-content: space-between
  gap: 12px
  margin-top: 15px

.child1
  color: #1E2939
  text-align: left
  line-height: 1.3
  overflow-wrap: anywhere
  font-family: Arial;
  font-weight: 400;
  font-style: Regular;
  font-size: 20px;
  leading-trim: NONE;
  line-height: 28px;
  letter-spacing: 0px;


.doi
  color: #3861A7
  text-align: left
  line-height: 1.4
  overflow-wrap: anywhere
  font-family: Arial;
  font-weight: 400;
  font-style: Regular;
  font-size: 14px;
  leading-trim: NONE;
  line-height: 20px;
  letter-spacing: 0px;


.doi a
  color: inherit
  text-decoration: none
  overflow-wrap: anywhere

.content_U
  color: #4A5565
  text-align: left
  line-height: 1.5
  overflow-wrap: anywhere
  font-family: Arial;
  font-weight: 400;
  font-style: Regular;
  font-size: 14px;
  leading-trim: NONE;
  line-height: 20px;
  letter-spacing: 0px;
  color: #4A5565


.author_U
  width: 100%
  display: flex
  align-items: center
  justify-content: space-between
  gap: 20px
  color: #4A5565
  text-align: left
  margin-top: auto
  border-top: #E5E7EB 1px solid
  padding-top: 25.5px

.author_info
  display: flex
  align-items: center
  gap: 20px
  flex-wrap: wrap
  min-width: 0

.author_item
  display: flex
  align-items: center
  gap: 6px
  white-space: nowrap
  font-family: Arial;
  font-weight: 400;
  font-style: Regular;
  font-size: 14px;
  leading-trim: NONE;
  line-height: 20px;
  letter-spacing: 0px;
  color: #4A5565


.author_item img
  width: 18px
  height: 18px
  object-fit: contain

.card_actions
  display: flex
  align-items: center
  justify-content: flex-end
  gap: 10px
  flex-shrink: 0

.all_articles
  display: flex
  justify-content: center
  margin-top: 30px
  margin-bottom: 30px


// Tablet
@media (max-width: 1024px)

  .card_grid
    grid-template-columns: repeat(2, minmax(0, 1fr))
    gap: 16px

  .card
    padding: 18px
    min-height: 330px

  .author_U
    align-items: flex-start
    flex-direction: column
    gap: 15px

  .card_actions
    width: 100%
    justify-content: flex-start


// Mobile
@media (max-width: 768px)

  .container
    padding-left: 16px
    padding-right: 16px
    margin-bottom: 30px

  .oxirgi_son
    font-size: 28px

  .nashrVaqt
    font-size: 17px

  .card_grid
    grid-template-columns: 1fr
    gap: 16px

  .card
    min-height: auto
    padding: 18px

  .child1
    font-size: 24px

  .doi
    font-size: 16px

  .content_U
    font-size: 18px

  .author_U
    flex-direction: column
    align-items: flex-start
    gap: 15px

  .author_info
    width: 100%
    gap: 12px 18px

  .card_actions
    width: 100%
    flex-wrap: wrap
    justify-content: flex-start


// Small mobile
@media (max-width: 480px)

  .container
    padding-left: 12px
    padding-right: 12px

  .oxirgi_son
    font-size: 24px

  .nashrVaqt
    font-size: 15px

  .card
    padding: 15px

  .card_top
    align-items: flex-start
    flex-direction: column
    gap: 8px

  .tags_U
    font-size: 13px

  .pages
    font-size: 13px

  .child1
    font-size: 21px

  .doi
    font-size: 14px

  .content_U
    font-size: 16px

  .author_info
    flex-direction: column
    align-items: flex-start
    gap: 10px

  .author_item
    white-space: normal

  .card_actions
    flex-direction: column
    align-items: stretch

  .card_actions > *
    width: 100%


.article_time
    display: flex
    align-items: center
    gap: 4px
    span
      font-family: Arial;
      font-weight: 400;
      font-style: Regular;
      font-size: 14px;
      leading-trim: NONE;
      line-height: 20px;
      letter-spacing: 0px;
      color:#6A7282

</style>