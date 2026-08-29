<script lang="ts" setup>
import DigitalTransformationRole from '~/components/index/digitalTransformationRole.vue';
import FAQSection from '~/components/index/FAQSection.vue';
import InternationalIndexationBasesClient from '~/components/index/InternationalIndexationBases.client.vue';
import JournalSections from '~/components/index/JournalSections.vue';
import LastNews from '~/components/index/lastNews.vue';
import LatestIssueArticles from '~/components/index/LatestIssueArticles.vue';
import MainHead from '~/components/index/mainHead.vue';
import Partners from '~/components/index/Partners.vue';

definePageMeta({
    layout : "main"
});

useHead({
    title : "Bosh sahifa"
})
</script>

<template>
   


<MainHead />

<JournalSections />

<DigitalTransformationRole/>


<LastNews />

<LatestIssueArticles/>

<InternationalIndexationBasesClient />

<FAQSection/>
<Partners />
</template>
