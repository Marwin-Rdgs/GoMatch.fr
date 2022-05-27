<template>
  <a :href="url">
  <figure class="m-4">
    <img class="w-full rounded-t-lg" :src="img" alt="" />
    <figcaption
      class="relative flex flex-col rounded-b-lg border-2 border-t-0 px-5 py-7"
    >
      <h3 class="text-2xl text-gray-900">{{ nom }}</h3>
      <address class="not-italic text-gray-500">{{ adress }}</address>
      <div class="order-first flex items-center">
      </div>
      <hr class="my-2 border-t-2 border-indigo-100" />
      <div class="flex justify-between text-sm">
        <div><size class="inline-block align-top" /> {{ size }}</div>
      </div>
      <div
        class="
          absolute
          top-7
          right-4
          grid
          h-12
          w-12
        "
      >
      <!-- Rajouter un texte = nombre de joueur -->
        <p>{{ joueur }}</p>
        <statut :class="{ 'fill-white': !statut }" />
      </div>
    </figcaption>
  </figure>
  </a>
</template>  

<script>
import statut from '../components/icones/joueur_icone.vue'

export default {
  components: { statut },

  props: {
    statut: {
      type: Boolean,
    },
    joueur: {
      type: Number,
      default: 0,
    },
    nom: {
      type: String,
      default: "Nom non définie",
    },
    adress: {
      type: String,
      default: "Adresse non définie",
    },
    img: {
      type: String,
    },
    size: {
      type: String,
      default: "6x7.5 m²",
    },
    url: {
      type: String,
      default: "/",
    }
  },
};
</script>