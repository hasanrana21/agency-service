<template>
  <div id="nav">
    <h1 class="text-4xl text-center font-semibold">Breakfast</h1>
    <div class="py-7 grid grid-cols-12 gap-x-4 gap-y-8">
      <div
        v-for="(breakfast, index) in breakfastItems"
        :key="index"
        class="col-span-4 shadow-lg rounded-lg"
      >
        <img
          :src="breakfast.foodImg"
          alt="breakfast"
          class="rounded-lg h-52 mx-auto"
        />
        <div class="px-4 py-2">
          <div>
            <h4 class="text-2xl py-2">{{ breakfast.foodName }}</h4>
            <h6 class="text-2xl">$ {{ breakfast.price }}</h6>
          </div>
          <div class="text-center my-6">
            <router-link :to="`/checkout/${breakfast._id}`">
              <button
                @click="getBreakfast"
                class="
                  bg-pink-500
                  text-lg
                  px-7
                  py-1
                  text-white
                  font-semibold
                  rounded-full
                "
              >
                ORDER NOW
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Breakfast",
  data() {
    return {
      breakfastItems: [],
    };
  },
  mounted() {
    this.getBreakfast();
  },
  methods: {
    getBreakfast() {
      axios.get("http://localhost:3000/get-all-foods").then((res) => {
        // console.log(res.categories);
        this.breakfastItems = res.data.filter(
          (item) => item.category === "breakfast"
        );
      });
    },
  },
};
</script>
