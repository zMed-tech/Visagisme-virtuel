<template>
  <div class="commande">
    <FaceType />
    <Mentures />
  </div>
</template>

<script>
import FaceType from "@/components/FaceType.vue";
import Mentures from "@/components/Mentures.vue";
export default {
  name: "Commande",
  components: { FaceType, Mentures },
};
</script>

<style lang="scss" scoped>
.commande {
  height: calc(100vh - $heightNavbar);
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
</style>
