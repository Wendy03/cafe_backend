<template>
  <div class="col-lg-2 col-md-3 mb-2 my-5">
    <ul class="list-group">
      <li
        class="list-group-item"
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
import { mapState, mapActions } from 'pinia';
import productsStore from '@/stores/frontend/productsStore';

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
