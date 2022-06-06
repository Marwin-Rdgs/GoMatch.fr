<template>
  <div class="bg-grey">

    <header1 />

    <RouterLink to="/components">Liste des composants</RouterLink> |
    <RouterLink to="/"> Home</RouterLink> |
    <RouterLink to="/mentionslegales"> Mentions Legales</RouterLink> |
    <RouterLink to="/apropos"> À propos</RouterLink> |
    <RouterLink to="/contact"> Contact </RouterLink> |
    <RouterLink to="/profil"> Profil </RouterLink> |
    <RouterLink to="/search"> Search Sport (En cours - Marwin) </RouterLink> |
    <RouterLink to="/partycrea"> Party (création - Théo) </RouterLink> |
    <RouterLink to="/partyjoin"> Party (rejoindre - Eliot) </RouterLink> |
    <RouterLink to="/login"> login (en cours - Marwin) </RouterLink> |

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