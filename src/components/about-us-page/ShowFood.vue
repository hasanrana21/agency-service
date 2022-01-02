<template>
  <section class="my-16">
    <h1 class="text-4xl text-center pb-7">All Food Data is here</h1>

    <!-- All Foods -->
    <div>
      <div class="grid grid-cols-12 gap-4">
        <div
          v-for="(item, index) in foodCollection"
          :key="index"
          class="col-span-3 p-6 mx-2 border-2 bg-yellow-300 rounded-xl"
        >
          <h3 class="text-2xl text-white text-green-500">
            {{ item.foodName }}
          </h3>
          <p class="text-lg">{{ item.description }}</p>

          <div class="flex justify-between px-4 pt-8 food-item">
            <button>EDIT</button>
            <button @click="handleDelete(item._id)">DELETE</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "ShowFood",
  data() {
    return {
      foodCollection: [],
    };
  },
  mounted() {
    axios.get("http://localhost:5050/allFoods").then((res) => {
      this.foodCollection = res.data;
      console.log(this.foodCollection);
    });
  },
  methods: {
    handleDelete(id) {
      const fooditem = this.foodCollection.find((food) => {
        if (food._id === id) {
            axios.delete(`http://localhost:5050/deleteFood/${food._id}`)
            .then(res => console.log(res))
            .catch(err => console.log(err))
        }
      });
      
    },
  },
};
</script>

<style scoped>
.food-item button {
  @apply bg-pink-500 px-8 py-2 rounded-full text-white font-bold;
}
</style>
