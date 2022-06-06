<template>
  <div class="bg-grey">

    <header1 />

    <RouterLink to="/components">Liste des composants</RouterLink> |
    <RouterLink to="/"> Home</RouterLink> |
    <RouterLink to="/mentionslegales"> Mentions Legales</RouterLink> |
    <RouterLink to="/apropos"> À propos</RouterLink> |
    <RouterLink to="/contact"> Contact </RouterLink> |
    <RouterLink to="/profil"> Profil </RouterLink> |
    <RouterLink to="/search"> Search Sport (En cours - Marwin) </RouterLink> |
    <RouterLink to="/partycrea"> Party (création - Théo) </RouterLink> |
    <RouterLink to="/partyjoin"> Party (rejoindre - Eliot) </RouterLink> |
    <RouterLink to="/login"> login (en cours - Marwin) </RouterLink> |

    <img v-if="isAdmin" 
    src="./assets/img/pub.jpg" alt="">
    <RouterView />
    

  </div>

<footer1/>
</template>


<script>
import { RouterLink, RouterView } from "vue-router";
import header1 from "./components/header.vue";
import footer1 from "./components/footer.vue";

import {
    getFirestore,
    collection,
    onSnapshot,
    query,
    where
} from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-firestore.js'
 
 
// Fonctions Storage
import {
    getStorage,
    ref,
    getDownloadURL,
} from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-storage.js'
 
// Fonction authentification
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js'
 
// Import emetteur de main.js
import { emitter } from './main.js'

export default {
  name: "App",
  components: { header1, footer1 },

      beforeMount(){
    this.$router.afterEach(() => (this.menuOuvert = false));
  },

  data() {
    return {
      user:{              // User connecté
        email:null,
        password:null,
      },
      userInfo:null,      // Informations complémentaires user connecté
      name:"FullPop",       // Titre de l'application ou nom du user
      isAdmin:false,      // Si l'utilisateur est ou non administrateur
      menuOuvert: false,
    }
  },

    methods:{
    // Obtenir les informations du user connecté
    async getUserConnect(){
      await getAuth().onAuthStateChanged(function(user) {
        if(user) {
            // Récupération du user connecté
            this.user = user;
            // Recherche de ses infos complémentaires
            this.getUserInfo(this.user);  
        }
      }.bind(this));
      // Noter le bind(this), cas des zones isolées
      // lors de 2 strucutres imbiquées, Vue perd la visibilité
      // des données
      // On les ré injecte par le mot-clef this
    },
 
    async getUserInfo(user){
      // Rechercher les informations complémentaires de l'utilisateur
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document participant
      const dbUsers = collection(firestore, "users");
      // Recherche du user par son uid
      const q = query(dbUsers, where("uid", "==", user.uid));
      await onSnapshot(q, (snapshot) => {
          this.userInfo = snapshot.docs.map(doc => (
            {id:doc.id, ...doc.data()}
          ));
          console.log("userInfo", this.userInfo);                
          // userInfo étant un tableau, onn récupère
          // ses informations dans la 1° cellule du tableau : 0
          this.name = this.userInfo[0].login;
          this.isAdmin=this.userInfo[0].admin;
          // Recherche de l'image du user sur le Storage
          // Référence du fichier avec son nom
        });
      }
    }
};
</script>