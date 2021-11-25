<template>
  <div class="article">
    <div class="image">
      <img
        :src="require(`@/assets/images/${article.image}`)"
        alt=""
        height="100"
        width="100"
      />
    </div>
    <div class="name">
      <h3>{{ article.name }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "Article",
  props: {
    article: Object,
  },
};
</script>

<style lang="scss" scoped>
.article {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  box-shadow: 1px 1px 4px gray;
}
</style>
