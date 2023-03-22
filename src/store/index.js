import { createStore } from "vuex";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebaseConfig";

const store = createStore({
  state() {
    return {
      authIsReady: false,
      user: null,
      authErr: null,
    };
  },

  mutations: {
    setData(state, value) {
      state.user = value;
    },
    setAuthIsReady(state, value) {
      state.authIsReady = value;
    },
    setAuthErr(state, value) {
      state.authErr = value;
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
          context.commit("setAuthIsReady", true);
          context.commit("setData", response.user);
        } else {
          throw new Error("Unable to register user");
        }
      } catch (error) {
        context.commit("setAuthErr", error.code);
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
          console.log(auth.currentUser);
        } else {
          throw new Error("login failed");
        }
      } catch (error) {
        context.commit("setAuthErr", error.code);
      }
    },
    async logOut(context) {
      await signOut(auth);
      context.commit("setData", null);
      context.commit("setAuthIsReady", false);
    },
  },
});
const getCurrentUser = onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    store.commit("setAuthIsReady", true);
    store.commit("setData", user);
    // ...
  } else {
    store.commit("setAuthIsReady", false);
    store.commit("setData", user);
    // User is signed out
    // ...
  }
  getCurrentUser();
});

export default store;
