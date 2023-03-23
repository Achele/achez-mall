<template>
  <ProductNav />
  <main class="products">
    <div v-if="error">{{ error }}</div>
    <div v-if="loading" class="loading">
      <Icon icon="eos-icons:bubble-loading" class="loading-icon" />
    </div>

    <section
      v-else
      v-for="product in products"
      :key="product.id"
      class="products-container"
    >
      <router-link :to="{ name: 'productDetails', params: { id: product.id } }">
        <img :src="product.images[0]" :alt="product.title" class="image" />
        <span>{{ product.brand }}</span>
      </router-link>
      <div class="productInfo">
        <p>{{ product.title }}</p>
        <h4>
          {{ product.description }}
        </h4>
        <div class="stars">
          <Icon icon="ic:round-star" />
          <Icon icon="ic:round-star" />
          <Icon icon="ic:round-star" />
          <Icon icon="ic:round-star" />
          <Icon icon="ic:round-star" />
        </div>

        <!-- <p>Save {{ product.discountPercentage }}%</p>

        <p>Total in Stock: {{ product.stock }}</p> -->
        <div class="bottom">
          <p class="price">Price: ${{ product.price }}.-</p>
          <Icon icon="ic:round-shopping-cart" width="60" class="icon" />
        </div>
      </div>
    </section>
  </main>
  <FooterView />
</template>

<script setup>
import { onMounted } from "vue";
import { Icon } from "@iconify/vue";
// eslint-disable-next-line no-unused-vars
import ProductNav from "@/components/ProductNav.vue";
// eslint-disable-next-line no-unused-vars
import FooterView from "@/components/FooterView.vue";
import FetchProducts from "@/composables/FetchProducts";
{
  Icon;
}

const { products, loading, error, load } = FetchProducts();
onMounted(() => {
  load();
});
</script>

<style>
.products {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: 0;
  gap: 20px;
  padding: 3em;
}

.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.loading-icon {
  animation: rotate 1s linear infinite;
  width: 80px;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.products-container {
  width: 280px;
  height: fit-content;
  border: 1px solid #ebebeb;
  padding: 0.7em;
  margin-bottom: 30px;
  border-radius: 25px;
  position: relative;
  box-shadow: 20px 20px 30px rgba(0, 0, 0, 0.02);
  transition: box-shadow 0.2s;
}

.products-container:hover {
  box-shadow: 20px 20px 30px rgba(0, 0, 0, 0.06);
}

.products-container span {
  color: #969696;
  font-weight: bold;
  line-height: 30px;
}

.productInfo p {
  color: black;
  font-weight: bolder;
}

.products-container h4 {
  font-size: 1em;
  color: rgb(41, 41, 41);
  padding: 0.6em 0;
}

.image {
  max-width: 100%;
  border-radius: 1.5em;
}

.stars {
  color: #e6ae2c;
  padding: 6px 0;
}

.productsInfo {
  display: flex;
  flex-direction: column;
  padding: 20px;
}

.bottom .price {
  color: #094166;
  padding: 4px 0;
}
.bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.bottom .icon {
  color: #e8f1f6;
  background-color: #094166;
  padding: 1em;
  border-radius: 50%;
  /* position: absolute;
  right: 10px;
  bottom: 10px; */
}

@media screen and (min-width: 601px) and (max-width: 1200px) {
  .products {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 100vw;
    gap: 20px;
  }
}

@media screen and (max-width: 600px) {
  .products {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    width: 100vw;
    gap: 20px;
  }
}
</style>
