<template>
  <div class="container my-5">
    <div class="row justify-content-center">
      <div
        class="col-md-6 py-5"
      >
        <CartList></CartList>
      </div>
    </div>
  </div>
</template>

<script>
import CartList from '@/components/frontend/CartList.vue';

export default {
  data() {
    return {};
  },
  components: { CartList },
};
</script>
