<template>
  <div class="px-32 py-12">
    <div class="grid grid-cols-12 gap-4">
      <div class="col-span-6">
        <form action="#">
          <label for="name">Full Name</label> <br />
          <input type="text" id="name" placeholder="Full Name" /> <br />

          <label for="email">Email</label> <br />
          <input type="email" id="email" placeholder="Email" /> <br />

          <label for="phone">Phone</label> <br />
          <input type="phone" id="phone" placeholder="Phone Number" /> <br />

          <label for="address">Address</label> <br />
          <input
            type="address"
            id="address"
            placeholder="Street, Area, District"
          />
          <br />

          <div class="text-center">
            <router-link to="/orderCompleted">
              <button
                type="submit"
                class="
                  text-base
                  bg-gray-700
                  font-semibold
                  text-white
                  px-12
                  py-3
                  rounded-full
                  tracking-wider
                "
              >
                Submit
              </button>
            </router-link>
          </div>
        </form>

        <div class="py-10">
          <h1>Payment</h1>
        </div>
      </div>
      <div class="col-span-6 border-2 border-black">
        <h1>The Restora</h1>
      </div>
    </div>
  </div>
</template>

<style scoped>
label {
  @apply text-base px-2;
}
input {
  @apply text-base px-2 py-2 w-96 mt-1 mb-6 border-2 border-black rounded-lg w-5/6;
}
</style>
