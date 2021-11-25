<template>
  <div class="face-type">
    <div class="image">
      <img src="../assets/images/random.jpeg" alt="" height="50" width="50" />
    </div>
    <div class="image">
      <img src="../assets/images/random.jpeg" alt="" height="50" width="50" />
    </div>
    <div class="image">
      <img src="../assets/images/random.jpeg" alt="" height="50" width="50" />
    </div>
    <div class="image">
      <img src="../assets/images/random.jpeg" alt="" height="50" width="50" />
    </div>
  </div>
</template>

<script>
export default {
  name: "FaceType",
};
</script>

<style lang="scss" scoped>
.face-type {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & .image {
    cursor: pointer;
    margin: 0.5rem 0;
  }
}
</style>
