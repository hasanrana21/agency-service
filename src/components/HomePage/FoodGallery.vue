<template>
  <div class="px-24 py-6 bg-pink-100">
    <h3 class="text-4xl font-semibold py-12 text-center">
      Food <span class="text-pink-500">Gallery</span>
    </h3>
    <div class="grid grid-cols-12 gap-x-6 gap-y-10">
      <div
        class="col-span-3 gallery-item"
        v-for="(image, index) in gallery"
        :key="index"
      >
        <img
          :src="image.foodImg"
          alt="restora"
          class="rounded-xl h-64 w-full border-2 border-pink-500"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      gallery: [],
    };
  },
  mounted() {
    this.getAllImages();
  },
  methods: {
    getAllImages() {
      axios.get("http://localhost:3000/get-all-foods").then((res) => {
        this.gallery = res.data;
      });
    },
  },
};
</script>

<style scoped>
.gallery-item {
  @apply rounded-xl overflow-hidden;
}
.gallery-item:hover img {
  @apply transform scale-125 transition ease-in-out duration-700 cursor-pointer;
}
</style>
