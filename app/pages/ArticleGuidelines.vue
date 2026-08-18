<template>
    <div class="editorial-page">
        <HeaderRoute :url="['Журнал ҳақида', 'Мақолаларга қўйиладиган талаблар' ]" title="Мақолаларга қўйиладиган талаблар" />

        <div class="container">
            <div class="box_editorial" style="margin-top: 30px;">
                <div class="content-layout">
                    <div class="content-layout_content">
                        <span class="first_content">
                            «Tashkent International University Ilmiy onlayn jurnali» ilmiy tadqiqot faoliyatining davlat
                            boshqaruvini modernizatsiya qilish, jamiyat boshqaruvining taʼsirchanligini oshirish, kadrlar
                            siyosaning samaradorligini yuksaltirish, davlat xizmaning tashkiliy-huquqiy asoslarini
                            takomillashtirish kabi ustuvor yo‘nalishlar bilan bog‘liq masalalar yorilgan maqolalar qabul
                            qilinadi.
                        </span>

                        <div class="content-section">
                            <h2 class="Maqolalar_mazmuni">Maqolalar mazmuni</h2>

                            <ul class="List_list">
                                <li>ilmiy va amaliy nuqtai nazardan dolzarb;</li>
                                <li>mavzu yoki uning ochib berilishi yangi;</li>
                                <li>xulosalar asoslangan;</li>
                                <li>aniq va ravon bayon etilgan bo‘lishi lozim.</li>
                            </ul>

                            <h2 class="Maqolalar_mazmuni">
                                Tahririyatga taqdim etiladigan materiallar quyidagi asosiy talablarga javob berishi lozim:
                            </h2>

                            <div class="items-grid-list">
                                <div class="itemsString" v-for="(i, j) in listItems" :key="j">
                                    <img src="/icons/checkbox.svg" alt="">
                                    <span class="block">{{ i }}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <aside class="sidebar">
                        <JournalAboutCard />
                    </aside>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import JournalAboutCard from '@/components/JournalAboutCard.vue'

definePageMeta({
    layout: "main"
})

const listItems = [
    "1. Maqolaning matni Microsoft Word versiyasida tayyorlanishi kerak.",
    "2. Shrift Times New Roman, 14 kegeli (hajmi) bo'lishi.",
    "3. Satrlar orasidagi masofa 1,5 interval bo'lishi.",
    "4. Maqolaning tuzilishi quyidagicha boʻlishi kerak: annotatsiya 50 ta so'zgacha, kalit so'zlar (o'zbek, rus, ingliz tillarida 10 tagacha), kirish, asosiy qism, xulosa, foydalanilgan adabiyotlar.",
    "5. Diagramma, rasm va jadvallar faqat oq/qora yoxud kulrangda boʻlishi shart.",
    "6. Iqtiboslar OAKning adabiyotlarga qo'yilgan talablari bo'yicha berilishi kerak.",
    "7. Maqolaning umumiy hajmi 8 betdan 15 betgacha, A4 formada beriladi.",
    "8. Maqola nomi, muallif (lar)ning ism-sharifi, ish joyi, ilmiy unvoni, ilmiy darajasi uch tilda (o'zbek, rus, ingliz tillarida) berilishi, mobil telefon, elektron pochta manzili ko'rsatilishi kerak.",
    "9. Maqolalarni elektron pochta orqali ham yuborish mumkin."
]
</script>

<style lang="sass" scoped>
.editorial-page
  min-height: 100vh
  // padding: 30px 0    

.container
  width: 100%
  max-width: 1440px
  margin: 0 auto
  padding: 0 20px
  box-sizing: border-box

.content-layout
  display: grid
  grid-template-columns: 1fr 320px
  gap: 24px
  align-items: start
  width: 100%
  box-sizing: border-box

  @media (max-width: 1024px)
    grid-template-columns: 1fr

.content-layout_content
  border-radius: 12px
  background: white
  padding: 30px
  box-sizing: border-box
  display: flex
  flex-direction: column
  gap: 24px
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.04)

  @media (max-width: 768px)
    padding: 20px

.box_editorial
  position: relative
  top: -60px

  @media (max-width: 1024px)
    top: 0

.sidebar
  @media (max-width: 1024px)
    // order: -1
    display: flex
    justify-content: center
    width: 100%

    .journal-card
      max-width: 100%

.first_content
  color: #081E3A
  font-size: clamp(17px, 1.5vw, 20px)
  line-height: 140%
  display: block

.content-section
  display: flex
  flex-direction: column
  gap: 20px
  margin-top: 10px

.Maqolalar_mazmuni
  color: #081E3A
  font-size: clamp(18px, 1.8vw, 22px)
  line-height: 140%
  font-weight: 600
  margin-top: 10px
  margin-bottom: 0

.List_list
  margin: 0
  padding-left: 30px
  display: flex
  flex-direction: column
  gap: 8px

  li
    font-weight: 400
    font-size: clamp(16px, 1.5vw, 20px)
    line-height: 140%
    color: #081E3A

.items-grid-list
  display: flex
  flex-direction: column
  gap: 12px

.itemsString
  display: grid
  grid-template-columns: 20px 1fr
  align-items: flex-start
  gap: 12px
  font-size: clamp(16px, 1.5vw, 22px)
  line-height: 140%
  color: #081E3A

  img
    width: 20px
    height: 20px
    flex-shrink: 0
    margin-top: 2px

  .block
    overflow-wrap: anywhere
</style>