<template>
  <div className=" m-[20px] flex justify-between items-start h-[140px] ">
    <div className=" flex justify-start items-center ">
      <div className=" ">
        <h1>Avatar Name</h1>
        <div className=" h-[100px] w-[100px] bg-green-300 rounded-full "></div>
      </div>

      <div className="">
        <h1>Pradeesh.A</h1>
        <p>Pradeeshtech0@gmail.com</p>
      </div>
    </div>

    <div className="  flex flex-col justify-end ">
      <h1 className="text-[24px]">Plan Expiry Date</h1>
      <p className=" my-[10px] text-end ">14-Feb-2025</p>
    </div>
  </div>

  <div v-if="changePassword" class="flex justify-center items-start h-[100%]">
    <div
      class="w-[400px] flex flex-col justify-start items-center h-[100%] py-2"
    >
    <div class=" flex flex-col justify-center items-start my-2" >
              <label for="">First Name</label>
              <input type="text" name="" id="" class="rounded-md h-[30px]" />
    </div>

    <div class=" flex flex-col justify-center items-start my-2" >
              <label for="">Last Name</label>
              <input type="text" name="" id="" class="rounded-md h-[30px]" />
    </div>
    
    <div class=" flex flex-col justify-center items-start my-2" >
              <label for="">User Portal URL</label>
              <input type="text" name="" id="" class="rounded-md h-[30px]" />
    </div>

    <div class=" flex flex-col justify-center items-start my-2 w-[320px]  " >
              <span @click="changePassword =false"  class=" cursor-pointer underline text-start w-[100%] text-blue-400 text-[14px]  " >Change password</span>
    </div>

    <div class=" flex justify-center items-center my-2 " >
              <button class=" h-[30px] px-4 py-2 bg-blue-400  flex justify-center items-center rounded-md text-white" > Submit</button>
    </div>

    </div>
  </div>

  <!-- password change -->

  <div v-else-if="!changePassword && !redirectToOtpPage"  class="flex justify-center items-center h-[100%]">
    <div
      class="w-[400px]  flex flex-col justify-start items-center h-[100%] py-2 "
    >
    <div class=" flex flex-col justify-center items-start my-2" >
              <label for="">Email</label>
              <input type="text" name="" id="" class="rounded-md h-[30px]" />
    </div>
    <div class=" flex flex-col justify-center items-start my-2" >
              <label for="">New Password</label>
              <input type="text" name="" id="" class="rounded-md h-[30px]" />
    </div>
    <div class=" flex flex-col justify-center items-start my-2" >
              <label for="">Confirm Password</label>
              <input type="text" name="" id="" class="rounded-md h-[30px]" />
    </div>
    <div class=" w-[320px] flex justify-between  items-center " >
              <span class=" text-blue-400 underline cursor-pointer  text-start " >Re-send OTP</span>
              <span class=" text-blue-400 underline cursor-pointer  text-end " >Send OTP</span>
    </div>

    <div class="flex justify-center items-center space-x-2 my-2">
    <input
      v-for="(digit, index) in otp"
      :key="index"
      ref="otpInputs"
      type="text"
      maxlength="1"
      v-model="otp[index]"
      class="w-[38px] h-[38px] text-center text-xl border border-gray-300 rounded focus:border-blue-500 focus:ring-2 focus:ring-blue-300 outline-none"
      @input="moveToNext(index)"
      @keydown.backspace="moveToPrevious(index)"
    />
  </div>
    
    <div class=" flex items-center my-4 " >
              <button @click="changePassword = true" class=" mx-2 rounded-md flex justify-start items-center border-[1px] border-[#000] px-4  py-1 " >
              <i class=" pi pi-arrow-left  mr-2" ></i>
              <p>Back</p>
              </button>
              <button class=" bg-blue-400 text-white  px-4  py-1 rounded-md  " >
               Submit
              </button>

              
    </div>
    </div>

  </div>

</template>
<script setup >
import { ref, watch, nextTick } from "vue";

const changePassword =  ref(true);

const redirectToOtpPage = ref(false);

const otp = ref(["", "", "", ""]);
const otpInputs = ref([]); // Reference to all input fields

const moveToNext = (index) => {
  if (otp.value[index] && index < otp.value.length - 1) {
    nextTick(() => otpInputs.value[index + 1]?.focus());
  }
};

const moveToPrevious = (index) => {
  if (!otp.value[index] && index > 0) {
    nextTick(() => otpInputs.value[index - 1]?.focus());
  }
};

// Auto-focus on first input when component loads
watch(otp, () => {
  if (otp.value.join("").length === 4) {
    console.log("OTP Entered:", otp.value.join(""));
  }
});

</script>
<style>
.input {
  box-shadow: inset 0 0.0625em 0.125em #0a0a0a0d;
  max-width: 100%;
  width: 100%;
  background-color: #fff;
  border-color: #dbdbdb;
  border-radius: 4px;
  color: #363636;
}
</style>