<template>
  <div class="bg-grey">

    <header1 />

    <RouterLink to="/components">Liste des composants</RouterLink> |
    <RouterLink to="/"> Home</RouterLink> |
    <RouterLink to="/mentionslegales"> Mentions Legales</RouterLink> |
    <RouterLink to="/apropos"> À propos</RouterLink> |
    <RouterLink to="/contact"> Contact </RouterLink> |
    <RouterLink to="/profil"> Profil (- Eliot) </RouterLink> |
    <RouterLink to="/search"> Search Sport (En cours - Marwin) </RouterLink> |
    <RouterLink to="/party"> Party (création où rejoindre - Théo) </RouterLink> |

    <RouterView />
    

  </div>

<footer1/>
</template>


<script>
import { RouterLink, RouterView } from "vue-router";
import header1 from "./components/header.vue";
import footer1 from "./components/footer.vue";

export default {
  name: "App",
  components: { header1, footer1 },
};
</script>