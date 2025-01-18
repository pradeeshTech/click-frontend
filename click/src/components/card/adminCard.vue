<template>
  <div class="h-[340px] mr-2 rounded-[16px] shadow-md border relative bg-[#2d2d2d] text-[#fff] " >
    <span class=" text-[#fff] bg-green-400 text-[12px] py-[4px] px-[12px] rounded-xl absolute right-2 top-2 " >2d Left</span>
              <img src="../../assets/imgs/Frame 1000002895.png" alt=""  class=" rounded-t-[16px] h-[160px] " >
              <div class="p-[16px] flex flex-col " >
                <span class="  text-[22px] " >2 months Audible</span>
                <p class=" text-[14px] my-2 " >Premium Plus Membership at just $2 Premium Plus Membership at just $2 Premium Plus Membership at just $2</p>
                <div class=" bg-gray-700  border-none flex justify-between items-center h-[40px] w-[100%]  rounded-[24px] " >
                  <input :type="inputField" v-model="promoCode" name="" disabled class=" w-[72%] h-[100%] text-[#fff]   bg-transparent border-none " id="">
                  <i class=" pi pi-clone mr-3 cursor-pointer " v-if="inputField =='text'" @click="copyToClipboard"  ></i>
                  <span class=" text-blue-300 text-[14px] mr-2 cursor-pointer " v-else @click="inputField='text'"  >Get code</span>
                </div>
              </div>
              
              <!-- <i class="pi pi-link cursor-pointer  text-[#222]" ></i> -->
  </div>
</template>
<script setup >
import {ref} from 'vue'

const promoCode = ref('DISCOUNT2025');

const inputField = ref('password');

const copyToClipboard = () => {
  if (promoCode.value) {
    navigator.clipboard
      .writeText(promoCode.value)
      .then(() => {
        alert("Promo code copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy promo code: ", err);
      });
  } else {
    alert("No promo code to copy!");
  }
};

</script>