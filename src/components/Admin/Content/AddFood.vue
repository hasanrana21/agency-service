<template>
  <div class="p-8">
    <h1 class="text-3xl font-semibold">Add Food</h1>
    <form action="#" ref="foodForm" @submit.prevent="handleSubmit()">
      <div>
        <label for="foodName">Name</label> <br />
        <input
          type="text"
          name="foodName"
          placeholder="Write Food Name"
          v-model="foodName"
        />
      </div>
      <div>
        <select name="category" id="category" @change="selectCategory">
          <option disabled selected>Select Category ---</option>
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
          <option value="dessert">Desserts</option>
        </select>
      </div>
      <div>
        <label for="image">Image</label>
        <input type="file" name="image" @change="uploadImage" />
      </div>
      <div>
        <label for="description">Description</label> <br />
        <textarea
          name="description"
          id="description"
          cols="30"
          rows="5"
          placeholder="Write Food Description"
          v-model="description"
        ></textarea>
      </div>
      <div>
        <label for="price">Price</label> <br />
        <input type="text" name="price" placeholder="Price" v-model="price" />
      </div>

      <div class="w-2/4 mx-auto my-4">
        <input type="submit" value="Submit" />
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      foodName: "",
      description: "",
      price: "",
      category: "",
      foodImg: null,
    };
  },
  mounted() {},
  methods: {
    selectCategory(e) {
      this.category = e.target.value;
    },
    uploadImage(event) {
      //   console.log(event.target.files[0]);
      //   this.foodImg = event.target.files[0];
      const picture = new FormData();
      picture.set("key", "d8f07050530d4607b2ef8434b84b6ae7");
      picture.append("image", event.target.files[0]);

      axios
        .post("https://api.imgbb.com/1/upload", picture)
        .then((res) => {
          this.foodImg = res.data.data.display_url;
        })
        .catch((err) => console.log(err));
    },
    handleSubmit() {
      const foodInfo = {
        foodName: this.foodName,
        description: this.description,
        price: this.price,
        foodImg: this.foodImg,
        category: this.category,
      };
      axios
        .post("http://localhost:3000/foods", foodInfo)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));

      this.$refs.foodForm.reset();
    },
  },
};
</script>

<style scoped>
form {
  @apply w-2/4 mx-auto;
}
label {
  @apply text-xl px-2;
}
input,
textarea,
select {
  @apply text-xl px-2 py-1 w-full mt-1 mb-3 border-2 border-black rounded;
}
input[type="submit"] {
  @apply bg-gray-700 text-xl text-white font-semibold tracking-wider rounded-full cursor-pointer;
}

input[type="submit"]:active {
  transition: 0.1s all;
  transform: translateY(6px);
  border: 1px solid transparent;
  opacity: 0.8;
}
</style>
