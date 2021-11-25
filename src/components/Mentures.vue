<template>
  <div class="mentures">
    <Article
      v-for="(article, index) in articles"
      :key="index"
      :name="article.name"
      :image="article.image"
    />
  </div>
</template>

<script>
import db from "@/db.js";
import Article from "@/components/Article";
export default {
  name: "Mentures",
  components: {
    Article,
  },

  data() {
    return {
      articles: [...db],
    };
  },
  computed: {
    filterArticles() {
      return this.articles.filter((article) => article.code == 1);
    },
  },
};
</script>

<style lang="scss" scoped>
.mentures {
  padding: 0.5rem 0;
  margin: 0 3rem;
  box-shadow: 0 2px 5px gray;
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: auto auto auto auto auto;
  grid-row-gap: 25px;
}
</style>
