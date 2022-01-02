<template>
  <div class="py-20 px-10">
    <h2 class="text-4xl text-center underline mb-10">Update Form</h2>
    <p>{{ id }}</p>
    <form action="#" @submit.prevent="getUserInfo()">
      <label for="name">Name {{ updatedName }}</label> <br />
      <input name="name" id="name" type="text" v-model="updatedName" /><br />

      <label for="email">Email</label> <br />
      <input name="email" id="email" type="mail" v-model="updatedEmail" />
      <br />

      <label for="details">Details</label> <br />
      <textarea
        name="details"
        id="details"
        cols="10"
        rows="3"
        v-model="updatedDetails"
      ></textarea>

      <div>
        <input type="submit" value="Update" />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "UpdateForm",
  data() {
    return {
      id: this.$route.params.id,
      editableUsers: [],
      updatedName: "",
      updatedEmail: "",
      updatedDetails: "",
    };
  },
  mounted() {
    if (localStorage.allUsers) {
      this.editableUsers = JSON.parse(localStorage.getItem("allUsers"));
      console.log(this.editableUsers);
    }

    this.editableUsers.find((user, index) => {
      console.log("prefill before", user);
      if (index === parseInt(this.$route.params.id)) {
        (this.updatedName = user.name),
          (this.updatedEmail = user.email),
          (this.updatedDetails = user.details);
      }
    });
  },
  methods: {
    getUserInfo() {
      this.editableUsers.find((userInfo, index) => {
        //   console.log(index, parseInt(this.id))
        if (index === parseInt(this.id)) {
          console.log("updating successful", userInfo);
          // (this.updatedName = userInfo.name),
          //   (this.updatedEmail = userInfo.email),
          //   (this.updatedDetails = userInfo.details);
          const updatedUsersInfo = {
            name: this.updatedName,
            email: this.updatedEmail,
            details: this.updatedDetails,
          }
          localStorage.setItem('allUsers', updatedUsersInfo);

          console.log(updatedUsersInfo);
        }
      });
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
