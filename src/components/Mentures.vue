<template>
  <div class="mentures">
    <Article
      :article="{
        name: 'Menture',
        image: 'random.jpeg',
      }"
    />
  </div>
</template>

<script>
import Article from "@/components/Article";
export default {
  name: "Mentures",
  components: {
    Article,
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
