<template>
  <div class="face-type">
    <SlideChoice
      :choices="[
        {
          name: 'Ovale',
          image: 'random.jpeg',
          type: 'setVisage',
          code: 'Visage',
        },
        { name: 'Rectangle', image: 'random.jpeg', type: 'setVisage' },
        { name: 'Rond', image: 'random.jpeg', type: 'setVisage' },
        { name: 'Triangle', image: 'random.jpeg', type: 'setVisage' },
        { name: 'Trisomique', image: 'random.jpeg', type: 'setVisage' },
      ]"
    />

    <SlideChoice
      :choices="[
        {
          name: 'Homme',
          image: 'random.jpeg',
          type: 'setGenre',
          code: 'Genre',
        },
        { name: 'Femme', image: 'random.jpeg', type: 'setGenre' },
      ]"
    />

    <SlideChoice
      :choices="[
        { name: 'Rouge', image: 'random.jpeg', type: 'setEyes', code: 'Yeux' },
        { name: 'Vert', image: 'random.jpeg', type: 'setEyes' },
        { name: 'Bleu', image: 'random.jpeg', type: 'setEyes' },
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
