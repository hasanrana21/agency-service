<template>
    <div class="navbar">
        <div class="z-10">
            <h1 class="text-5xl font-semibold italic">The Restora</h1>
        </div>
        <div class="z-10">
            <ul class="menu">
                <li>Home</li>
                <li>Projects</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Login</li>
            </ul>
        </div>
        <div class="z-10">
            <button class="bg-pink-500 px-6 py-3 rounded-full font-bold">
                BOOK A TABLE
            </button>
        </div>
    </div>
</template>



<style scoped>
.navbar{
    @apply flex justify-between items-center px-24 py-6 text-white;
}
.menu{
    @apply flex;
}
.menu li{
    @apply px-6 py-2 text-xl rounded font-normal hover:bg-green-600 transition cursor-pointer;
}
</style>