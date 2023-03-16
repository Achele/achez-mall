<template>
  <h1>User Profile</h1>
  <div class="profile-container">
    <h1>Profile</h1>
    <button @click="logOut">log out</button>
  </div>
  <p>Username:</p>
  <p>Email:</p>
  <FooterView />
</template>

<script setup>
// import { useRouter } from "vue-router";
// import { useStore } from "vuex";
// import { ref } from "vue";
import FooterView from "@/components/FooterView.vue";

// const router = useRouter();
// const store = useStore();
// eslint-disable-next-line no-unused-vars
// const form = ref({
//   username: store.state.user.name,
//   firstname: "",
//   lastname: "",
//   email: store.state.user.email,
//   phone: "",
//   password: "",
//   confirmPassword: "",
// });
// const logOut = async (e) => {
//   e.preventDefault();
//   await store.dispatch("logOut");
//   router.push("/");
// };
</script>

<style scoped>
.profile-container {
  display: flex;
  justify-content: space-between;
}
</style>
