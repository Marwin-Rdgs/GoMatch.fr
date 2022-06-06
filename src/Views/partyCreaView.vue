<template>
<img src="/terrains/citystade1.jpg" class="w-11/12 m-4 rounded-xl">
<div class="m-3 grid grid-cols-2">
    <h2 class="font-bold text-xl">Ville : Montbéliard</h2>
<div class="ml-5"><joueur/>
<p class="text-3xs">Actuellement</p>
<p class="bg-green w-fit rounded-md text-white text-3xs">0 personne</p>
</div>
</div>
    <hr class="m-4 w-40 bg-black h-0.5"/>
    <div class="m-4">
        <p class="text-4xs">Adresse : </p>
    <p class="text-3xs bg-white w-9/12 rounded-md">22 avenue du Gondor, 25200</p>
    </div>
        <hr class="m-4 w-40 bg-black h-0.5"/>
    <div class="m-4">
        <p class="text-4xs">Sports praticables : </p>
    <div class="bg-white rounded-lg w-9/12">
                <div class="flex"><img
        src="../components/icones/ballon_foot.png"
        class="w-14 h-14 m-2"/>
        <p class="mt-5">Football</p>
                </div>

                <div class="flex"><img
        src="../components/icones/ballon_basket.png"
        class="w-14 h-14 m-2"/>
        <p class="mt-5">Basketball</p>
                </div>
            </div>
    </div>
    <pub/>
        <hr class="m-4 w-40 bg-black h-0.5"/>
        <h3 class="text-lg font-bold ml-6">Rejoindre le terrain</h3>
        <p class="text-xs ml-14 mt-3">Arrivé dans :</p>
        <div class="grid grid-cols-3 mb-5 mt-3 ml-14 gap-5">
        <button class="bg-white rounded-md w-20 text-center ">15 min</button>
        <button class="bg-white rounded-md w-20 text-center ">30 min</button>
        <button class="bg-white rounded-md w-20 text-center ">1h</button>
        <button class="bg-white rounded-md w-20 text-center ">1h30</button>
        <button class="bg-white rounded-md w-20 text-center ">2h</button>
        </div>

<div class="flex ml-14 mb-5 mt-3">
        <p>Avec</p>
        <input type="text" placeholder="..." class=" mx-1 rounded-md bg-white text-black text-center w-8">
<p>personne(s)</p>
</div>

        <p class="text-xs ml-14 mt-3">Pour du :</p>
        <div class="grid grid-cols-3 mt-3 mb-5 ml-14 gap-5">
        <button class="bg-white rounded-md w-20 text-center ">Football</button>
        <button class="bg-white rounded-md w-20 text-center ">Basketball</button>
        </div>
        
        <p class="text-xs ml-14 mt-3">Fermer le terrain :</p>
        <div class="grid grid-cols-3 mt-3 ml-14 mb-5  gap-5">
        <button class="bg-white rounded-md w-20 text-center ">Oui</button>
        <button class="bg-white rounded-md w-20 text-center ">Non</button>
        </div>

<div class="place-items-center">
        <button class="bg-green text-white rounded-md w-44 h-11">Créer la partie</button>
</div>
</template>


<script >
import joueur from "../components/icones/joueur_icone.vue"
import pub from "../components/pub.vue"

export default {
  name: "componentsView",
  components: { joueur, pub },
};
</script>