<template>
  <NavBar></NavBar>
  <router-view></router-view>
  <FooterCard></FooterCard>
</template>

<script>
import NavBar from '@/components/frontend/NavBar.vue';
import FooterCard from '@/components/frontend/FooterCard.vue';

export default {
  data() {
    return {};
  },
  components: { NavBar, FooterCard },
};
</script>
