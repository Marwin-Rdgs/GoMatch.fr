<template>
  <div class="bg-grey">

    <header1 />

    <RouterLink to="/components">Liste des composants</RouterLink>
    <RouterLink to="/">Home</RouterLink>
    
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti incidunt
      voluptates ab, laboriosam eum et illum tenetur ducimus. Iste labore iure
      assumenda quisquam. Delectus voluptatem, quasi expedita incidunt aliquam
      tempora.
    </p>
  </div>
  <footer1 />


<RouterView />
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