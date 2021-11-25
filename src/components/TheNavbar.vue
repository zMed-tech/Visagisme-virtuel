<template>
  <div class="the-navbar">
    <div class="logo">
      <h2>Logo</h2>
    </div>
    <ul class="lists">
      <router-link
        v-slot="{ navigate, isActive, isExactActive }"
        :to="{ name: 'Home' }"
        custom
      >
        <li
          :class="[
            isActive && 'router-link-active',
            isExactActive && 'router-link-exact-active',
            'list',
          ]"
          @click="navigate"
        >
          Acceuil
        </li>
      </router-link>
      <router-link
        v-slot="{ navigate, isActive, isExactActive }"
        :to="{ name: 'Commande' }"
        custom
      >
        <li
          :class="[
            isActive && 'router-link-active',
            isExactActive && 'router-link-exact-active',
            'list',
          ]"
          @click="navigate"
        >
          Commander Votre Menture
        </li>
      </router-link>
    </ul>
    <div class="contact">
      <button>Contacter-nous</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheNavbar",
};
</script>

<style lang="scss" scoped>
.the-navbar {
  height: $heightNavbar;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.3rem 0.5rem;
  border-bottom: 2px solid red;
  border-radius: 25px;

  & .lists {
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    & .list {
      font-weight: bold;
      cursor: pointer;
      margin-right: 2rem;
      font-size: 1.2rem;
      transition: all ease-in 0.5s;
      text-decoration: none !important;
      color: black;

      &:hover {
        color: red;
        transform: scale(1.2);
      }
    }

    & .router-link-exact-active {
      color: red;
    }
  }
}
</style>
