import { createRouter, createWebHistory } from 'vue-router'
import componentsView from '../Views/componentsView.vue'
import homeView from '../Views/homeView.vue'
import mentionslegalesView from '../Views/mentionslegalesView.vue'
import aproposView from '../Views/aproposView.vue'
import contactView from '../Views/contactView.vue'
import profilView from '../Views/profilView.vue'
import partyCreaView from '../Views/partyCreaView.vue'
import partyjoinView from '../Views/partyJoinView.vue'
import loginView from '../Views/loginView.vue'
import adminView from '../Views/adminView.vue'
import searchfootView from '../Views/searchFootView.vue'
import searchbasketView from '../Views/searchBasketView.vue'
import searchpetanqueView from '../Views/searchPetanqueView.vue'
import searchtennisView from '../Views/searchTennisView.vue'

const router = createRouter ({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {path: '/', name: 'homeView', component: homeView},
        {path: '/components', name: 'componentsView', component: componentsView},
        {path: '/mentionslegales', name: 'mentionslegalesView', component: mentionslegalesView},
        {path: '/apropos', name: 'aproposView', component: aproposView},
        {path: '/contact', name: 'contactView', component: contactView},
        {path: '/profil', name: 'profilView', component: profilView},
        {path: '/partycrea/:id', name: 'partyCreaView', component: partyCreaView},
        {path: '/partyjoin/:id', name: 'partyJoinView', component: partyjoinView},
        {path: '/login', name: 'loginView', component: loginView},
        {path: '/admin', name: 'adminView', component: adminView},
        {path: '/searchfoot', name: 'searchfootView', component: searchfootView},
        {path: '/searchbasket', name: 'searchbasketView', component: searchbasketView},
        {path: '/searchpetanque', name: 'searchpetanqueView', component: searchpetanqueView},
        {path: '/searchtennis', name: 'searchtennisView', component: searchtennisView},
    ]
})

export default router