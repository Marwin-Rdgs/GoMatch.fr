<template>
  <div class="bg-white w-12/12">
    <div class="w-11/12 flex items-center ml-4">
      <img src="./icones/Logo.png" alt="" class="w-1/12 flex-none">
      <h1 class="text-3xl font-impact text-center flex-none w-10/12"><RouterLink to="/">GoMatch</RouterLink></h1>
      <RouterLink to="/profil" class="contents">
        <profil class="flex-none w-1/12 hover:fill-white"/>
      </RouterLink>
      <!-- V-if="IsAdmin" -->
      <RouterLink to="/admin" class="contents">
        <img src="./icones/settings.svg" class="flex-none w-1/12 lg:scale-50 hover:animate-pulse"/>
      </RouterLink>
    </div>
  </div>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";

import profil from './icones/joueur_icone.vue';

export default {
  components: { profil },
};
</script>