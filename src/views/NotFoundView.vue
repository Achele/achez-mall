<template>
  <main>
    <h1>404</h1>
    <h3>Page not found</h3>
    <router-link to="/products" v-if="store.state.user">Go back</router-link>
    <router-link to="/" v-else>Go back home</router-link>
  </main>
</template>

<script setup>
import { useStore } from "vuex";

const store = useStore();
</script>

<style scoped>
main {
  background: #4cb1f6;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2em;
  width: 100%;
  max-width: 500px;
  margin: 10em auto;
  border-radius: 0.4em;
  line-height: 1.5;
}
h3 {
  font-size: 1.5em;
}

a {
  text-decoration: none;
  color: #000;
  font-size: 1.3em;
  font-weight: 600;
  background-color: #fff;
  padding: 0.5em 1em;
  border-radius: 0.4em;
  margin-top: 1em;
  display: inline-block;
  cursor: pointer;
}
</style>
