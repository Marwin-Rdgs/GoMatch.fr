<template>

<div class="flex justify-center my-10">
    <div class="grid grid-cols-3 relative">
        <RouterLink to="/searchbasket"><arrowback class="w-32"/></RouterLink>
        <tennis/>
        <RouterLink to="/searchpetanque"><arrownext class="w-32"/></RouterLink>
    </div>
</div>

<div class="grid">
<h1 class="text-center">Rechercher</h1>
    <div class="flex justify-center">
<input type="text" class="border-2 w-1/3" v-model="filter" />
    </div>
</div>

<div class="grid lg:grid-cols-3 md:grid-cols-2 place-items-stretch place-self-center">
    <div  v-for="terrain in filterByName" :key="terrain.id">
        <Routerlink to="/">
            <cardterrains
            type='tennis'
            statut
            joueur= 3
            :nom="terrain.nom_terrain"
            :adress="terrain.adresse_terrain"
            :img="terrain.img_terrain"/>
        </Routerlink>
    </div>


    <pub class="col-span-full"/>

    </div>
    
</template>

<script>
// Bibliothèque Firestore : Import des fonctions
import { 
    getFirestore, 
    collection, 
    doc, 
    getDocs, 
    addDoc, 
    updateDoc, 
    deleteDoc, 
    onSnapshot } from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-firestore.js'

import cardterrains from "../components/cardterrains.vue"
import arrowback from "../components/icones/arrow_left.vue"
import arrownext from "../components/icones/arrow_right.vue"
import pub from "../components/pub.vue"

import tennis from "../components/icones/perso_tennis.vue";

export default {
  name: "searchView",

 data() {
    return {
      listeterrain:[],  // Liste des pays - collection pays Firebase
      filter:''
    }
  },


  computed:{
    // Tri des pays par nom en ordre croissant
    orderByName:function(){
      // Parcours et tri des pays 2 à 2
      return this.listeterrain.sort(function(a,b){
        // Si le nom du pays est avant on retourne -1
        if(a.nom_terrain < b.nom_terrain) return -1;
        // Si le nom du pays est après on retourne 1
        if(a.nom_terrain > b.nom_terrain) return 1;
        // Sinon ni avant ni après (homonyme) on retourne 0
        return 0;
      });
    },
    // Filtrage de la propriété calculée de tri
    filterByName:function(){
      // On effectue le fitrage seulement si le filtre est rnseigné
      if(this.filter.length > 0){
        // On récupère le filtre saisi en minuscule (on évite les majuscules)
        let filter = this.filter.toLowerCase();
        // Filtrage de la propriété calculée de tri
        return this.orderByName.filter(function(terrain){
          // On ne renvoie que les pays dont le nom contient 
          // la chaine de caractère du filtre
          return terrain.nom_terrain.toLowerCase().includes(filter);
        })
      }else{
        // Si le filtre n'est pas saisi
        // On renvoie l'intégralité de la liste triée
        return this.orderByName;
      }
    }
  },


mounted(){
    // Appel de la liste des concerts
    this.getterrain();
},

methods:{
    async getterrain(){
        // Obtenir Firestore
        const firestore = getFirestore();
        
        // Base de données (collection) document artistes_fr
        const dbterrain = collection(firestore, "terraintennis");
        
        // Obtenir tous les documents de la collection concert
        // await pour attendre l'obtention des résultats
        const query = await getDocs(dbterrain);
        query.forEach((doc) => {
            let terrain = {
                id_terrain : doc.id,
                nom_terrain : doc.data().nom_terrain,
                img_artiste : doc.data().img_terrain,
                ville_terrain : doc.data().ville_terrain,
                adresse_terrain : doc.data().adresse_terrain,
            };
            this.listeterrain.push(terrain)
        });
    },
},

  components: { pub, cardterrains, arrowback, arrownext, tennis }
};
</script>