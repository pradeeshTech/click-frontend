import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useCommon = defineStore('common', () => {
  const toaster = ref({
    isEnable: false,
    Message: "",
    status: ""
  }); 

  return {
    toaster
  };
});