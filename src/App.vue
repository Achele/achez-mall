<template>
  <!-- <header>
    <h1 class="navTitle">Achez Mall</h1>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link :to="{ name: 'products' }">Products</router-link>
      <router-link :to="{ name: 'login' }">Login</router-link>
      <router-link :to="{ name: 'signup' }">Sign up</router-link>
      <IconsViewVue class="cartIcon" />
    </nav>
  </header> -->
  <router-view />
</template>

<script setup>
// import IconsViewVue from "./components/IconsView.vue";
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=League+Spartan:wght@100;200;300;400;500;600;700;800;900&display=swap");

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  /* position: relative; */
  /* font-weight: normal; */
}
body {
  min-height: 100vh;
  width: 100%;
  /* background-color: #fff; */
  transition: color 0.5s, background-color 0.5s;
  /* line-height: 1.6; */
  /* font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif; */
  /* font-size: 15px; */
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
a {
  text-decoration: none;
}
li {
  list-style: none;
}
img {
  display: block;
  width: 100%;
}

/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
} */

/* header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  /* background-color: #e3e6f3; */
/* box-shadow: 0 5px 15px rgba(0, 0, 0, 0.06);
  z-index: 999; */
/* position: fixed; */
/* top: 0;
  left: 0;
  right: 0;
  padding: 1em 3em;
} */

/* nav { */
/* padding: 30px; */
/* max-width: 400px;
  width: 90%;
  display: flex;
  justify-content: space-between; */
/* } */

/* nav a {
  font-weight: bold;
  color: #1a1a1a;
  text-decoration: none;
  padding: 10px;
  border-radius: 4px;
}

nav a.router-link-exact-active {
  color: #088178; */
/* background: crimson; */
/* }

.navTitle {
  font-weight: bolder; */
/* } */
</style>
