<script setup>
import {ref, onBeforeMount} from 'vue'
import {useRouter} from 'vue-router'

  const routes = ref([])
  const router = useRouter()

 onBeforeMount(() => {
   routes.value = router.options.routes.filter(r => r.mainMenu)
 })
  
</script>

<template>
  <div class="flex flex-col min-h-screen">
    
  <header class="flex items-center sticky top-0 bg-gray-700">
    <RouterLink 
      to="/profile" 
      class="p-4 mr-3 text-blue-500 text-2xl">
     <font-awesome-icon 
       :icon="['fas', 'user']" />
    </RouterLink>
    
    <h1 
      class="text-white font-black text-xl">
      {{ $route.name }}
    </h1>


  

    
  </header>

    
  <main classs="flex-1 overflow-scroll">


  
<form class="pt-4 ml-4 mr-4 pb-4">   
    <label for="search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
  
        </div>
        <input 
          type="text" 
          id="search" 
          class="block w-full p-4 pl-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Write your tweet" 
          >
        <button 
          type="submit" 
          class="text-white absolute right-2.5 bottom-2.5 bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Tweet
        </button>
    </div>
</form>


    
    
    <router-view></router-view>
  </main>
  
 <footer class="grid grid-cols-4 border-t border-gray-600 bg-gray-700  align-text-bottom">
   <RouterLink 
     v-for ="(route, i) in routes"
     :key="i"
     :to="route.path" 
     :class="`p-4 text-center text-2xl ${
       (route.name == $route.name)
       ? 'text-blue-500' : 'text-gray-400'
     }`">
     <font-awesome-icon 
      :icon="route.iconClass" />
   </RouterLink>
 </footer>
</div>
</template>

