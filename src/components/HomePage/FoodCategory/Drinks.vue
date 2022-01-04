<template>
  <div>
    <h1 class="text-4xl text-center font-semibold">Drinks</h1>
    <div class="py-7 grid grid-cols-12 gap-x-4 gap-y-8">
      <div
        class="col-span-4 shadow-lg rounded-lg"
        v-for="(drink, index) in drinkItems"
        :key="index"
      >
        <img :src="drink.foodImg" alt="breakfast" class="rounded-lg" />
        <div class="px-4 py-2">
          <div>
            <h4 class="text-2xl py-2">{{ drink.foodName }}</h4>
            <h6 class="text-2xl">$ {{ drink.price }}</h6>
          </div>
          <div class="text-center my-6">
            <router-link :to="`/checkout/${drink._id}`">
              <button
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
  data() {
    return {
      drinkItems: [],
    };
  },
  mounted() {
    this.allDrinksItems();
  },
  methods: {
    allDrinksItems() {
      axios
        .get("http://localhost:3000/get-all-foods")
        .then((res) => {
          this.drinkItems = res.data.filter(
            (item) => item.category === "drinks"
          );
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>
