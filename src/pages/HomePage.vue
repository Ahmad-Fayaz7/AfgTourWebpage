<script>
export default {};
</script>
<template>
  <div class="hero">
    <div class="container">
      <h1>Get To Know Afghanistan Better...!</h1>
    </div>
  </div>
  <div class="container">
    <h1 id="top-destination">Top Destinations</h1>
    <div class="items-container">
      <router-link to="/BadakhshanTour.vue" class="destination">
        <img src="../assets/wakhan-snowy-landscape-XL.jpg.webp" alt="" />
        <span class="province">Badakhshan</span>
      </router-link>
      <router-link to="/BamyanTour.vue" class="destination">
        <img src="../assets/bandi-amir2.jpg" alt="" />
        <span class="province">Bamyan</span>
      </router-link>
      <router-link to="/PanjshirTour.vue" class="destination">
        <img src="../assets/panjshir.jpg" alt="" />
        <span class="province">Panjshir</span>
      </router-link>
      <router-link to="/KabulTour.vue" class="destination">
        <img src="../assets/Kabul-qasri-paghman.jpg" alt="" />
        <span class="province">Kabul</span>
      </router-link>
      <router-link to="/HeratTour.vue" class="destination">
        <img src="../assets/Herat.jpg" alt="" />
        <span class="province">Herat</span>
      </router-link>
      <router-link to="/MazarTour.vue" class="destination">
        <img src="../assets/Mazar-i-sharif.jpg" alt="" />
        <span class="province">Mazar</span>
      </router-link>
    </div>
  </div>
</template>

<style>
.container {
  max-width: 1200px;
  margin: 0 auto;
}
.hero {
  background-image: url(../assets/bandi-amir2.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;
  height: 100vh;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  margin-bottom: 20px;
  z-index: -2;
}
.hero::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(38, 70, 83, 0.3);
  z-index: -1;
}
.hero h1 {
  font-size: 46px;
  margin: -20px 0 20px;
}

.items-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

#top-destination {
  text-align: center;
  margin: 50px 0;
  font-weight: lighter;
  font-size: 24px;
  color: #264653;
}
.destination {
  text-decoration: none;
  color: #fff;
  font-size: 24px;
  font-weight: bold;
}

.destination img {
  height: 240px;
  width: 370px;
  margin: 10px 10px;
  border-radius: 10px;
  display: flex;
}
.province {
  position: relative;
  left: 50px;
  bottom: 50px;
}
</style>
