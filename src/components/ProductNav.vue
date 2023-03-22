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

<style scoped>
header {
  padding: 1em 2em;
}

nav {
  display: flex;
  justify-content: space-between;
}

.list {
  display: flex;
  align-items: center;
}
.nav1 a {
  color: #094166;
  font-size: 1.5em;
  font-weight: bold;
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
  width: 20px;
  height: 20px;
}

@media (min-width: 60rem) {
  header {
    padding: 1.5em 3em;
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
  .icon {
    color: #094166;
    width: 30px;
    height: 30px;
  }
}
</style>
