<template>
  <div class="px-40 py-12 bg-pink-100 h-screen">
    <div
      v-for="(item, index) in itemData"
      :key="index"
      class="grid grid-cols-12 gap-6 py-16"
    >
      <div class="col-span-6 flex items-center">
        <div>
          <h3 class="text-4xl font-semibold py-2">{{ item.foodName }}</h3>
          <p class="text-xl py-6">
            {{ item.description }}
          </p>
          <h3 class="text-2xl text-pink-500">$ {{ item.price }}</h3>
          <div
            class="
              h-44
              flex flex-wrap
              content-end
              justify-center
              text-center
              py-8
            "
          >
            <router-link to="/addToCart">
              <button
                class="
                  bg-pink-500
                  text-base
                  px-16
                  py-3
                  text-white
                  font-semibold
                  rounded-full
                "
              >
                ADD TO CART
              </button>
            </router-link>
          </div>
        </div>
      </div>

      <div class="col-span-6 h-full w-full flex justify-end">
        <img :src="item.foodImg" alt="events" class="h-96 rounded-xl" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Checkout",
  data() {
    return {
      itemData: [],
    };
  },
  mounted() {
    this.itemInfo();
  },
  methods: {
    itemInfo() {
      axios
        .get("http://localhost:3000/get-all-foods")
        .then((res) => {
          this.itemData = res.data.filter(
            (item) => item._id === this.$route.params.id
          );
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style scoped>
ul {
  @apply py-4;
}
ul li {
  @apply text-base py-1;
}
</style>
