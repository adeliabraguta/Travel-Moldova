import {createPinia} from "pinia";
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {createRouter, createWebHistory} from "vue-router";
import HomePage from "./components/HomePage.vue";
import TravelStories from "./components/TravelStories.vue";
import Tipova from "./components/InformationComponents/Tipova.vue";
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
            path: '/Tipova',
            name: 'Tipova',
            component: Tipova
        },
    ]
})

createApp(App).use(createPinia()).use(router).mount('#app')
