<template>
  <div class="theNavbar">
    <div class="logo">
      <h2>Logo</h2>
    </div>
    <ul class="lists">
      <li class="list" @click="$router.push({ name: 'Home' })">Acceuil</li>
      <li class="list" @click="$router.push({ name: 'Commande' })">
        Commander Votre Menture
      </li>
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
.theNavbar {
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

      &:hover {
        color: red;
        transform: scale(1.2);
      }
    }
  }
}
</style>
