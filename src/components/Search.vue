<script setup>
import { ref, computed, onMounted } from "vue"
import { useRoute } from 'vue-router'
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { useImageStore } from "../store/imageStore";
import db from "../firebase"
import { collection, addDoc, onSnapshot, query, orderBy
  } from "firebase/firestore"


const twitterQuery = query(collection(db, "tweets"), orderBy('date', "desc"));

const imageStore = useImageStore()
const route = useRoute()


const photoURL = ref(null)
const name = ref(null)
const newTweet = ref('')
const tweets = ref([])


const handleTweets = async () => {
  addDoc(collection(db, "tweets"), {
  name: name.value,
  text: newTweet.value,
  date: Date.now()
})
newTweet.value = ''
  // if(newTweet.value.length > 0) {
  //   tweetStore.addTweet({
  //     text: newTweet.value,
  //     id: Math.floor(Math.random() * 10000)
  //   })
  //   newTweet.value = ''
  // }
}

onMounted(() => {
 onSnapshot(twitterQuery, (querySnapshot) => {
  const dbTweets = []
  querySnapshot.forEach((doc) => {
    const tweet = {
      id: doc.id,
      name: doc.data().name,
      text: doc.data().text,
    }
    dbTweets.push(tweet)
})
   tweets.value = dbTweets
});
})



const auth = getAuth()
onAuthStateChanged(auth, (user) => {
      if (user) {
        photoURL.value = user.photoURL;
        name.value = user.displayName;
      } else {
        photoURL.value = null;
        name.value = null;
      }
    });



   
</script>



<template>
   <div class="px-5 py-3 flex mb-12">
  <div class="">
    <img :src="photoURL"
      class="profile flex-none w-12 h-12 rounded-full"/>
  </div>
     <form @submit.prevent="handleTweets"
     class="w-full px-4 relative">
      <div class="relative">
        <textarea v-model="newTweet"
         placeholder="Write your tweet" class="mt-3 pb-3 w-full text-gray 
        pl-2 focus:outline-none caret-green"></textarea>
         <div class="absolute top-2 right-2">
          <button
           class="h-10 w-20 text-white rounded-lg 
          bg-green">Tweet</button>
         </div>
      </div>
      
         <button class="mb-10 flex gap-2 border-2 border-green p-1 rounded-full">
          <font-awesome-icon :icon="['fas', 'earth-europe']"
          class="text-green pt-1" />
          <span class="font-semibold text-green">Everyone can reply</span>
         </button>
         
      <div class="flex items-center space-x-8">
      <font-awesome-icon 
       :icon="['fas', 'image']"
       class="text-green cursor-pointer"/>
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
   </div>


   <ul class="ml-2 pt-4 space-y-10">
        <li class="shadow-lg"
          v-for="tweet in tweets">
           <div class="flex gap-10 ml-2">
            <div>
            <img :src="photoURL"
            class="flex-none w-12 h-12 rounded-full"/>
           </div>

            <div>
              <p class="text-green text-md font-semibold">{{ name }}
                 <span class="text-sm font-light text-gray">@{{ name }}</span>
                </p>
            <p>
              {{ tweet.text }}.
            </p>
            </div>
           </div>
          




        <div class="ml-20 mr-20 mt-2 flex items-center justify-between">
        <div class="text-gray-400 flex">
         <font-awesome-icon 
           :icon="['fas', 'comment']"  
           class="p-2 mr-1 rounded-full text-green"/>
          <span class="pt-1">
          </span>
        </div>
        
        <div class="text-gray-400 flex">
         <font-awesome-icon 
           :icon="['fas', 'retweet']"  
           class="p-2 mr-1 rounded-full text-green "/>
          <span class="pt-1">
          </span>
        </div>

        
        <div class="text-gray-400 flex">
         <font-awesome-icon 
           :icon="['fas', 'heart']"  
           class="p-2 mr-1 rounded-full text-green "/>
          <span class="pt-1">
          </span>
        </div>

        <div class="text-gray-400 flex">
          <font-awesome-icon 
          class="p-2 mr-1 rounded-full text-green "
          :icon="['fas', 'chart-simple']" />
        </div>


        <div class="text-gray-400 flex">
         <font-awesome-icon 
           :icon="['fas', 'share']"  
           class="p-2 mr-1 rounded-full text-green"/>
        </div>
      </div>
        </li>
      </ul>
</template>