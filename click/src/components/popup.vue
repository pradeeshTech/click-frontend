<template>
  <div
    class="top-[0px] flex w-[100%] justify-center !z-[1000] "
  >
    {{ popuptest }}
    <div
      ref="popupElement"
      :class="[
        'h-[60px] border-[2px] p-[16px] element-to-animate border-[#fff] rounded-lg flex justify-start items-center',
        styleClass,
      ]"
    >
      <div :class="['p-2 rounded-md flex justify-center', iconsClass]">
        <i
          :class="[icons, 'bg-[#fff] text-[#21263c] rounded-full p-1 text-xs']"
        ></i>
      </div>
      <span class="mx-2 text-[#21263c]">
        {{ message }}
      </span>
    </div>
  </div>
</template>
                        
<script setup>
import { ref, computed, defineProps, onMounted, watch } from "vue";
// import { usePosDashboard } from "@/stores/pos/posDashboard";
import { useCommon } from "@/stores/common";

const useStore = useCommon();

const props = defineProps({
  popUpType: {
    type: String, // Assuming it's a string, change if necessary
    required: true,
  },
  message: {
    type: String, // Assuming it's a string, change if necessary
    required: true,
  },
});

const popupElement = ref(null);

const styleClass = computed(() => {
  return {
    "!bg-[#e8f7f1]": props.popUpType === "success",
    "!bg-[#f8d7da]": props.popUpType === "error",
    "bg-[#ffffd2]": props.popUpType === "warn",
    "text-center": true, // This class is always applied
  };
});

const iconsClass = computed(() => {
  return {
    "!bg-[#22b378]": props.popUpType === "success",
    "!bg-[red]": props.popUpType === "error",
    "bg-[yellow]": props.popUpType === "warn",
    "text-center": true, // This class is always applied
  };
});

const icons = computed(() => {
  if (props.popUpType === "success") return "pi pi-check";
  if (props.popUpType === "error") return "pi pi-times";
  if (props.popUpType === "warn") return "pi pi-exclamation-triangle";
  return ""; // Default case, if no match
});

function popupClose() {
  if (useStore.toaster.isEnable && popupElement.value) {
    // Fade-out the popup after 3 seconds
    setTimeout(() => {
      popupElement.value.classList.add("fade-out");
    }, 3000);

    // Disable the popup after fade-out completes (assuming 1 second fade duration)
    setTimeout(() => {
      useStore.toaster.isEnable = false;
    }, 4000); // 1 second for fade-out to complete after the initial 3 seconds
  }
}

// Ensure popupClose runs every time the toaster is enabled
watch(
  () => useStore.toaster.isEnable,
  (newVal) => {
    if (newVal) {
      popupClose();
    }
  }
);

onMounted(() => {
  if (useStore.toaster.isEnable) {
    popupClose();
  }
});
</script>
                        
                        <style>
.bg {
  background: rgba(0, 172, 0, 0.685);
}

@keyframes slideDown {
  0% {
    transform: translateY(0);
    opacity: 0;
  }
  100% {
    transform: translateY(50px);
    opacity: 1;
  }
}

/* Apply the animation to the element */
.element-to-animate {
  animation: slideDown 1s ease forwards;
}

/* Optional: Define the initial state for the element */
.element-to-animate {
  opacity: 0;
  transform: translateY(0);
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    transform: translateY(-50px);
  }
}

.fade-out {
  animation: fadeOut 1s ease forwards;
}
</style>
                        