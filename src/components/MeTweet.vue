<script setup>
  const props = defineProps(['tweet'])
  
</script>

<template>
  
  <article class="tweet border-b border-green">
    <RouterLink to="#" class="flex p-4">
      <figure class="w-16 mr-3">
        <img :src="tweet.author.profile_img_url" alt="image" class="rounded-full w-full"/>
      </figure>

      <section class="tweet-body flex-1">
        <div class="tweet-author">
          <span class="text-green font-semibold">
            {{ tweet.author.display_name}}
          </span>
           <span class="text-gray ml-2 font-normal">
            {{ tweet.author.username}}
          </span>
        </div>

        <div :class="(tweet.image ? 'mb-3' : '')">
          <p class="" v-html="tweet.body">
            
          </p>
        </div>
      

      <figure v-if="tweet.image"
      class="rounded-xl border border-green overflow-hidden">
        <img :src="tweet.image.url" 
          :alt="tweet.image.alt" 
          class="w-full h-44 object-cover"/>
      </figure>


      <div class="mt-2 flex items-center justify-between">
        <div class="text-gray-400 flex">
         <font-awesome-icon 
           :icon="['fas', 'comment']"  
           class="p-2 mr-1 rounded-full text-green hover:animate-bounce"/>
          <span class="pt-1">
            {{ tweet.stats.comments.length}}
          </span>
        </div>
        
        <div class="text-gray-400 flex">
         <font-awesome-icon 
           :icon="['fas', 'retweet']"  
           class="p-2 mr-1 rounded-full text-green hover:animate-bounce"/>
          <span class="pt-1">
            {{ tweet.stats.retweets.length}}
          </span>
        </div>

        
        <div class="text-gray-400 flex">
         <font-awesome-icon 
           :icon="['fas', 'heart']"  
           class="p-2 mr-1 rounded-full text-green hover:animate-bounce"/>
          <span class="pt-1">
            {{ tweet.stats.likes.length}}
          </span>
        </div>

        <div class="text-gray-400 flex">
          <font-awesome-icon 
          class="p-2 mr-1 rounded-full text-green hover:animate-bounce"
          :icon="['fas', 'chart-simple']" />
        </div>


        <div class="text-gray-400 flex">
         <font-awesome-icon 
           :icon="['fas', 'share']"  
           class="p-2 mr-1 rounded-full text-green hover:animate-bounce"/>
        </div>
      </div>
     </section>
    </RouterLink>
  </article>
</template>