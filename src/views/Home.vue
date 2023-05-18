<script setup>
import { ref } from 'vue'
import vweets from '../vweets'
import Tweet from '../components/Tweet.vue'
const tweets = ref(vweets)
</script>

<template>
 <div>
   <Tweet 
     v-for="tweet in tweets" 
     :key="tweet._id" 
     :tweet="tweet"/>
   </div>
</template>