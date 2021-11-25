<template>
  <div class="face-type">
    <SlideChoice
      :choices="[
        { name: 'ovale', image: 'random.jpeg' },
        { name: 'rectangle', image: 'random.jpeg' },
        { name: 'rond', image: 'random.jpeg' },
        { name: 'triangle', image: 'random.jpeg' },
        { name: 'trisomique', image: 'random.jpeg' },
      ]"
    />

    <SlideChoice
      :choices="[
        { name: 'Homme', image: 'random.jpeg' },
        { name: 'Femme', image: 'random.jpeg' },
      ]"
    />

    <SlideChoice
      :choices="[
        { name: 'Rouge', image: 'random.jpeg' },
        { name: 'Vert', image: 'random.jpeg' },
        { name: 'Bleu', image: 'random.jpeg' },
      ]"
    />
  </div>
</template>

<script>
import SlideChoice from "./SlideChoice.vue";
export default {
  components: { SlideChoice },
  name: "FaceType",
};
</script>

<style lang="scss" scoped>
.face-type {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  & .image {
    cursor: pointer;
    margin: 0.5rem 0;
  }
}
</style>
