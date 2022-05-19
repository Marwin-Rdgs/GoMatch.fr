import { createRouter, createWebHistory } from 'vue-router'
import componentsView from '../Views/componentsView.vue'

const router = createRouter ({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {path: '/components', name: 'componentsView', component: componentsView}
    ]
})

export default router