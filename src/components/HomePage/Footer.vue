<template>
    <div class="px-24 py-12 bg-pink-500">
        <div class="grid grid-cols-12 gap-4">
            <div class="col-span-4 p-6">
                <h2 class="text-3xl text-white italic font-semibold">The Restora</h2>
                <p class="text-base py-4 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam laborum odio non accusamus quae mollitia.</p>
            </div>
            <div class="col-span-2 p-6">
                <ul>
                    <li> <a href="">About Online Food</a> </li>
                    <li> <a href="">Read our Blog</a> </li>
                    <li> <a href="">Sign up to deliver</a> </li>
                    <li> <a href="">Add your restaurant</a> </li>
                </ul>
            </div>
            <div class="col-span-2 p-6">
                <ul>
                    <li> <a href="">Get Help</a> </li>
                    <li> <a href="">Read FAQ's</a> </li>
                    <li> <a href="">View all cities</a> </li>
                    <li> <a href="">Restaurant near me</a> </li>
                </ul>
            </div>
            <div class="col-span-4 p-6">
                <h3 class="text-center text-base text-white">Contact Us</h3>
                <div class="social-icon text-center py-6">
                    <span>Facebook</span>
                    <span>Instagram</span>
                    <span>Linkedin</span>
                    <span>Youtube</span>
                </div>
            </div>
        </div>
        <div class="px-6 flex justify-evenly items-center">
            <div>
                <p class="text-base text-white">&copy; 2021, The Restora || All right reserved</p>
            </div>
            <div>
                <ul class="flex">
                    <li> <a href="">Privacy Policy</a> </li>
                    <li> <a href="">Terms of Use</a> </li>
                    <li> <a href="">Pricing</a> </li>
                </ul>
            </div>
        </div>
    </div>
</template>


<style scoped>
li{
    @apply py-2;
}
li a{
    @apply text-base text-white;
}
li a:hover{
    @apply underline;
}
.social-icon span{
    @apply px-4 text-base font-semibold text-white cursor-pointer;
}
</style>