<script setup>
import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";

</script>



<template>
   <div class="px-5 py-3 flex mb-12">
  <div class="">
    <img src="https://img.freepik.com/free-photo/young-handsome-man-posing-with-hat_23-2148884336.jpg?size=626&ext=jpg&ga=GA1.2.517929573.1659044922&semt=ais" 
      class="flex-none w-12 h-12 rounded-full"/>
  </div>
     <form class="w-full px-4 relative">
      <div class="relative">
        <textarea v-model="userTweet" placeholder="Write your tweet" class="mt-3 pb-3 w-full text-gray 
        pl-2 focus:outline-none caret-green"></textarea>
         <div class="absolute top-2 right-2"><button class="h-10 w-20 text-white rounded-lg 
          bg-green">Tweet</button> </div>
      </div>
      
         <button @click="sendTweet" class="mb-10 flex gap-2 border-2 border-green p-1 rounded-full">
          <font-awesome-icon :icon="['fas', 'earth-europe']"
          class="text-green pt-1" />
          <span class="font-semibold text-green">Everyone can reply</span>
         </button>
         
      <div class="flex items-center space-x-8">
      <font-awesome-icon 
       :icon="['fas', 'image']" class="text-green"/>
      <font-awesome-icon 
       :icon="['fas', 'film']" class="text-green"/>
        <font-awesome-icon 
       :icon="['fas', 'chart-bar']" class="text-green"/>
        <font-awesome-icon 
       :icon="['fas', 'smile']" class="text-green"/>
       <font-awesome-icon class="text-green"
       :icon="['fas', 'calendar-days']" />
       <font-awesome-icon class="text-green"
       :icon="['fas', 'location-dot']" />
    </div>
     </form>

     <ul>
      <li v-for="tweet in tweets" :key="tweet.id">
        <h2>{{ tweet.text }}</h2>
        <p>{{ tweet.author }}</p>
        <p>{{ tweet.timestamp }}</p>
      </li>
    </ul>

   </div>

</template>