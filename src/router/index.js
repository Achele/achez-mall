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
  },
  {
    path: "/signup",
    name: "signup",
    component: SignupView,
  },
  {
    path: "/products",
    name: "products",
    component: ProductsView,
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

export default router;
