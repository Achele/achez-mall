<template>
  <main>
    <HeaderView />
    <section class="container">
      <section>
        <div class="banner">
          <h3>Create an account!</h3>
          <p>Please Fill the form below to see products</p>
        </div>
        <span class="error" v-if="errMsg">{{ errMsg }}</span>
        <form @submit="signUp">
          <label for="name"> Name </label>
          <input type="text" name="name" required v-model="form.name" />

          <label for="email">Email Address </label>
          <input type="email" name="email" required v-model="form.email" />

          <label for="password">Password </label>
          <input
            type="password"
            name="password"
            required
            v-model="form.password"
          />

          <input type="submit" value="Create Account" class="submit" />
        </form>
        <p>
          Already have an account?
          <RouterLink to="/login">Sign in</RouterLink>
        </p>
      </section>
    </section>
  </main>
  <FooterView />
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import FooterView from "@/components/FooterView.vue";
import HeaderView from "@/components/HeaderView.vue";

const store = useStore();
const form = ref({ password: "", email: "", name: "" });
const router = useRouter();
const errMsg = ref("");

const signUp = async (e) => {
  e.preventDefault();
  console.log(form.value, store);
  try {
    await store.dispatch("signUp", form.value);
    if (store.state.user) {
      router.push({ name: "login" });
    } else if (store.state.authErr == "auth/email-already-in-use") {
      // console.log(store.state.authErr);
      errMsg.value = "Email already in use";
    } else if (store.state.authErr == "auth/weak-password") {
      // console.log(store.state.authErr);
      errMsg.value = "Password should be atleast 6 characters";
    }
  } catch (error) {
    console.log(error.message);
  }
};
</script>

<style scoped>
main {
  padding: 1em 2em;
}
.container {
  margin: 2em auto;
  min-height: 70vh;
}

.error {
  background: crimson;
  color: white;
  display: block;
  width: 100%;
  /* text-align: end; */
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
p a {
  cursor: pointer;
  color: #094166;
  font-weight: bolder;
  text-align: center;
}
p {
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
h2 {
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
.submit,
.dis {
  background: #094166;
  color: white;
}

.dis {
  display: block;
  width: 100%;
  margin: auto;
  padding: 1em;
  border: none;
  border-radius: 8px;
  background: white;
}

@media (min-width: 60rem) {
  main {
    padding-inline: 3em;
  }
}
</style>
