import { createRouter, createWebHistory } from 'vue-router'
import componentsView from '../Views/componentsView.vue'
import homeView from '../Views/homeView.vue'
import mentionslegalesView from '../Views/mentionslegalesView.vue'
import aproposView from '../Views/aproposView.vue'
import contactView from '../Views/contactView.vue'
import profilView from '../Views/profilView.vue'

const router = createRouter ({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {path: '/', name: 'homeView', component: homeView},
        {path: '/components', name: 'componentsView', component: componentsView},
        {path: '/mentionslegales', name: 'mentionslegalesView', component: mentionslegalesView},
        {path: '/apropos', name: 'aproposView', component: aproposView},
        {path: '/contact', name: 'contactView', component: contactView},
        {path: '/profil', name: 'profilView', component: profilView}
    ]
})

export default router