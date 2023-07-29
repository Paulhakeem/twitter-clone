<script setup>
import { useRoute, RouterLink } from 'vue-router';
import Sidebar from '../components/SideBar.vue'

</script>
<template>

    
    <div class="flex flex-col min-h-screen">
    <main class="flex-1">
    <div>
    <Sidebar/>
    </div>
    </main>


    <footer class="grid grid-cols-6 bg-green
     items-center text-center border-2 border-white">
     <div class="flex flex-1 justify-between ">
        <RouterLink to="/" class="p-3 flex gap-4">
            <button class="text-green bg-white p-2 w-32 rounded-full">
                <i class="fa-solid fa-person-circle-check fa-1x text-green"></i>
            Follow
            </button>
        </RouterLink>
        <RouterLink to="/" class="p-3">
            <button class="text-green bg-white p-2 w-32 rounded-full">
                <i class="fa-solid fa-arrow-trend-up text-green"></i>
             Trends
            </button>
            
        </RouterLink>
     </div>
        
    </footer>
    </div>
</template>