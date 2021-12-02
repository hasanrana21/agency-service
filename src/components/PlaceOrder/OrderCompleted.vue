<template>
  <div class="px-32 py-12 h-screen">
    <div class="text-center">
      <h2 class="text-3xl py-2">
        Thank You
        <span class="text-4xl text-pink-500 font-semibold tracking-wider"
          >Hasan Rana</span
        >
      </h2>
      <p class="text-2xl">
        We received your order. We deliver your order as soon as possible
      </p>
    </div>
    <div class="order-info bg-pink-100 w-3/6 mx-auto my-12 rounded-lg p-8 flex justify-between">
      <div>
        <h3>Your Order Code Number:</h3>
        <h3>Your Location:</h3>
        <h3>Your Rider:</h3>
        <h3>Estimated Time:</h3>
      </div>

      <div>
        <p>3kdaf7rek3w45t3543ldsf88sfdashdfa</p>
        <p>Bohoddarhat, Chittagong</p>
        <p>MD Mijan Karim</p>
        <p>11:30 AM</p>
      </div>
    </div>
    <div class="w-3/6 mx-auto text-center">
        <button
          class="
            text-xl
            bg-gray-700
            font-semibold
            text-white
            px-12
            py-3
            rounded-full
            tracking-wider
          "
        >
          Contact Rider
        </button>
      </div>
  </div>
</template>

<script>
export default {
  name: "OrderCompleted",
};
</script>

<style scoped>
.order-info h3 {
  @apply text-xl py-2;
}
.order-info p {
  @apply text-xl font-semibold py-2;
}
</style>
