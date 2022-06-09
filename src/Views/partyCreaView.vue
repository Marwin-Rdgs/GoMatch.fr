<template>
<img :src="terrain.img_terrain" class="w-11/12 m-4 rounded-xl">
<div class="m-3 grid grid-cols-2">
    <h2 class="font-bold text-xl">Ville : Montbéliard</h2>
<div class="ml-5"><joueur class="fill-white"/>
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
        <h3 class="text-lg font-bold ml-6">Créer la partie</h3>
        <p class="text-xs ml-14 mt-3">Arrivé dans :</p>
        <div class="flex mb-5 mt-3 ml-14">
        <input type="number" class="bg-white rounded-md w-24 focus:bg-green focus:text-white" placeholder="15 / 45 / 120" v-model='heure_party' required>min

        </div>

<div class="flex ml-14 mb-5 mt-3">
        <p>Avec</p>
        <input type="number" placeholder="..." class=" mx-1 rounded-md bg-white text-black text-center w-8 focus:bg-green focus:text-white" v-model='nb_joueurs' required>
<p>personne(s)</p>
</div>

        <p class="text-xs ml-14 mt-3">Pour du :</p>
        <div class="grid grid-cols-3 mt-3 mb-5 ml-14 gap-5 group">
        <input type="text" class="bg-white rounded-md w-72 focus:bg-green focus:text-white" placeholder="Football / Basketball / Pétanque / Tennis" v-model='sport_party' required>
        </div>
        
        <div class="flex">
        <p class="text-xs ml-14 mt-3">Fermer le terrain :</p>
        <div class="mt-3 ml-14 mb-5  gap-5">
        <input type="checkbox" placeholder="..." class="bg-white rounded-md w-20 text-center focus:bg-orange-400 focus:text-white" v-model='private_party' required>
        </div>
        </div>

<div class="flex justify-center pb-10"  @click='createparty()' title="Création">
        <RouterLink to="/profil"><button class="bg-green text-white rounded-md w-44 h-11">Créer la partie</button></RouterLink>
</div>
</template>


<script >
import joueur from "../components/icones/joueur_icone.vue"
import pub from "../components/pub.vue"

// Bibliothèque Firestore : import des fonctions
import { 
    getFirestore, 
    collection, 
    doc, 
    addDoc, 
    updateDoc, 
    deleteDoc, 
    onSnapshot 
} from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-firestore.js'


export default {
  name: "componentsView",

    data() {
    return {
      listeterrainfoot:[],  // Liste des terrains de foot - collection terrainfoot Firebase
      listeterrainbasket:[],  // Liste des terrains de basket - collection terrainbasket Firebase
      listeterraintennis:[],  // Liste des terrains de tennis - collection terraintennis Firebase
      listeterrainpetanque:[],  // Liste des terrains de petanque - collection terrainpetanque Firebase

      listeparty:[],  // Liste des Partys - collection party Firebase
      nom:null, // Pour la création d'une nouvelle party

      terrain:{
            nom_terrain:null,
            ville_terrain:null,
            img_terrain:null,
            adresse_terrain:null,
            statut_terrain:null,
        },
      }
    },

  mounted(){ // Montage de la vue

    // Appel des listes
    this.getterrainfoot(this.$route.params.id);
    this.getterrainbasket(this.$route.params.id);
    this.getterraintennis(this.$route.params.id);
    this.getterrainpetanque(this.$route.params.id);

    this.getparty();
  },

 methods: {
        //  ============================== TERRAIN FOOT ===================
    async getterrainfoot(id){
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document pays
      const dbterrainfoot = collection(firestore, "terrainfoot", id);
      // Liste des pays synchronisée
      const query = await onSnapshot(dbterrainfoot, (snapshot) =>{
      console.log('query', query);
        //  Récupération des résultats dans listePaysSynchro
        // On utilse map pour récupérer l'intégralité des données renvoyées
        // on identifie clairement le id du document
        // les rest parameters permet de préciser la récupération de toute la partie data
        this.listeterrainfoot = snapshot.docs.map(doc => ({id_terrain:doc.id_terrain, ...doc.data()}));
        console.log('listeterrainfoot', this.listeterrainfoot);
      })      
    },

    async updateterrainfoot(terrainfoot){
        // Obtenir Firestore
        const firestore = getFirestore();
        // Base de données (collection)  document pays
        // Reference du pays à modifier
        const docRef = doc(firestore, "terrainfoot", terrainfoot.nom_terrain);
        // On passe en paramètre format json
        // Les champs à mettre à jour
        await updateDoc(docRef, {
            statut_terrain: terrainfoot.statut_terrain
        }) 
      },


        //  ============================== TERRAIN Basket ===================
    async getterrainbasket(id){
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document pays
      const dbterrainbasket = collection(firestore, "terrainbasket");
      // Liste des pays synchronisée
      const query = await onSnapshot(dbterrainbasket, (snapshot) =>{
      console.log('query', query);
        //  Récupération des résultats dans listePaysSynchro
        // On utilse map pour récupérer l'intégralité des données renvoyées
        // on identifie clairement le id du document
        // les rest parameters permet de préciser la récupération de toute la partie data
        this.listeterrainbasket = snapshot.docs.map(doc => ({id_terrain:doc.id_terrain, ...doc.data()}));
        console.log('listeterrainbasket', this.listeterrainbasket);
      })      
    },
    async updateterrainbasket(terrainbasket){
        // Obtenir Firestore
        const firestore = getFirestore();
        // Base de données (collection)  document pays
        // Reference du pays à modifier
        const docRef = doc(firestore, "terrainbasket", terrainbasket.nom_terrain);
        // On passe en paramètre format json
        // Les champs à mettre à jour
        await updateDoc(docRef, {
            statut_terrain: terrainfoot.statut_terrain
        }) 
      },


        //  ============================== TERRAIN Tennis ===================
    async getterraintennis(id){
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document pays
      const dbterraintennis = collection(firestore, "terraintennis");
      // Liste des pays synchronisée
      const query = await onSnapshot(dbterraintennis, (snapshot) =>{
      console.log('query', query);
        //  Récupération des résultats dans listePaysSynchro
        // On utilse map pour récupérer l'intégralité des données renvoyées
        // on identifie clairement le id du document
        // les rest parameters permet de préciser la récupération de toute la partie data
        this.listeterraintennis = snapshot.docs.map(doc => ({id_terrain:doc.id_terrain, ...doc.data()}));
        console.log('listeterraintennis', this.listeterraintennis);
      })      
    },
    async updateterraintennis(terraintennis){
        // Obtenir Firestore
        const firestore = getFirestore();
        // Base de données (collection)  document pays
        // Reference du pays à modifier
        const docRef = doc(firestore, "terraintennis", terraintennis.nom_terrain);
        // On passe en paramètre format json
        // Les champs à mettre à jour
        await updateDoc(docRef, {
            statut_terrain: terrainfoot.statut_terrain
        }) 
      },

        //  ============================== TERRAIN Pétanque ===================
    async getterrainpetanque(id){
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document pays
      const dbterrainpetanque = collection(firestore, "terrainpetanque");
      // Liste des pays synchronisée
      const query = await onSnapshot(dbterrainpetanque, (snapshot) =>{
      console.log('query', query);
        //  Récupération des résultats dans listePaysSynchro
        // On utilse map pour récupérer l'intégralité des données renvoyées
        // on identifie clairement le id du document
        // les rest parameters permet de préciser la récupération de toute la partie data
        this.listeterrainpetanque = snapshot.docs.map(doc => ({id_terrain:doc.id_terrain, ...doc.data()}));
        console.log('listeterrainpetanque', this.listeterrainpetanque);
      })      
    },
    async updateterrainpetaque(terrainpetanque){
        // Obtenir Firestore
        const firestore = getFirestore();
        // Base de données (collection)  document pays
        // Reference du pays à modifier
        const docRef = doc(firestore, "terrainpetanque", terrainpetanque.nom_terrain);
        // On passe en paramètre format json
        // Les champs à mettre à jour
        await updateDoc(docRef, {
            statut_terrain: terrainfoot.statut_terrain
        }) 
      },



        // ===================== PARTY ======================
  async getparty(){
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document pays
      const dbparty= collection(firestore, "party");
      // Liste des pays synchronisée
      const query = await onSnapshot(dbparty, (snapshot) =>{
      console.log('query', query);
        //  Récupération des résultats dans listePaysSynchro
        // On utilse map pour récupérer l'intégralité des données renvoyées
        // on identifie clairement le id du document
        // les rest parameters permet de préciser la récupération de toute la partie data
        this.listeconcert = snapshot.docs.map(doc => ({id_party:doc.id_party, ...doc.data()}));
        console.log('listeparty', this.listeparty);
      })      
    },
    async createparty(){
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document pays
      const dbparty= collection(firestore, "party");
      // On passe en paramètre format json
      // Les champs à mettre à jour
      // Sauf le id qui est créé automatiquement    
      const docRef = await addDoc(dbparty,{
        //   id_terrain: this.id_terrain,
          heure_terrain: this.heure_party,
          nb_joueurs: this.nb_joueurs,
          sport_party: this.sport_party,
          private_party: this.private_party,          
      })
      console.log('document créé avec le id : ', docRef.id_party);
    },

},


  components: { joueur, pub },
};
</script>