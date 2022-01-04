<template>
  <div>
    <h1 class="text-4xl text-center font-semibold">Dinner</h1>
    <div class="py-7 grid grid-cols-12 gap-x-4 gap-y-8">
      <div class="col-span-4 shadow-lg rounded-lg">
        <img
          src="https://preview.colorlib.com/theme/meal2/images/ximg_2.jpg.pagespeed.ic.55LLOE9kW3.webp"
          alt="breakfast"
          class="rounded-lg"
        />
        <div class="px-4 py-2">
          <div>
            <h4 class="text-2xl py-2">Shrimp and olive</h4>
            <h6 class="text-2xl">$21.00</h6>
          </div>
          <div class="text-center my-6">
            <router-link to="/checkout">
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
          this.dinner = res.data.filter(
            (item) => item.category === "breakfast"
          );
          console.log(this.dinner);
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>
