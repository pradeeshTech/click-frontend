<template>
  <div>
    <div class="w-[100%] flex justify-center items-center flex-col my-[20px]">
      <h1 class=" text-[34px] font-semibold ">Pick your Perfect Plan</h1>
      <span class=" my-1 text-[14px] " >Manage restaurant operations efficiently without burning a hole in your
        pockets</span
      >
    </div>

    <!-- flex justify-center items-center max-[600px]:flex-col -->
     <div class="!overflow-y-scroll h-[500px] " >
      <div class=" grid grid-cols-4  ">
        <div
          v-for="(item, index) in planJson"
          :key="index"
          class="w-[260px] !bg-[#fff] border-[1px] m-2 overflow-hidden rounded-sm "
        >
        <!-- {{ item }} -->
          <div
            v-if="item.most_popular"
            class="bg-[#76ADFF] h-[40px] flex justify-center items-center rounded-t-sm "
          >
            {{ item.most_popular }}
          </div>
          <div class="h-[100%] p-[16px] flex justify-start flex-col">
            <p class="font-semibold">{{ item.plan_name }}</p>

            <span class="my-2 text-[#6E6B7B] font-semibold text-[12px]">
              {{ item.plan_explain }}
            </span>
            <span class="text-[12px]">
              {{ item.plan_description }}
            </span>

            <div class="flex justify-start items-center my-[20px]">
              <span class="text-[12px] text-[#6E6B7B] line-through">
                {{ item.original_price }}
              </span>
              <span
                class="mx-2 px-2 h-[20px] text-[10px] flex justify-center items-center rounded-xl bg-[#76adffa4] text-[#3A4EF4]"
              >
                {{ item.discount }}
              </span>
            </div>

            <h1 class="text-[#2D2D2D] text-[24px] font-semibold">
              {{ item.price_per_month }} <span class="text-[12px]">/mo</span>
            </h1>
            <span class="text-[#3A4EF4] text-[12px] font-semibold">
              {{ item.additional_offer }}
            </span>

            <div class="flex justify-center my-3">
              <button
                class="bg-[#3A4EF4] rounded-[6px] text-[10px] text-[white] w-[180px] h-[30px]"
              >
                Choose Plan
              </button>
            </div>
            <hr class="my-2 border-[1.5px]" />
            <div
              class="my-[4px]"
              v-for="(feature, index) in item.features"
              :key="index"
            >
              <div class="flex items-center">
                <div>
                  <i
                    class="pi bg-[#53FF8E] p-[4px] text-[9px] rounded-full text-[#fff] pi-check mr-2"
                  ></i>
                </div>
                <div>
                  <span class="text-[12px]"> {{ feature }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
     </div>


  </div>
</template>

<script setup >
import {ref,onMounted,computed} from "vue";

const planJson = ref([]);


// const why_choose_us = ref([]);

onMounted(async () => {
  try {
    const response = await import("../Json/PlanJson.json");
    planJson.value = response.default.ad_management_plans;
    console.log(planJson.value, "planJson");
    // why_choose_us.value = response.default.why_choose_us;
  } catch (error) {
    console.error("Error loading JSON:", error);
  }
});

</script>