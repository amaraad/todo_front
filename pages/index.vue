<template>
  <div class="text-center">
    <Swiper
        :modules="[SwiperAutoplay, SwiperEffectCreative]"
        :slides-per-view="1"
        :loop="true"
        :effect="'creative'"
        :autoplay="{
        delay: 3000,
        disableOnInteraction: true
      }"
        :creative-effect="{
        prev: {
          shadow: false,
          translate: ['0%', 0, 0]
        },
        next: {
          translate: ['100%', 0, 0]
        }
      }"
    >
      <SwiperSlide
          v-for="(slide, idx) in slides"
          :key="idx"
      >
        <div :style="`background-image: url(${slide.image})`" class="h-80 w-full bg-no-repeat bg-top bg-cover" >
          <h1 class="text-5xl text-white">{{slide.text}}</h1>
        </div>
      </SwiperSlide>
    </Swiper>
    <div class="container pl-25">
      <div class="flex font-sans">
        <div class="flex-none w-48 relative">
          <img src="https://tailwindcss.com/_next/static/media/classic-utility-jacket.82031370.jpg" alt="" class="absolute inset-0 w-full h-full object-cover" loading="lazy" />
        </div>
        <form class="flex-auto p-6">
          <div class="flex flex-wrap">
            <h1 class="flex-auto text-lg font-semibold text-slate-900">
              Classic Utility Jacket
            </h1>
            <div class="text-lg font-semibold text-slate-500">
              $110.00
            </div>
            <div class="w-full flex-none text-sm font-medium text-slate-700 mt-2">
              In stock
            </div>
          </div>
          <div class="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
            <div class="space-x-2 flex text-sm">
              <label>
                <input class="sr-only peer" name="size" type="radio" value="xs" checked />
                <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                  XS
                </div>
              </label>
              <label>
                <input class="sr-only peer" name="size" type="radio" value="s" />
                <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                  S
                </div>
              </label>
              <label>
                <input class="sr-only peer" name="size" type="radio" value="m" />
                <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                  M
                </div>
              </label>
              <label>
                <input class="sr-only peer" name="size" type="radio" value="l" />
                <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                  L
                </div>
              </label>
              <label>
                <input class="sr-only peer" name="size" type="radio" value="xl" />
                <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                  XL
                </div>
              </label>
            </div>
          </div>
          <div class="flex space-x-4 mb-6 text-sm font-medium">
            <div class="flex-auto flex space-x-4">
              <button class="h-10 px-6 font-semibold rounded-md bg-black text-white" type="submit">
                Buy now
              </button>
              <button class="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900" type="button">
                Add to bag
              </button>
            </div>
            <button class="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200" type="button" aria-label="Like">
              <svg width="20" height="20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
              </svg>
            </button>
          </div>
          <p class="text-sm text-slate-700">
            Free shipping on all continental US orders.
          </p>
        </form>
      </div>
    </div>
  </div>
  <div class="bg-white border-t py-8">
    <div class="max-w-6xl mx-auto  pb-6 sm:pb-8  px-4 sm:px-6 lg:px-8">
      <div class="grid gap-8  grid-cols-1 lg:grid-cols-3">
        <div class="text-center sm:flex sm:text-left lg:block lg:text-center aos-init aos-animate" data-aos="zoom-in" data-aos-duration="1000">
          <div class="sm:flex-shrink-0">
            <div class="flow-root">
              <img class="w-24 mx-auto  pt-2 sm:pt-4" src="https://kom.mn/static/icons/truck.gif" alt="Захиалга хүргэх">
            </div>
          </div>
          <div class="mt-3 sm:mt-0 sm:ml-3 lg:mt-3 lg:ml-0">
            <h3 class="text-sm font-medium text-gray-900">Захиалга хүргэх</h3>
            <p class="mt-2 text-sm text-gray-500">Таны захиалга баталгаажсаны дараа бид 1-2 хоногийн дотор хүргэнэ.</p>
          </div>
        </div>
        <div class="text-center sm:flex sm:text-left lg:block lg:text-center aos-init aos-animate" data-aos="zoom-in" data-aos-duration="1000">
          <div class="sm:flex-shrink-0">
            <div class="flow-root">
              <img class="w-20 mx-auto  pt-6 sm:pt-8" src="https://kom.mn/static/icons/payment.gif" alt="Төлбөрийн нөхцөл">
            </div>
          </div>
          <div class="mt-3 sm:mt-0 sm:ml-3 lg:mt-3 lg:ml-0">
            <h3 class="text-sm font-medium text-gray-900">Төлбөрийн нөхцөл</h3>
            <p class="mt-2 text-sm text-gray-500">Төлбөрийг бүрэн шилжүүлснээр захиалга баталгаажна. Та гүйлгээний утга дээр захиалгын код, утасны дугаараа бичээрэй.</p>
          </div>
        </div>
        <div class="text-center sm:flex sm:text-left lg:block lg:text-center aos-init aos-animate" data-aos="zoom-in" data-aos-duration="1000">
          <div class="sm:flex-shrink-0">
            <div class="flow-root">
              <img class="w-20 mx-auto  pt-6 sm:pt-8" src="https://kom.mn/static/icons/box.gif" alt="Хүргэлтийн нөхцөл">
            </div>
          </div>
          <div class="mt-3 sm:mt-0 sm:ml-3 lg:mt-3 lg:ml-0">
            <h3 class="text-sm font-medium text-gray-900">Хүргэлтийн нөхцөл</h3>
            <p class="mt-2 text-sm text-gray-500">
              10 ба түүнээс дээш бүтээгдэхүүнд хүргэлт ҮНЭГҮЙ.
              Бусад тохиолдолд хүргэлтийн төлбөр
              5’000₮.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

const { appTitle } = useRuntimeConfig()
definePageMeta({
  layout: 'landing',
})
useHead({
  title: appTitle,
})
const slides = [
  {'image': 'https://shaders-slider.uiinitiative.com/images/01.jpg', text: "Хүн аалз"},
  {'image': 'https://shaders-slider.uiinitiative.com/images/02.jpg', text: "Энэ киноны нэрийг мэдэх үү"},
  {'image': 'https://shaders-slider.uiinitiative.com/images/03.jpg', text: "Бас энэ киноны нэрийг мэдэх үү"},
  {'image': 'https://shaders-slider.uiinitiative.com/images/04.jpg', text: "John Wick"},
]
</script>

