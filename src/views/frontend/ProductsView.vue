<template>
  <div class="container my-9">
    <VueLoading v-model:active="isLoading"></VueLoading>
    <div class="row">
      <ProductCategory></ProductCategory>
      <ProductList></ProductList>
    </div>
  </div>
</template>

<script>
import ProductCategory from '@/components/frontend/ProductCategory.vue';
import ProductList from '@/components/frontend/ProductList.vue';
import statusStore from '@/stores/statusStore';
import { mapState } from 'pinia';

export default {
  data() {
    return {};
  },
  components: { ProductCategory, ProductList },
  computed: {
    ...mapState(statusStore, ['isLoading']),
  },
};
</script>
