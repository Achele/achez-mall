<template>
  <main>
    <HeaderView />
    <ul class="nav">
      <li>
        <a href="#vision">Our Vision</a>
      </li>
      <li>
        <a href="#overview">Overview</a>
      </li>
      <li>
        <a href="#history">Our History</a>
      </li>
    </ul>

    <section id="vision">
      <div class="hero">
        <div class="hero-img">
          <img src="../assets/hero-img.jpeg" alt="achez mall" />
        </div>
        <div class="hero-info">
          <div>
            <h3>Our vision</h3>
            <p>
              We are building the most beloved and trusted shopping destination
              for Nigerians.
            </p>
          </div>
        </div>
      </div>

      <div class="visions">
        <div class="vision">
          <div class="img">
            <Icon class="icon" icon="icon-park-solid:check-correct" />
          </div>
          <p>Access 100% Geniune Produts from Local & International Vendors</p>
        </div>

        <div class="vision">
          <div class="img">
            <Icon class="icon" icon="game-icons:price-tag" />
          </div>
          <p>Buy Anything You want online at the Best Prices</p>
        </div>

        <div class="vision">
          <div class="img">
            <Icon
              class="icon"
              icon="material-symbols:screen-search-desktop-rounded"
            />
          </div>
          <p>Search, Order on all Platforms, Pay on Delivery.</p>
        </div>

        <div class="vision">
          <div class="img">
            <Icon class="icon" icon="mdi:customer-service" />
          </div>
          <p>Assisting Our customers for the best Shopping Experience</p>
        </div>
      </div>
    </section>

    <section id="overview">
      <div class="overview-icon">
        <div class="img">
          <Icon class="icon" icon="grommet-icons:overview" />
        </div>
        <h3>Overview</h3>
      </div>

      <div class="overviews">
        <div class="overviews1">
          <div class="overview">
            <div class="overview-title">
              <p>6,000,000 Products</p>
            </div>
            <p>
              Achez mall offers the widest assortment at an unbeatable price
            </p>
          </div>
          <div class="overview">
            <div class="overview-title">
              <p>36 States</p>
            </div>
            <p>Number one Online Commerce in Nigeria</p>
          </div>
          <div class="overview">
            <div class="overview-title">
              <p>Over 50,000 International & National Brands</p>
            </div>
            <p>Apple, Samsung, Infinix, Innjoo, Vero moda....</p>
          </div>
          <div class="overview">
            <div class="overview-title">
              <p>Over 10,000 Active Vendors</p>
            </div>
            <p>Nigeria's Biggest Online Mall</p>
          </div>
        </div>

        <div class="overviews1">
          <div class="overview">
            <div class="overview-title">
              <p>#1 E-Commerce Website, Nigeria</p>
            </div>
            <p>With Over 15 Million Monthly Visitors</p>
          </div>
          <div class="overview">
            <div class="overview-title">
              <p>Over 4 Million Subscribers</p>
            </div>
            <p>Discover First the Best Deals on Achez mall</p>
          </div>
          <div class="overview">
            <div class="overview-title">
              <p>10 Commercial Events</p>
            </div>
            <p>Discover the Events Changing Africa's Retail Industry</p>
          </div>
          <div class="overview">
            <div class="overview-title">
              <p>Many App Downloads</p>
            </div>
            <p>During Black Friday 2015</p>
          </div>
        </div>
      </div>
    </section>

    <section id="history">
      <div class="history-icon">
        <div class="img">
          <Icon class="icon" icon="ic:round-history" />
        </div>
        <h3>History</h3>
      </div>

      <div class="histories">
        <ul class="history">
          <li class="history-list">
            2017: Odum Global International (OGI) launches Achez mall in
            Nigeria, Egypt and Ghana.
          </li>
          <li class="history-list">
            2018: Achez Mall introduces Black Friday in Nigeria
          </li>
          <li class="history-list">
            2019: Achez mall Black Friday attracts 2.3 million visitors in
            Nigeria
          </li>
        </ul>
        <ul class="history">
          <li class="history-list">
            2020: Achez mall becomes Africa's first tech unicorn.
          </li>
          <li class="history-list">
            2021: Achez mall celebrates its Fifth Anniversary milestone
          </li>
          <li class="history-list">
            2022: Achez mall launches Nigeria's first E-commerce Bot, the Jumia
            Bot, accessible on Facebook Messenger
          </li>
        </ul>
      </div>
    </section>
  </main>
  <FooterView />
</template>

<script setup>
import HeaderView from "@/components/HeaderView.vue";
import FooterView from "@/components/FooterView.vue";
import { Icon } from "@iconify/vue";
{
  Icon;
}
</script>

<style scoped>
main {
  padding: 2em;
}

.nav {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 2.5em;
  padding-bottom: 0.3em;
  margin: 0 3.8em;
  border-bottom: 3px solid #094166;
}

.nav li {
  margin: 0 1em;
}

.nav li a {
  color: #094166;
  font-size: 1.3em;
  font-weight: bolder;
}
.hero {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5em 0;
  background-image: url(../assets/hero-img.jpeg);
  background-repeat: no-repeat;
  background-size: cover;
}
.hero-info {
  background: #094166;
  margin: 1em 2em;
  padding: 1em;
  border-radius: 0.4em;
  color: white;
}

.hero-info div {
  text-align: center;
}
.hero-img {
  display: none;
}

.img {
  border-radius: 50%;
  border: 1px solid #094166;
  width: 50px;
  height: 50px;
  position: relative;
  /* padding: 1em; */
}
.img .icon {
  color: #094166;
  font-size: 30px;
  position: absolute;
  right: 10px;
  bottom: 15px;
}
.vision,
.overview-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1em 1.5em;
}

.vision p,
.overview p {
  text-align: center;
  color: #222;
  font-weight: bolder;
  padding: 0.5em 1.5em;
}

#overview {
  background-color: #e8f1f6;
  padding: 1em 0;
  /* border: 0.5px solid #c3d5df; */
  border-radius: 0.4em;
  margin: 0 3em;
}

.overview {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1em 1.5em;
}
.overview-icon h3 {
  color: #222;
  font-size: 1.3em;
}

.overview-icon .img,
.history-icon .img {
  background: white;
}
/* .overview p {
  text-align: center;
  padding: 0.5em 1.5em;
} */

.overview-title {
  background: #094166;
  border-radius: 50%;
  width: 150px;
  height: 150px;
  position: relative;
}
.overview-title p {
  color: white;
  position: absolute;
  padding: 1em;
  bottom: 30px;
  font-weight: bold;
  text-align: center;
  font-size: 0.7em;
}

#history {
  padding: 2em;
  border: 0.5px solid #c3d5df;
  margin: 3.6em 3em;
  border-radius: 0.4em;
}

.history-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.history {
  padding: 1em 1.5em;
  line-height: 24px;
}

.history-list {
  list-style: square;
  color: #222;
}

.history-list::marker {
  color: #094166;
  font-size: 1.6em;
}

@media (min-width: 40rem) {
  .overviews {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  #overview,
  #history {
    position: relative;
  }
  .overview-icon,
  .history-icon {
    position: absolute;
    top: -40px;
    right: 450px;
  }
}
@media (min-width: 60rem) {
  .hero {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.5em 0;
    background: none;
  }
  .hero-img {
    display: block;
    max-width: 357px;
    width: 100%;
    /* height: 90%; */
  }
  .hero-img img {
    /* width: 400px; */
  }
  .hero-info {
    margin: 0;
    width: 60%;
    padding: 4.5em 4.78em;
    border-radius: 0 0.4em 0.4em 0;
  }
  .hero-info div {
    border: 1px solid white;
    text-align: center;
    padding: 1em 2em;
    border-radius: 0.4em;
  }

  .visions {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1em 3em;
  }

  .vision p,
  .overview p {
    text-align: center;
    color: #222;
    font-weight: bolder;
    line-height: 16px;
    margin: 0 1em;
    padding: 1em;
    max-width: 200px;
  }

  .overview-title p {
    color: white;
    position: absolute;
    padding: 1em;
    bottom: 50px;
    font-weight: bold;
    text-align: center;
    font-size: 0.7em;
  }

  .overviews,
  .overviews1 {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .overviews {
    flex-direction: column;
  }
  #overview,
  #history {
    position: relative;
  }
  .overview-icon,
  .history-icon {
    position: absolute;
    top: -40px;
    left: 450px;
  }

  .history-icon {
    position: absolute;
    top: -25px;
    left: 450px;
  }
  .histories {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
