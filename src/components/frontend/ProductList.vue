<template>
  <div class="col-lg-10 col-md-9 my-5">
    <div class="row">
      <div
        class="col-md-4 col-sm-6 mb-3 mb-4"
        v-for="product in filterProducts"
        :key="product.id"
      >
        <div class="card border-0 shadow-sm h-100">
          <router-link :to="`/product/${product.id}`">
            <div
              style="
                height: 170px;
                background-size: cover;
                background-position: center;
              "
              :style="{ backgroundImage: `url(${product.imageUrl})` }"
            ></div>
          </router-link>
          <div class="card-body">
            <span class="badge bg-primary float-right ml-2">
              {{ product.category }}
            </span>
            <h5 class="card-title">
              <a href="#" class="text-dark">{{ product.title }}</a>
            </h5>
            <p class="card-text">{{ product.description }}</p>
            <div class="text-right pr-2">
              {{ $filters.currency(product.price) }} 元
            </div>
          </div>
          <div class="card-footer d-grid gap-2 border-top-0">
            <button
              type="button"
              class="btn btn-primary"
              :disabled="isProcessing"
              @click="addToCart(product.id)"
            >
              <span
                v-if="product.id === loadingItem"
                class="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              ></span>
              加到購物車
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import productsStore from '@/stores/frontend/productsStore';
import cartStore from '@/stores/frontend/cartStore';
import statusStore from '@/stores/statusStore';

export default {
  data() {
    return {};
  },
  methods: {
    ...mapActions(productsStore, ['getProducts']),
    ...mapActions(cartStore, ['addToCart']),
  },
  computed: {
    ...mapState(productsStore, ['products', 'filterProducts']),
    ...mapState(statusStore, ['isLoading', 'loadingItem', 'isProcessing']),
  },
  mounted() {
    this.getProducts();
  },
};
</script>
