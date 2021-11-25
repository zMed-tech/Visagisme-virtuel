<template>
  <TheNavbar />

  <router-view v-slot="{ Component }">
    <transition name="slide-view" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script>
import TheNavbar from "@/components/TheNavbar.vue";
export default {
  name: "App",
  components: { TheNavbar },
};
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
