<template>
  <div class="h-[100%]">
    <div class="flex justify-between items-center m-4">
      <div>
        <h1 class="text-[34px]">Dashboard</h1>
        <span>An any way to manage viewer with care and precision.</span>
      </div>

      <button class="bg-[#2d2d2d] text-[#fff] px-[12px] py-[4px] rounded-md">
        <i class="pi pi-download mr-2"></i> Download report
      </button>
    </div>

    <!-- main -->
    <div class="grid grid-cols-4 w-[100%] p-2 h-[100%] gap-4">
      <div
        class="col-span-3 h-[100%] bg-white shadow-lg border-[1px] border-gray-100 !overflow-y-scroll"
      >

      <!--  -->
      <table class="w-[100%] border-collapse">
        <thead>
          <tr class="bg-gray-100">
            <th class="px-4 py-2 border text-start">S:NO</th>
            <th class="px-4 py-2 border text-start">Ads Name</th>
            <th class="px-4 py-2 border text-start">Expiry Date</th>
            <th class="px-4 py-2 border text-start">Promo Code</th>
            <th class="px-4 py-2 border text-start">Count No</th>
          </tr>
        </thead>
        <tbody>
          <!-- Check if filteredData has items -->
          <template v-if="filteredData && filteredData.length > 0">
            <tr v-for="(item, index) in filteredData" :key="index">
              <td class="px-4 py-2 border">{{ item.no }}</td>
              <td class="px-4 py-2 border">{{ item.ads_name }}</td>
              <td class="px-4 py-2 border">{{ item.expiry_date }}</td>
              <td class="px-4 py-2 border">{{ item.promo_code }}</td>
              <td class="px-4 py-2 border">
                <div class="tooltip-container">
                  <!-- {{ getShortNotes(item.projectType, 30) }} -->
                  <span class="tooltip-text">{{ item.click_count_no }}</span>
                </div>
              </td>
            </tr>
          </template>
          <!-- Fallback row for no data -->
          <template v-else>
            <tr>
              <td class="px-4 py-2 border text-center text-gray-400" colspan="7">
                Data Not Found
              </td>
            </tr>
          </template>
        </tbody>
      </table>
      <!--  -->

    </div>

      <!-- side card -->
      <div class="col-span-1 grid grid-rows-2 gap-4">
        <div class="bg-white rounded-md shadow-md border-[1px] border-gray-200">
          <h1
            class="border-b-[1px] p-2 text-[14px] px-[20px] font-semibold py-2"
          >
            View Current Plan
          </h1>
          <!--  -->
          <div class="grid grid-cols-5 gap-4 p-2 text-[14px] ">
            <div class="col-span-2">
              <span
                class="w-[40px] h-[40px] bg-green-400 text-[#fff] flex justify-center items-center rounded-md"
              >
                SP
              </span>
            </div>
            <div class="flex justify-start items-center col-span-3">
              Starter Plan
            </div>
            <!--  -->
            <div class="col-span-2 flex items-center">
              <span
                class=" text-center flex items-center"
              >
                status
              </span>
            </div>
            <div class="flex justify-start items-center col-span-3 ">
              <button class=" bg-green-400 text-[#fff] py-1 px-2 rounded-md text-[14px] " >Activated</button>
            </div>
            <!--  -->

            <div class="col-span-2 flex items-center">
              <span
                class=" text-center flex items-center"
              >
                Renews
              </span>
            </div>
            <div class="flex justify-start items-center col-span-3 ">
              <span>Monthly</span>
            </div>
            <!--  -->
            <div class="col-span-2 flex items-center">
              <span
                class=" text-center flex items-center"
              >
                Price
              </span>
            </div>
            <div class="flex justify-start items-center col-span-3 ">
              <span>$333.8 ($398.84) incl.tax</span>
            </div>

            <!--  -->

            <div class="col-span-2 flex items-center">
              <span
                class=" text-center flex items-center"
              >
                Purchased 
              </span>
            </div>
            <div class="flex justify-start items-center col-span-3 ">
              <span>28-Nov-2024</span>
            </div>

            <div class="col-span-2 flex items-center">
              <span
                class=" text-center flex items-center"
              >
                Renewal Date 
              </span>
            </div>
            <div class="flex justify-start items-center col-span-3 ">
              <span>28-Jan-2024</span>
            </div>
            <!--  -->
          </div>
          <!--  -->
        </div>
        <!--  -->
        <div class="bg-white rounded-md shadow-md">
          <span class=" flex justify-center items-center p-2 w-[100%] " >Notification</span>
          <div class=" h-[140px] w-[100%]  flex flex-col justify-center items-center  " >
            <span class="" >You're all up to date!</span>
            <span class=" my-2 " >You have no unread messages.</span>
          </div>
        </div>
s
      </div>
    </div>
  </div>
</template>

<script setup >
import { ref } from "vue";

const filteredData = ref([
  { no: 1, ads_name: "FlipKart", expiry_date: "01-02-2024", promo_code: "9090", click_count_no: "100" },
  { no: 2, ads_name: "Amazon", expiry_date: "01-02-2024", promo_code: "9090", click_count_no: "100" },
  { no: 3, ads_name: "Myntra", expiry_date: "01-02-2024", promo_code: "8080", click_count_no: "150" },
  { no: 4, ads_name: "Snapdeal", expiry_date: "01-02-2024", promo_code: "7070", click_count_no: "200" },
  { no: 5, ads_name: "eBay", expiry_date: "01-02-2024", promo_code: "6060", click_count_no: "250" }
]);

const getShortNotes = (notes, length) =>{
  notes.length > length ? notes.substring(0, length) + "..." : notes;}

</script>