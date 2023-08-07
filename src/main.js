import './assets/main.css'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { auth } from './firebase'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fab, fas, far)

router.beforeEach((to, from, next) =>{
    const isAuthenticated = auth.currentUser
    const isAuthRequired = to.matched.some(record => record.meta.requiresAuth)
  
    if (!isAuthenticated && isAuthRequired) next({ name: 'login'})
  
    else next()
  })
  

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)

app.component('font-awesome-icon', FontAwesomeIcon)

app.use(router)

app.mount('#app')
