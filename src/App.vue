<template>
  <div id="nav">
    <Navbar></Navbar>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from "./components/HomePage/Navbar.vue";
import Footer from "./components/HomePage/Footer.vue";

export default {
  name: 'App',
  components: {
    Navbar,
    Footer
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
