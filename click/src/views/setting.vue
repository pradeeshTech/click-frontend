<template>
  <div>
    <div class="h-[100vh] w-[100%] overflow-hidden flex">
      <!-- sidebar -->

      <div class="w-[200px] h-[100vh] bg-[#2d2d2d]">
        <h1 class="text-[#fff] text-[28px] text-center my-2">Click</h1>

        <ul class="flex flex-col justify-start p-4 text-[#fff]">
          <router-link to="/setting/profile" class="">
            <li class="my-2">Profile</li>
          </router-link>
          <router-link to="/setting/plan-details" class="">
            <li class="my-2">Update Plan</li>
          </router-link>
          <router-link to="/setting/admin-dashboard" class="">
            <li class="my-2">Admin Dashboard</li>
          </router-link>
        </ul>
      </div>
      <!-- side bar  -->
      <div class="w-[100%] gird grid-cols-1 bg-gray-50">
        <div class="w-[100%]">
          <header class="!h-[60px] bg-[#fff] shadow-md grid grid-cols-2">
            <div class="flex justify-start items-center px-4">
              <router-link to="/" class="">
                <i class="cursor-pointer pi pi-angle-right"></i>
              </router-link>
            </div>
      
            <div class="flex items-center justify-end px-4">
              <div>
                <i class="pi pi-bell cursor-pointer"></i>
              </div>

              <div class="relative mx-2 dropdown">
                <router-link
                  to="/setting/profile"
                  class="p-2 hover:bg-[#eff4ff] rounded-md cursor-pointer block"
                >
                  <i class="pi pi-cog mx-2 cursor-pointer"></i>
                </router-link>
              </div>
              <div
                class="w-[30px] h-[30px] rounded-full bg-[#ABC4FF] flex justify-center items-center"
              >
                <span class="text-[12px]">AP</span>
              </div>
            </div>
          </header>
        </div>

        <!-- main -->
        <div class="w-[100%] h-[100%]">
          <!-- <RouterView /> -->
          <router-view />
        </div>
        <!--  -->
      </div>
    </div>
  </div>
</template>

<script setup >
import { ref } from "vue";
import { useTopBarStore } from "@/stores/topbar";

const useTopBar = useTopBarStore();
</script>