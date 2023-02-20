<template>
  <div class="row justify-content-center py-5">
    <div class="col-8">
      <template v-for="article in articles" :key="article.id">
        <div class="col" v-if="article.isPublic">
          <div class="card">
            <img :src="article.imageUrl" class="card-img-top img-fluid" style="height: 60vh"/>
            <div class="card-body">
              <h5 class="card-title">{{ article.title }}</h5>
              <div v-html="article.description"></div>
            </div>
            <div class="card-footer">
              <router-link
                :to="`/article/${article.id}`"
                v-if="article.isPublic"
              >
                READ MORE
              </router-link>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import articlesStore from '@/stores/frontend/articlesStore';
import statusStore from '@/stores/statusStore';

export default {
  data() {
    return {};
  },
  methods: {
    ...mapActions(articlesStore, ['getArticles']),
  },
  computed: {
    ...mapState(articlesStore, ['articles']),
    ...mapState(statusStore, ['isLoading', 'isProcessing']),
  },
  mounted() {
    this.getArticles();
  },
};
</script>
