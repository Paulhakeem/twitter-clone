<script setup>
import { ref } from "vue";
import { useRouter, RouterLink } from "vue-router";
import {
  getAuth,
  GoogleAuthProvider,
  GithubAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const router = useRouter();
const google = new GoogleAuthProvider();
const github = new GithubAuthProvider();
const facebook = new FacebookAuthProvider();

const googleLogin = () => {
  signInWithPopup(getAuth(), google)
    .then(() => {
      router.push({
        path: "/header",
      });
    })
    .catch((error) => {
      alert(error.message);
    });
};

const githubLogin = () => {
  signInWithPopup(getAuth(), github)
    .then(() => {
      router.push({
        path: "/header",
      });
    })
    .catch((error) => {
      alert(error.message);
    });
};

const facebookLogin = () => {
  signInWithPopup(getAuth(), facebook)
    .then(() => {
      router.push({
        path: "/header",
      });
    })
    .catch((error) => {
      alert(error.message);
    });
};
</script>
<template>
  <main
    class="login flex flex-col items-center justify-center px-6 py-8 mx-auto max-w-md rounded-md space-y-4 mt-10 mb-10 shadow-md bg-green bg-opacity-10"
  >
    <div class="">
      <svg
      xmlns="http://www.w3.org/2000/svg" 
      height="4em" 
      viewBox="0 0 512 512">
     <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9
      180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/>
    </svg>
      
    </div>

    <div class="">
      <h3 class="text-2xl text-green tracking-wide font-bold">
        Hakeem Twitter Clone
      </h3>
    </div>

    <p class="text-lg font-semibold">Welcome</p>
    <div class="space-y-6">
      <div
        class="w-72 border-2 border-green rounded-full flex gap-4 cursor-pointer hover:border-none hover:animate-bounce"
        @click="googleLogin"
      >
      <font-awesome-icon :icon="['fab', 'google']" class="h-7 space-x-4 m-2"/>
        <p class="text-green text-xl tracking-wide m-2">Sign in with google</p>
      </div>

      <div
        class="w-72 border-2 border-green rounded-full flex gap-4 cursor-pointer hover:border-none hover:animate-bounce"
        @click="githubLogin"
      >
      <font-awesome-icon :icon="['fab', 'github']" class="h-7 space-x-4 m-2"/>
        <p class="text-green text-xl tracking-wide m-2">Sign in with github</p>
      </div>

      <div
        class="w-72 border-2 border-green rounded-full flex gap-4 cursor-pointer hover:border-none hover:animate-bounce"
        @click="facebookLogin"
      >
      <font-awesome-icon :icon="['fab', 'facebook']" class="h-7 space-x-4 m-2"/>
        <p class="text-green text-xl tracking-wide m-2">
          Sign in with facebook
        </p>
      </div>
    </div>
    <div
      class="pt-4"
    >
      <p class="text-lg tracking-wide font-light text-green">
        Made With
        <i class="fa-solid fa-heart text-green text-xl"></i>
        By CodeWithPaul
      </p>
    </div>
  </main>
</template>
