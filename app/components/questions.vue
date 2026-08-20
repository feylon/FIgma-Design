    <template>
        <div class="bg-white">
            <div class="container">
                <div class="wrapper">
                    <form class="form-card">
                        <span class="title">
                            Саволларингиз борми?
                        </span>

                        <span class="title_content">
                            Саволингиз бизга юборинг, биз кўриб чиқиб сиз билан алоқага чиқамиз.
                        </span>

                        <div class="input_Section">
                            <label for="fullName" class="label">ФИШ:</label>
                            <input type="text" id="fullName" name="fullName" placeholder="Киритинг">
                        </div>
                        <div class="grid_Input_section" style="">
                            <div class="input_Section">
                                <label for="phone" class="label">Телефон рақам:</label>
                                <ClientOnly> 
                                <input v-maska data-maska="+998 ## ### ## ##" data-maska-eager
                                    placeholder="+998 -- --- -- --" type="tel" id="phone" name="phone" />
                                </ClientOnly>
                            </div>

                            <div class="input_Section">
                                <label for="email" class="label">Электрон манзил:</label>
                                <input type="email" id="email" name="email" placeholder="example@email.com">
                            </div>
                        </div>

                        <div class="w-full">
                            <div class="input_Section">
                                <label for="message" class="label">Матн:</label>
                                <textarea id="message" name="message" rows="5" placeholder="Савол мазмуни"></textarea>
                            </div>
                        </div>

                        <label for="file" class="label">Файл:</label>

                        <label for="file" class="w-full file_section">

                            <img src="@/assets/icons/main/folder.svg" alt="">
                            <span>Faylni biriktirish</span>
                            <input @change="changeInputSection" type="file" id="file" name="" aria-hidden="true"
                                style="display: none;">
                        </label>
                        <div class="mt-20">
                            <UButton>
                                Murojaatni yuborish
                            </UButton>
                        </div>
                    </form>
                    <ClientOnly>
                    <form class="poll-card">
                        <span class="title">
                            Сўровномалар
                        </span>
                        <div class="card">
                            <span class="content_c">
                                Сўровнома! Сайтинг янги дизайнини қандай баҳолайсиз?
                            </span>

                            <span class="content_b">
                                Ушбу сўровнома қатнашиш доирасида бизнинг хизматларини яхшилашда бизга ёрдам берасиз
                            </span>

                            <div class="option_List">
                                <label class="option-card">
                                    <input type="radio" name="poll" class="radio-input">
                                    <span class="option-text">Жуда яхши</span>
                                </label>

                                <label class="option-card">
                                    <input type="radio" name="poll" class="radio-input">
                                    <span class="option-text">Яхши</span>
                                </label>

                                <label class="option-card">
                                    <input type="radio" name="poll" class="radio-input">
                                    <span class="option-text">Қониқарли</span>
                                </label>

                                <label class="option-card">
                                    <input type="radio" name="poll" class="radio-input">
                                    <span class="option-text">Қониқарсиз</span>
                                </label>

                                <label class="option-card">
                                    <input type="radio" name="poll" class="radio-input">
                                    <span class="option-text">Қониқарсиз</span>
                                </label>

                            </div>
                        </div>
                        <div class="option-card text-center active_link_option_card all_question">
                            Барча сўровномаларни кўриш
                        </div>
                    </form></ClientOnly>
                </div>

            </div>
        </div>
    </template>


<script setup lang="ts">


const formData = reactive<{
    name: string,
    phone: string,
    mail: string,
    content: string,
    file: any
}>({
    content: '',
    file: null,
    mail: "",
    name: '',
    phone: ''
})

const changeInputSection = (event: Event) => {
    const target = event.target as HTMLInputElement
    if (target.files && target.files[0]) {
        console.log("fayl yuklandi:", target.files[0])
    }
}
</script>

<style lang="sass" scoped>
@use "../assets/sass/_variables" as variables
@use "../assets/sass/main" as *

.card
  padding: 20px
  background-color: #ffffff
  border: solid 1px #E5E7EB
  border-radius: 12px
  margin-top: 12px

.wrapper 
  display: grid
  grid-template-columns: 2fr 1fr
  gap: 24px
  
  .form-card
    display: flex
    flex-direction: column
    background: #F9FAFB
    border: #E5E7EB solid 1px
    padding: 20px
    border-radius: 16px

    .title
      font-size: 28px
      font-weight: 600
      
    .title_content
      color: #4A5565
      font-family: 'SF Pro Display', sans-serif
      font-weight: 400
      font-size: 18px
      line-height: 28px
      margin-top: 8px
      letter-spacing: 0px

  @media (max-width: 992px) 
    grid-template-columns: 1fr
  
.input_Section
  display: flex
  flex-direction: column

  label
    font-size: 18px
    color: #080E1B
    margin-top: 10px
    font-weight: 500
    display: block
    font-family: 'SF Pro Display', sans-serif
    
  input
    display: block
    padding: 3px 14px
    border: #E5E7EB 1px solid
    background: none
    border-radius: 12px
    height: 50px
    width: 100%
    margin-top: 5px
    font-size: 20px

    &:focus
      border: #E5E7EB 1px solid
      outline: none

  textarea
    display: block
    border: #E5E7EB 1px solid
    background: none
    border-radius: 12px
    height: 100px
    width: 100%
    margin-top: 5px
    font-size: 20px
    padding: 15px 14px 0 14px

    &:focus
      border: #E5E7EB 1px solid
      outline: none
            
.file_section
  border: 1px dashed #6A7282
  height: 52px
  display: flex
  align-items: center
  gap: 10px
  padding-left: 10px
  cursor: pointer
  width: 100%
  opacity: 1
  border-radius: 12px
  margin-top: 10px

label
  font-size: 18px
  color: #080E1B
  margin-top: 10px
  font-weight: 600
  display: block
    
.poll-card
  padding: 24px
  display: flex
  flex-direction: column
  background: #F9FAFB
  border: #E5E7EB solid 1px
  border-radius: 16px
  
  .title
    font-family: 'SF Pro Display', sans-serif
    font-weight: 600
    font-size: 28px
    line-height: 32px
    letter-spacing: 0px
    color: #1E2939

.option-card 
  display: flex
  align-items: center
  gap: 12px
  margin-top: 10px
  width: 398px
  height: 50px
  padding: 0 16px
  background-color: #ffffff
  border: 1px solid #dce5ef 
  border-radius: 12px
  box-sizing: border-box
  cursor: pointer
  transition: all 0.2s ease

  &:hover 
    border-color: #b0c4de

  .radio-input 
    appearance: none
    -webkit-appearance: none
    width: 20px
    height: 20px
    border: 2px solid #dce5ef
    border-radius: 50%
    outline: none
    margin: 0
    cursor: pointer
    display: flex
    align-items: center
    justify-content: center
    flex-shrink: 0
    transition: all 0.2s ease

    &:checked 
      border-color: #2563eb
      background-color: #2563eb
      box-shadow: inset 0 0 0 4px #ffffff

  .option-text 
    font-family: system-ui, -apple-system, sans-serif
    font-size: 16px
    font-weight: 500
    color: #0f172a
  
.content_c
  font-family: 'SF Pro Display', sans-serif
  font-weight: 500
  font-size: 20px
  line-height: 130%
  letter-spacing: 0%
  color: #02090F

.content_b
  color: #333C42
  display: block
  font-weight: 400
  font-size: 18px
  line-height: 130%
  letter-spacing: 0%
  margin-top: 8px

.option_List
  display: flex
  flex-direction: column

.active_link_option_card
  color: #3861A7
  text-align: center
  width: 100%
  display: flex
  justify-content: center
  font-weight: 500

.grid_Input_section
  display: grid
  grid-template-columns: 1fr 1fr
  gap: 10px

  @media (max-width: 600px)
    grid-template-columns: 1fr
</style>