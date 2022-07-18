<template>
  <div class="footer-section">
    <div class="footer-container container">
      <div class="footer-item" id="first-item">
        <img src="../assets/logo.png" alt="logo" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam nobis
          vitae officia id cumque aut harum repudiandae omnis corporis odit.
        </p>
      </div>
      <div class="footer-item">
        <h3>Services</h3>
        <ul>
          <li><a href="">Tour Guide</a></li>
          <li><a href="">House Renting</a></li>
          <li><a href="">Car Renting</a></li>
          <li><a href="">Hotel Booking</a></li>
        </ul>
      </div>
      <div class="footer-item">
        <h3>Navigation</h3>
        <ul>
          <li><a href="">Home</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Contact Us</a></li>
          <li><a href="">Services</a></li>
        </ul>
      </div>
      <div class="footer-item" id="icon">
        <h3>Social Media</h3>
        <img src="../assets/facebook-logo.png" alt="" />
        <img src="../assets/twitter-logo.png" alt="" />
        <img src="../assets/instagram-logo.png" alt="" />
        <img src="../assets/youtube-logo.png" alt="" />
      </div>
    </div>
  </div>
</template>
<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300&family=Poppins&family=Roboto:ital,wght@0,500;1,500&display=swap");
@media all and (max-width: 500px) {
  .footer-item:nth-child(3) {
    display: none;
  }
  .footer-container {
    width: 100%;
  }
}
div .footer-section {
  background-color: #264653;
  color: #fff;
  height: 350px;
  margin-top: 100px;
}
.footer-container {
  display: flex;
  justify-content: space-between;
  padding-top: 50px;
}
.footer-item {
  /* margin-left: 25px; */
  /* padding: 0 20px; */
  flex: 1;
}

#first-item {
  /* flex-grow: 2; */
  width: 150px;
}

#first-item.footer-item p {
  font-family: "Montserrat", sans-serif;
  text-align: left;
  /* max-width: 200px; */
}
.footer-item a {
  text-decoration: none;
  color: #fff;
}
.footer-item li {
  list-style-type: none;
  padding: 5px 0;
}
.footer-item h3 {
  padding-bottom: 5px;
}
#icon img {
  width: 30px;
  padding: 5px;
}
</style>
