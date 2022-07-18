<script>
export default {
  data() {
    return {
      tourName: "",
      tourPrice: null,
      selectedTour: {},
      isClicked: false,
      tours: [
        {
          id: 1,
          name: "Band-i-Amir Tour",
          description:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribusoptio iste eos, molestiae nihil ipsam modi asperiores. Nihil,facilis illo?",
          image: require("@/assets/waterfall-unsplash.jpg"),
          price: 225,

          characteristics: [
            "Lorem ipsum good sit amet.",
            "Lorem ipsum good sit amet.",
            "Lorem ipsum good sit amet.",
            "Lorem ipsum good sit amet.",
          ],
        },
        {
          id: 2,
          name: "Shahr-i- Gholghola Tour",
          description:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribusoptio iste eos, molestiae nihil ipsam modi asperiores. Nihil,facilis illo?",
          characteristics: [
            "Lorem ipsum good sit amet.",
            "Lorem ipsum good sit amet.",
            "Lorem ipsum good sit amet.",
            "I am a different characteristic",
          ],
          image: require("@/assets/gholghola-unsplash.jpg"),
          price: 300,
        },
        {
          id: 3,
          name: "Pamir Tour",
          description:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribusoptio iste eos, molestiae nihil ipsam modi asperiores. Nihil,facilis illo?",
          characteristics: [
            "Lorem ipsum good sit amet.",
            "Lorem ipsum good sit amet.",
            "Lorem ipsum good sit amet.",
            "Lorem ipsum good sit amet.",
          ],
          image: require("@/assets/bamyan1-unsplash.jpg"),
          price: 180,
        },
      ],
    };
  },
  methods: {
    showCharacteristics(tour) {
      this.selectedTour = tour;
      this.isClicked = !this.isClicked;
      this.tourName = tour.name;
      this.tourPrice = tour.price;
    },
    hideElement() {
      this.isClicked = !this.isClicked;
    },
  },
};
</script>
<template>
  <header>
    <div class="header-container"></div>
  </header>
  <section id="tours-container" class="container">
    <div class="sidebar" :class="{ active: isClicked }">
      <div id="characteristics" class="border-style">
        <h3>Characteristics:</h3>
        <ul v-if="selectedTour.characteristics && isClicked === true">
          <li
            v-for="characteristic in selectedTour.characteristics"
            :key="characteristic"
          >
            {{ characteristic }}
          </li>
          <button class="btn" @click="hideElement()">Hide Details</button>
        </ul>
      </div>
      <div id="prices" class="border-style">
        <h3>Price:</h3>
        <ul>
          <li v-if="isClicked === true">{{ tourName }} {{ tourPrice }}€</li>
        </ul>
      </div>
    </div>
    <div class="main">
      <div class="tour border-style" v-for="tour in tours" :key="tour.id">
        <img :src="tour.image" alt="" />
        <div class="content">
          <h1>{{ tour.name }}</h1>
          <p>
            {{ tour.description }}
          </p>

          <button class="btn" @click="showCharacteristics(tour)">
            {{ isClicked ? "Hide" : "" }} Details
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
<style>
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
@media all and (max-width: 560px) {
  .header-container {
    top: 0;
  }
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
@media all and (max-width: 560px) {
  .main {
    padding: 10px;
  }
  #tours-container {
    margin-top: 100px;
  }
  .tour.border-style {
    padding: 5px;
  }
  .border-style img {
    border-radius: 0;
  }
}
.tour {
  display: flex;
  justify-content: space-between;
  /* width: 900px; */
  margin-bottom: 20px;
  line-height: 30px;
  padding: 5px;
  margin-left: 5px;
  margin-right: 5px;
}
@media all and (max-width: 768px) {
  .sidebar {
    position: fixed;
    left: -100%;
    color: #264653;
    top: 65px;
    height: 80vh;
    background-color: #fff;
    width: 100%;
    text-align: center;
    transition: 0.3s;
    padding: 20px 100px;
    margin: auto;
  }
  .sidebar ul {
    min-width: 260px;
  }
  .sidebar.active {
    left: 0;
  }
  .tour {
    width: 100vw;
  }
}
@media all and (max-width: 560px) {
  .tour {
    flex-direction: column;
    width: 100%;
  }
  .border-style img {
    width: 100%;
    max-width: 360px;
    height: auto;
    margin: auto;
  }
  .sidebar {
    position: fixed;
    left: -100%;
    color: #264653;
    top: 65px;
    height: 80vh;
    background-color: #fff;
    text-align: center;
    transition: 0.3s;
    padding: 20px;
    margin: auto;
  }
  .sidebar.active {
    left: 0;
  }
  #characteristics ul {
    width: 50%;
  }
}
.tour .content {
  margin: 20px 20px;
}
.tour p,
li {
  font-family: "Montserrat", sans-serif;
}
.btn {
  background-color: #e76f51;
  color: #fff;
  padding: 5px 10px;
  border-radius: 5px;
  border-color: transparent;
  margin: 10px;
  font-weight: bold;
}

.sidebar ul {
  list-style-type: number;
  margin: 10px 20px;
  line-height: 30px;
  width: 200px;
}

.sidebar #prices,
.sidebar #characteristics {
  padding: 20px;
  margin-bottom: 30px;
}
</style>
