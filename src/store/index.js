import { createStore } from "vuex";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";
import { auth } from "../firebaseConfig";

const store = createStore({
  state() {
    return {
      authIsReady: false,
      user: null,
    };
  },

  mutations: {
    setData(state, value) {
      state.user = value;
    },
    setAuthIsReady(state, value) {
      state.authIsReady = value;
    },
  },
  actions: {
    async signUp(context, { email, password, name }) {
      try {
        const response = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        await updateProfile(response.user, { displayName: name });
        if (response) {
          context.commit("setData", response.user);
        } else {
          throw new Error("Unable to register user");
        }
      } catch (error) {
        console.log(error);
      }
    },
    async logIn(context, { email, password }) {
      try {
        const response = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        if (response) {
          context.commit("setData", response.user);
          context.commit("setAuthIsReady", true);
        } else {
          throw new Error("login failed");
        }
      } catch (error) {
        console.log(error);
      }
    },
    async logOut(context) {
      await signOut(auth);
      context.commit("setData", null);
      context.commit("setAuthIsReady", false);
    },
  },
});

export default store;
