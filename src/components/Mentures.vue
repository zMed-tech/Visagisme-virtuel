<template>
  <div class="mentures">
    <Article
      v-for="(article, index) in filterArticles"
      :key="index"
      :name="article.name"
      :image="article.image"
    />
  </div>
</template>

<script>
import mentures from "@/db/mentures.js";
import Article from "@/components/Article";
import { mapGetters } from "vuex";
export default {
  name: "Mentures",
  components: {
    Article,
  },

  data() {
    return {
      articles: [...mentures],
    };
  },
  computed: {
    ...mapGetters(["getVisage", "getGenre"]),

    filterArticles() {
      return this.articles.filter(
        (article) => article.code == `${this.getVisage}${this.getGenre}`
      );
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
  transition: all ease-in 0.7s;
}
</style>
