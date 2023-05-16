
<script setup>
import {ref, onBeforeMount} from 'vue'
import {useRouter} from 'vue-router'
import Dropdown from './components/Dropdown.vue'
import Search from './components/Search.vue'
  
  const routes = ref([])
  const router = useRouter()

 onBeforeMount(() => {
   routes.value = router.options.routes.filter(r => r.mainMenu)
 })
</script>

<template>
  <div class="flex flex-col min-h-screen">
    
  <header class="flex items-center bg-gray-700">
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
  <Dropdown/>
  </header>

    
  <main classs="flex-1 overflow-scroll">
    <Search/>
    <router-view></router-view>
  </main>

    
 <footer class="grid grid-cols-6 border-t border-gray-600 bg-gray-700 sticky buttom-0">
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

