<template>
    <section class="main-layout  overflow-scroll">
        <!-- header -->
        <div class="!h-[40px]">
            <iframe src="../includes/header.html" style="border: none; width: 100%; height: 100px;"></iframe>
        </div>
        <div class=" grid grid-cols-4 h-[100%]">
            <div class="col-span-3  ">
                <!-- Skeleton loader -->
                <div class="skeleton-container h-[300px] m-4">
                    <div class="skeleton mr-2 rounded-lg "></div> <!-- Circular skeleton -->
                </div>

                <div class=" my-[40px]  flex justify-center m-4  flex-col items-center" >
                                   <!-- Skeleton loader -->
                <div class="skeleton-container h-[30px] rounded-lg w-[20%] ">
                    <div class="skeleton mr-2 rounded-lg "></div> <!-- Circular skeleton -->
                </div>
                <div class="skeleton-container h-[30px] rounded-lg w-[70%] my-2 ">
                    <div class="skeleton mr-2 rounded-lg "></div> <!-- Circular skeleton -->
                </div>
                </div>
                <div class=" my-2 grid grid-cols-3 gap-6 mx-4 " >
                          <!-- Skeleton loader -->
                <div class="skeleton-container h-[300px] ">
                    <div class="skeleton mr-2  rounded-lg"></div> <!-- Circular skeleton -->
                </div>
                <div class="skeleton-container h-[300px]">
                    <div class="skeleton mr-2  rounded-lg"></div> <!-- Circular skeleton -->
                </div>
                <div class="skeleton-container h-[300px]">
                    <div class="skeleton mr-2  rounded-lg"></div> <!-- Circular skeleton -->
                </div>
                </div>
            </div>
            <div class="col-span-1">
                <div class="skeleton-container h-[100%]">
                    <div class="skeleton mr-2  rounded-lg"></div> <!-- Circular skeleton -->
                </div>
            </div>
        </div>
        <!--  -->
    </section>
</template>