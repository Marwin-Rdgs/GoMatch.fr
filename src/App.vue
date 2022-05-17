<template>
  <div class="grey-2">
    <h1>
      Composants de GoMatch.fr : <br />
      <br />
    </h1>

    <header1 />
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti incidunt
      voluptates ab, laboriosam eum et illum tenetur ducimus. Iste labore iure
      assumenda quisquam. Delectus voluptatem, quasi expedita incidunt aliquam
      tempora.
    </p>

    <cardteam
      name="Théo Pasquarelli"
      poste="Directeur Design"
      img="/public/img_team/théo.JPG"
      instagram="https://www.instagram.com/theopasqua_/"
    />

    <cardteam
      name="Marwin Rodrigues"
      poste="Directeur Développement"
      img="/public/img_team/marwin.JPG"
      github="https://github.com/Marwin-Rdgs"
    />
    <cardteam
      name="Eliot Feuvrier"
      poste="Directeur Communication"
      img="/public/img_team/Eliot.PNG"
    />

    <footer1 />
  </div>
</template>


<script >
import header1 from "./components/header.vue";
import footer1 from "./components/footer.vue";
import cardteam from "./components/cardteam.vue";

export default {
  name: "App",
  components: { header1, footer1, cardteam },
};
</script>