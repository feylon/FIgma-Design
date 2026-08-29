<template>
    <div class="bg-white">
        <div class="container">
            <div class="FAQSection">

                <div class="main-wrapper">
                    <div class="left-form-section">

                        <span class="headerText">
                            Саволларингиз борми?
                        </span>

                        <span class="headerDescription">
                            Саволингиз бизга юборинг биз кўриб чиқиб сизга алоқага чиқамиз
                        </span>

                        <form @submit.prevent="submitForm">
    <!-- ФИШ -->
    <div class="form_element">
      <label for="fullName"> ФИШ: </label>

      <input
        id="fullName"
        v-model="form.fullName"
        type="text"
        placeholder="Киритинг"
        class="form_element_input"
        required
      />
    </div>

    <div class="phone_and_email">
      <!-- Телефон -->
      <div class="form_element">
        <label for="phone"> Телефон рақам: </label>
        <ClientOnly>
          <input
            id="phone"
            v-model="form.phone"
            v-maska
            data-maska="+998 ## ### ## ##"
            data-maska-eager
            type="tel"
            placeholder="+998 -- --- -- --"
            class="form_element_input"
            required
          />
        </ClientOnly>
      </div>

      <!-- Email -->
      <div class="form_element">
        <label for="email"> Электрон манзил: </label>

        <input
          id="email"
          v-model="form.email"
          type="email"
          placeholder="example@email.com"
          class="form_element_input"
          required
        />
      </div>
    </div>

    <!-- Matn -->
    <div class="form_textarea_element_parent">
      <div class="form_textarea_element">
        <label for="message"> Матн </label>

        <textarea
          id="message"
          v-model="form.message"
          placeholder="Савол мазмуни"
          required
        ></textarea>
      </div>
    </div>

    <!-- File -->
    <div class="file_Section">
      <label for="fileSection">
        <span>Файл:</span>

        <div class="selectionFile">
          <div class="flex_section">
            <img src="@/assets/files/svg/file_select.svg?url" alt="" />

            <span class="fayl_biriktirish">
              {{ form.file ? form.file.name : 'Файл бириктиринг' }}
            </span>
          </div>
        </div>
      </label>

      <input
        id="fileSection"
        ref="fileInput"
        hidden
        type="file"
        @change="handleFileChange"
      />
    </div>

    <!-- Submit -->
    <div class="submitButton">
      <button type="submit" :disabled="isSubmitting">
        <span>
          {{ isSubmitting ? 'Юборилмоқда...' : 'Мурожаатни юбориш' }}
        </span>
      </button>
    </div>
  </form>

                    </div>

                    <div class="right-survey-section">



                        <div v-if="selectedSurvey" class="glass_shadows">

                            <div class="glass_shadows_section">
                                <div class="modal">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h3>Жавобни жўнатиш</h3><button class="modal-close">
                                                <svg @click="selectedSurvey = ''" width="20" height="20" viewBox="0 0 24 24" fill="none"
                                                    stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                    stroke-linejoin="round">
                                                    <path d="M18 6L6 18M6 6l12 12" />
                                                </svg>

                                            </button>
                                        </div>
                                        <div class="modal-body">
                                            <p>Сиз танлаган жавоб: Камчиликлар мавжуд. Ушбу жавобни жўнатишни
                                                хоҳлайсизми?</p>
                                        </div>
                                        <div class="modal-footer justify-end flex gap-10">
                                            <button @click="selectedSurvey = ''" class="btn-secondary">Бекор
                                                қилиш</button>


                                            <button class="btn-primary">
                                                <span @click="submitSbWey">Ҳа, жўнатиш</span></button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>





                        <div class="survey__caption">
                            <span>Сўровномалар</span>
                        </div>

                        <form v-if="!SwitchComponent" class="form_section" @submit.prevent="submitSurvey">

                            <div class="caption_title">
                                Сўровнома! Сайтинг янги дизайнини қандай баҳолайсиз?
                            </div>

                            <div class="caption_description">
                                <span>
                                    Ушбу сўровнома қатнашиш доирасида бизнинг хизматларини яхшилашда
                                    бизга ёрдам берасиз
                                </span>
                            </div>

                            <div class="itemsLists">

                                <label v-for="option in surveyOptions" :key="option.value" class="item"
                                    :class="{ active: selectedSurvey === option.value }">

                                    <input v-model="selectedSurvey" type="radio" name="survey" :value="option.value" />

                                    <div class="select_item"></div>

                                    <span>
                                        {{ option.label }}
                                    </span>

                                </label>

                            </div>



                        </form>


                        <div v-else class="result_Faq">


                            <span class="surovnama__natijalar">
                                Сўровнома натижалари
                            </span>

                            <div class="Question_Items">

                                <!-- loop -->
                                <div v-for="item in questionItems" :key="item.key" class="Question_Item">
                                    <span class="Question_Item_content">
                                        {{ item.title }} - {{ data?.results[item.key] ?? 0 }}
                                    </span>

                                    <div class="progress">
                                        <div class="percent" :style="{
                                            width: `${getProgressPercent(item.key)}%`,
                                            backgroundColor: getProgressColor(getProgressPercent(item.key))
                                        }">
                                            <span>{{ getProgressPercent(item.key) }}%</span>
                                        </div>
                                    </div>
                                </div> <!-- loop -->


                            </div>
                        </div>



                        <div class="button_see_All" @click="SwitchComponent = !SwitchComponent">
                            <span v-if="!SwitchComponent">Барча сўровномаларни кўриш</span>
                            <span v-else>Овоз беришга қайтиш</span>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>


import { useToastStore } from '~/stores/toast'
const toast = useToastStore();



const form = reactive({
  fullName: '',
  phone: '',
  email: '',
  message: '',
  file: null as File | null,
})

const SwitchComponent = ref<boolean>(false)

interface Results {
    result_1: number
    result_2: number
    result_3: number
    result_4: number
    result_5: number
}

interface ApiResponse {
    results: Results
}

const fileInput = ref<HTMLInputElement | null>(null)
const isSubmitting = ref(false)


const handleFileChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  if (target.files && target.files.length > 0) {
    form.file = target.files[0]
  }
}
const submitForm = async () => {
  try {
    isSubmitting.value = true

    const formData = new FormData()
    formData.append('fullName', form.fullName)
    formData.append('phone', form.phone)
    formData.append('email', form.email)
    formData.append('message', form.message)
    
    if (form.file) {
      formData.append('file', form.file)
    }

    const response = await $fetch(`https://journal.tiu.uz/api/v1/feedback-send`, {
      method: 'POST',
      body: formData,
    })

    toast.success("Muvaffaqiyatli yuborildi")
    
    form.fullName = ''
    form.phone = ''
    form.email = ''
    form.message = ''
    form.file = null
  } catch (error) {
    toast.danger('Yuborishda xatolik:')
  } finally {
    isSubmitting.value = false
  }
}


const selectedSurvey = ref('')

const surveyOptions = [
    {
        value: 1,
        label: 'Жуда яхши',
    },
    {
        value: 2,
        label: 'Яхши',
    },
    {
        value: 3,
        label: 'Қониқарли',
    },
    {
        value: 4,
        label: 'Қониқарсиз',
    },
    {
        value: 5,
        label: 'Камчиликлар мавжуд',
    },
]

const submitSurvey = () => {
    console.log('Tanlangan javob:', selectedSurvey.value)
}


watch(selectedSurvey, (newVal) => {
    console.log(selectedSurvey.value)
})


const getProgressColor = (value: number) => {
    const start = { r: 247, g: 104, b: 8 }
    const end = { r: 37, g: 173, b: 0 }

    const percent = Math.min(Math.max(value, 0), 100) / 100

    const r = Math.round(start.r + (end.r - start.r) * percent)
    const g = Math.round(start.g + (end.g - start.g) * percent)
    const b = Math.round(start.b + (end.b - start.b) * percent)

    return `rgb(${r}, ${g}, ${b})`
}



const { data, refresh } = useFetch<ApiResponse>('https://journal.tiu.uz/api/v1/polls/show')
const questionItems = [
    {
        key: 'result_1',
        title: 'Жуда яхши'
    },
    {
        key: 'result_2',
        title: 'Яхши'
    },
    {
        key: 'result_3',
        title: 'Қониқарли'
    },
    {
        key: 'result_4',
        title: 'Қониқарсиз'
    },
    {
        key: 'result_5',
        title: 'Камчиликлар мавжуд'
    }
] as const


const totalVotes = computed(() => {
    if (!data.value?.results) return 0

    return Object.values(data.value.results).reduce(
        (sum, value) => sum + value,
        0
    )
})


const getProgressPercent = (
    key: keyof NonNullable<typeof data.value>['results']
) => {
    const votes = data.value?.results?.[key] ?? 0

    if (!totalVotes.value) return 0

    return Number(((votes / totalVotes.value) * 100).toFixed(0))
};

const submitSbWey = async () => {
    console.log("Jo'natildi");

    if (!selectedSurvey.value) {
        alert("Iltimos, avval variantlardan birini tanlang!");
        return;
    }

    try {
        const data = await $fetch('https://journal.tiu.uz/api/v1/polls', {
            method: 'POST',
            body: {
                option: selectedSurvey.value
            }
        });

        refresh();
        selectedSurvey.value = '';
        SwitchComponent.value = true;
        toast.success("Rahmat, javob saqlandi")
    } catch (error) {
        console.error("Xatolik:", error);
        toast.danger("Xatolik")
    }
}
</script>
