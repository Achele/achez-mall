<template>
  <main>
    <HeaderView />
    <section class="container">
      <section>
        <div class="banner">
          <h3>Create an account</h3>
          <p>Sign up now to get started with an account</p>
        </div>
        <form @submit="signUp">
          <h2>Sign up</h2>
          <input
            type="text"
            name="name"
            placeholder="Name..."
            required
            v-model="form.name"
          />

          <input
            type="email"
            name="email"
            placeholder="Email address..."
            required
            v-model="form.email"
          />

          <input
            type="password"
            name="password"
            placeholder="password..."
            required
            v-model="form.password"
          />

          <input type="submit" value="Sign Up" class="submit" />
        </form>
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
const errorMsg = ref("");
const disable = ref(false);

const signUp = async (e) => {
  e.preventDefault();
  console.log(form.value, store);
  try {
    disable.value = true;
    await store.dispatch("signUp", form.value);
    if (store.state.user) {
      router.push({ name: "login" });
    } else if (
      store.state.authError == "Firebase: Error (auth/email already in use)"
    ) {
      errorMsg.value = "Email already in use";
    } else if (
      store.state.authError ==
      "Firebase: Password should be at least 6 characters (auth/weak-password)."
    ) {
      errorMsg.value = "Password should be atleast 6 characters";
    }
    disable.value = false;
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
  min-height: 70vh;
  /* display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e8f1f6; */
}

.error {
  color: red;
  display: block;
  width: 100%;
  text-align: end;
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
.banner p {
  text-align: center;
  text-transform: capitalize;
}
.banner {
  padding: 1em;
  line-height: 1.5;
}
input {
  color: #094166;
}
input,
button {
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
