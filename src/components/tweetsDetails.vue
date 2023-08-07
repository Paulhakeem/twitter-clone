<script setup>
import { useTweetStore } from '../store/tweetStore';


const tweetStore = useTweetStore()

const props = defineProps({
  tweet: String
})

</script>
<template>
    <div>
        <p>{{ tweet.text }}</p>
    </div>
</template>