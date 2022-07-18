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
.destination {
  margin: auto;
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
.hero #hero-txt {
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
  width: 100%;
  height: auto;
  text-decoration: none;
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  max-width: calc((100% / 3) - 20px);
  margin: 10px 10px;

  height: 240px;
  position: relative;
}
@media all and (max-width: 560px) {
  .destination {
    max-width: 100%;
  }
}

.destination img {
  width: 100%;
  height: 240px;
  min-height: 240px;
  border-radius: 10px;
  object-fit: cover;
  transform: scale(1);
  transition: 0.3s ease-in-out;
}
.destination img:hover {
  transform: scale(1.05);
}
.province {
  position: absolute;
  left: 50px;
  bottom: 50px;
}
</style>
