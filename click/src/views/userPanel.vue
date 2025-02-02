<template>
  <div>
  <section class="main-layout overflow-hidden"  >
    <!-- header -->
    <div class="grid grid-cols-4 h-[95vh]">
      <div class="col-span-4 overflow-y-auto max-[600px]:col-span-4">
        <!-- Skeleton loader -->
        <!-- <div class="skeleton-container h-[300px] m-4">
          <div class="skeleton mr-2 rounded-lg"></div> -->
        <!-- Circular skeleton -->
        <!-- </div> -->
        <!-- <div class="m-4  h-[300px]" >
          <img src="../assets/imgs/Frame 1000002895.png" class=" h-[100%] w-[100%]" alt="">
        </div> -->
        <div class="carousel relative w-[100%] overflow-hidden">
          <div
            class="slides flex transition-transform duration-500 ease-in-out"
            :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
          >
            <div
              v-for="(image, index) in images"
              :key="index"
              class="slide w-full flex-shrink-0"
            >
              <img
                :src="`${image}`"
                class="w-full h-auto !object-fill"
                alt="Carousel Image"
              />
            </div>
          </div>

          <button
            class="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded"
            @click="prevSlide"
          >
            Prev
          </button>
          <button
            class="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded"
            @click="nextSlide"
          >
            Next
          </button>

          <!-- Indicators -->
          <div class="indicators flex justify-center mt-2">
            <span
              v-for="(image, index) in images"
              :key="index"
              @click="currentIndex = index"
              :class="{
                'bg-blue-500': currentIndex === index,
                'bg-gray-300': currentIndex !== index,
              }"
              class="h-2 w-2 rounded-full mx-1 cursor-pointer"
            ></span>
          </div>
        </div>

        <div class="my-[40px] flex justify-center m-4 flex-col items-center">
          <!-- Skeleton loader -->
          <div
            class="skeleton-container h-[30px] rounded-lg w-[20%] flex justify-center"
          >
            <h1 class="text-center text-[32px]" @click="useTopBar.toggleSidebar">
              How it works
            </h1>
            <!-- <div class="skeleton mr-2 rounded-lg"></div> -->
          </div>
          <div
            class="skeleton-container h-[30px] rounded-lg w-[70%] my-2 flex justify-center"
          >
            <!-- <div class="skeleton mr-2 rounded-lg"></div> -->
            <p class="text-center">
              free ,online design tool to create your ads .
            </p>
          </div>
        </div>
        <div
          class="my-2 grid grid-cols-3 gap-6 mx-4 max-[1000px]:grid-cols-2 max-[600px]:grid-cols-1  "
        >
          <!-- Skeleton loader -->
          <adminCard />
          <adminCard />
          <adminCard />

          <adminCard />
          <adminCard />
          <adminCard />
          <!-- <div class="skeleton-container h-[300px]">
            <div class="skeleton mr-2 rounded-lg"></div>
          </div> -->
          <!-- <div class="skeleton-container h-[300px]">
            <div class="skeleton mr-2 rounded-lg"></div>
          </div> -->
        </div>
      </div>
      <!-- <div class="col-span-1 bg-slate-100 p-2 overflow-hidden max-[600px]:hidden ">
        <sidebar />
      </div> -->

      <!-- Sidebar -->
      <div class="relative">
        <!-- Sidebar -->
        <div
          class="fixed top-0 right-0 h-full bg-gray-100 shadow-lg transform transition-transform duration-300 z-[45]"
          :class="useTopBar.sidebarOpen ? 'translate-x-0' : 'translate-x-full'"
          style="width: 680px"
        >
          <div
            class="p-4 flex justify-between items-center border-b border-gray-300"
          >
            <h2 class="text-lg font-semibold">Sidebar</h2>
            <button
              @click="useTopBar.toggleSidebar"
              class="text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              ✖
            </button>
          </div>

          <div class="p-4">
            <sidebar />
          </div>
          
        </div>

        <!-- Overlay -->
        <div
          v-if="useTopBar.sidebarOpen"
          class="fixed inset-0 bg-black bg-opacity-50 z-40"
          @click="useTopBar.toggleSidebar"
        ></div>
      </div>

      <!--  -->
    </div>
    <!--  -->
    {{ userId }}
  </section>
</div>
</template>
<script setup >

import { ref, computed } from "vue";
import sidebar from "@/components/sidebar.vue";
import adminCard from "@/components/card/adminCard.vue";
import { useRoute } from "vue-router";
import {useTopBarStore} from "../stores/topbar";

const useTopBar =  useTopBarStore();

const route = useRoute();
// const userId = computed(() => {
//   return route.params.id ;  // Use a default value if id is missing
// });

// Array of images for the carousel
const images = [
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F236047%2Fpexels-photo-236047.jpeg%3Fcs%3Dsrgb%26dl%3Dclouds-cloudy-countryside-236047.jpg%26fm%3Djpg&f=1&nofb=1&ipt=6b2eb5ccab7a0c6787f20167fcf73400772e8d96efe15960c036247ce945dde6&ipo=images",
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.EoVQuRwQe3tf6acMyDluQwHaDj%26pid%3DApi&f=1&ipt=3867412798f5f20fbdbc6ca70c4bff4cbec3eea4498ec8ff5bea464dd346802c&ipo=images",
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F236047%2Fpexels-photo-236047.jpeg%3Fcs%3Dsrgb%26dl%3Dclouds-cloudy-countryside-236047.jpg%26fm%3Djpg&f=1&nofb=1&ipt=6b2eb5ccab7a0c6787f20167fcf73400772e8d96efe15960c036247ce945dde6&ipo=images",
];

// Current index of the displayed slide
const currentIndex = ref(0);

// Go to the previous slide
const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + images.length) % images.length;
};

// Go to the next slide
const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % images.length;
};

// const sidebarOpen = ref(false);

// const toggleSidebar = () => {
//   sidebarOpen.value = !sidebarOpen.value;
// };
</script>

<style>
.carousel {
  height: 300px; /* Adjust height as needed */
  position: relative;
  width: 100%;
}

.slides {
  display: flex;
  width: 100%;
}

.slide {
  width: 100%;
}

button {
  z-index: 10; /* Ensure buttons are above the slides */
}

.indicators span {
  display: inline-block;
  height: 10px;
  width: 10px;
  margin: 0 5px;
  cursor: pointer;
}
</style>
<!-- import { useRoute } from "vue-router";

const route = useRoute();
const userId = route.params.id;

</script> -->