<template>
  <div class="col-lg-2 col-md-3 mb-2 my-5">
    <ul class="list-group sticky-top">
      <li
        class="list-group-item"
        style="cursor: pointer"
        v-for="category in categories"
        :key="category"
        @click.prevent="changeCategory(category)"
        :class="{ active: category === filterCategory }"
      >
        {{ category }}
      </li>
    </ul>
  </div>
</template>
<script>
import productsStore from '@/stores/frontend/productsStore';
import { mapActions, mapState } from 'pinia';

export default {
  data() {
    return {};
  },
  methods: {
    ...mapActions(productsStore, ['changeCategory']),
  },
  computed: {
    ...mapState(productsStore, ['categories', 'filterCategory']),
  },
};
</script>
