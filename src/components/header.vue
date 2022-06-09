<template>
  <div class="bg-white w-full">
    <div class="flex items-center">
    <RouterLink to="/">
      <img src="./icones/logo_gomatchh.svg" alt="">
    </RouterLink>
      <h1 class="text-3xl font-impact text-center flex-none w-10/12"><RouterLink to="/">GoMatch</RouterLink></h1>
      <RouterLink to="/login" class="contents">
        <profil class="flex-none w-1/12 hover:fill-white"/>
      </RouterLink>
      <div  v-if="isAdmin">
      <RouterLink to="/admin" class="contents">
        <img src="./icones/settings.svg" class="flex-none w-1/12 lg:scale-50 hover:animate-pulse"/>
      </RouterLink>
    </div>
    </div>
  </div>
</template>

<script>
import profil from './icones/joueur_icone.vue';

// Fonctions Firestore
import {
  getFirestore,
  collection,
  onSnapshot,
  query,
  where,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";

// Fonctions Storage
import {
  getStorage,
  ref,
  getDownloadURL,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js";

// Fonction authentification
import { getAuth } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js";
// Import emetteur de main.js
import { emitter } from "../main.js";

export default {
 data() {
    return {
      user: {
        // User connecté
        email: null,
        password: null,
      },
      userInfo: null, // Informations complémentaires user connecté
      name: "test", // Titre de l'application ou nom du user
      isAdmin: false, // Si l'utilisateur est ou non administrateur
    };
  },
  mounted() {
    // Vérifier si un user connecté existe déjà
    // Au lancement de l'application
    this.getUserConnect();
    // Ecoute de l'évènement de connexion
    emitter.on("connectUser", (e) => {
      // Récupération du user
      this.user = e.user;
      console.log("App => Reception user connecté", this.user);
      // Recherche infos complémentaires du user
      this.getUserInfo(this.user);
    });
    // Ecoute de l'évènement de deconnexion
    emitter.on("deConnectUser", (e) => {
      // Récupération user
      this.user = e.user;
      console.log("App => Reception user deconnecté", this.user);
      // Réinitialisation infos complémentaires user
      this.userInfo = null;
      this.name = "test";
      this.isAdmin = false;
    });
  },
  methods: {
    // Obtenir les informations du user connecté
    async getUserConnect() {
      await getAuth().onAuthStateChanged(
        function (user) {
          if (user) {
            // Récupération du user connecté
            this.user = user;
            // Recherche de ses infos complémentaires
            this.getUserInfo(this.user);
          }
        }.bind(this)
      );
      // Noter le bind(this), cas des zones isolées
      // lors de 2 strucutres imbiquées, Vue perd la visibilité
      // des données
      // On les ré injecte par le mot-clef this
    },
    async getUserInfo(user) {
      // Rechercher les informations complémentaires de l'utilisateur
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document participant
      const dbUsers = collection(firestore, "users");
      // Recherche du user par son uid
      const q = query(dbUsers, where("uid", "==", user.uid));
      await onSnapshot(q, (snapshot) => {
        this.userInfo = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log("userInfo", this.userInfo);
        // userInfo étant un tableau, onn récupère
        // ses informations dans la 1° cellule du tableau : 0
        this.name = this.userInfo[0].login;
        this.isAdmin = this.userInfo[0].admin;
                // Recherche de l'image du user sur le Storage
        const storage = getStorage()
        // Référence du fichier avec son nom
          .catch((error) => {
            console.log("erreur downloadUrl", error);
          });
      });
    },
  },
  components: { profil },
};
</script>