<template>
  <div class="bg-primary">
    <div class="container">
      <div class="row justify-content-center py-11">
        <img
          src="https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
          alt=""
          class="rounded-circle"
          style="width: 170px; height: 170px; object-fit: cover"
        />
        <div class="col-md-4 ms-md-5">
          <h3 style="font-family: 'Neuton', serif" class="mt-md-0 mt-3">
            11th Street Cafe
          </h3>
          <p class="text-secondary">
            “從原產地的一株咖啡樹，到烘焙成一粒粒金黃咖啡豆；堅持採購並且烘焙最高品質的咖啡，這是我們一直努力的基本原則。”
          </p>
          <router-link to="/about" class="btn btn-light">
            關於我們
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
