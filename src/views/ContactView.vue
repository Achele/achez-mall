<template>
  <main>
    <HeaderView />
    <div class="intro">
      <h1>Need help?</h1>
    </div>

    <section class="contact-banner">
      <div class="customer-service">
        <img
          src="../assets/customer-service-removebg-preview.png"
          alt="A customer care lady"
        />
      </div>
      <div class="contact-info">
        <h1>08067826721</h1>
        <p>We are available Monday to Sunday</p>
        <span>from 8am to 8pm</span>
        <div class="flex">
          <div class="contact-icon-info">
            <div class="contact-icon">
              <Icon class="icon" icon="arcticons:neochat" />
            </div>
            <p>LIVE CHAT</p>
          </div>

          <div class="contact-icon-info">
            <div class="contact-icon">
              <Icon class="icon" icon="healthicons:call-centre-outline" />
            </div>
            <p>CALL US</p>
          </div>
        </div>
      </div>
    </section>

    <section class="msg-us">
      <h1>send a message</h1>
      <form>
        <label class="label">
          <span class="span">First name</span>
          <input type="text" />
        </label>
        <label class="label">
          <span class="span">Last name</span>
          <input type="text" />
        </label>
        <label class="label">
          <span class="span">Email</span>
          <input type="email" />
        </label>
        <label class="label">
          <span class="span">Message</span>
          <textarea
            cols="30"
            rows="10"
            placeholder="leave a message"
          ></textarea>
        </label>
        <input type="submit" value="SUBMIT" class="submit" />
      </form>
    </section>
  </main>
  <FooterView />
</template>

<script setup>
import FooterView from "@/components/FooterView.vue";
import HeaderView from "@/components/HeaderView.vue";
import { Icon } from "@iconify/vue";

{
  Icon;
}
</script>

<style scoped>
main {
  padding: 1em 2em;
}
.intro {
  background-color: #4cb1f6;
  color: #094166;
  text-align: center;
  padding: 1em;
  text-transform: uppercase;
  margin: 3em 0;
}

.customer-service {
  background-color: #e8f1f6;
  border-radius: 0 4em 0 4em;
}
.customer-service img {
  widows: 100%;
}

.contact-info {
  text-align: center;
  line-height: 32px;
}

.contact-info > h1 {
  color: #094166;
  font-weight: bolder;
  letter-spacing: 1.5px;
  padding: 0.3em 0;
  font-size: 2em;
}

.contact-info > p {
  color: #222;
  font-weight: bold;
  font-size: 1.5em;
}

.contact-info span {
  color: #222;
  font-weight: 100;
  padding: 1em 0;
  font-size: 1.2em;
}

.contact-icon-info {
  background: #4cb1f6;
  /* background: #e8f1f6; */
  /* color: #094166; */
  color: white;
  display: flex;
  align-items: flex-start;
  padding: 0.1em 1.5em;
  position: relative;
  border-radius: 0.3em 1em 0 0;
  font-size: 1.3em;
}

.contact-icon-info p {
  font-size: 0.8em;
}

.contact-icon {
  background: white;
  border: 1px solid #e8f1f6;
  border-radius: 50%;
  width: 42px;
  height: 42px;
  position: absolute;
  left: -30px;
  top: -5px;
}

.contact-icon .icon {
  color: #4cb1f6;
  font-weight: bold;
}
.flex {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}

.contact-banner {
  background: #f8f8f8;
  padding: 0.5em 1em;
}

.msg-us {
  padding: 1em;
}

.msg-us h1 {
  color: #094166;
  text-align: center;
  text-transform: capitalize;
}

form {
  max-width: 500px;
  width: 90%;
  margin: auto;
}

input,
.span,
.label,
textarea {
  width: 100%;
  display: block;
}

.label {
  margin-bottom: 1em;
}
.span {
  color: rgb(53, 75, 82);
}
input,
textarea {
  padding: 1em;
  border-radius: 8px;
  outline: none;
  border: 2px solid #094166;
}

input:focus,
textarea {
  border: 2px solid #4cb1f6;
}
.submit {
  margin: 3em auto;
  background-color: #094166;
  color: #e8f1f6;
  border: none;
  cursor: pointer;
}
.submit:hover {
  background-color: #4cb1f6;
  color: #fff;
}

@media (min-width: 60rem) {
  .contact-banner {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: center;
    width: 100%;
    /* max-width: 500px; */
  }
  .flex {
    justify-content: space-between;
  }
  .customer-service {
    margin-left: 2em;
  }
  .contact-info span {
    padding-bottom: 2em;
  }
}
</style>
