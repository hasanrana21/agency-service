<template>
  <div class="bg-pink-100 grid grid-cols-12 gap-4 px-14 py-16">
    <div class="col-span-3 px-8 py-12">
      <div class="sidebar-menu">
        <h5 @click="handleSidebar('breakfast')" :class="breakfastMenu ? 'bg-pink-500 text-white transition' : '' ">Breakfast</h5>
        <h5 @click="handleSidebar('lunch')" :class="lunchMenu ? 'bg-pink-500 text-white transition' : '' ">Lunch</h5>
        <h5 @click="handleSidebar('dinner')" :class="dinnerMenu ? 'bg-pink-500 text-white transition' : '' ">Dinner</h5>
        <h5 @click="handleSidebar('drinks')" :class="drinksMenu ? 'bg-pink-500 text-white transition' : '' ">Drinks</h5>
      </div>
    </div>
    <div class="col-span-9 px-5">
        <Breakfast v-if="breakfastMenu"></Breakfast>
        <Lunch v-if="lunchMenu"></Lunch>
        <Dinner v-if="dinnerMenu"></Dinner>
        <Drinks v-if="drinksMenu"></Drinks>
    </div>
  </div>
</template>

<script>
import Breakfast from "./Breakfast.vue";
import Lunch from "./Lunch.vue";
import Dinner from "./Dinner.vue";
import Drinks from "./Drinks.vue";
export default {
  data() {
    return {
      breakfastMenu: true,
      lunchMenu: false,
      dinnerMenu: false,
      drinksMenu: false,
    };
  },
  methods: {
    handleSidebar(category) {
      if (category === "breakfast") {
        this.breakfastMenu = true;
        this.lunchMenu = false;
        this.dinnerMenu = false;
        this.drinksMenu = false;
      }
      if (category === "lunch") {
        this.lunchMenu = true;
        this.breakfastMenu = false;
        this.dinnerMenu = false;
        this.drinksMenu = false;
      }
      if (category === "dinner") {
        this.dinnerMenu = true;
        this.breakfastMenu = false;
        this.lunchMenu = false;
        this.drinksMenu = false;
      }
      if (category === "drinks") {
        this.drinksMenu = true;
        this.breakfastMenu = false;
        this.dinnerMenu = false;
        this.lunchMenu = false;
      }
    },
  },
  components: { Breakfast, Lunch, Dinner, Drinks },
};
</script>

<style scoped>
.sidebar-menu h5 {
  @apply my-6 px-6 py-4 rounded-xl text-2xl cursor-pointer;
}
</style>
