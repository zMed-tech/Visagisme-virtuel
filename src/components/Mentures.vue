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
};
</script>

<style lang="scss" scoped>
.mentures {
  padding: 0.2rem;

  box-shadow: 0 2px 5px gray;
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-column-gap: 15px;
  grid-row-gap: 15px;
}
</style>
