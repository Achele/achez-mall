<template>
  <main>
    <ProductNav />
    <div v-if="loading">Loading...</div>
    <div v-else class="product-wrapper">
      <div class="img">
        <img :src="product.images[0]" :alt="product.title" class="productImg" />
        <div class="imgSiblings">
          <img :src="product.images[1]" :alt="product.title" />
          <img :src="product.images[2]" :alt="product.title" />
          <img :src="product.images[3]" :alt="product.title" />
          <img :src="product.images[4]" :alt="product.title" />
        </div>
      </div>
      <div class="productDetails">
        <!-- <p>
          {{ product.brand }}
        </p> -->
        <h3 class="name">{{ product.title }}</h3>
        <div class="price-container">
          <p class="price">${{ product.price }}</p>
          <span class="underline"></span>
          <span class="discount">${{ product.discountPercentage }}% OFF</span>
        </div>
        <div class="rating">
          <Icon icon="ic:round-star" />
          <Icon icon="ic:round-star" />
          <Icon icon="ic:round-star" />
          <Icon icon="ic:round-star" />
          <Icon icon="ic:round-star-half" />
        </div>
        <p>{{ product.description }}</p>
        <p>Qty:</p>
        <div class="buttons">
          <button class="wishlist">Add to Wishlist</button>
          <button class="addToCart" @click="addToCart">Add to cart</button>
        </div>
      </div>
    </div>
  </main>
  <FooterView />
</template>

<script setup>
// eslint-disable-next-line no-unused-vars
import ProductNav from "@/components/ProductNav.vue";
import FooterView from "@/components/FooterView.vue";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { Icon } from "@iconify/vue";
// import { createStore } from "vuex";

// export default {
{
  Icon;
}
// setup() {
const product = ref({});
const error = ref(null);
const route = useRoute();
const loading = ref(true);

const fetchProduct = async () => {
  const { id } = route.params;
  const endpoint = `https://dummyjson.com/products/${id}`;

  try {
    const res = await fetch(endpoint);
    if (!res.ok) {
      throw Error("no data available");
    }
    const data = await res.json();
    product.value = data;
    loading.value = false;
    console.log(product.value);
  } catch (err) {
    error.value = err.message;
    console.log(error.value);
  }
};

onMounted(() => fetchProduct());
// return { product, error, loading, route };
// addToCart(product) {
//      store.commit("addProductToCart", product);
//   }
// },
// };
</script>

<style scoped>
main {
  padding: 1em 2em;
}
.product-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  margin: auto;
}
.img {
  width: 50%;
}
.imgSiblings img {
  width: 100px;
  height: 100px;
  border-radius: 0.3em;
  padding-right: 0.5em;
}
.product-details h3,
.price {
  color: black;
  font-weight: bolder;
  padding: 0.5em;
}
.price-container {
  display: flex;
  align-items: center;
}
.discount {
  color: #4dcae3b0;
  font-size: 1em;
}
.rating {
  color: #4dcae3b0;
}
.buttons {
  padding: 1em 0;
}
.addToCart {
  background: #094166;
  color: white;
  padding: 0.9em 1.5em;
  border: none;
  border-radius: 0.4em;
  margin-left: 0.8em;
  margin-top: 1em;
}
.wishlist {
  border: 1px solid #094166;
  color: #094166;
  padding: 0.8em 1.5em;
  border-radius: 0.4em;
}

@media (min-width: 60rem) {
  .product-wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
  }
  .imgSiblings {
    display: flex;
  }
}
</style>
