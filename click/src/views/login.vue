<template>
  <div class="flex justify-center items-center h-[100vh]">
    <div
      class="border-[1px] signin_box !rounded-[8px] border-[#e6e6e6] max-[600px]:!w-[375px]"
    >
      <div class="flex items-center relative left-[-20px]">
        <!-- <img src="../imgs/footer_logo.png" alt=""> -->
        <img src="../assets/imgs/logo.png" alt="" class="h-[60px]" />
        <p class="text-[24px] gk-wb-text-gradient">View2click</p>
      </div>
      <h1 class="text-[24px] my-2">Sign in</h1>
      <p for="">to access View2click</p>
      <input
        placeholder=" Email address "
        v-model="formDataSignUp.email"
        type="text"
        class="border-[1px] border-gray-300 rounded-sm my-4 input w-[100%]"
      />
      <span v-if="errors.email" class="text-[12px] text-red-500 mt-1">{{
        errors.email
      }}</span>
      <div class="relative">
        <i
          v-if="showPassword"
          class="pi pi-eye absolute right-2 top-[25px] cursor-pointer"
          @click="showPassword = !showPassword"
        ></i>
        <i
          v-else
          class="pi pi-eye-slash absolute right-2 top-[25px] cursor-pointer"
          @click="showPassword = !showPassword"
        ></i>
        <input
          placeholder="Password"
          :type="inputType"
          v-model="formDataSignUp.password"
          class="border-[1px] border-gray-300 rounded-sm my-4 w-[100%]"
        />
        <span v-if="errors.password" class="text-[12px] text-red-500 mt-1">{{
          errors.password
        }}</span>
      </div>

      <button
        class="bg-[#159AFF] text-[#fff] box-shadow: 0px 2px 2px #fff; w-[100%] rounded-sm my-4 h-[40px]"
        @click="submitForm()"
      >
        Next
      </button>

      <p class="text-[#555] text-center my-4 max-[400px]:text-[12px]">
        Don't have a Think account?
        <RouterLink to="/signup"
          ><span class="text-[#159AFF]"> Sign up now </span></RouterLink
        >
      </p>
    </div>
    <popup
      v-if="Common.toaster.isEnable"
      class="absolute"
      :popUpType="Common.toaster.status"
      :message="Common.toaster.Message"
    />
  </div>
</template>
            
<script setup >
import { computed, ref } from "vue";
import { useApiStore } from "@/api";
import { useCommon } from "@/stores/common";
import popup from "@/components/popup.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const useApi = useApiStore();
const Common = useCommon();

const formDataSignUp = ref({
  email: "karti@gmail.com",
  password: "K@rthi123",
});

const errors = ref({});

async function signIn() {
  Common.toaster.isEnable = true;

  const getUrl = "/login";
  const getPayload = {
    email: formDataSignUp.value.email,
    password: formDataSignUp.value.password,
  };

  try {
    const res = await useApi.postMethod(getUrl, getPayload); // Await the result directly
    console.log(res, "res ::");

    if (res) {
      const { token, message ,user } = res;

      if (!token) {
        // Handle case where token is missing
        console.log(res.data, "res.data without token");
        Common.toaster.status = "warn";
        Common.toaster.Message = message || "Token missing in response.";
      } else {
        // Successful login
        console.log("Token received:", token);
        Common.toaster.status = "success";
        Common.toaster.Message = message || "Operation successful.";
        // Optionally, store the token (e.g., in localStorage or Vuex/Pinia)
        localStorage.setItem("authToken", token);
        localStorage.setItem("user", JSON.stringify(user));

        setTimeout(()=>{
          router.push({ name: "home" }); // Change "Dashboard" to your desired route name
        },1000)
      }
    } else {
      // Handle unexpected response format
      console.error("Unexpected response structure:", res);
      Common.toaster.status = "error";
      Common.toaster.Message = "Unexpected response from server.";
    }
  } catch (err) {
    console.error(err, "Error in API call");
    Common.toaster.status = "error";
    Common.toaster.Message =
      err.response?.data?.message || "An unexpected error occurred.";
  }
}

const showPassword = ref("password");
const inputType = computed(() => {
  return showPassword.value ? "text" : "password";
});

// Helper function to validate email (already exists)
function isValidEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

function submitForm() {
  errors.value = {};
  let isValid = true;

  // Validate Email
  if (!formDataSignUp.value.email) {
    errors.value.email = "Please enter the email ID.";
    isValid = false;
  } else if (!isValidEmail(formDataSignUp.value.email)) {
    errors.value.email = "Please enter a valid email ID.";
    isValid = false;
  } else if (!formDataSignUp.value.password) {
    errors.value.password = "Please enter a valid password.";
    isValid = false;
  }
  // If everything is valid, proceed with signup
  if (isValid) {
    signIn();
  }

  return isValid;
}
</script>
            
            <style>
.signin_box {
  width: 500px;
  min-height: 540px;
  height: auto;
  background: #fff;
  box-sizing: border-box;
  padding: 50px 50px;
  border-radius: 2px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.gk-wb-text-gradient {
  background: linear-gradient(
    80.68deg,
    #008bedcc -0.13%,
    #6755e7c4 14.6%,
    #7544bee6 25.41%,
    #b3008bde 38.18%,
    #ff0066d9 52.91%,
    #ff3900e8 67.64%,
    #ff4e00e0 81.4%,
    #ff6d00de 98.09%
  );

  background-clip: border-box;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

input {
  border: none; /* Remove all borders */
  border-bottom: 1px solid #008bedcc; /* Add a blue border at the bottom */
  outline: none; /* Remove the default outline */
  padding: 5px; /* Optional: Add some padding for better appearance */
}

input:focus {
  outline: none; /* Ensure no outline on focus */
  border-bottom: 2px solid #008bedcc; /* Change border thickness on focus for better visibility */
}
</style>