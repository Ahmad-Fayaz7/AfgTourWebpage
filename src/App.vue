<template>
  <router-view />
  <the-header> </the-header>
  <the-footer> </the-footer>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";

export default {
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins&family=Roboto:ital,wght@0,500;1,500&display=swap");
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  /* background: rgba(0, 100, 0, 0.1); */
}
html {
  font-family: "Roboto", sans-serif;
  background: #fefefe;
}
</style>
