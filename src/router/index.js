import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import SignupView from "../views/SignupView.vue";
import ProductsView from "../views/products/ProductsView.vue";
import ProductDetailsView from "../views/products/ProductDetailsView.vue";
import AboutView from "../views/AboutView.vue";
import ContactView from "../views/ContactView.vue";
import WishList from "../views/WishList.vue";
import CartView from "../views/CartView.vue";
import UserView from "../views/UserView.vue";
import NotFoundView from "../views/NotFoundView.vue";
import store from "../store/index";
// import { getAuth } from "firebase/auth";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
    meta: { reqiresAuth: false },
  },
  {
    path: "/signup",
    name: "signup",
    component: SignupView,
    meta: { requiresAuth: false },
  },
  {
    path: "/products",
    name: "products",
    component: ProductsView,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/products/:id",
    name: "productDetails",
    component: ProductDetailsView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactView,
  },
  {
    path: "/wishlist",
    name: "wishlist",
    component: WishList,
  },
  {
    path: "/user",
    name: "user",
    component: UserView,
  },
  {
    path: "/cart",
    name: "cart",
    component: CartView,
  },
  // catchall 404
  {
    path: "/:catchAll(.*)",
    name: "notFound",
    component: NotFoundView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(async (to, from, next) => {
  if (
    "requiresAuth" in to.meta &&
    to.meta.requiresAuth &&
    store.state.authIsReady !== true
  ) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    next({ name: "login" });
    // console.log(store.state.user);
  } else if (
    "requiresAuth" in to.meta &&
    !to.meta.requiresAuth &&
    store.state.authIsReady
  ) {
    next({ name: "products" });
    // console.log(store.state.authIsReady);
  } else {
    next();
    // console.log(store.state.authIsReady);
  }
});

export default router;
