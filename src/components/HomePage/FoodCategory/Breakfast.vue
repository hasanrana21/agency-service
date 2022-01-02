<template>
  <div id="nav">
    <h1 class="text-4xl text-center font-semibold">Breakfast</h1>
    <div class="py-7 grid grid-cols-12 gap-x-4 gap-y-8">
      <div v-for="(breakfast, index) in breakfastItems" :key="index" class="col-span-4 shadow-lg rounded-lg">
        <img
          :src="breakfast.strCategoryThumb"
          alt="breakfast"
          class="rounded-lg w-full h-auto"
        />
        <div class="px-4 py-2">
          <div>
            <h4 class="text-2xl py-2">{{breakfast.strCategory}}</h4>
            <h6 class="text-2xl">$21.00</h6>
          </div>
          <div class="text-center my-6">
            <router-link :to="`/checkout/${breakfast.idCategory}`">
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
export default {
  name: "Breakfast",
  data() {
    return {
      breakfastItems: [],
    };
  },
  mounted() {
    this.getBreakfast()
  },
  methods: {
    getBreakfast() {
      fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
        .then((res) => res.json())
        .then((data) => {
          // console.log(data.categories);
          this.breakfastItems = data.categories;
        });
    },
  },
};
</script>
