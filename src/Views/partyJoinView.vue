<template>
<img src="https://cdn-s-www.estrepublicain.fr/images/16300B08-DF5E-4363-9B15-46E530BCB7E9/NW_listE/les-jeunes-herimoncourtois-sont-ravis-ils-attendaient-avec-impatience-un-endroit-ou-se-reunir-et-partager-des-parties-de-ballon-au-city-stade-on-peut-pratiquer-le-football-le-basket-et-le-handball-photo-er-1600442383.jpg" class="w-11/12 m-4 rounded-xl">
<div class="m-3 grid grid-cols-2">
    <h2 class="font-bold text-xl">Ville : Héricourt</h2>
<div class="ml-5"><joueur/>
<p class="text-3xs">Actuellement</p>
<p class="bg-turquoise w-fit rounded-md text-white text-3xs p-1">2 personne(s)</p>
</div>
</div>
    <hr class="m-4 w-40 bg-black h-0.5"/>
    <div class="m-4">
        <p class="text-4xs">Adresse : </p>
    <p class="text-3xs bg-white w-9/12 rounded-md">1 Imp. André Schoenenberger</p>
    </div>
        <hr class="m-4 w-40 bg-black h-0.5"/>
    <pub/>
        <hr class="m-4 w-40 bg-black h-0.5"/>
        <h3 class="text-lg font-bold ml-6">Rejoindre le terrain</h3>
        <p class="text-xs ml-14 mt-3">Arrivé dans :</p>
        <div class="flex mb-5 mt-3 ml-14">
<input type="text" class="bg-white rounded-md w-24 focus:bg-green focus:text-white" placeholder="15 / 45 / 120">min
        </div>

<div class="flex ml-14 mb-5 mt-3">
        <p>Avec</p>
        <input type="number" placeholder="..." class=" mx-1 rounded-md bg-white text-black text-center w-8 focus:bg-green focus:text-white">
<p>personne(s)</p>
</div>

    <div class="m-4">
        <p class="text-xs">Créateur de la partie : </p>
        <!-- V-for => liste des joueurs -->
        <div class="flex bg-white w-9/12 rounded-md gap-x-10">
                <profil/>
                <p class="text-3xs mt-2">Anthony Horritz</p>
        </div>

        
    </div>
        <hr class="m-4 w-40 bg-black h-0.5"/>


<!-- Si joueur déjà dans la partie -->
<div class="flex justify-center pb-10">
        <button class="bg-red-600 text-white rounded-md w-44 h-11 text-4xs">
             <p class="text-center"> Supprimer la partie </p>
        </button>
</div>


</template>


<script >
import joueur from "../components/icones/joueur_icone.vue"
import pub from "../components/pub.vue"
import profil from '../components/icones/profil.vue';

export default {
  name: "componentsView",
  components: { joueur, pub, profil },
};
</script>