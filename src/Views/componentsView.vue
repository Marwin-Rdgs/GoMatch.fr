<template>
        <div class="grid lg:grid-cols-3 md:grid-cols-2 place-items-stretch place-self-center">

    <cardteam
      name="Théo Pasquarelli"
      poste="Directeur Design"
      img="/public/img_team/théo.JPG"
      instagram="https://www.instagram.com/theopasqua_/"
      linkedin="https://www.linkedin.com/in/th%C3%A9o-pasquarelli-aa8b02223/"
    />

    <cardteam
      name="Marwin Rodrigues"
      poste="Directeur Développement"
      img="/public/img_team/marwin.JPG"
      instagram="https://www.instagram.com/marwin.rdgs/"
      linkedin="https://www.linkedin.com/in/marwin-rodrigues/"
      github="https://github.com/Marwin-Rdgs"
    />
    <cardteam
      name="Eliot Feuvrier"
      poste="Directeur Communication"
      img="/public/img_team/Eliot.PNG"
      instagram="https://www.instagram.com/eliot_feuvrier/"
      linkedin="https://www.linkedin.com/in/eliot-feuvrier-796551224/"
    />

    </div>


    <sportindex 
    type="foot"
    txt="Football"
    url="#" />

    <sportindex 
    type="petanque"
    txt="Pétanque"
    url="#" />

    <sportindex 
    type="bascket"
    txt="Bascketball"
    url="#" />

    <sportindex 
    type="tennis"
    txt="Tennisball"
    url="#" />
</template>

<script >
import cardteam from "../components/cardteam.vue";
import sportindex from "../components/sportindex.vue"

export default {
  name: "App",
  components: { sportindex, cardteam },
};
</script>