<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="bg-grey">
    <h1>
      Composants de GoMatch.fr : <br />
      <br />
    </h1>

    <header1 />

    <RouterLink to="/components">Home</RouterLink>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti incidunt
      voluptates ab, laboriosam eum et illum tenetur ducimus. Iste labore iure
      assumenda quisquam. Delectus voluptatem, quasi expedita incidunt aliquam
      tempora.
    </p>
  </div>
  <footer1 />
</template>


<script >
import header1 from "./components/header.vue";
import footer1 from "./components/footer.vue";

export default {
  name: "App",
  components: { header1, footer1 },
};
</script>