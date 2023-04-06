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
            path: '/brazil',
            name: 'brazil',
            component: ()=> import('./components/Brazil.vue')
        },
        {
            path: '/panama',
            name: 'panama',
            component: ()=> import('./components/Panama.vue')

        },
        {
            path: '/destination/:id',
            name: 'destination.show',
            component: () => import('./components/DestinationShow.vue')
        }
    ]
})

createApp(App).use(createPinia()).use(router).mount('#app')
