<template>
  <footer>
    <div id="footer">
      <div class="contact">
        <h3>Contact</h3>
        <address>
          <p><b>Address: </b> Plot 958 Ibani Suites, Mabushi. Abuja</p>
          <p><b>Phone: </b> +2348067826721</p>
          <p><b>Email: </b>achezmall@gmail.com</p>
        </address>
        <h3>Follow Us</h3>
        <br />
        <div class="socials">
          <div class="social">
            <img src="../assets/facebook.png" alt="Facebook logo" />
          </div>
          <div class="social">
            <img src="../assets/instagram.png" alt="instagram logo" />
          </div>
          <div class="social">
            <img src="../assets/twitter.png" alt="Twitter logo" />
          </div>
        </div>
      </div>
      <div class="about">
        <h3>About</h3>
        <br />
        <li>About Us</li>
        <li>Delivery Information</li>
        <li>Privacy Policy</li>
        <li>Terms & Conditions</li>
        <li>Contact Us</li>
      </div>
      <div class="myaccount">
        <h3>My account</h3>
        <br />
        <li>Sign In</li>
        <li>View Cart</li>
        <li>My Wishlist</li>
        <li>Track My Order</li>
        <li>Help</li>
      </div>
      <div class="install">
        <div class="newsletter">
          <h3>Sign Up to our Newsletter</h3>
          <div class="form">
            <input type="email" placeholder="Enter your email" />
            <button>subscribe</button>
          </div>
        </div>
        <p>Secured Payment Gateways</p>
        <img src="../assets/pay.png" alt="" />
      </div>
    </div>
    <span class="copyright">© 2023 | Achezcodes All Rights Reserved</span>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
footer {
  padding: 1em;
  background-color: #e8f1f6;
}
#footer {
  padding: 1em 0;
}
.socials {
  display: flex;
  align-content: center;
}
.social img {
  max-width: 100%;
}
#footer p,
#footer li {
  color: rgb(109, 109, 109);
  text-decoration: none;
  line-height: 1.5;
}
#footer h3 {
  padding-top: 0.5em;
}
#footer h1,
#footer h3 {
  color: black;
  font-weight: bolder;
}
#footer h1 {
  padding-bottom: 1em;
}
#footer a:hover {
  color: #088178;
}
#footer .about a {
  display: block;
  padding: 8px 0;
}
#footer .myaccount a {
  display: block;
  padding: 8px 0;
}
#footer .download img {
  border: 1px solid #08817969;
  border-radius: 7px;
}

.newsletter h3 {
  padding-bottom: 0.5em;
}

.form {
  display: flex;
  padding-bottom: 1em;
}

.form input {
  padding: 1em 4em;
  width: 100%;
  background-color: #fff;
  border-radius: 6px 0 0 6px;
  font-size: 0.8em;
  border: none;
  outline: none;
  margin-right: -4px;
  margin-top: 1px;
}

.form button {
  margin-left: 0;
  padding: 0.4em 1em;
  border: none;
  background-color: #094166;
  color: white;
  font-size: 0.8em;
  border-radius: 0 6px 6px 0;
  cursor: pointer;
}
.copyright {
  color: rgb(109, 109, 109);
  text-align: center;
  padding: 1em 0;
  font-weight: bold;
}
@media (min-width: 40rem) {
  #footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 3em;
  }
  .socials {
    display: flex;
    flex-direction: row;
  }
  .copyright {
    display: block;
    margin: 0 auto;
    padding: 0 0 1em 0;
  }
}
</style>
