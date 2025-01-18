<script setup>
import TopBar from "@/components/TopBar.vue";
import mainDashboard from "@/views/mainDashboard.vue";
</script>

<template>
  <div class=" h-[100vh]  overflow-hidden" >
    <TopBar />
    <main class="h-[95vh] overflow-x-auto" >
      <mainDashboard />
    </main> 
  </div>
</template>
