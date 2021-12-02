<template>
    <div class="px-24 py-6 bg-pink-100">
      <h3 class="text-4xl font-semibold py-12 text-center">Food <span class="text-pink-500">Gallery</span></h3>
      <div class="grid grid-cols-12 gap-x-6 gap-y-10">
          <div class="col-span-3 gallery-item">
              <img src="https://preview.colorlib.com/theme/meal2/images/ximg_1.jpg.pagespeed.ic.VpbnsnaQH0.webp" alt="restora" class="rounded-xl">
          </div>


          <!-- sample -->
          
          <div class="col-span-3 gallery-item">
              <img src="https://preview.colorlib.com/theme/meal2/images/ximg_2_b.jpg.pagespeed.ic.cc_QObtz2m.webp" alt="restora" class="rounded-xl">
          </div>
          <div class="col-span-3 gallery-item">
              <img src="https://preview.colorlib.com/theme/meal2/images/ximg_2.jpg.pagespeed.ic.55LLOE9kW3.webp" alt="restora" class="rounded-xl">
          </div>
          <div class="col-span-3 gallery-item">
              <img src="https://preview.colorlib.com/theme/meal2/images/ximg_1.jpg.pagespeed.ic.VpbnsnaQH0.webp" alt="restora" class="rounded-xl">
          </div>
          
          <div class="col-span-3 gallery-item">
              <img src="https://preview.colorlib.com/theme/meal2/images/ximg_2_b.jpg.pagespeed.ic.cc_QObtz2m.webp" alt="restora" class="rounded-xl">
          </div>
          <div class="col-span-3 gallery-item">
              <img src="https://preview.colorlib.com/theme/meal2/images/ximg_2.jpg.pagespeed.ic.55LLOE9kW3.webp" alt="restora" class="rounded-xl">
          </div>
          <div class="col-span-3 gallery-item">
              <img src="https://preview.colorlib.com/theme/meal2/images/ximg_1.jpg.pagespeed.ic.VpbnsnaQH0.webp" alt="restora" class="rounded-xl">
          </div>
          
          <div class="col-span-3 gallery-item">
              <img src="https://preview.colorlib.com/theme/meal2/images/ximg_2_b.jpg.pagespeed.ic.cc_QObtz2m.webp" alt="restora" class="rounded-xl">
          </div>
          <div class="col-span-3 gallery-item">
              <img src="https://preview.colorlib.com/theme/meal2/images/ximg_2.jpg.pagespeed.ic.55LLOE9kW3.webp" alt="restora" class="rounded-xl">
          </div>
          <div class="col-span-3 gallery-item">
              <img src="https://preview.colorlib.com/theme/meal2/images/ximg_2_b.jpg.pagespeed.ic.cc_QObtz2m.webp" alt="restora" class="rounded-xl">
          </div>
      </div>
    </div>
</template>



<style scoped>
.gallery-item{
    @apply rounded-xl overflow-hidden;
}
.gallery-item:hover img{
    @apply transform scale-125 transition ease-in-out duration-700 cursor-pointer;
}
</style>