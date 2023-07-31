<script setup>
import { useRoute, RouterLink } from 'vue-router';
import Sidebar from '../components/SideBar.vue'

</script>
<template>
    <main>
    <div>
    <Sidebar/>
    </div>
    </main>


    <footer class="grid grid-cols-2 bg-green
     items-center text-center border-t border-white">
     <div class="flex ml-4 gap-2 mr-6">
        <RouterLink to="/" class="p-3 flex gap-4">
            <button class="text-green bg-white p-2 w-28 rounded-full">
                <i class="fa-solid fa-person-circle-check fa-1x text-green"></i>
            Follow
            </button>
        </RouterLink>
        <RouterLink to="/" class="p-3">
            <button class="text-green bg-white p-2 w-28 rounded-full">
                <i class="fa-solid fa-arrow-trend-up text-green"></i>
             Trends
            </button>
        </RouterLink>
     </div>
         <div class="justify-between ml-24">
            <font-awesome-icon :icon="['fas', 'gear']" class=" text-white fa-2x hover:animate-spin cursor-pointer" />
         </div>
    </footer>

</template>