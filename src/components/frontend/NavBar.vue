<template>
  <div id="nav">
    <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
      <div class="container">
        <router-link to="/" class="navbar-brand fs-1 logo">11 街咖啡</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/products" class="nav-link text-secondary">
                商品列表
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/articles" class="nav-link text-secondary" href="#">
                咖啡專欄
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/cart" class="nav-link">
                <i class="bi bi-bag-fill text-secondary"></i>
                <span class="badge badge-pill rounded-pill bg-danger">{{
                  cart.carts?.length
                }}</span>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router';
import { mapState, mapActions } from 'pinia';
import cartStore from '@/stores/frontend/cartStore';

export default {
  data() {
    return {};
  },
  components: { RouterLink },
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
