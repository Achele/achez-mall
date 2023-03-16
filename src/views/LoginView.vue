<template>
  <main>
    <HeaderView />
    <section class="container">
      <section>
        <div class="banner">
          <p>Log in to your Account</p>
          <p>Welcome back, please enter your details</p>
        </div>
        <form @submit="login">
          <h2>Login</h2>
          <input
            type="email"
            placeholder="Email address..."
            required
            v-model="form.email"
          />
          <input
            type="password"
            placeholder="password..."
            required
            v-model="form.password"
          />
          <button type="submit">Login</button>
        </form>
        <p>
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

// export default {
// setup() {
const router = useRouter();
const store = useStore();
const form = ref({ email: "", password: "" });

const login = async (e) => {
  e.preventDefault();
  try {
    await store.dispatch("logIn", form.value);
    router.push({ name: "products" });
  } catch (error) {
    console.log(error);
  }
};
// },
// };
// export default {
//   setup() {
//     const userName = ref("");
//     const password = ref("");
//     const router = useRouter();

//     const dummyData = {
//       userName: "achezcodes",
//       password: "password",
//     };

//     const handleLogin = () => {
//       if (
//         userName.value === dummyData.userName &&
//         password.value === dummyData.password
//       ) {
//         localStorage.setItem("token", "cacacacacac");
//         alert("Login successful!!!");
//         router.push({ name: "products" });
//       } else {
//         alert("Username or Password is incorrect!!!");
//       }
//     };

//     return {
//       userName,
//       password,
//       handleLogin,
//     };
//   },
// };
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
button {
  background: #094166;
  color: white;
}

@media (min-width: 60rem) {
  main {
    padding-inline: 3em;
  }
}
</style>
