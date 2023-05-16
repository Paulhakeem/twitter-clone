<script setup>
  import { ref } from 'vue'
  import Follow from '../components/Follow.vue'
  
  const isExpanded = ref( false )
  const selectedOption = ref('')
  const options = ref(
    [
        {top: 'Sports · Trending', title: 'Welcome to Chelsea', bottom: '1,087 Tweets'},
        {top: 'Trending in Kenya', title: 'GB WhatsApp', bottom: '1,300 Tweets'},
        {top: 'Entertainment · Trending', title: 'Peaky Blinders', bottom: '7,922 Tweets'},
        {top: 'Trending in Kenya', title: 'Game of Thrones', bottom: '5,040 tweets'},
    ]
  ) 

  const setOption = (option) => {
   selectedOption.value = option
   isExpanded.value = false
  }
</script>

<template>
  <div
    id="app"
    class="flex items-center justify-center ml-48"
    @mousedown.prevent="setOption(option)"
  >
    <div class="relative text-lg w-48">
      <button
        class="flex items-center justify-between px-3 py-2"
        @click="isExpanded = !isExpanded"
        @blur="isExpanded = false"
      >
        <span>{{ selectedOption }}</span>
       <font-awesome-icon 
       :icon="['fas', 'bars']" class="text-white"/>
      </button>

      
      <transition
        enter-active-class="transform transition duration-500 ease-custom"
        enter-class="-translate-y-1/2 scale-y-0 opacity-0"
        enter-to-class="translate-y-0 scale-y-100 opacity-100"
        leave-active-class="transform transition duration-300 ease-custom"
        leave-class="translate-y-0 scale-y-100 opacity-100"
        leave-to-class="-translate-y-1/2 scale-y-0 opacity-0"
      >
        <ul
          v-show="isExpanded"
          class="absolute left-0 right-0 mb-4 bg-gray-200 divide-y divide-gray-400 rounded-lg shadow-lg overflow-hidden w-96 rounded-lg"
        >
         <div
        class="h-full border-l border-lighter py-2 px-6 relative">
      <input 
      class="pl-12 rounded-full w-80 p-2 bg-white text-sm mb-4 mt-2" 
      placeholder="Search Twitter"/>
       <font-awesome-icon 
       :icon="['fas', 'search']" class="gray-400 absolute left-0 top-0 mt-5 ml-12 text-sm text-light pt-2"/>


          <div class="flex items-center justify-between p-2">
          <p class="text-lg font-bold">Trends for You</p>
          <font-awesome-icon 
       :icon="['fas', 'cog']" class="text-blue-500"/>
        </div>
    </div>
          
          <button
            v-for="(option, index) in options"
            :key="index"
            class="px-3 py-2 transition-colors duration-300 hover:bg-gray-200 w-full flex justify-between hover:bg-lighter p-3 border-t border-lighter"
            
          >
            <div>
            <p class="text-xs text-left leading-tight tex-gray-500"> {{ option.top }} </p>
            <p class="font-semibold text-sm text-left leading-tight"> {{ option.title}} </p>
            <p class="text-left text-sm leading-tight text-dark"> {{ option.bottom}} </p>
          </div>
             <font-awesome-icon 
       :icon="['fas', 'angle-down']" class="text-lg text-dark"/>
          </button>
           <button 
          class="p-3 w-full hover:bg-lighter text-left text-blue-500 border-t border-lighter">
          Show More
        </button>
          <Follow/>
        </ul>
        
      </transition>
    </div>
  </div>
</template>