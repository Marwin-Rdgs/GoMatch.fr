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

<!-- statut est présent, le terrains est déjà utilisé -->
<!-- Joueur est indiqué, alors il y a X joueur sur le terrain -->
    <cardterrains
    statut
    joueur= 3
    nom="test terrain 1"
    adress="18 rue Pasquarelli"
    size="Football...(à modifier)"
    img="/public/terrains/city_hericourt.jpg"/>


<!-- statut n'est pas indiqué, alors le terrains n'est pas occupé -->
<!-- Joueur n'est pas indiqué, alors il n'y a 0 joueurs sur le terrains -->
    <cardterrains 
    nom="test terrain 2"
    adress="18 rue Feuvrier de merde"
    size="Basket...(à modifier)"
    img="/public/terrains/construire-terrain-petanque.jpg"/>

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

  <formulaire />

</template>

<script >
import cardteam from "../components/cardteam.vue";
import cardterrains from "../components/cardterrains.vue";
import sportindex from "../components/sportindex.vue"
import formulaire from "../components/forms.vue"

export default {
  name: "componentsView",
  components: { sportindex, cardteam, formulaire, cardterrains },
};
</script>