<template>
  <div class="container mt-5">
    <VueLoading v-model:active="isLoading"></VueLoading>
    <div class="row flex-row-reverse justify-content-center pb-5">
      <OrderDetail></OrderDetail>
      <OrderForm></OrderForm>
    </div>
  </div>
</template>

<script>
import { mapState } from 'pinia';
import statusStore from '@/stores/statusStore';
import OrderDetail from '@/components/frontend/OrderDetail.vue';
import OrderForm from '@/components/frontend/OrderForm.vue';

export default {
  data() {
    return {};
  },
  components: { OrderForm, OrderDetail },
  computed: {
    ...mapState(statusStore, ['isLoading']),
  },
};
</script>
