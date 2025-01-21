<template>
  <div class="!overflow-y-scroll hv-[100vh]">
    <div class="">
      <ul class="flex space-x-2 rounded-xl bg-blue-300">
        <li
          class="py-1 cursor-pointer px-2 rounded-xl w-[50%] flex justify-center"
          @click="tabView = 0"
          :class="[tabView == 0 ? 'bg-[#3A4EF4] shadow-md  text-[#fff]' : '']"
        >
          Scroll Content
        </li>
        <li
          class="py-1 cursor-pointer px-2 rounded-xl w-[50%] flex justify-center"
          @click="tabView = 1"
          :class="[tabView == 1 ? 'bg-[#3A4EF4] shadow-md  text-[#fff]' : '']"
        >
          Gallery Content
        </li>
      </ul>
    </div>
    <div
      v-if="tabView == 0"
      class="border-[2px] h-[100%] p-2 rounded-lg my-2 mr-2 border-l-[1px]"
    >
      <div class="flex justify-between">
        <!-- Drag & Drop or Browse Area -->
        <div
          @dragover.prevent="handleDragOver"
          @dragleave="handleDragLeave"
          @drop="handleDrop"
          :class="{ 'bg-blue-100': isDragging }"
          v-if="!file"
          class="border-[2px] rounded-md border-dashed h-[200px] w-[100%] flex flex-col items-center justify-center"
        >
          <i class="pi pi-cloud-upload text-[30px] text-blue-300"></i>
          <p class="text-center mt-4">Choose a file or drag & drop it here</p>
          <span class="text-center text-[12px] mt-1 mb-4 text-gray-500">
            <!-- JPEG, PNG, PDF, and MP4 formats, up to 5MB -->
            JPEG, PNG and PDF, up to 5MB
          </span>
          <button
            @click="triggerFileInput"
            class="border border-gray-400 rounded-md text-[14px] px-[18px] py-1"
          >
            Browse File
          </button>
          <input
            type="file"
            ref="fileInput"
            class="hidden"
            @change="handleFileSelect"
            accept=".jpeg,.jpg,.png,.pdf,.mp4"
          />
        </div>

        <!-- File Details -->
        <div
          v-if="file"
          class="text-center border-[2px] border-blue-300 rounded-md border-dashed h-[200px] w-[100%]"
        >
          <!-- <p class="text-sm font-medium">Selected File: {{ file.name }}</p>
              <p class="text-sm text-gray-500">
                Size: {{ (file.size / 1024).toFixed(2) }} KB
              </p> -->
          <!-- Image Preview -->
          <div v-if="isImage(file.type)" class="h-[100%] relative">
            <img
              :src="previewUrl"
              alt="Preview"
              class="h-[100%] rounded-md w-[100%] object-fill "
            />
            <button
              @click="removeFile"
              class="border border-red-400 text-red-500 rounded-md text-[14px] px-[18px] py-1 mt-2 absolute top-1 right-3 bg-[#00000054]"
            >
              <i class="pi pi-trash"></i>
            </button>
          </div>
          <!-- Remove File Button -->
        </div>
      </div>

      <div class="my-2">
        <label for=""></label>Ads Link
        <input
          type="text"
          class="border-[1px] border-blue-300 h-[35px] rounded-md w-[100%] my-1"
          placeholder=" Enter the ads link "
        />
      </div>

      <div class="border-[1px] rounded-[16px] h-[260px] p-2 overflow-y-auto">
        <ul class="drag-list" v-if="items?.length > 0">
          <li
            v-for="(item, index) in items"
            :key="item.id"
            draggable="true"
            @dragstart="onDragStart(index)"
            @dragover.prevent
            @drop="onDrop(index)"
            class="drag-item flex items-center justify-between"
          >
            <div class="flex items-center">
              <img
                src="../assets/imgs/Frame 1000002895.png"
                alt=""
                class="border-[1px] rounded-md w-[40px] h-[40px] object-cover"
              />
              <span class="mx-2"> {{ item.name }}</span>
            </div>
            <i class="pi pi-trash text-red-500"></i>
          </li>
        </ul>
        <div v-else class="flex justify-center items-center h-[100%]">
          <p class="text-center text-gray-400">Data Not Found</p>
        </div>
      </div>
      <!-- <div class=" my-2" >
            <label for=""></label>Ads Link
            <input type="text" class=" border-[1px] border-[#2d2d2d] h-[35px] rounded-md w-[100%] my-1" placeholder=" Enter the ads link "  >
          </div> -->

      <div class="flex justify-center items-center my-2">
        <button
          class="border-[1px] border-blue-300 rounded-md px-[16px] py-1 shadow-md"
        >
          Add New
        </button>
        <button
          class="border-[1px] border-blue-300 rounded-md px-[16px] py-1 shadow-md mx-2"
        >
          Submit
        </button>
        <button
          class="border-[1px] border-blue-300 rounded-md px-[16px] py-1 shadow-md mx-2"
        >
          Delete
        </button>
      </div>
    </div>

    <div
      v-else
      class="border-[2px] h-[100%] p-2 rounded-lg my-2 mr-2 border-l-[1px]"
    >
      <div class="flex justify-between">
        <!-- Drag & Drop or Browse Area -->
        <div
          @dragover.prevent="handleDragOver"
          @dragleave="handleDragLeave"
          @drop="handleDrop"
          :class="{ 'bg-blue-100': isDragging }"
          v-if="!file"
          class="border-[2px] rounded-md border-dashed h-[200px] w-[100%] flex flex-col items-center justify-center"
        >
          <i class="pi pi-cloud-upload text-[30px] text-blue-300"></i>
          <p class="text-center mt-4">Choose a file or drag & drop it here</p>
          <span class="text-center text-[12px] mt-1 mb-4 text-gray-500">
            <!-- JPEG, PNG, PDF, and MP4 formats, up to 5MB -->
            JPEG, PNG and PDF, up to 5MB
          </span>
          <button
            @click="triggerFileInput"
            class="border border-gray-400 rounded-md text-[14px] px-[18px] py-1"
          >
            Browse File
          </button>
          <input
            type="file"
            ref="fileInput"
            class="hidden"
            @change="handleFileSelect"
            accept=".jpeg,.jpg,.png,.pdf,.mp4"
          />
        </div>

        <!-- File Details -->
        <div
          v-if="file"
          class="text-center border-[2px] border-blue-300 rounded-md border-dashed h-[200px] w-[100%]"
        >
          <!-- <p class="text-sm font-medium">Selected File: {{ file.name }}</p>
              <p class="text-sm text-gray-500">
                Size: {{ (file.size / 1024).toFixed(2) }} KB
              </p> -->
          <!-- Image Preview -->
          <div v-if="isImage(file.type)" class="h-[100%] relative">
            <img
              :src="previewUrl"
              alt="Preview"
              class="h-[100%] rounded-md w-[100%] object-fit "
            />
            <button
              @click="removeFile"
              class="border border-red-400 text-red-500 rounded-md text-[14px] px-[18px] py-1 mt-2 absolute top-1 right-3 bg-[#00000054]"
            >
              <i class="pi pi-trash"></i>
            </button>
          </div>
          <!-- Remove File Button -->
        </div>
      </div>
      <!-- <Calendar @date-selected="handleDateSelected" /> -->

      <div class="grid grid-cols-2 gap-4 ">
        <!-- first grid -->
        <div>
          <div class="my-2">
            <label for=""></label>Ads Link
            <input
              type="text"
              class="border-[1px] border-blue-300 h-[35px] rounded-md w-[100%] my-1"
              placeholder=" Enter the ads link "
            />
          </div>

          <div class="my-2">
            <label for=""></label>Address
            <textarea
              name=""
              class="border-[1px] border-blue-300 rounded-md w-[100%] my-1"
              id=""
            ></textarea>
          </div>
          <div class="my-2">
            <label for=""></label>Add Promo Code
            <input
              type="text"
              class="border-[1px] border-blue-300 h-[35px] rounded-md w-[100%] my-1"
              placeholder=" Enter the promo Code "
            />
          </div>
        </div>

        <!-- End first grid -->

        <!-- Second grid -->
        <div class="pb-[20px]" >
          <p class=" my-[8px] " >Content List</p>
          <div
            class="border-[1px] rounded-[16px] h-[260px] p-2 overflow-y-auto"
          >
            <ul class="drag-list" v-if="items?.length > 0">
              <li
                v-for="(item, index) in items"
                :key="item.id"
                draggable="true"
                @dragstart="onDragStart(index)"
                @dragover.prevent
                @drop="onDrop(index)"
                class="drag-item flex items-center justify-between"
              >
                <div class="flex items-center">
                  <img
                    src="../assets/imgs/Frame 1000002895.png"
                    alt=""
                    class="border-[1px] rounded-md w-[40px] h-[40px] object-cover"
                  />
                  <span class="mx-2"> {{ item.name }}</span>
                </div>
                <i class="pi pi-trash text-red-500"></i>
              </li>
            </ul>
            <div v-else class="flex justify-center items-center h-[100%]">
              <p class="text-center text-gray-400">Data Not Found</p>
            </div>
          </div>
        </div>
        <!-- End Second grid -->

      </div>

      <!-- <div class=" my-2" >
            <label for=""></label>Ads Link
            <input type="text" class=" border-[1px] border-[#2d2d2d] h-[35px] rounded-md w-[100%] my-1" placeholder=" Enter the ads link "  >
          </div> -->

      <div class="flex justify-center items-center my-2">
        <button
          class="border-[1px] border-blue-300 rounded-md px-[16px] py-1 shadow-md"
        >
          Add New
        </button>
        <button
          class="border-[1px] border-blue-300 rounded-md px-[16px] py-1 shadow-md mx-2"
        >
          Submit
        </button>
        <button
          class="border-[1px] border-blue-300 rounded-md px-[16px] py-1 shadow-md mx-2"
        >
          Delete
        </button>
      </div>
    </div>
  </div>
</template>
<script setup >
import { ref, computed } from "vue";
import Calendar from "@/components/Calendar.vue";

const action = ref(false);
const tabView = ref(0);

const isDragging = ref(false);
const file = ref(null);
const fileInput = ref(null);
const previewUrl = ref(null);

const handleDragOver = () => {
  isDragging.value = true;
};

const handleDragLeave = () => {
  isDragging.value = false;
};

const handleDrop = (event) => {
  isDragging.value = false;
  const droppedFile = event.dataTransfer.files[0];
  if (droppedFile) {
    validateFile(droppedFile);
  }
};

const handleFileSelect = (event) => {
  const selectedFile = event.target.files[0];
  if (selectedFile) {
    validateFile(selectedFile);
  }
};

const triggerFileInput = () => {
  fileInput.value.click();
};

const validateFile = (selectedFile) => {
  const allowedFormats = [
    "image/jpeg",
    "image/png",
    "application/pdf",
    "video/mp4",
  ];
  if (!allowedFormats.includes(selectedFile.type)) {
    alert("Invalid file format. Please select JPEG, PNG, PDF, or MP4 files.");
    return;
  }
  if (selectedFile.size > 50 * 1024 * 1024) {
    alert("File size exceeds 50MB limit.");
    return;
  }
  file.value = selectedFile;

  if (isImage(selectedFile.type)) {
    previewUrl.value = URL.createObjectURL(selectedFile);
  } else {
    previewUrl.value = null;
  }
};

const isImage = (fileType) => {
  return ["image/jpeg", "image/png"].includes(fileType);
};

const removeFile = () => {
  file.value = null;
  previewUrl.value = null;
  fileInput.value.value = ""; // Reset file input
};

// drag drop

const items = ref([
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
  { id: 3, name: "Item 3" },
  { id: 4, name: "Item 4" },
  { id: 5, name: "Item 5" },
  { id: 6, name: "Item 6" },
]);

let draggedItemIndex = null;

const onDragStart = (index) => {
  draggedItemIndex = index;
};

const onDrop = (index) => {
  if (draggedItemIndex === null) return;

  const draggedItem = items.value[draggedItemIndex];
  items.value.splice(draggedItemIndex, 1);
  items.value.splice(index, 0, draggedItem);
  draggedItemIndex = null;
};

//

// Handle the date selected event
function handleDateSelected(date) {
  console.log("Selected Date:", date);
}
</script>

<style>
.drag-list {
  list-style: none;
  padding: 0;
  /* overflow-y: scroll; */
}
.drag-item {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: #f9f9f9;
  margin-bottom: 5px;
  cursor: grab;
}
.drag-item:hover {
  background: #ececec;
}
</style>