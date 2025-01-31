<template>
  <header class="!h-[40px] bg-[#fff] shadow-md grid grid-cols-3">
    <div class="flex justify-start items-center px-4">
      <i class="cursor-pointer pi pi-angle-right"></i>
    </div>
    <div class="flex justify-center items-center mx-2">
      <div class="w-[40px] flex justify-center items-center">
        <i
          class="cursor-pointer text-[#222] pi pi-pencil"
          @click="useTopBar.toggleSidebar"
        ></i>
      </div>
      <div
        class="w-[40px] border-x-[2px] border-gray-300 mx-2 flex justify-center items-center"
      >
        <i class="pi pi-moon text-[#222]"></i>
      </div>
      <div class="w-[40px] flex justify-center items-center">
        <i class="pi pi-link cursor-pointer text-[#222]"></i>
      </div>
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
            <i class="pi pi-cog mx-2 cursor-pointer" ></i>
          </router-link>
        <!-- <i
          @click="dropdown = !dropdown"
          class="pi pi-cog mx-2 cursor-pointer"
          @mouseover="dropdown = true"
        ></i> -->
        <!-- <ul
          v-if="dropdown"
          @mouseleave="dropdown = false"
          class="solution-list flex flex-col border !w-[200px] rounded-md bg-[#fff] h-auto !right-0 !z-[40]"
        >
          <router-link
            to="/profile"
            class="p-2 hover:bg-[#eff4ff] rounded-md cursor-pointer block"
          >
            Profile
          </router-link>
          <router-link
            to="/plan-details"
            class="p-2 hover:bg-[#eff4ff] rounded-md cursor-pointer block"
          >
            Plan Details
          </router-link>
        </ul> -->
      </div>

      <div
        class="w-[30px] h-[30px] rounded-full bg-[#ABC4FF] flex justify-center items-center"
      >
        <span class="text-[12px]">AP</span>
      </div>
    </div>
  </header>
</template>
<script setup >
import { ref } from "vue";
import { useTopBarStore } from "@/stores/topbar";

const useTopBar = useTopBarStore();
const dropdown = ref(false);
</script>

<style>
/* .dropdown:hover .solution-list , .solution-list::before {
  display: flex;
  opacity: 1;
  transform: translateY(0);
}

.pi-cog:hover + .solution-list , .solution-list::before {
  display: flex;
  opacity: 1;
  transform: translateY(0);
}

.solution-list:hover .solution-list {
  display: flex !important; 
  opacity: 1;
  transform: translateY(0);
}
.solution-list::before {
  content: ''; 
  width: 20px;
  height: 20px;
  background: #000;
  position: absolute;
  left: -20px;
} */

.solution-list {
  position: absolute;
  background: #fff;
  margin: 0;
  box-shadow: 0 11px 90px 0 rgba(65, 67, 132, 0.13);
  padding: 5px 8px;
  top: 40px;
  right: 0;
  width: auto;
  /*  display: none; Initially hidden */
  opacity: 1; /* Invisible initially */
  transform: translateY(-10px); /* Slight upward offset */
  transition: opacity 1s ease, transform 1s ease; /* Smooth transition */
  border-radius: 5px;
  font-size: 15px;
  z-index: 40;
}

.solution-list li {
  list-style: none; /* Remove bullet points */
}

.solution-list li:hover {
  background: #eff4ff;
  border-radius: 5px;
  color: #000;
  transition: background 1s ease, color 1s ease; /* Smooth hover effect */
}
</style>