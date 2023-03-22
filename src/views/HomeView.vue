<template>
  <main>
    <HeaderView />
    <section class="hero">
      <h4>Trade-in-offer</h4>
      <h2>Super value deals</h2>
      <h1>On all products</h1>
      <p>save more coupons & up to 70% off!</p>
      <router-link :to="{ name: 'login' }">Shop now</router-link>
    </section>

    <section class="image"></section>

    <section class="features">
      <div class="feature">
        <img src="../assets/f1.png" alt="free shipping" />
        <span class="featureTitle">shipping</span>
        <span class="featureDescription"
          >Free Worldwide Shipping on All Orders</span
        >
      </div>
      <div class="feature">
        <img src="../assets/f3.png" alt="save money" />
        <span class="featureTitle">Return policy</span>
        <span class="featureDescription"
          >No Question. Return And Easy Refund in 15 Days</span
        >
      </div>
      <div class="feature">
        <img src="../assets/f4.png" alt="promotions" />
        <span class="featureTitle">Gift cards</span>
        <span class="featureDescription"
          >Buy Gift Cards And Use Coupon Codes Easily</span
        >
      </div>
      <div class="feature">
        <img src="../assets/f5.png" alt="happy sell" />
        <span class="featureTitle">contact us</span>
        <span class="featureDescription"
          >Keep In Touch Via Email & Support System</span
        >
      </div>
    </section>

    <section class="discountOffers">
      <h1>Discount Offers</h1>
      <div class="discountOffer">
        <div class="offer1">
          <h4>crazy deals</h4>
          <h2>buy 1 get 1 free</h2>
          <span>The best classic dress is on sale at achez mall</span>
          <button class="banner-btn">Learn More</button>
        </div>
        <div class="offer2">
          <h4>spring/summer</h4>
          <h2>upcoming season</h2>
          <span>The best classic dress is on sale at achez mall</span>
          <button class="banner-btn">Collection</button>
        </div>
      </div>
    </section>

    <section class="promotions">
      <h1>Promotions</h1>
      <div class="promotion">
        <div class="promotion1">
          <h2>SEASONAL SALE</h2>
          <h5>Winter Collection 50% Off</h5>
        </div>
        <div class="promotion2">
          <h2>T-SHIRTS</h2>
          <h5>New Trendy Prints</h5>
        </div>
        <div class="promotion3">
          <h2>NEW FOOTWEAR COLLECTION</h2>
          <h5>Spring/Summer 2022</h5>
        </div>
      </div>
    </section>
  </main>
  <FooterView />
</template>

<script setup>
import HeaderView from "@/components/HeaderView.vue";
import FooterView from "@/components/FooterView.vue";
// eslint-disable-next-line no-unused-vars
import { useRouter } from "vue-router";
// import { Icon } from "@iconify/vue";
</script>

<style scoped>
/* hero section styles */

main {
  margin: 0;
  padding: 1em 2em;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

.hero {
  background-image: url(../assets/hero4.png);
  height: 90vh;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top 25% right 0;
  padding: 0 70px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 85%);
  overflow: hidden;
  margin-top: 1em;
}
.hero h4 {
  font-size: 1.4em;
  padding-bottom: 1em;
  /* mobile up */
  /* padding-bottom: 15px;
  font-size: 40px; */
  color: #4cb1f6;
  font-family: "League Spartan", sans-serif;
  text-transform: capitalize;
  /* font-weight: bolder; */
}
.hero h2 {
  font-size: 2.6em;
  font-weight: bolder;
  /* line-height: 5; */
  color: #222;
  text-transform: capitalize;
  /* transition: all 0.2s linear; */
}
.hero h1 {
  font-size: 3.2em;
  font-weight: bolder;
  color: #4cb1f6;
  text-transform: capitalize;
}

.hero p {
  font-size: 1.5em;
  padding: 1em 0;
}

.hero a {
  /* width: 50%; */
  font-size: 1em;
  padding: 0.8em 1.8em;
  background-color: #094166;
  /* background-image: url(../assets/button.png);
  background-repeat: no-repeat;
  background-size: cover; */
  border: 0;
  cursor: pointer;
  font-weight: 700;
  color: #4cb1f6;
  border-radius: 0.4em;
}

.image {
  height: 30vh;
  width: 100%;
  background-image: url(../assets/hero.avif);
  clip-path: polygon(0 0, 100% 15%, 100% 100%, 0 100%);
  background-repeat: no-repeat;
}

/* feature styles */

.features {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  /* flex-wrap: wrap; */
  padding: 50px;
}

.feature {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.featureIcon,
.feature img {
  width: 50px;
  height: 50px;
}

.featureTitle {
  display: inline-block;
  font-size: 20px;
  font-weight: 600;
  margin: 20px;
  padding: 9px 8px 6px 8px;
  line-height: 1;
  border-radius: 4px;
  background-color: #094166;
  color: #4cb1f6;
  text-transform: capitalize;
}

.featureDescription {
  color: #222;
  width: 50%;
  height: 100px;
}

/* discount offer */

.discountOffers h1,
.promotions h1 {
  text-align: center;
  /* padding-left: 4em; */
}

.discountOffer,
.promotion {
  /* display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center; */
}

.discountOffer button {
  margin-top: 1em;
  padding: 0.7em 1.3em;
  font-size: 1em;
  font-weight: 500;
  background-color: transparent;
  color: rgb(248, 248, 248);
  border: 1px solid rgb(248, 248, 248);
  border-radius: 0.3em;
  cursor: pointer;
  transition: 0.3s ease;
}

.discountOffer button:hover {
  background-color: #088178;
  border: 1px solid #088178;
}

.offer1,
.offer2 {
  margin: 1em 0;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 3em;
  background-size: cover;
  backdrop-filter: blur(8%);
}

.offer1 {
  background-image: url(../assets/b17.jpeg);
}

.offer2 {
  background-image: url(../assets/b10.jpeg);
}

/* promotions */

.promotion1,
.promotion2,
.promotion3 {
  height: 200px;
  margin: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 25px;
  background-size: cover;
}

.promotion1 {
  background-image: url(../assets/b7.jpeg);
}

.promotion2 {
  background-image: url(../assets/footware.jpeg);
}

.promotion3 {
  background-image: url(../assets/hero1.avif);
}

.promotion h5 {
  color: #771818;
  font-size: 1em;
}

@media (min-width: 60rem) {
  main {
    padding-inline: 3em;
  }
  .hero a {
    width: 30%;
    font-size: 1.5em;
    padding: 0.7em 1em;
    background-color: transparent;
    background-image: url(../assets/button.png);
    background-repeat: no-repeat;
    background-size: cover;
    border: 0;
    cursor: pointer;
    font-weight: 700;
    color: #094166;
    text-align: center;
  }
  .image {
    height: 90vh;
    width: 100%;
    background-image: url(../assets/hero.avif);
    clip-path: polygon(0 0, 100% 15%, 100% 100%, 0 100%);
    background-repeat: no-repeat;
    background-size: cover;
  }
  .features {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    /* flex-wrap: wrap; */
    padding: 50px;
  }

  .discountOffers h1,
  .promotions h1 {
    padding-left: 4em;
  }

  .discountOffer,
  .promotion {
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: center;
  }

  .offer1,
  .offer2 {
    min-width: 580px;
    margin: 15px;
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 25px;
    background-size: cover;
    backdrop-filter: blur(8%);
  }
}
</style>
