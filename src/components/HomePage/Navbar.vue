<template>
  <div class="navbar bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
    <div class="z-10">
      <h1 class="text-5xl font-semibold italic">The Restora</h1>
    </div>
    <div class="z-10">
      <ul class="menu">
        <router-link to="/"> <li>Home</li> </router-link>
        <router-link to="/projects"> <li>Projects</li> </router-link>
        <router-link to="/crud-backend"> <li>About Us</li> </router-link>
        <router-link to="/contactUs"> <li>Contact Us</li> </router-link>
        <router-link to="/login"> <li>Login</li> </router-link>
        <router-link to="/show-food"> <li>Foods</li> </router-link>
        <router-link to="/admin"> <li>Admin</li> </router-link>
      </ul>
    </div>
    <div class="z-10">
      <button class="bg-pink-500 px-6 py-3 rounded-full font-bold">
        <a href="https://preview.colorlib.com/#meal2" target="_blank"
          >BOOK A TABLE</a
        >
      </button>
    </div>
  </div>
</template>

<style scoped>
.navbar {
  @apply flex justify-between items-center px-24 py-6 text-white;
}
.menu {
  @apply flex;
}
.menu li {
  @apply px-6 py-2 text-xl rounded font-normal hover:bg-green-600 transition cursor-pointer;
}
</style>
