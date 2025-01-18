<template>
  <section class="main-layout overflow-hidden">
    <!-- header -->
    <div class="grid grid-cols-4 h-[95vh]">
      <div class="col-span-3 overflow-y-auto ">
        <!-- Skeleton loader -->
        <!-- <div class="skeleton-container h-[300px] m-4">
          <div class="skeleton mr-2 rounded-lg"></div> -->
          <!-- Circular skeleton -->
        <!-- </div> -->
        <div class="m-4  h-[300px]" >
          <img src="../assets/imgs/Frame 1000002895.png" class=" h-[100%] w-[100%]" alt="">
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
        <div class="my-2 grid grid-cols-3 gap-6 mx-4">
          <!-- Skeleton loader -->
          <adminCard/>
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
      <div class="col-span-1 bg-slate-100 p-2 overflow-hidden">
        <sidebar/>
      </div>
    </div>
    <!--  -->
  </section>
</template>
<script setup >
import sidebar from '@/components/sidebar.vue';
import adminCard from '@/components/card/adminCard.vue';
</script>