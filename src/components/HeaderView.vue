<template>
  <header>
    <h1>Achez Mall</h1>
    <nav :data-visible="visible">
      <ul class="nav1">
        <router-link to="/">Home</router-link>
        <router-link :to="{ name: 'products' }">Products</router-link>
        <router-link :to="{ name: 'about' }">About</router-link>
        <router-link :to="{ name: 'contact' }">Contact</router-link>
      </ul>

      <ul class="loginContainer">
        <router-link :to="{ name: 'login' }">Login</router-link>
        <router-link :to="{ name: 'signup' }">Sign up</router-link>
      </ul>
    </nav>
    <!-- <IconsViewVue class="cartIcon" /> -->
    <button
      class="mobile_nav"
      @click="handleMenu"
      :aria-expanded="visible"
    ></button>
    <router-view />
  </header>
</template>

<script setup>
// import IconsView from "./components/IconsView.vue";
import { ref } from "vue";
import { RouterLink } from "vue-router";

const handleMenu = () => {
  if (visible.value === false) {
    return (visible.value = true);
  }
  return (visible.value = false);
};
const visible = ref(false);
</script>

<style scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
}
header h1 {
  color: #4cb1f6;
}
nav {
  /* display: flex; */
  position: fixed;
  max-width: 400px;
  margin: auto;
  top: 6em;
  left: 0;
  right: 0;
  padding: 1em;
  text-align: center;
  border-radius: 8px;
  background-color: #c3d5df;
  transform: translateX(-1000%);
  width: 90%;
  transition: all 0.5s ease;
}
nav[data-visible="true"] {
  transform: translateX(0);
  z-index: 100000;
}
.mobile_nav {
  border: none;
  background-color: transparent;
  width: 16px;
  height: 16px;
  background-image: url(../assets/icon-menu.svg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  cursor: pointer;
}
.mobile_nav[aria-expanded="true"] {
  background-image: url(../assets/icon-close.svg);
  z-index: 100000;
}

.nav1 {
  display: flex;
  flex-direction: column;
  /* border-bottom: 1px solid #094166; */
  padding-bottom: 1em;
}

.loginContainer {
  margin-top: 1em;
  display: flex;
  flex-direction: column;
}

.nav1 a,
.loginContainer a {
  color: #094166;
  font-weight: bold;
  padding-bottom: 0.5em;
}

/* .nav1 a:hover,
.loginContainer a:hover {
  color: #4cb1f6;
} */

@media (min-width: 40rem) {
  nav {
    position: relative;
    top: auto;
    left: auto;
    transform: translateX(0);
    height: auto;
    margin: 0;
    max-width: none;
    width: 80%;
    justify-content: space-between;
    padding: 0;
    background-color: transparent;
  }

  nav,
  .loginContainer {
    display: flex;
    align-items: center;
    gap: 1em;
  }

  .nav1 {
    display: flex;
    align-items: center;
    flex-direction: row;
    width: 70%;
    gap: 3em;
    border-bottom: none;
    margin: 0;
    padding: 0;
    justify-content: center;
  }
  .nav1 a:hover,
  .loginContainer a:hover {
    color: #4cb1f6;
    text-decoration: underline;
  }

  /* .nav1 a:active,
  .loginContainer a:active, */
  nav a.router-link-exact-active {
    color: #c3d5df;
    background: #094166;
    padding: 0.5em 1em;
    border-radius: 0.4em;
  }

  /* .loginContainer {
    width: 30%;
    justify-content: flex-end;
    gap: 2em;
    margin: 0;
  } */

  .mobile_nav {
    display: none;
  }
  .loginContainer {
    display: flex;
    flex-direction: row;
    margin-top: 1em;
  }
}
</style>
