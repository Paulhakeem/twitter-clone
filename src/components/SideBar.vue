<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router';
import vtweets from '../vtweets'
import MeTweet from '../components/MeTweet.vue'
import Search from '../components/Search.vue';

const tweets = ref(vtweets)


const isMenuOpen = ref(true)

const openMenu = () => {
      isMenuOpen.value = !isMenuOpen.value;
};

</script>

<template>

<button 
@click="openMenu"
data-drawer-target="default-sidebar" 
data-drawer-toggle="default-sidebar" aria-controls="default-sidebar"
 type="button" class="inline-flex items-center p-2 mt-2 ml-6 text-sm
  text-gray-500 rounded-lg sm:hidden hover:animate-bounce">
   <font-awesome-icon 
   class="text-green text-center text-xl mr-3"
   :icon="['fas', 'bars']" />
</button>

<aside v-if="isMenuOpen" id="default-sidebar" class="fixed top-0 left-0 z-[-1] w-64 h-screen
 transition-transform -translate-x-full sm:translate-x-0 bg-green" aria-label="Sidebar">
   <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
      <ul class="space-y-2 font-medium">

        <div class="relative flex pl-4 mb-6">
        <i class="fa-brands fa-twitter absolute inline-flex text-white fa-3x animate-ping"></i>
       <i class="fa-brands fa-twitter text-white fa-3x relative inline-flex"></i>
        </div>
         <li>
            <a href="#" 
            class="flex items-center p-2 text-gray-900 rounded-lg group">
                <font-awesome-icon 
                class="text-white text-center text-xl mr-3"
                :icon="['fas', 'house']" />
               <span class="ml-3 text-white text-xl font-medium tracking-wider">Home</span>
            </a>
         </li>
         <li>
            <RouterLink to="/" class="flex items-center p-2 text-gray-900 rounded-lg group">
                <font-awesome-icon 
               class="text-white text-center text-xl mr-3"
               :icon="['fas', 'bell']" />
               <span class="flex-1 ml-3 text-white text-xl font-normal tracking-wider">Notification</span>
              
            </RouterLink>
         </li>
         <li>
            <RouterLink to="/" class="flex items-center p-2 text-gray-900 rounded-lg group">
                <font-awesome-icon 
              class="text-white text-center text-xl mr-3"
              :icon="['fas', 'envelope']" />
               <span class="flex-1 ml-3 text-white text-xl font-medium tracking-wider">Messages</span>
               
            </RouterLink>
         </li>
         <li>
            <RouterLink to="/" class="flex items-center p-2 text-gray-900 rounded-lg group">
                <font-awesome-icon 
             class="text-white text-center text-xl mr-3"
             :icon="['fas', 'list']" />
               <span class="flex-1 ml-3 text-white text-xl font-medium tracking-wider">List</span>
            </RouterLink>
         </li>
         <li>
            <RouterLink to="/" class="flex items-center p-2 text-gray-900 rounded-lg group">
                <font-awesome-icon 
               class="text-white text-center text-xl mr-3"
               :icon="['fas', 'magnifying-glass']" />
               <span class="flex-1 ml-3 text-white text-xl font-medium tracking-wider">Explore</span>
            </RouterLink>
         </li>
         <li>
            <RouterLink to="/" class="flex items-center p-2 text-gray-900 rounded-lg group">
                <font-awesome-icon 
                class="text-white text-center text-xl mr-3"
                :icon="['fas', 'user']" />
               <span class="flex-1 ml-3 text-white text-xl font-medium tracking-wider">Profile</span>
            </RouterLink>
         </li>
         <li>
            <RouterLink to="/" class="flex items-center p-2 text-gray-900 rounded-lg group">
                <font-awesome-icon 
                class="text-white text-center text-xl mr-3"
                :icon="['fas', 'people-arrows']" />
               <span class="flex-1 ml-3 text-white text-xl font-normal tracking-wider">Community</span>
            </RouterLink>
         </li>
         <li>
            <RouterLink to="/" class="flex items-center p-2 text-gray-900 rounded-lg group">
              
                <font-awesome-icon 
                class="text-white text-center text-xl mr-3"
                :icon="['fas', 'circle-check']" />
               <span class="flex-1 ml-3 text-white text-xl font-normal tracking-wider">Verify</span>
            </RouterLink>
         </li>
      </ul>
   </div>
</aside>

<div class="p-4 sm:ml-64">
   <div class="p-4 border-2 border-green border-dashed rounded-lg">
   <div class="flex justify-between ml-4 mr-4 mb-4">
      <button class="font-semibold text-xl border-b-4 rounded-sm border-b-green">For you</button>
      <button class="font-semibold text-xl">Following</button>
      <div class="relative">
         <div class="absolute top-1 left-3">
            <font-awesome-icon 
            :icon="['fas', 'magnifying-glass']" 
            class="text-gray z-20" /></div>
         <input type="text" placeholder="Search twitter"
      class="border border-1 border-green rounded-full h-8 outline-none pl-10 z-0">
      </div>
      
   </div>
    <Search/>
    <MeTweet 
     v-for="tweet in tweets" 
     :key="tweet._id" 
     :tweet="tweet"/>
      </div>
</div>

</template>