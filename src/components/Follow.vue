<script setup>
  import { ref } from 'vue'

  const follow = ref(
    [
        {src: 'https://randomuser.me/api/portraits/men/79.jpg', name: 'Ludacris', handle: '@kriss'},
        {src: 'https://randomuser.me/api/portraits/men/74.jpg', name: 'KingVon', handle: '@von'},
        {src: 'https://randomuser.me/api/portraits/men/27.jpg', name: 'Lil Dark', handle: '@lildark'}
      ]
  )
</script>

<template>
  <div class="w-full rounded-lg bg-lightest my-4">
  <div class=" p-3 pl-8">
    <p class="text-lg font-bold">Who to Follow</p>
  </div>
  <button v-for="(user,index) in follow" :key="index" class="w-full flex hover:bg-lighter p-3 border-t border-lighter">
    <img :src="`${ user.src }`" class="w-12 h-12 rounded-full border border-lighter" />
    <div class="hidden lg:block ml-4">
      <p class="text-sm font-bold leading-tight"> {{ user.name }} </p>
      <p class="text-sm leading-tight text-gray-500"> {{ user.handle }} </p>
    </div>
    <button class="ml-auto text-sm text-blue-500 py-1 px-4 rounded-full border-2 border-blue-500">
      Follow
    </button>
  </button>
  <button class="p-3 w-full hover:bg-lighter text-left text-blue-500 border-t border-gray-400 border-lighter">
    Show More
  </button>
    <div class="border-t border-gray-400">
    <p class="ml-2 mr-2 text-sm pt-4 text-gray-500">Terms of Service
Privacy Policy
Cookie Policy
Accessibility
Ads info
More
© 2023 CodeWithPaul.</p>
      </div>
</div>
</template>