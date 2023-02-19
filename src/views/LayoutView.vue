<template>
  <NavBar></NavBar>
  <router-view></router-view>
</template>

<script>
import NavBar from '@/components/frontend/NavBar.vue';

export default {
  data() {
    return {};
  },
  components: { NavBar },
};
</script>
