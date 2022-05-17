<template>

    <!-- A DEMANDER A PRACHT = 1 PROPS = 1 BALISE (foot) -->
    <a href="#">
    <div class="flex justify-center">
    <div class="grid grid-cols-1">
    <foot class="flex hover:scale-50"/>
    <p class="text-center">Foot</p>
    </div>
    </div>
    <a>
    
    <br><br><br><br><br><br>

    
</template>

<script >
import foot from "./icones/perso_football.vue";
import petanque from "./icones/perso_petanque.vue";
import bascket from "./icones/perso_basket.vue";
import tennis from "./icones/perso_tennis.vue";

export default {
  components: { foot, petanque, bascket, tennis},
};
</script>