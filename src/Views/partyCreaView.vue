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
        <h3 class="text-lg font-bold">Rejoindre le terrain</h3>

</template>


<script >
import joueur from "../components/icones/joueur_icone.vue"
import pub from "../components/pub.vue"

export default {
  name: "componentsView",
  components: { joueur, pub },
};
</script>