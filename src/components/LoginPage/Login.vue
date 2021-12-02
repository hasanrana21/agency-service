<template>
  <div class="px-32 py-12 h-screen">
    <div class="w-4/12 h-4/6 bg-pink-500 mx-auto px-8 rounded-xl">
      <h3 class="text-center text-3xl font-semibold text-white py-6">
        Register/Sign In
      </h3>
      <form
        @submit.prevent="showLogin ? handleSignup() : handleLogin()" class="h-72"
      >
        <div v-if="showLogin">
          <label for="name">Full Name</label> <br />
          <input
            type="text"
            name="name"
            id="name"
            v-model="userSignup.name"
            placeholder="Full Name"
          />
        </div>

        <label for="email">Email</label> <br />
        <input
          v-if="showLogin"
          type="email"
          name="email"
          id="email"
          v-model="userSignup.email"
          placeholder="Signup Email"
        />
        <input
          v-else
          type="email"
          name="email"
          id="email"
          v-model="userLogin.email"
          placeholder="Login Email"
        />
        <br />

        <label for="password">Password</label> <br />
        <input
          v-if="showLogin"
          type="password"
          name="password"
          id="password"
          v-model="userSignup.password"
          placeholder="Signup Password"
        />
        <input
          v-else
          type="password"
          name="password"
          id="password"
          v-model="userLogin.password"
          placeholder="Login Password"
        />
        <br />
        <br />
        <input
          type="submit"
          :value="showLogin ? 'Sign up' : 'Log in'"
          class=""
        />
      </form>

      <p class="text-base text-white pt-6">
        Do you have an account?
        <span
          @click="toggleForm"
          class="
            hover:underline
            text-blue-800
            font-semibold
            tracking-wider
            cursor-pointer
          "
        >
          {{ showLogin ? "Login" : "Sign up" }}
        </span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      showLogin: false,
      userSignup: {
        name: "",
        email: "",
        password: "",
      },
      userLogin: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    toggleForm() {
      this.showLogin = !this.showLogin;
    },
    handleLogin() {
      console.log("Login Successful", this.userLogin);
    },
    handleSignup() {
      console.log("Signup Successful", this.userSignup);
    },
  },
};
</script>

<style scoped>
label {
  @apply text-base px-2;
}
input {
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
