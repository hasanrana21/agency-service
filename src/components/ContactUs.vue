<template>
  <div class="py-20 px-10">
    <h3 class="text-4xl text-center underline mb-10">The Contact-Us Page</h3>
    <div>
      <form
        action="#"
        @submit.prevent="handleSubmit()"
      >
        <label for="name">Name {{ name }}</label> <br />
        <input name="name" id="name" type="text" v-model="name" /><br />

        <label for="email">Email</label> <br />
        <input name="email" id="email" type="mail" v-model="email" />
        <br />

        <label for="details">Details</label> <br />
        <textarea
          name="details"
          id="details"
          cols="10"
          rows="3"
          v-model="details"
        ></textarea>

        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>

    <div class="py-16">
      <div class="grid grid-cols-12 gap-4">
        <div
          v-for="(user, index) in allUsers"
          :key="index"
          class="col-span-3 p-6 mx-2 border-2 bg-yellow-300 rounded-xl"
        >
          <h3 class="text-2xl text-white text-green-500">{{ user.name }}</h3>
          <p class="text-lg text-blue-500 py-4">{{ user.email }}</p>
          <p class="text-lg">{{ user.details }}</p>

          <div class="flex justify-between px-4 pt-8 user-info">
            <!-- <router-link :to="`/update-form/${index}`"> -->
              <button>EDIT</button>
            <!-- </router-link> -->
            <button @click="handleDelete(index)">DELETE</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactUs",
  data() {
    return {
      name: "",
      email: "",
      details: "",
      id: null,
      allUsers: [],
      // getUsers: [],
      toggleForm: false,
    };
  },
  mounted() {
    if (localStorage.allUsers) {
      this.allUsers = JSON.parse(localStorage.getItem("allUsers"));
    }
  },
  watch: {
    allUsers: {
      handler(xxx) {
        localStorage.setItem("allUsers", JSON.stringify(xxx));
      },
      deep: true,
    },
  },
  methods: {
    handleSubmit() {
      let userInfo = {
        name: this.name,
        email: this.email,
        details: this.details,
      };
      this.allUsers.push(userInfo);
      console.log(this.allUsers);
    },
    handleDelete(item) {
      this.allUsers.find((user, index) => {
        if (index === item) {
          console.log(user.name);
          this.allUsers.splice(index, 1);
        }
      });
    },
    // updateForm() {
    //   this.allUsers.find((user) => {
    //     console.log("update user:", user.name);
    //     if (user.name || user.email || user.details) {
    //       console.log("update user:", user);
    //       user.name = this.name;
    //       user.email = this.email;
    //       user.details = this.details;
    //       console.log("successful updating");
    //       this.toggleForm = false;
    //     }
    //   });
    // },
    // handleEdit(id) {
    //   // this.name = 'asasa'
    //   this.toggleForm = true;
    //   this.allUsers.find((u, index) => {
    //     console.log(id);
    //     if (index == id) {
    //       console.log(u);
    //       this.name = u.name;
    //       this.email = u.email;
    //       this.details = u.details;
    //     }
    //   });
    // },
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
.user-info button {
  @apply bg-pink-500 px-8 py-2 rounded-full text-white font-bold;
}
</style>
