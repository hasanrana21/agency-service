<template>
  <div>
    <h1 class="text-4xl text-center font-semibold">Lunch</h1>
    <div class="py-7 grid grid-cols-12 gap-x-4 gap-y-8">
      <div
        v-for="(lunch, index) in lunchItems"
        :key="index"
        class="col-span-4 shadow-lg rounded-lg"
      >
        <img
          :src="lunch.foodImg"
          alt="breakfast"
          class="rounded-lg h-52 mx-auto"
        />
        <div class="px-4 py-2">
          <div>
            <h4 class="text-2xl py-2">{{ lunch.foodName }}</h4>
            <h6 class="text-2xl">$ {{ lunch.price }}</h6>
          </div>
          <div class="text-center my-6">
            <router-link :to="`/checkout/${lunch._id}`">
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
  name: "Lunch",
  data() {
    return {
      lunchItems: [],
    };
  },
  mounted() {
    this.getLunchItems();
  },
  methods: {
    getLunchItems() {
      axios
        .get("http://localhost:3000/get-all-foods")
        .then((res) => {
          // console.log(res);
          this.lunchItems = res.data.filter(
            (item) => item.category === "lunch"
          );
          console.log(this.lunchItems);
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>
