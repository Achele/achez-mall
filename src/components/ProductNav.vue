<template>
  <header>
    <nav>
      <ul class="nav1">
        <router-link to="/">Home</router-link>
      </ul>

      <ul class="list">
        <li class="wishlist">
          <router-link :to="{ name: 'wishlist' }"
            ><Icon icon="icon-park-solid:like" class="icon"
          /></router-link>
        </li>
        <li class="userProfile">
          <router-link :to="{ name: 'user' }">
            <Icon icon="mdi:user" class="icon" />
          </router-link>
        </li>
        <li class="cart">
          <router-link :to="{ name: 'cart' }"
            ><Icon icon="material-symbols:shopping-cart-rounded" class="icon"
          /></router-link>
        </li>
      </ul>
    </nav>
    <!-- <IconsViewVue class="cartIcon" /> -->
    <button
      class="mobile_nav"
      @click="handleMenu"
      :aria-expanded="visible"
    ></button>
    <router-view />
  </header>
</template>

<script>
import { Icon } from "@iconify/vue";
export default {
  components: {
    Icon,
  },
};
</script>

<style>
header {
  padding: 1em 2em;
}
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.list {
  display: flex;
  align-items: center;
}
.wishlist,
.userProfile,
.cart {
  padding: 0 1em;
}

.wishlist:hover,
.wishlist:active,
.userProfile:hover,
.userProfile:active,
.cart:hover,
.cart:active {
  border: 1px solid #e8f1f6;
}

.icon {
  color: #094166;
  width: 40px;
  height: 40px;
}
</style>
