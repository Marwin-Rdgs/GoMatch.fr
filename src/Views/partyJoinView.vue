<template>
<img src="/terrains/city_hericourt.jpg" class="w-11/12 m-4 rounded-xl">
<div class="m-3 grid grid-cols-2">
    <h2 class="font-bold text-xl">Ville : Héricourt</h2>
<div class="ml-5"><joueur/>
<p class="text-3xs">Actuellement</p>
<p class="bg-turquoise w-fit rounded-md text-white text-3xs p-1">5 personne</p>
</div>
</div>
    <hr class="m-4 w-40 bg-black h-0.5"/>
    <div class="m-4">
        <p class="text-4xs">Adresse : </p>
    <p class="text-3xs bg-white w-9/12 rounded-md">6 rue du Rohan, 70400</p>
    </div>
        <hr class="m-4 w-40 bg-black h-0.5"/>
    <pub/>
        <hr class="m-4 w-40 bg-black h-0.5"/>
        <h3 class="text-lg font-bold ml-6">Rejoindre le terrain</h3>
        <p class="text-xs ml-14 mt-3">Arrivé dans :</p>
        <div class="grid grid-cols-3 mb-5 mt-3 ml-14 gap-5">
        <button class="bg-white rounded-md w-20 text-center focus:bg-green focus:text-white">15 min</button>
        <button class="bg-white rounded-md w-20 text-center focus:bg-green focus:text-white">30 min</button>
        <button class="bg-white rounded-md w-20 text-center focus:bg-green focus:text-white">1h</button>
        <button class="bg-white rounded-md w-20 text-center focus:bg-green focus:text-white">1h30</button>
        <button class="bg-white rounded-md w-20 text-center focus:bg-green focus:text-white">2h</button>
        </div>

<div class="flex ml-14 mb-5 mt-3">
        <p>Avec</p>
        <input type="number" placeholder="..." class=" mx-1 rounded-md bg-white text-black text-center w-8 focus:bg-green focus:text-white">
<p>personne(s)</p>
</div>

    <div class="m-4">
        <p class="text-xs">Liste des joueurs : </p>
        <!-- V-for => liste des joueurs -->
        <div class="flex bg-white w-9/12 rounded-md gap-x-10">
                <profil/>
                <p class="text-3xs ">6 rue du Rohan, 70400</p>
        </div>

        
    </div>
        <hr class="m-4 w-40 bg-black h-0.5"/>

        
<div class="flex justify-center pb-10">
        <button class="bg-green text-white rounded-md w-44 h-11">Rejoindre la partie</button>
</div>

<!-- Si joueur déjà dans la partie -->
<div class="flex justify-center pb-10">
        <div class="bg-red-600 text-white rounded-md w-44 h-11 text-4xs">
             <p class="text-center mt-3"> Vous êtes déjà dans une partie </p>
        </div>
</div>

<!-- Si party fermée -->
<div class="flex justify-center pb-10">
        <div class="bg-orange-500 text-white rounded-md w-44 h-11">
             <p class="text-center mt-3"> La partie est fermée </p>
        </div>
</div>


</template>


<script >
import joueur from "../components/icones/joueur_icone.vue"
import pub from "../components/pub.vue"
import profil from '../components/icones/joueur_icone.vue';

export default {
  name: "componentsView",
  components: { joueur, pub, profil },
};
</script>