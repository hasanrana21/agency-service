<template>
  <div class="px-24 py-12 bg-gray-100">
    <h3 class="text-4xl font-semibold py-12 text-center">
      Popular <span class="text-pink-500">Desserts</span>
    </h3>
    <div class="grid grid-cols-12 gap-6">
      <div
        class="
          col-span-3
          bg-green-500
          flex
          justify-evenly
          items-center
          py-4
          rounded
        "
        v-for="(dessert, index) in desserts"
        :key="index"
      >
        <img :src="dessert.foodImg" alt="" class="w-auto h-24" />
        <div class="space-y-2">
          <h4 class="text-xl text-white">{{ dessert.foodName }}</h4>
          <h6 class="text-xl text-white">$ {{ dessert.price }}</h6>
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
      desserts: [],
    };
  },
  mounted() {
    this.getAllDessertItems();
  },
  methods: {
    getAllDessertItems() {
      axios
        .get("http://localhost:3000/get-all-foods")
        .then((res) => {
          this.desserts = res.data.filter(
            (item) => item.category === "dessert"
          );
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>
