<template>
  <div class="px-40 py-12 bg-pink-100 h-screen">
    <div class="grid grid-cols-12 gap-6 py-16">
      <div class="col-span-6 flex items-center">
        <div>
          <h3 class="text-4xl font-semibold py-2">Guest Chef Nihgt Party</h3>
          <p class="text-xl py-6">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </p>
          <h3 class="text-3xl text-pink-500">$200.99</h3>
          <div class="h-44 flex flex-wrap content-end justify-center text-center py-8 ">
            <button
              class="
                bg-pink-500
                text-2xl
                px-20
                py-3
                text-white
                font-semibold
                rounded-full
              "
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </div>

      <div class="col-span-6 h-full w-full flex justify-end">
        <img
          src="https://preview.colorlib.com/theme/meal2/images/xparty_2.jpg.pagespeed.ic.VGd3fPR10T.webp"
          alt="events"
          class="h-96 rounded-xl"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Checkout",
};
</script>

<style scoped>
ul {
  @apply py-4;
}
ul li {
  @apply text-xl py-1;
}
</style>
