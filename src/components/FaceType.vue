<template>
  <div class="face-type">
    <SlideChoice :choices="visages" />

    <SlideChoice :choices="genre" />

    <SlideChoice :choices="eyes" />
  </div>
</template>

<script>
import SlideChoice from "./SlideChoice.vue";
import visages from "@/db/visages.js";
import genre from "@/db/genre.js";
import eyes from "@/db/eyes.js";

export default {
  name: "FaceType",
  components: { SlideChoice },
  data() {
    return {
      visages: [...visages],
      genre: [...genre],
      eyes: [...eyes],
    };
  },
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
