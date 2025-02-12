<template>
  <div class="w-[100%] ">
    <!-- grid grid-cols-3 relative -->
    <!-- <div class="h-[100vh] bg max-[900px]:hidden flex justify-center !items-center col-span-1">
                  <div
                    class="w-[100px] h-[100px] rounded-[20px] bg-white shadow-xl flex justify-center items-center"
                  >
                    <img src="../imgs/think.png" class="w-[100%] h-[100%]" alt="" />
                  </div>
                </div> -->

                <!--  -->

                
    <!-- <div
      class="col-span-3 max-[900px]:!col-span-3 flex flex-col items-center py-[5%] h-[100vh] overflow-y-auto"
    >
      <div class="w-[100%] px-[5%]">
        <h1 class="text-[24px] font-semibold">
          You’re almost there! Complete your order
        </h1>

        <p class="text-[24px] font-semibold my-[40px]">1. Check your order</p>

        <div
          class="grid grid-cols-4 max-[600px]:grid-cols-2 w-[100%] gap-2 my-[30px]"
        >
          <div
            class="bg-white border-[1px] h-[180px] max-h-[240px] rounded-md p-[5%]"
          >
            <div class="flex justify-center">
              <input type="radio" class="mx-2" />
              <span>1 MONTH</span>
            </div>
            <div class="flex flex-col justify-center items-center my-[12px]">
              <span class="block font-semibold text-[24px]">₹599.00</span>
              <span class="text-[#727565] text-[12px] font-semibold"
                >INR / month</span
              >
            </div>
            <p class="text-[12px] text-center text-[#727565]">
              Plan renews at ₹379.00/month on 03/08/2025
            </p>
          </div>
          <div
            class="bg-white border-[1px] h-[180px] max-h-[240px] rounded-md p-[5%]"
          >
            <div class="flex justify-center">
              <input type="radio" class="mx-2" />
              <span>1 MONTH</span>
            </div>
            <div class="flex flex-col justify-center items-center my-[12px]">
              <span class="block font-semibold text-[24px]">₹599.00</span>
              <span class="text-[#727565] text-[12px] font-semibold"
                >INR / month</span
              >
            </div>
            <p class="text-[12px] text-center text-[#727565]">
              Plan renews at ₹379.00/month on 03/08/2025
            </p>
          </div>
          <div
            class="bg-white border-[1px] h-[180px] max-h-[240px] rounded-md p-[5%]"
          >
            <div class="flex justify-center">
              <input type="radio" class="mx-2" />
              <span>1 MONTH</span>
            </div>
            <div class="flex flex-col justify-center items-center my-[12px]">
              <span class="block font-semibold text-[24px]">₹599.00</span>
              <span class="text-[#727565] text-[12px] font-semibold"
                >INR / month</span
              >
            </div>
            <p class="text-[12px] text-center text-[#727565]">
              Plan renews at ₹379.00/month on 03/08/2025
            </p>
          </div>
          <div
            class="bg-white border-[1px] h-[180px] max-h-[240px] rounded-md p-[5%]"
          >
            <div class="flex justify-center">
              <input type="radio" class="mx-2" />
              <span>1 MONTH</span>
            </div>
            <div class="flex flex-col justify-center items-center my-[12px]">
              <span class="block font-semibold text-[24px]">₹599.00</span>
              <span class="text-[#727565] text-[12px] font-semibold"
                >INR / month</span
              >
            </div>
            <p class="text-[12px] text-center text-[#727565]">
              Plan renews at ₹379.00/month on 03/08/2025
            </p>
          </div>
        </div>

        <p class="text-[24px] font-semibold my-[40px]">
          2. Create your account
        </p>

        <div class="w-[100%] flex justify-center">
          <div
            class="border-[1px] h-[500px] w-[600px] max-[600px]:w-[345px] rounded-md p-[16px]"
          >
            <div class="flex justify-between items-center">
              <span class="font-semibold text-[12px]">
                Premium Plan- 1 month plan ₹599.00</span
              >
              <span class="font-semibold">₹599.00</span>
            </div>

            <hr class="w-[100%] my-2" />

            <div class="grid grid-cols-2 gap-2">
              <div class="col-span-2">
                <label for=""></label>
                <input
                  type="text"
                  name=""
                  v-model="formDataSignUp.firstName"
                  placeholder="First name"
                  class="w-[100%] input-sty !rounded-[4px]"
                  id=""
                />
                <span
                  v-if="errors.name"
                  class="text-[12px] text-red-500 mt-1"
                  >{{ errors.name }}</span
                >
              </div>
              <div class="my-2 col-span-2">
                <input
                  type="text"
                  name=""
                  v-model="formDataSignUp.email"
                  placeholder="Email"
                  class="w-[100%] input-sty !rounded-[4px]"
                  id=""
                />
                <span
                  v-if="errors.email"
                  class="text-[12px] text-red-500 mt-1"
                  >{{ errors.email }}</span
                >
              </div>
              <div class="my-2 col-span-2">
                <input
                  type="text"
                  name=""
                  v-model="formDataSignUp.organization_name"
                  placeholder="organization"
                  class="w-[100%] input-sty !rounded-[4px]"
                  id=""
                />
                <span
                  v-if="errors.organization_name"
                  class="text-[12px] text-red-500 mt-1"
                  >{{ errors.organization_name }}</span
                >
              </div>
              <div class="my-2 col-span-2">
                <input
                  type="text"
                  name=""
                  placeholder="Phone Number"
                  v-model="formDataSignUp.phoneNumber"
                  class="w-[100%] input-sty !rounded-[4px]"
                  id=""
                />
                <span
                  v-if="errors.phoneNumber"
                  class="text-[12px] text-red-500 mt-1"
                  >{{ errors.phoneNumber }}</span
                >
              </div>
              <div class="my-2 col-span-2">
                <input
                  type="text"
                  name=""
                  v-model="formDataSignUp.createPassword"
                  placeholder="Create Password"
                  class="w-[100%] input-sty !rounded-[4px]"
                  id=""
                />
                <span
                  v-if="errors.createPassword"
                  class="text-[12px] text-red-500 mt-1"
                  >{{ errors.createPassword }}</span
                >
              </div>
              <div class="my-2 col-span-2">
                <input
                  type="text"
                  name=""
                  v-model="formDataSignUp.confirmPassword"
                  placeholder="Confirm Password"
                  class="w-[100%] input-sty !rounded-[4px]"
                  id=""
                />
                <span
                  v-if="errors.confirmPassword"
                  class="text-[12px] text-red-500 mt-1"
                  >{{ errors.confirmPassword }}</span
                >
              </div>
              <div class="flex justify-start items-center">
                <button
                  class="w-[180px] h-[40px] btn-bg-sign rounded-md"
                  @click="submitForm"
                >
                  signup
                </button>
              </div>
              <div class="flex justify-end items-center">
                <RouterLink to="/login"
                  ><span class="text-[#159AFF] underline"
                    >login</span
                  ></RouterLink
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> -->

    <div class=" flex  h-[100vh] justify-center items-center " >

      
      <div class="grid grid-cols-2 gap-2 min-h-[400px] w-[450px]  p-[16px] rounded-[16px] border-[1px] border-[#fffeff] " style="box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;" >
        <div class="col-span-2 flex flex-col items-center   " >
          <div class=" flex items-center " >
            <img src="../assets/imgs/logo.png" class=" w-[48.8px] " alt="">
            <!-- <span class="" >View2click</span> -->
          </div>

          <span>Sign up for free</span>
 
      </div>
              <div class="col-span-2">
                <label for=""></label>
                <input
                  type="text"
                  name=""
                  v-model="formDataSignUp.firstName"
                  placeholder="First name"
                  class="w-[100%] input-sty !rounded-[4px]"
                  id=""
                />
                <span
                  v-if="errors.name"
                  class="text-[12px] text-red-500 mt-1"
                  >{{ errors.name }}</span
                >
              </div>
              <div class="my-2 col-span-2">
                <input
                  type="text"
                  name=""
                  v-model="formDataSignUp.email"
                  placeholder="Email"
                  class="w-[100%] input-sty !rounded-[4px]"
                  id=""
                />
                <span
                  v-if="errors.email"
                  class="text-[12px] text-red-500 mt-1"
                  >{{ errors.email }}</span
                >
              </div>
              <!-- <div class="my-2 col-span-2">
                <input
                  type="text"
                  name=""
                  v-model="formDataSignUp.organization_name"
                  placeholder="organization"
                  class="w-[100%] input-sty !rounded-[4px]"
                  id=""
                />
                <span
                  v-if="errors.organization_name"
                  class="text-[12px] text-red-500 mt-1"
                  >{{ errors.organization_name }}</span
                >
              </div> -->
              <!-- <div class="my-2 col-span-2">
                <input
                  type="text"
                  name=""
                  placeholder="Phone Number"
                  v-model="formDataSignUp.phoneNumber"
                  class="w-[100%] input-sty !rounded-[4px]"
                  id=""
                />
                <span
                  v-if="errors.phoneNumber"
                  class="text-[12px] text-red-500 mt-1"
                  >{{ errors.phoneNumber }}</span
                >
              </div> -->
              <div class="my-2 col-span-2">
                <input
                  type="text"
                  name=""
                  v-model="formDataSignUp.createPassword"
                  placeholder="Create Password"
                  class="w-[100%] input-sty !rounded-[4px]"
                  id=""
                />
                <span
                  v-if="errors.createPassword"
                  class="text-[12px] text-red-500 mt-1"
                  >{{ errors.createPassword }}</span
                >
              </div>
              <div class="my-2 col-span-2">
                <input
                  type="text"
                  name=""
                  v-model="formDataSignUp.confirmPassword"
                  placeholder="Confirm Password"
                  class="w-[100%] input-sty !rounded-[4px]"
                  id=""
                />
                <span
                  v-if="errors.confirmPassword"
                  class="text-[12px] text-red-500 mt-1"
                  >{{ errors.confirmPassword }}</span
                >
              </div>
              <div class="flex col-span-2 justify-start items-center">
                <button
                  class="w-[180px] h-[40px] btn-bg-sign rounded-md "
                  @click="submitForm"
                >
                  signup
                </button>
              </div>

              <hr class=" w-[100%] col-span-2 my-4" >
              <div class=" col-span-2 " >
                <div class="flex justify-start items-center">
                  <span>Already have an account?</span>
                <RouterLink to="/login"
                  ><span class="text-[#159AFF] underline mx-2 "
                    >Sign in</span
                  ></RouterLink
                >
              </div>
              </div>

            </div>

    </div>



    <popup
      v-if="Common.toaster.isEnable"
      class="absolute"
      :popUpType="Common.toaster.status"
      :message="Common.toaster.Message"
    />
  </div>
</template>
            <script setup>
import { useApiStore } from "@/api";
import { ref, computed } from "vue";
import { useCommon } from "@/stores/common";
import popup from "@/components/popup.vue";

const useApi = useApiStore();
const Common = useCommon();

const formDataSignUp = ref({
  firstName: "pradeesh",
  email: "pradeesh@gmail.com",
  organization_name: "",
  phoneNumber: "",
  createPassword: "pradeesh@12345",
  confirmPassword: "pradeesh@12345",
});

const errors = ref({});

async function signup() {
  Common.toaster.isEnable = true;
  const url = "/register";
  const payload = {
    name: formDataSignUp.value.firstName,
    email: formDataSignUp.value.email,
    password: formDataSignUp.value.createPassword,
    mobile:'9962746698'
  };

  try {
    let res = await useApi.postMethod(url, payload); // Await the result from postMethod
    if (res.status === true) {
      Common.toaster.status = "success";
      Common.toaster.Message = res.message || "";
      setTimeout(()=>{
          router.push({ name: "/" }); // Change "Dashboard" to your desired route name
        },1000)
    } else {
      Common.toaster.status = "warn";
      Common.toaster.Message = res.message || "";
    }
  } catch (error) {
    // Handle any errors from the API call here
    console.error("Error during signup:", error);
    Common.toaster.status = "error";
    Common.toaster.Message = "Signup failed. Please try again.";
  }
}

function submitForm() {
  errors.value = {};
  let isValid = true;

  // Validate First Name
  if (!formDataSignUp.value.firstName) {
    errors.value.name = "Please enter the first name.";
    isValid = false;
  } else if (formDataSignUp.value.firstName.length < 8) {
    errors.value.name = "First name must be at least 8 characters long.";
    isValid = false;
  }

  // Validate Email
  else if (!formDataSignUp.value.email) {
    errors.value.email = "Please enter the email ID.";
    isValid = false;
  } else if (!isValidEmail(formDataSignUp.value.email)) {
    errors.value.email = "Please enter a valid email ID.";
    isValid = false;
  }

  // Validate Organization Name
  // else if (!formDataSignUp.value.organization_name) {
  //   errors.value.organization_name = "Please enter the company name.";
  //   isValid = false;
  // }

  // Validate Phone Number
  // else if (!formDataSignUp.value.phoneNumber) {
  //   errors.value.phoneNumber = "Please enter the phone number.";
  //   isValid = false;
  // }
  //  else if (!isValidPhoneNumber(formDataSignUp.value.phoneNumber)) {
  //   errors.value.phoneNumber = "Please enter a valid phone number.";
  //   isValid = false;
  // }

  // Validate Password
  else if (!formDataSignUp.value.createPassword) {
    errors.value.createPassword = "Please enter the create password.";
    isValid = false;
  } else if (!formDataSignUp.value.confirmPassword) {
    errors.value.confirmPassword = "Please enter the confirm password.";
    isValid = false;
  } else if (
    formDataSignUp.value.confirmPassword !== formDataSignUp.value.createPassword
  ) {
    errors.value.createPassword = "Passwords do not match.";
    errors.value.confirmPassword = "Passwords do not match.";
    isValid = false;
  } else if (!isValidPassword(formDataSignUp.value.createPassword)) {
    errors.value.createPassword =
      "Password must be at least 8 characters long and contain at least 2 numbers and 1 special character.";
    isValid = false;
  } else {
    signup();
  }

  // If everything is valid, proceed with signup
  if (isValid) {
    signup();
  }

  console.log(isValid, "isValid :: ");

  return isValid;
}

// Helper function to validate phone number
function isValidPhoneNumber(phoneNumber) {
  const phonePattern = /^\d{10}$/; // Regex for a 10-digit phone number
  return phonePattern.test(+phoneNumber);
}

// Helper function to validate email (already exists)
function isValidEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

// Helper function to validate password (already exists)
function isValidPassword(password) {
  const passwordPattern = /^(?=.*\d{2})(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
  return passwordPattern.test(password);
}

const inputType = computed(() => {
  return showPassword.value ? "text" : "password";
});
</script>
            
            <style>
.bg {
  background-image: linear-gradient(
    -62deg,
    #66b6ff 0,
    #c6579a 33%,
    #f46b71 66%,
    #fcac64 100%
  );
}

.input-sty {
  /* padding: 6px 0 4px 16px;
  font-size: 16px;
  line-height: 24px;
  outline: transparent;
  background: transparent; */
  /* border: 1px solid rgba(128, 128, 128, 0.473); */
  /* border: none; */
  /* width: 100%;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px; */
  /* font-family: 'Lato',Segoe UI,sans-serif; */
  width: 100%;
  padding: 10px 10px;
  border-color: #d1d1d1;
  box-sizing: border-box;
  border: 1px solid #e8e8e8;

}
input{
  outline: none !important;
}

input:focus{
  transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
  background: #fffeff;
  border-radius: 4px;
  color: #000;
  outline: none !important;
}

.btn-bg-sign{
  padding: 5px 15px;
  width: auto;
  background: #6934FF;
  border-radius: 3px;
  color: #fff;
  font-size: 15px;
  border: 1px solid #6934FF;
  transition: all .2s;
  margin: 25px 0 0;
  line-height: 28px;
}
</style>