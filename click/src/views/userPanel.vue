<template>
  <div class="grid grid-cols-4 h-[100%]">
    <div class="col-span-4">
      <!-- Skeleton loader -->
      <div class="skeleton-container h-[300px] m-4">
        <div class="skeleton mr-2 rounded-lg"></div>
        <!-- Circular skeleton -->
      </div>

      <div class="my-[40px] flex justify-center m-4 flex-col items-center">
        <!-- Skeleton loader -->
        <div class="skeleton-container h-[30px] rounded-lg w-[20%]">
          <div class="skeleton mr-2 rounded-lg"></div>
          <!-- Circular skeleton -->
        </div>
        <div class="skeleton-container h-[30px] rounded-lg w-[70%] my-2">
          <div class="skeleton mr-2 rounded-lg"></div>
          <!-- Circular skeleton -->
        </div>
      </div>
      <div class="my-2 grid grid-cols-3 gap-6 mx-4 max-[1000px]:grid-cols-2 max-[600px]:grid-cols-1 ">
        <!-- Skeleton loader -->
        <div class="skeleton-container h-[300px]">
          <div class="skeleton mr-2 rounded-lg"></div>
          <!-- Circular skeleton -->
        </div>
        <div class="skeleton-container h-[300px]">
          <div class="skeleton mr-2 rounded-lg"></div>
          <!-- Circular skeleton -->
        </div>
        <div class="skeleton-container h-[300px]">
          <div class="skeleton mr-2 rounded-lg"></div>
          <!-- Circular skeleton -->
        </div>
      </div>
    </div>
  </div>
</template>
<script setup >
import { useRoute } from "vue-router";

const route = useRoute();
const userId = route.params.id;
</script>