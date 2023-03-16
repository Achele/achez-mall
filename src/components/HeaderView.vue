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
  background-color: #1e1e1e;
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
  border-bottom: 1px solid grey;
  padding-bottom: 1em;
}

.loginContainer {
  margin-top: 1em;
}

.nav1 a,
.loginContainer a {
  color: #094166;
  font-weight: bold;
}

.nav1 a:hover,
.loginContainer a:hover {
  color: aliceblue;
}

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
  .nav1,
  .loginContainer {
    display: flex;
    align-items: center;
    gap: 1em;
  }

  .nav1 {
    width: 70%;
    gap: 3em;
    border-bottom: none;
    margin: 0;
    padding: 0;
    justify-content: center;
  }

  .loginContainer {
    width: 30%;
    justify-content: flex-end;
    gap: 2em;
    margin: 0;
  }

  .mobile_nav {
    display: none;
  }
}
</style>
