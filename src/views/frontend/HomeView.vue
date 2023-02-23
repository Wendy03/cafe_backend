<template>
  <div>
    <BannerCard></BannerCard>
    <SelectCardVue></SelectCardVue>
    <AboutCard></AboutCard>
    <HomeCategory></HomeCategory>
    <SubscribeCard></SubscribeCard>
  </div>
</template>

<script>
import AboutCard from '@/components/frontend/AboutCard.vue';
import BannerCard from '@/components/frontend/BannerCard.vue';
import HomeCategory from '@/components/frontend/HomeCategory.vue';
import SelectCardVue from '@/components/frontend/SelectCard.vue';
import SubscribeCard from '@/components/frontend/SubscribeCard.vue';

export default {
  data() {
    return {
    };
  },
  components: {
    BannerCard,
    SelectCardVue,
    AboutCard,
    HomeCategory,
    SubscribeCard,
  },
};
</script>
