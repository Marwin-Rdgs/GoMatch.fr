<template>
<div class=" ml-6">
    <p class="text-xl font-bold text-justify  text-black">À propos</p>
<svg
  width="94"
  height="1"
  viewBox="0 0 94 1"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  preserveAspectRatio="xMidYMid meet"
>
  <line x1="0.5" y1="0.5" x2="93.5" y2="0.5" stroke="black" stroke-linecap="round"></line>
</svg>
</div>
    <p class="text-3xs ml-10  mt-5 mb-5">Go Match c’est quoi ?</p>
    <p class="text-3xs ml-10 mr-10 mt-5 mb-5">Go Match, c’est un service qui vous est proposé afin 
        de faciliter votre accès au sport. Grâce à GoMatch, vous aurez la 
        possibilité de trouver des terrains pour pratiquer vos sports 
        préférés autour de vous. Football, Tennis, Basketball et bien 
        plus, vous aurez la possibilité de pratiquer un large panel de 
        sports proposés sur le site web. Avec vos amis ou des 
        utilisateurs de GoMatch, vous aurez la possibilité de faire des 
        rencontres le temps d’une ou plusieurs parties. GoMatch est 
        donc un service qui vous permettra de gagner du temps, de 
        pratiquer du sport dans de bonnes conditions et de 
        rencontrer de nouveaux amis…
</p>

<div class="ml-6">
    <p class="text-xl font-bold text-justify  text-black">Les créateurs du site</p>
<svg
  width="94"
  height="1"
  viewBox="0 0 94 1"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  preserveAspectRatio="xMidYMid meet"
>
  <line x1="0.5" y1="0.5" x2="93.5" y2="0.5" stroke="black" stroke-linecap="round"></line>
</svg>
</div>
<div class="ml-5 grid lg:grid-cols-3 md:grid-cols-2 place-items-stretch place-self-center">
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
</template>


<script>
import cardteam from "../components/cardteam.vue"

export default {
  name: "aproposView",

  components: { cardteam }
};
</script>