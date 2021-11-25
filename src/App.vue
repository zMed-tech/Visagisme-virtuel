<template>
  <TheNavbar />
  <transition name="slide-view" mode="out-in">
    <router-view :key="$route.path" />
  </transition>
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
