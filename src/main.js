import { createApp } from 'vue'
import './style.css'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Home from './views/Home.vue'


// fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fab, fas, far)

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/',
         name: 'Home', 
         component: Home,
         iconClass: ['fas', 'home'],
         mainMenu: true
        },
      
         {path: '/explore', 
          name: 'Explore', 
          component: Home,
          mainMenu: true,
          iconClass: ['fas', 'search']
         },
          
        {path: '/notifications', 
         name: 'Notifications', 
         component: Home,
         mainMenu: true,
         iconClass: ['fas', 'bell']
        },
         {path: '/messages', 
         name: 'Messages', 
         component: Home,
         mainMenu: true,
         iconClass: ['fas', 'envelope']
         },
      {
        path: '/profile',
        name: 'Profile',
        component: 'Home'
      }
    ]
})

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(router)
    .mount('#app')
