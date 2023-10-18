import { defineStore } from 'pinia'
import { ref } from 'vue'
import {storage} from '../firebase'
import { uploadBytesResumable, getDownloadURL } from "firebase/storage";


 export const useImageStore = defineStore('imageStore', () => {
   
    const user = ref(null)
    const profilePictureFile = ref(null)
    const profilePictureURL = ref(null)


    async function fileChange(event) {
        profilePictureFile.value = event.target.file[0]

    }

    async function uploadProfilePicture() {
      const storageRef = firebase.storage().ref()
      const profilePictureRef = storageRef.child(`profile_pictures/${user.value.uid}`)

      const uploadTask = uploadBytesResumable(profilePictureRef.value, profilePictureFile.value)


      uploadTask.on('state_changed', 
      (snapshot) => {
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
    console.log('Upload is ' + progress + '% done')

  }, 
  (error) => {
    console.log('apload danied')
  }, 
  () => {
    getDownloadURL(profilePictureRef).then((downloadURL) => {
      console.log('File available at', downloadURL)
      profilePictureURL.value = downloadURL
    });
  }
);

    }

    return {
        user,
        profilePictureFile,
        profilePictureURL,
        fileChange,
        uploadProfilePicture
    }
 })