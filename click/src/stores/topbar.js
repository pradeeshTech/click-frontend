import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useTopBarStore = defineStore('topBar', () => {
              const sidebarOpen = ref(false);

              function  toggleSidebar(){
                sidebarOpen.value = !sidebarOpen.value;
              }

  return {
    sidebarOpen,
    toggleSidebar
  }
})