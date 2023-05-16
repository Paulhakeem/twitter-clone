<script setup>
  import { ref } from 'vue'

  const tweetList = ref(
    []
  )
  const tweet = ref('')
</script>
<template>
  
   <div class="px-5 py-3 flex mb-12">
  <div class="">
    <img src="https://img.freepik.com/free-photo/young-handsome-man-posing-with-hat_23-2148884336.jpg?size=626&ext=jpg&ga=GA1.2.517929573.1659044922&semt=ais" 
      class="flex-none w-12 h-12 rounded-full"/>
  </div>
     <form v-on:submit.prevent = "addTweet" class="w-full px-4 relative">
       <textarea 
         placeholder="What's up?" 
         class="mt-3 pb-3 w-full bg-gray-800 pl-4 text-gray-400 focus:outline-none"></textarea>
      <div class="flex items-center space-x-12">
      <font-awesome-icon 
       :icon="['fas', 'image']" class="text-gray-400"/>
      <font-awesome-icon 
       :icon="['fas', 'film']" class="text-gray-400"/>
        <font-awesome-icon 
       :icon="['fas', 'chart-bar']" class="text-gray-400"/>
        <font-awesome-icon 
       :icon="['fas', 'smile']" class="text-gray-400"/>
    </div>
       <button type="submit" class="h-10 px-4 text-white font-semibold bg-blue-500 hover:bg-darkblue focus:outline-none rounded-full absolute bottom-0 right-0">
      Tweet
    </button>
     </form>
   </div>
</template>