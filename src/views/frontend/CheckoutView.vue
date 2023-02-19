<template>
  <div class="container mt-5 bg-light">
    <h2>訂單完成</h2>
    <router-link to="/cart" class="text-dark mt-md-0 mt-3"
      ><i class="fas fa-chevron-left me-2"></i>回購物車
    </router-link>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import cartStore from '@/stores/frontend/cartStore';

export default {
  data() {
    return {};
  },
  methods: {
    ...mapActions(cartStore, ['getCarts']),
  },
  computed: {
    ...mapState(cartStore, ['cart']),
  },
  mounted() {
    this.getCarts();
  },
};
</script>
