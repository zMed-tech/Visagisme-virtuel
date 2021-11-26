<template>
  <div class="article">
    <div class="image">
      <img
        :src="require(`@/assets/images/${image}`)"
        alt=""
        height="100"
        width="100"
      />
    </div>
    <div class="name">
      <span> {{ name }} </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Article",
  props: {
    name: String,
    image: String,
  },
};
</script>

<style lang="scss" scoped>
.article {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 2rem;
  box-shadow: 1px 1px 4px gray;
  cursor: pointer;
  transition: all ease-in 0.3s;

  & .name {
    & span {
      font-family: "Playfair Display", serif;
      font-weight: bold;
      font-size: 0.9rem;
    }
  }

  &:hover {
    transform: scale(1.1);
  }
}
</style>
