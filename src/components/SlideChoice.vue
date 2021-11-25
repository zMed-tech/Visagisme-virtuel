<template>
  <div class="slide-choice">
    <div class="choice">
      <img
        :src="require(`@/assets/images/${first.image}`)"
        alt=""
        width="50"
        height="50"
      />
      <span> {{ choices[0].code }} </span>
    </div>

    <div class="all-choice">
      <div
        v-for="(choice, index) in choices"
        :key="index"
        class="choice"
        @click="makeChoice(choice)"
      >
        <img
          :src="require(`@/assets/images/${choice.image}`)"
          alt=""
          width="50"
          height="50"
        />
        <span> {{ choice.name }} </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SlideChoice",
  props: {
    choices: Array,
  },

  data() {
    return {
      first: this.choices[0],
    };
  },
  created() {
    this.$store.dispatch(this.first.type, this.first.name);
  },

  methods: {
    makeChoice(choice) {
      this.first = choice;
      this.$store.dispatch(choice.type, choice.name);
    },
  },
};
</script>

<style lang="scss" scoped>
.slide-choice {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 0.5rem 0;

  & .choice {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    cursor: pointer;
    transition: all ease-in 0.3s;
  }

  & .all-choice {
    box-shadow: 1px 1px 5px gray;
    padding: 0.1rem 0.2rem;
    display: flex;
    visibility: hidden;
    justify-content: flex-start;
    align-items: center;
    transition: all ease-in 1s;
    width: 0;
    overflow: hidden;
    margin: 0 0.2rem;
    border-radius: 5px;

    & .choice {
      margin: 0 0.5rem;

      &:hover {
        transform: scale(1.1);
      }
    }
  }

  &:hover .all-choice {
    visibility: visible;
    width: 100%;
  }
}
</style>
