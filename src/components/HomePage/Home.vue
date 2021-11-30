<template>
  <div>
    <div class="main-screen-wrapper">
      <Navbar></Navbar>
      <Banner></Banner>
    </div>
    <FoodCategoryMain></FoodCategoryMain>
    <DessertSection></DessertSection>
    <FoodGallery></FoodGallery>
    <Testimonials></Testimonials>
    <Events></Events>
  </div>
</template>

<script>
import Navbar from "./Navbar.vue";
import Banner from "./Banner.vue";
import FoodCategoryMain from "./FoodCategory/FoodCategoryMain.vue";
import DessertSection from "./DessertSection.vue";
import FoodGallery from "./FoodGallery.vue";
import Testimonials from "./Testimonials.vue";
import Events from "./Events.vue";
export default {
  components: { Navbar, Banner, FoodCategoryMain, DessertSection, FoodGallery, Testimonials, Events },
  data() {
    return {};
  },
};
</script>

<style scoped>
.main-screen-wrapper {
  background-image: url(https://preview.colorlib.com/theme/meal2/images/xhero_bg.jpg.pagespeed.ic.08xBTGP0Gm.webp);
  @apply bg-no-repeat bg-cover h-screen bg-fixed;
}
.main-screen-wrapper::before {
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 0;
  /* background-attachment: fixed; */
}
</style>
