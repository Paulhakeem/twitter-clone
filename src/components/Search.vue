<script setup>
  import { ref } from 'vue'

  let id = 0
  const tweets = ref([])
  
  const tweetList = ref('')

  const addTweet = () => {
     tweets.value.push({ id: id++, text: tweetList.value })
    tweetList.value = ''
    }
  
 
  
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
         class="mt-3 pb-3 w-full bg-gray-800 pl-4 text-gray-400 focus:outline-none"
         v-model="tweetList"
         ></textarea>
      <div class="flex items-center space-x-8">
      <font-awesome-icon 
       :icon="['fas', 'image']" class="text-gray-400"/>
      <font-awesome-icon 
       :icon="['fas', 'film']" class="text-gray-400"/>
        <font-awesome-icon 
       :icon="['fas', 'chart-bar']" class="text-gray-400"/>
        <font-awesome-icon 
       :icon="['fas', 'smile']" class="text-gray-400"/>
    </div>
       <button 
         type="submit" 
         class="h-10 px-4 text-white font-semibold bg-blue-500 hover:bg-darkblue focus:outline-none rounded-full absolute bottom-0 right-0">
      Tweet
    </button>
     </form>
   </div>


  <div class="flex flex-col-reverse">
  <div v-for="tweet in tweets" :key="tweet.id" class="w-full p-4 border-b hover:bg-lighter flex">
    <div class="flex-none mr-4">
      <img src="https://randomuser.me/api/portraits/men/8.jpg" class="h-12 w-12 rounded-full flex-none"/>
    </div>
    <div class="w-full">
      <div class="flex items-center w-full">
        
         <font-awesome-icon 
       :icon="['fas', 'angle-down']" class="text-gray-400"/>
      </div>
      <p class="py-2 text-white">
        {{ tweet.text }}
      </p>
      <div class="flex items-center justify-between w-full">
        <div class="flex items-center text-sm text-dark space-x-3">
         <font-awesome-icon 
       :icon="['fas', 'comment']" class="text-gray-400"/>
          <p> 1 </p>
        </div>
        <div class="flex items-center text-sm text-dark">
          <font-awesome-icon 
       :icon="['fas', 'retweet']" class="text-gray-400"/>
          <p> 0 </p>
        </div>
        <div class="flex items-center text-sm text-dark">
          <font-awesome-icon 
       :icon="['fas', 'heart']" class="text-gray-400"/>
          <p> 2 </p>
        </div>
        <div class="flex items-center text-sm text-dark">
          <font-awesome-icon 
       :icon="['fas', 'share']" class="text-gray-400"/>
        </div>
      </div>
    </div>
  </div>
</div>
</template>