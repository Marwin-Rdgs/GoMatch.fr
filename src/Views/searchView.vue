<template>

<div class="flex justify-center my-10">
    <div class="grid grid-cols-3 relative">
        <arrowback class="w-32"/>
        <foot/>
        <arrownext class="w-32"/>
    </div>
</div>

<h1 class="text-center">Search Bar</h1>

<div class="grid lg:grid-cols-3 md:grid-cols-2 place-items-stretch place-self-center">
    <cardterrains
    type='foot'
    statut
    joueur= 3
    nom="test terrain 1"
    adress="1 rue de chez gomatch"
    img="/public/terrains/city_hericourt.jpg"/>

        <cardterrains
    type='foot'
    nom="test terrain 1"
    adress="1 rue de chez gomatch"
    img="/public/terrains/stad-ado1.jpg"/>

    <cardterrains
    type='foot'
    nom="test terrain 5"
    adress="2 rue des combes aux biches"
    img="/public/terrains/citystade1.jpg"/>

    <pub class="col-span-full"/>

    <cardterrains
    type='foot'
    nom="test terrain 5"
    adress="2 rue des combes aux biches"
    img="/public/terrains/citystade1.jpg"/>

        <cardterrains
    type='foot'
    nom="test terrain 5"
    adress="2 rue des combes aux biches"
    img="/public/terrains/citystade1.jpg"/>

        <cardterrains
    type='foot'
    nom="test terrain 5"
    adress="2 rue des combes aux biches"
    img="/public/terrains/citystade1.jpg"/>

    </div>
    
</template>

<script>
import cardterrains from "../components/cardterrains.vue"
import arrowback from "../components/icones/arrow_left.vue"
import arrownext from "../components/icones/arrow_right.vue"
import pub from "../components/pub.vue"

import foot from "../components/icones/perso_football.vue";
import petanque from "../components/icones/perso_petanque.vue";
import basket from "../components/icones/perso_basket.vue";
import tennis from "../components/icones/perso_tennis.vue";

export default {
  name: "searchView",

  components: { pub, cardterrains, arrowback, arrownext, foot, petanque, basket, tennis }
};
</script>