<template>
  <div>
    <h1 class="text-4xl text-center font-semibold">Dinner</h1>
    <div class="py-7 grid grid-cols-12 gap-x-4 gap-y-8">
      <div
        class="col-span-4 shadow-lg rounded-lg"
        v-for="(item, index) in dinner"
        :key="index"
      >
        <div>
          <img
            :src="item.foodImg"
            alt="breakfast"
            class="rounded-lg h-52 mx-auto"
          />
        </div>
        <div class="px-4 py-2">
          <div>
            <h4 class="text-2xl py-2">{{ item.foodName }}</h4>
            <h6 class="text-2xl">$ {{ item.price }}</h6>
          </div>
          <div class="text-center my-6">
            <router-link :to="`/checkout/${item._id}`">
              <button
                class="
                  bg-pink-500
                  text-lg
                  p-7
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
      dinner: [],
    };
  },
  mounted() {
    this.dinnerData();
  },
  methods: {
    dinnerData() {
      axios
        .get("http://localhost:3000/get-all-foods")
        .then((res) => {
          // console.log(res.data);
          this.dinner = res.data.filter((item) => item.category === "dinner");
          console.log(this.dinner);
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>
