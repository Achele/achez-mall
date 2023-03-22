<template>
  <main>
    <h1>User Profile</h1>
    <div class="profile-container">
      <h2>Profile</h2>
      <router-link to="products">Go back</router-link>
      <button @click="logOut">log out</button>
    </div>
    <p>Username: {{ form.displayName }}</p>
    <address>
      <p>Email: {{ form.email }}</p>
    </address>
  </main>
  <FooterView />
</template>

<script setup>
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { ref } from "vue";
import FooterView from "@/components/FooterView.vue";

const router = useRouter();
const store = useStore();

const form = ref({
  displayName: store.state.user.displayName,
  email: store.state.user.email,
});
const logOut = async (e) => {
  e.preventDefault();
  await store.dispatch("logOut");
  router.push("/");
};
</script>

<style scoped>
main {
  width: 100%;
  padding: 1em 3em 14.5em 3em;
}
h1 {
  text-align: center;
  color: #094166;
  padding: 1em 0;
}
h2 {
  color: #094166;
}
.profile-container {
  display: flex;
  justify-content: space-between;
  padding: 1em 0 1.5em 0;
}
address {
  padding: 0.5em;
}

address p {
  font-size: 1.2em;
}
button,
a {
  padding: 0.5em 1em;
  border-radius: 0.4em;
  background: #094166;
  color: #c3d5df;
  cursor: pointer;
  font-size: 1em;
  text-transform: capitalize;
  border: none;
  margin: 0 0.5em;
}
button:hover,
a {
  color: white;
}
p {
  color: #222;
  font-size: 1.5em;
  font-weight: bold;
}

@media (min-width: 60rem) {
  button,
  a {
    padding: 0.5em 1.5em;
    border-radius: 0.4em;
    background: #094166;
    color: #c3d5df;
    cursor: pointer;
    font-size: 1em;
    text-transform: capitalize;
    border: none;
  }
  address p {
    font-size: 1.6em;
  }
}
</style>
