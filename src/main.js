import {createPinia} from "pinia";
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {createRouter, createWebHistory} from "vue-router";
import HomePage from "./components/HomePage.vue";
import TravelStories from "./components/TravelStories.vue";
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'HomePage',
            component: HomePage
        },
        {
            path: '/TravelStories',
            name: 'TravelStories',
            component: TravelStories
        },
        {
            path: '/destination/:id/:slug',
            name: 'destination.show',
            component: () => import('./components/DestinationShow.vue')
        },{
            path: '/story/:id/:slug',
            name: 'story.show',
            component: () => import('./components/StoryComponent.vue')
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({ left: 0, top: 0 })
            }, 400)
        })
    }
})
createApp(App).use(createPinia()).use(router).mount('#app')
