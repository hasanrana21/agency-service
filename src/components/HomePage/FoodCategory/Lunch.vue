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
          :src="lunch.imageURL"
          alt="breakfast"
          class="rounded-lg w-4/6 h-6/6 mx-auto"
        />
        <div class="px-4 py-2">
          <div>
            <h4 class="text-2xl py-2">{{ lunch.name }}</h4>
            <h6 class="text-2xl">$21.00</h6>
          </div>
          <div class="text-center my-6">
            <router-link to="/checkout">
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
      fetch("https://young-savannah-03336.herokuapp.com/getFoods")
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          this.lunchItems = data.filter((item) => item.foodType === "Lunch");
          console.log(this.lunchItems);
        });
      //  this.getLunch = this.lunchItems.filter(item => item.foodType === 'Lunch')
      // console.log(this.getLunch);
    },
  },
};
</script>
