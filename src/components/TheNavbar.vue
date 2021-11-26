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
  border-bottom: 2px solid $spaceColor;
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
      font-size: 1rem;
      transition: all ease-in 0.5s;
      text-decoration: none !important;
      color: rgb(88, 85, 85);
      position: relative;

      &::before {
        content: "";
        position: absolute;
        top: 100%;
        height: 3px;
        width: 0;
        background-color: red;
        transition: all ease-in 0.4s;
      }

      &:hover::before {
        width: 100%;
      }
    }

    & .router-link-exact-active::before {
      width: 100%;
    }
  }

  & .contact {
    & button {
      font-weight: bold;
      outline: none;
      border-radius: 10px;
      padding: 0.3rem 0.5rem;
      cursor: pointer;
      font-size: 1rem;
      transition: all ease-in 0.5s;
      color: rgb(87, 83, 83);
      background: linear-gradient(to right, $spaceColor 50%, white 50%);
      box-shadow: 0px 0px 3px gray;
      background-position: right;
      background-size: 200%;
      border: none;

      &:hover {
        background-position: left;
      }
    }
  }
}
</style>
