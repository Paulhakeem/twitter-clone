<script setup>
import { ref } from 'vue';
import { useRouter, RouterLink } from 'vue-router';
import { getAuth, GoogleAuthProvider, 
    GithubAuthProvider, FacebookAuthProvider, signInWithPopup } from 'firebase/auth'

const router = useRouter()
const google = new GoogleAuthProvider()
const github = new GithubAuthProvider()
const facebook = new FacebookAuthProvider()


const googleLogin = () => {
signInWithPopup(getAuth(), google)
.then(() => {
    router.push({
        path: '/header'
    })
})
.catch(error => {
    alert(error.message)
})
}

const githubLogin = () => {
    signInWithPopup(getAuth(), github)
    .then(() => {
        router.push({
        path: '/header'
    })
})
.catch(error => {
    alert(error.message)
})
}

const facebookLogin = () => {
    signInWithPopup(getAuth(), facebook)
    .then(() => {
        router.push({
        path: '/header'
    })
})
.catch(error => {
    alert(error.message)
})
}


</script>
<template>
    <main class="flex flex-col items-center justify-center px-6 py-8 mx-auto
     max-w-md rounded-md space-y-4 mt-10 mb-10 shadow-md bg-green bg-opacity-10">
     <div class="relative flex">
        <i class="fa-brands fa-twitter absolute inline-flex text-green fa-4x animate-ping"></i>
       <i class="fa-brands fa-twitter text-green fa-4x relative inline-flex"></i>
     </div>
     
     <div class="">
        <h3 class="text-2xl text-green tracking-wide font-semibold">
            Welcome To My Twitter Clone
        </h3>
     </div>
        
        <p class="text-lg">Sign in to enjoy and start twitting</p>
        <div class="space-y-6">
            
            <div class="w-72 border-2 border-green rounded-full flex gap-4 cursor-pointer
            hover:border-none hover:animate-bounce" @click="googleLogin">
         <img src="../assets/google.svg" class="h-10 space-x-4" alt="">
         <p class="text-green text-xl tracking-wide pt-1">Sign in with google</p>
        </div>

        <div class="w-72 border-2 border-green rounded-full flex gap-4 cursor-pointer
        hover:border-none hover:animate-bounce" @click="githubLogin">
         <img src="../assets/git.svg" class="h-10 space-x-4" alt="">
         <p class="text-green text-xl tracking-wide pt-1">Sign in with github</p>
        </div>

        <div class="w-72 border-2 border-green rounded-full flex gap-4 cursor-pointer
        hover:border-none hover:animate-bounce" @click="facebookLogin">
         <img src="../assets/fb.svg" class="h-10 space-x-4" alt="">
         <p class="text-green text-xl tracking-wide pt-1">Sign in with facebook</p>
        </div>
        </div>
        <div class="pt-6 bg-green bg-opacity-20 p-4 rounded-tr-full rounded-tl-full animate-pulse">
            <p class="text-lg tracking-wide font-light text-green">Made With 
            <i class="fa-solid fa-heart text-green text-xl"></i>
            By CodeWithPaul</p>
        </div>
    
    </main>
</template>