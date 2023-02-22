<template>
  <NavBar></NavBar>
  <div class="ec-container">
    <router-view></router-view>
  </div>
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
