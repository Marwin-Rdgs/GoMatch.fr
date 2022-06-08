<template>

  <figure class="m-4">
    <img class="w-full rounded-t-lg h-72" :src="img" alt="Miniature du terrain" />
    <figcaption
      class="relative flex flex-col rounded-b-lg border-2 border-t-0 px-5 py-7"
    >
      <h3 class="text-2xl text-gray-900">{{ nom }}</h3>
      <address class="not-italic text-gray-500">{{ adress }}</address>
      <div class="order-first flex items-center">
      </div>
      <hr class="my-2 border-t-2 border-indigo-100" />
      <div class="flex justify-between text-sm">
      <component :is="sport[type]" class="inline-block align-top h-10" />

      <RouterLink :to="{name:'partyJoinView', params: {id}}" v-if="statut"> <!-- {name:'partyCreaView', params: {id}} -->
        <button class="border-turquoise border-2 p-2 rounded-full hover:bg-turquoise hover:text-white hover:border-gray-400">Rejoindre</button>
        </RouterLink>

      <RouterLink :to="{name:'partyCreaView', params: {id}}" v-if="!statut"> <!-- {name:'partyCreaView', params: {id}} -->
        <button class="border-turquoise border-2 p-2 rounded-full hover:bg-turquoise hover:text-white hover:border-gray-400">Créer</button>
        </RouterLink>

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
        <!-- <p>{{ joueur }}</p> -->
        <statut :class="{ 'fill-white': !statut }" />
      </div>
    </figcaption>
  </figure>
  
</template>  

<script>
import statut from './icones/joueur_icone.vue';
import foot from './icones/ballon_foot.vue';
import petanque from "./icones/ballon_petanque.vue";
import bascket from "./icones/ballon_basket.vue";
import tennis from "./icones/ballon_tennis.vue";

export default {

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
    url: {
      type: String,
      default: "/",
    },
    id:{
      type: String,
    },
    type:String,
  },

  data: function() {
    return {
      sport: {
        "foot":foot,
        "petanque":petanque,
        "basket":bascket,
        "tennis":tennis,
      },      
    }
  },

  components: { statut, foot, petanque, bascket, tennis }
};
</script>