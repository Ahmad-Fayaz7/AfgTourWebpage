<template>
  <nav class="navbar">
    <div class="container">
      <img src="../assets/logo.png" class="logo" alt="" />
      <ul :class="{ active: isActivated }">
        <li @click="isActivated = false">
          <a href="#" class="current">Home</a>
        </li>
        <li @click="isActivated = false"></li>
        <li @click="isActivated = false"><a href="#">About</a></li>
        <router-link to="/ContactForm.vue" @click="isActivated = false"
          >Contact Us</router-link
        >
        <li @click="isActivated = false"><a href="#">Services</a></li>
      </ul>
      <div
        class="hamburger-menu"
        :class="{ active: isActivated }"
        @click="isActivated = !isActivated"
      >
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>
    </div>
  </nav>
</template>
<style>
.hamburger-menu {
  display: none;
  cursor: pointer;
}
.bar {
  display: block;
  width: 25px;
  height: 3px;
  margin: 5px auto;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  background-color: white;
}
@media all and (max-width: 500px) {
  .hamburger-menu {
    display: block;
  }
  .hamburger-menu,
  .logo {
    margin: 0 16px;
  }
  .hamburger-menu.active .bar:nth-child(2) {
    opacity: 0;
  }
  .hamburger-menu.active .bar:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
  }
  .hamburger-menu.active .bar:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
  }
  .navbar ul {
    position: fixed;
    left: -100%;
    top: 65px;
    gap: 0;
    flex-direction: column;
    background-color: #264653;
    width: 100%;
    text-align: center;
    transition: 0.3s;
    padding-bottom: 20px;
  }
  .navbar ul li {
    padding: 10px 0;
  }
  .navbar a {
    margin: 16px 0;
  }
  .navbar ul.active {
    left: 0;
  }
  .navbar {
    position: relative;
  }
  .logo {
    width: 50px;
  }
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}
.navbar {
  position: fixed;
  background-color: #264653;
  top: 0;
  left: 0;
  right: 0;
  transition: all 0.3s ease-in-out;
}
.navbar .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  transition: all 0.3s ease-in-out;
}
.navbar ul {
  display: flex;
  list-style-type: none;
  align-items: center;
  justify-content: center;
}
.navbar a {
  color: #fff;
  font-family: "Roboto", sans-serif;
  text-decoration: none;
  padding: 7px 15px;
  transition: all 0.3s ease-in-out;
}

.navbar a.current,
.navbar a:hover {
  color: #e76f51;
  font-weight: bold;
}
</style>

<script>
export default {
  data() {
    return {
      isActivated: false,
    };
  },
};
</script>
