<template>
  <div class="vh-100">
    <VueLoading v-model:active="isLoading"></VueLoading>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link to="/products">全部商品</router-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          {{ product.title }}
        </li>
      </ol>
    </nav>
    <h2 class="mb-3">{{ product.title }}</h2>
    <div class="row">
      <div class="col-sm-5">
        <div
          style="min-height: 50vh;
            background-size: cover;
            background-position: center;
          "
          :style="{ backgroundImage: `url(${product.imageUrl})` }"
        ></div>
        <template
          v-for="(img, index) in product.imagesUrl"
          :key="index + 'img'"
        >
          <div class="row" v-if="img">
            <div class="col-3">
              <img
                :src="img"
                :alt="index + 'img'"
                class="card-image mt-2 w-100"
              />
            </div>
          </div>
        </template>
      </div>
      <div class="col-sm-7">
        <span class="badge bg-primary rounded-pill mb-2">{{
          product.category
        }}</span>
        <p>商品描述：{{ product.description }}</p>
        <p v-if="product.content">商品內容：{{ product.content }}</p>
        <template v-if="product.category !== '周邊商品'">
          <ul>
            <li>產地：{{ product.country }}</li>
            <li>產區：{{ product.area }}</li>
            <li>處理方法：{{ product.production }}</li>
            <li>熟豆重量：227g ± 2g</li>
            <li>保存期限：30 天</li>
          </ul>
        </template>
        <div class="h5">
          {{ $filters.currency(product.price) }} 元 / {{ product.unit }}
        </div>
        <div class="input-group mt-5 w-75">
          <select class="form-select" name="qty" v-model.number="qty">
            <option :value="num" v-for="num in 5" :key="num + 'num'">
              {{ num }}
            </option>
          </select>
          <button
            type="button"
            class="btn btn-primary"
            @click="addToCart(product.id, qty)"
          >
            <span
              v-if="product.id === loadingItem"
              class="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            ></span>
            加入購物車
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import Toast from '@/utils/Toast';
import cartStore from '@/stores/frontend/cartStore';
import statusStore from '@/stores/statusStore';

const { VITE_API, VITE_PATH } = import.meta.env;

export default {
  data() {
    return {
      product: {},
      qty: 1,
      isProcessing: false,
      isLoading: false,
    };
  },
  methods: {
    getProduct() {
      this.isLoading = true;
      const { id } = this.$route.params;
      this.$http
        .get(`${VITE_API}/api/${VITE_PATH}/product/${id}`)
        .then((res) => {
          this.isLoading = false;
          const { product } = res.data;
          this.product = product;
        })
        .catch((err) => {
          const errMessage = err.response?.data?.message || '資料錯誤';
          this.isLoading = false;
          Toast.fire({
            title: `${errMessage}`,
            icon: 'error',
          });
        });
    },
    ...mapActions(cartStore, ['addToCart']),
  },
  computed: {
    ...mapState(statusStore, ['loadingItem']),
  },
  mounted() {
    this.getProduct();
  },
};
</script>
