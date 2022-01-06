<template>
  <section class="py-20">
    <h1 class="text-4xl text-center">CRUD With Backend</h1>

    <!-- Food Form -->
    <form action="" @submit.prevent="handleSubmit">
      <div>
        <label for="foodName">Food Name</label> <br />
        <input
          type="text"
          id="foodName"
          v-model="foodName"
          placeholder="Write Food Name"
        />
      </div>
      <div>
        <label for="description">Food Description</label> <br />
        <input
          type="text"
          id="description"
          v-model="description"
          placeholder="Write Food Description"
        />
      </div>

      <div>
        <input type="submit" value="Submit" />
      </div>
      <!-- <div class="flex justify-between px-4 pt-8 food-form">
        <button>EDIT</button>
        <button @click="handleDelete(index)">DELETE</button>
      </div> -->
    </form>

    <div v-for="(item, index) in fruitsFromVuex" :key="index">
      <h3>Fruits Name: {{ item.name }}</h3>
      <p>Description: {{ item.description }}</p>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "CrudBackend",
  data() {
    return {
      foodName: "",
      description: "",
    };
  },
  computed: {
    fruitsFromVuex() {
      return this.$store.state.foods;
    },
  },
  methods: {
    handleSubmit() {
      const foodInfo = {
        foodName: this.foodName,
        description: this.description,
      };

      // post on database
      axios
        .post("http://localhost:5050/newFood", foodInfo)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style scoped>
form {
  @apply w-1/4 mx-auto;
}
label {
  @apply text-base px-2;
}
input,
textarea {
  @apply text-base px-2 py-1 w-full mt-1 mb-3 border-2 border-black rounded;
}
input[type="submit"] {
  @apply bg-gray-700 text-base text-white font-semibold tracking-wider rounded-full cursor-pointer;
}

input[type="submit"]:active {
  transition: 0.1s all;
  transform: translateY(6px);
  border: 1px solid transparent;
  opacity: 0.8;
}
</style>
