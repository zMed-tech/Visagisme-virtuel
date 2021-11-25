<template>
  <TheNavbar />
  <router-view />
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
