  <template>
    <div class="journal-card">
      <h3 class="journal-card__title">Журнал ҳақида</h3>
      <ul class="journal-card__list">
        <li v-for="(item, index) in menuItems" :key="index" class="journal-card__item"
          :class="{ 'is-active': item.link == router.currentRoute.value.fullPath }">
          <NuxtLink exact-active-class="" :to="item.link" class="journal-card__link">
            <span v-if="item.link == router.currentRoute.value.fullPath" class="active-dot"></span>
            {{ item.text }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </template>

<script setup lang="ts">

const router = useRouter();




interface MenuItem {
  text: string
  link: string
  active: boolean
}

const menuItems = ref<MenuItem[]>([
  {
    text: 'Мақолаларга қўйиладиган талаблар',
    link: '/ArticleGuidelines',
    active: false
  },
  {
    text: 'Таҳририят жамоаси',
    link: '/editorial_team',
    active: true
  },
  {
    text: 'Махфийлик баёноти',
    link: '/questions',
    active: false
  },

]);
</script>

<style lang="sass" scoped>
.journal-card
  background: #ffffff
  border-radius: 12px
  padding: 0px
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06)
  width: 284px
  max-width: 320px
  margin-left: auto
  margin-right: auto
  
  @media (max-width: 768px)
    margin-left: auto
    margin-right: auto

  &__title
    font-size: 20px
    font-weight: 800
    color: #1e3a8a
    margin-bottom: 20px
    padding: 14px
    background: #F4F7FA
    border-top-left-radius: 12px
    border-top-right-radius: 12px
    border-bottom: 1px solid #e2e8f0

  &__list
    list-style: none
    padding: 0
    margin: 0
    display: flex
    flex-direction: column
    gap: 10px

  &__item
    display: flex
    align-items: center
    padding: 8px 12px
    border-radius: 8px
    transition: background-color 0.2s ease
    font-size: 18px

    &:hover
      background-color: #f0f9ff

    &.is-active
      // background-color: #eff6ff
      .journal-card__link
        color: #3861A7
        font-weight: 600

  &__link
    text-decoration: none
    color: #4b5563
    font-size: 15px
    display: flex
    align-items: center
    gap: 12px
    width: 100%

.active-dot
  width: 12px
  height: 12px
  background-color: #84ACF0
  border: 3px solid #3861A7
  border-radius: 50%
  flex-shrink: 0
</style>