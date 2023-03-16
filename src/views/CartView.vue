<template>
  <ProductNav />
  <main>
    <h1 class="title">My Cart</h1>
    <!-- <section class="cartContainer">
    <div class="sidebar">
      <ul>
        <li>Electronics</li>
        <li>Clothings</li>
        <li>Perfumes</li>
        <li>Grocieries</li>
        <li>Jewellery</li>
        <li>Skincare</li>
        <li>Women dress</li>
        <li>Men shirts</li>
      </ul>
    </div> -->

    <section class="main-details">
      <div class="details">
        <div class="shipping">
          <div class="icon">
            <Icon icon="ep:van" />
          </div>
          <div class="shipping-msg">
            <h5>Shipping</h5>
            <p>Eligible for FREE STANDARD SHIPPING</p>
          </div>
        </div>

        <section class="item-summary">
          <h1>Item Summary</h1>
        </section>
      </div>

      <div class="order-summary">
        <h1>Order Summary</h1>
        <span class="price-container">
          <p>Subtotal</p>
          <span class="price">$</span>
        </span>
        <p class="coupon">
          Reward <span class="blue">10</span>
          <span class="black">PRODUCT points</span>
        </p>
        <button class="checkout">Checkout securely</button>
        <p class="coupon">Apply cuopon code <span class="blue">here</span></p>
      </div>
    </section>
  </main>
  <!-- </section> -->
  <FooterView />
</template>

<script setup>
import FooterView from "@/components/FooterView.vue";
import ProductNav from "@/components/ProductNav.vue";
import { Icon } from "@iconify/vue";

{
  Icon;
}
</script>

<style scoped>
main {
  padding: 1em 2em;
}

.title {
  font-size: 1.5em;
  color: rgba(5, 5, 5, 0.8);
  font-weight: bolder;
}
.shipping {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #e8f1f6;
  max-width: 450px;
  width: 100%;
  padding: 1em 2em;
}

.icon {
  border-radius: 50%;
  background: #094166;
  padding: 1em;
  color: white;
}

.shipping-msg {
  margin-left: 1em;
}

.shipping-msg h5 {
  font-weight: bolder;
  padding-bottom: 0.8em;
  letter-spacing: 0.5;
}
.shipping-msg p {
  font-size: 0.8em;
}

/* item summary */
.item-summary,
.order-summary {
  background: #e8f1f6;
  max-width: 450px;
  width: 100%;
  padding: 1em;
  margin: 1em 0;
}

/* order summary */
.checkout {
  background: #094166;
  color: #e8f1f6;
  padding: 0.8em 2em;
  border-radius: 0.4em;
  margin: 1em 0;
  border: none;
  cursor: pointer;
}
.checkout:hover,
.checkout:active {
  background: #e8f1f6;
  color: #094166;
  border: 1px solid #094166;
}
.coupon {
  color: #8e8d8d;
  font-weight: bold;
  padding: 1em 0;
}
.blue {
  color: #094166;
  text-decoration: underline;
}

.price-container {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1em 0;
}

.black {
  color: rgba(46, 46, 46, 0.8);
  padding: 0 0.5em;
}

@media (min-width: 60rem) {
  .main-details {
    display: flex;
    justify-content: space-evenly;
    padding: 1em 0;
  }
  .order-summary {
    max-width: 350px;
    margin-top: 0;
  }
  .price-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
