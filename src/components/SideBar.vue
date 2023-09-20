<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router';
import vtweets from '../vtweets'
import MeTweet from '../components/MeTweet.vue'
import Search from '../components/Search.vue';

const tweets = ref(vtweets)


const showMenu = ref(false)


</script>

<template>

<button 
@click="showMenu = !showMenu"
 type="button" class="inline-flex items-center p-2 mt-2 ml-6 text-sm
  text-gray-500 rounded-lg sm:hidden hover:animate-bounce">
   <font-awesome-icon 
   class="text-green text-center text-xl mr-3"
   :icon="['fas', 'bars']" />
</button>
<aside class="fixed top-0 left-0 z-[-1] w-64 h-screen
 transition-transform -translate-x-full sm:translate-x-0 bg-green" aria-label="Sidebar">

   <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
      <ul class="space-y-2 font-medium">

        <div class="relative flex pl-4 mb-6">
      <svg class="text-white"
      stroke="currentColor"
      stroke-width="10"
      xmlns="http://www.w3.org/2000/svg" 
      height="3em" 
      viewBox="0 0 512 512">
     <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9
      180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/>
    </svg>
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
   <div class="p-4">
   <div class="flex flex-wrap gap-4 justify-between ml-4 mr-4 mb-4">
      <button class="font-semibold text-xl border-b-4 rounded-sm border-b-green mb-4">For you</button>
      <button class="font-semibold text-xl mb-4">Following</button>
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