<template>
  <main>
    <HeaderView />
    <section class="container">
      <section>
        <div class="banner">
          <h2>Welcome Back!</h2>
          <p>Sign in to continue</p>
        </div>
        <span v-if="errMsg" class="error">{{ errMsg }}</span>
        <form @submit="login">
          <label for="email">Email Address</label>
          <input type="email" required v-model="form.email" />

          <label for="password">Password </label>
          <input type="password" required v-model="form.password" />
          <button type="submit">Login</button>
        </form>
        <p class="acc">
          Don't have an account?
          <RouterLink to="/signup">Sign Up</RouterLink>
        </p>
      </section>
    </section>
  </main>
  <FooterView />
</template>

<script setup>
import FooterView from "@/components/FooterView.vue";
import HeaderView from "@/components/HeaderView.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const router = useRouter();
const store = useStore();
const form = ref({ email: "", password: "" });
const errMsg = ref("");

const login = async (e) => {
  e.preventDefault();
  try {
    await store.dispatch("logIn", form.value);
    if (store.state.authErr == "auth/wrong-password") {
      console.log(store.state.authErr);
      errMsg.value = "Wrong password";
    } else if (store.state.authErr == "auth/user-not-found") {
      errMsg.value = "User not found";
    }
    router.push({ name: "products" });
  } catch (error) {
    console.log(error);
  }
};
</script>

<style scoped>
main {
  padding: 1em 2em;
}
.container {
  margin: 2em auto;
}
section {
  background-color: #e8f1f6;
  max-width: 450px;
  width: 100%;
  padding: 1em;
  border-radius: 8px;
  color: #094166;
  /* #4cb1f6  check out for background*/
}

.banner {
  padding: 0 1em 1.5em 1em;
  line-height: 1.5;
  text-align: center;
}
.banner p {
  /* font-weight: bold; */
  padding: 0;
}
input {
  color: #094166;
  margin-top: 0.5em;
}
label {
  font-weight: bold;
}

input,
button,
.error {
  width: 100%;
  padding: 1em;
  margin-bottom: 1em;
  border: none;
  border-radius: 0.4em;
}
button {
  background: #094166;
  color: white;
  cursor: pointer;
  font-weight: bold;
}
.error {
  background: crimson;
  color: white;
  display: block;
  width: 100%;
  /* text-align: end; */
}
.acc {
  text-align: center;
  text-decoration: underline;
}
.acc a {
  color: #094166;
}

@media (min-width: 60rem) {
  main {
    padding-inline: 3em;
  }
}
</style>
