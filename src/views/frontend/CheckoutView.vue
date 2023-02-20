<template>
  <div class="container my-5">
    <div class="row">
      <div class="col-md-6">
        <h2>訂單完成</h2>
        <p>感謝訂購</p>
        <router-link to="/" class="btn btn-outline-dark me-2 rounded-0 mb-4">
          回首頁
        </router-link>
      </div>
      <CheckoutCard></CheckoutCard>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import cartStore from '@/stores/frontend/cartStore';
import CheckoutCard from '@/components/frontend/CheckoutCard.vue';

export default {
  data() {
    return {};
  },
  components: { CheckoutCard },
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
