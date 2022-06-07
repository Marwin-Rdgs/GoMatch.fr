<template>

  <Routerlink :to="{name:'search', params: {id}}">
    <div class="flex justify-center">
      <div class="grid grid-cols-1 group h-32 relative">
        <component :is="types[type]" class="flex group-hover:scale-50 h-32 w-32 transition-transform duration-1000" />
        <p class="text-center opacity-0 group-hover:opacity-100 absolute bottom-0 w-32 transition-opacity duration-1000 font-impact text-lg ">{{txt}}</p>
      </div>
    </div>
  </Routerlink>

</template>

<script >
import foot from "./icones/perso_football.vue";
import petanque from "./icones/perso_petanque.vue";
import bascket from "./icones/perso_basket.vue";
import tennis from "./icones/perso_tennis.vue";

export default {
  props: {
    id: {
      type: String,
    },
    
    txt: {
      type: String,
    },
    type:String,
  },
  data: function() {
    return {
      types: {
        "foot":foot, 
        petanque,
        bascket ,
        tennis  ,
      }
    }
  },
  components: { foot, petanque, bascket, tennis },
};
</script>