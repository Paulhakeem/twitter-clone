import { createApp } from 'vue'
import './style.css'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import { auth } from './firebaseConfig'



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
         iconClass: ['fas', 'home'],
         mainMenu: true,
         component:  () => 
        import ('./views/Home.vue'),
        meta: {requiresAuth: true}
        },
        {
          path: '/explore', 
          name: 'Explore', 
          component: () => 
         import ('./views/Explore.vue'),
          mainMenu: true,
          iconClass: ['fas', 'search']
         },
          
        {
         path: '/notifications', 
         name: 'Notifications', 
         component: () => 
        import ('./views/Notification.vue'),
         mainMenu: true,
         iconClass: ['fas', 'bell']
        },
         {
         path: '/messages', 
         name: 'Messages', 
         component: () => 
        import ('./views/Messages.vue'),
         mainMenu: true,
         iconClass: ['fas', 'envelope']
         },
        {
          path: '/list', 
         name: 'List', 
         component: () => 
        import ('./views/List.vue'),
         mainMenu: true,
         iconClass: ['fas', 'list']
         },
        {
          path: '/bookmark', 
         name: 'Bookmark', 
         component: () => 
        import ('./views/Bookmark.vue'),
         mainMenu: true,
         iconClass: ['fas', 'bookmark']
         },
      {
        path: '/profile',
        name: 'Profile',
        component: () => 
        import ('./views/Profile.vue')
      
      }
    ]
})

router.beforeEach((to, from, next) =>{
  const isAuthenticated = auth.currentUser
  const isAuthRequired = to.matched.some(record => record.meta.requiresAuth)

  if (!isAuthenticated && isAuthRequired) next({ name: 'login'})

  else next()
})

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(router)
    .mount('#app')
