<template>
    <header class="!h-[40px] bg-[#fff] shadow-md grid grid-cols-3 ">
        <div class=" flex justify-start items-center px-4">
            <i class="cursor-pointer pi pi-angle-right"></i>
        </div>
        <div class=" flex justify-center items-center mx-2 ">
            <div class=" w-[40px] flex justify-center items-center"><i
class="cursor-pointer text-[#222] pi pi-pencil"></i>
            </div>
            <div class=" w-[40px] border-x-[2px] border-gray-300 mx-2  flex justify-center items-center "><i class="pi pi-moon  text-[#222]"></i>
            </div>
            <div class="w-[40px] flex justify-center items-center"><i class="pi pi-link cursor-pointer  text-[#222] "></i>
            </div>
        </div>
        <div class=" flex items-center justify-end px-4">
            <div class=" w-[30px] h-[30px] rounded-full bg-[#ABC4FF] flex justify-center items-center mx-2 ">
                <span class=" text-[12px] ">AP</span>
            </div>
            <div><button class=" rounded-lg bg-[#222] text-[#ABC4FF] text-[14px] px-2 py-1 flex justify-center items-center mx-2">
<i class="fa-solid fa-cloud-arrow-up text-[#ABC4FF]"></i>
                    <span class=" mx-2"> Move to Live</span></button></div>
            <div class="" ><i class="pi pi-cog  mx-2 "></i></div>
        </div>
    </header>
</template>
<script setup >
import {ref} from 'vue';
</script>