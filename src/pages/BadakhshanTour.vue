<script>
export default {};
</script>
<template>
  <header>
    <div class="header-container"></div>
  </header>
  <section id="tours-container" class="container">
    <div class="sidebar">
      <div id="carachteristics" class="border-style">
        <h3>Carachteristics:</h3>
        <ul>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
        </ul>
      </div>
      <div id="prices" class="border-style">
        <h3>Prices:</h3>
        <ul>
          <li>Lorem, ipsum dolor.</li>
          <li>Lorem, ipsum dolor.</li>
          <li>Lorem, ipsum dolor.</li>
        </ul>
      </div>
    </div>
    <div class="main">
      <div class="tour border-style">
        <img src="../assets/pamir-highway-peak-lenin.jpg" alt="" />
        <div class="content">
          <h1>Wakhan Tour</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            optio iste eos, molestiae nihil ipsam modi asperiores. Nihil,
            facilis illo?
          </p>
          <button class="btn">Add To List</button>
        </div>
      </div>
      <div class="tour border-style">
        <img src="../assets/wakhan-3.webp" alt="" />
        <div class="content">
          <h1>Wakhan Tour</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            optio iste eos, molestiae nihil ipsam modi asperiores. Nihil,
            facilis illo?
          </p>
          <button class="btn">Add To List</button>
        </div>
      </div>
      <div class="tour border-style">
        <img src="../assets/wakhan-tent-sunrise-XL.jpg.webp" alt="" />
        <div class="content">
          <h1>Wakhan Tour</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            optio iste eos, molestiae nihil ipsam modi asperiores. Nihil,
            facilis illo?
          </p>
          <button class="btn">Add To List</button>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300&family=Poppins&family=Roboto:ital,wght@0,500;1,500&display=swap");
.container {
  max-width: 1200px;
  margin: 0 auto;
}
.header-container {
  background-image: url(../assets/cover-unsplash.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  top: 100px;
  height: 60vh;
}
#tours-container {
  margin-top: 200px;
  display: flex;
  justify-content: space-between;
  color: #264653;
}
.border-style {
  border-radius: 5px;
  box-shadow: 0.3em 0.3em 0.5em rgba(0, 0, 0, 0.1),
    -0.3em -0.3em 0.5em rgba(0, 0, 0, 0.1);
  /* box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(255, 255, 255),
    0.3em 0.3em 1em rgba(0, 0, 0, 0.3); */
}
.border-style img {
  width: 370px;
  height: 210px;
  border-radius: 5px;
}
.tour {
  display: flex;
  justify-content: space-between;
  width: 900px;
  margin-bottom: 20px;
  line-height: 30px;
}
.tour .content {
  margin: 20px 30px;
}
.tour p,
li {
  font-family: "Montserrat", sans-serif;
}
.btn {
  background-color: #fa8f21;
  color: #fff;
  padding: 5px 10px;
  border-radius: 5px;
  border-color: transparent;
  margin-top: 20px;
  font-weight: bold;
}

.sidebar ul {
  list-style-type: number;
  margin: 10px 20px;
  line-height: 30px;
  width: 200px;
}

.sidebar #prices,
.sidebar #carachteristics {
  padding: 20px;
  margin-bottom: 30px;
}
</style>
