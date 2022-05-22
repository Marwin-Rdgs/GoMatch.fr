import { createRouter, createWebHistory } from 'vue-router'
import componentsView from '../Views/componentsView.vue'
import homeView from '../Views/homeView.vue'

const router = createRouter ({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {path: '/', name: 'homeView', component: homeView},
        {path: '/components', name: 'componentsView', component: componentsView}
    ]
})

export default router