<template>
        <div class="grid lg:grid-cols-3 md:grid-cols-2 place-items-stretch place-self-center">

    <cardteam
      name="Théo Pasquarelli"
      poste="Directeur Design"
      img="../assets/img_team/théo.JPG"
      instagram="https://www.instagram.com/theopasqua_/"
      linkedin="https://www.linkedin.com/in/th%C3%A9o-pasquarelli-aa8b02223/"
    />

    <cardteam
      name="Marwin Rodrigues"
      poste="Directeur Développement"
      img="../assets/img_team/marwin.JPG"
      instagram="https://www.instagram.com/marwin.rdgs/"
      linkedin="https://www.linkedin.com/in/marwin-rodrigues/"
      github="https://github.com/Marwin-Rdgs"
    />
    <cardteam
      name="Eliot Feuvrier"
      poste="Directeur Communication"
      img="../assets/img_team/Eliot.PNG"
      instagram="https://www.instagram.com/eliot_feuvrier/"
      linkedin="https://www.linkedin.com/in/eliot-feuvrier-796551224/"
    />

<!-- statut est présent, le terrains est déjà utilisé -->
<!-- Joueur est indiqué, alors il y a X joueur sur le terrain -->
    <cardterrains
    type='tennis'
    statut
    joueur= 3
    nom="test terrain 1"
    adress="18 rue Pasquarelli"
    img="/public/terrains/city_hericourt.jpg"/>


<!-- statut n'est pas indiqué, alors le terrains n'est pas occupé -->
<!-- Joueur n'est pas indiqué, alors il n'y a 0 joueurs sur le terrains -->
    <cardterrains 
    type='foot'
    nom="test terrain 2"
    adress="18 rue Feuvrier de merde"
    img="/public/terrains/construire-terrain-petanque.jpg"/>

   <cardterrains
   type='petanque'
    statut
    joueur= 9     
    nom="test terrain 3"
    adress="Aragorne Numéro 9"
    img="/public/terrains/Reserver-un-court-de-tennis.png"/>

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
    txt="Basketball"
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