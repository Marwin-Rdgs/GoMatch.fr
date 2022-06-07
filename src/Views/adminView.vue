    <template>
            <h5 class="border-b-4 text-center text-xl mb-10">Liste des Terrains</h5>

<!-- Partie Ajouter -->
    <div class="border-2 border-turquoise">   
        <form>
          <h6 class="text-sm">Nouveau terrain</h6>
           <div class="lg:flex lg:gap-x-4">

            <div class="flex gap-x-2 mb-2">
              <span>Nom</span>
                <input type="text" class="border-2" v-model='nom_terrain' required/>
            </div>
            <div class="flex gap-x-2 mb-2">
              <span>Ville</span>
                <input type="text" class="border-2" v-model='ville_terrain' required />
            </div>

            <div class="flex gap-x-2 mb-2">
              <span>Adresse</span>
                <input type="text" class="border-2" v-model='adresse_terrain' required />
            </div>

            <div class="flex gap-x-2 mb-2">
              <span>Image</span>
                <input type="text" class="border-2" v-model='img_terrain' required />
            </div>

            <button type="button" @click='createterrain()' title="Création" class="border-2 border-turquoise rounded-full mb-2 py-2 px-4 hover:bg-turquoise hover:text-white hover:scale-110">
                 Créer
            </button>    
           </div>
        </form>

</div>

<!-- Partie Actuel (Modification / Suppression & Filtrage) -->

<div class="border-2 border-violet2 mt-10 pb-64">
            <table>
                <thead>
                    <tr>                      
                        <th scope="col">
                          <div class="lg:flex gap-x-10 mb-4 border-b-2 border-r-2 border-turquoise">
                              <h6 class="">Liste des Terrains actuels</h6>                         
                          <span class="flex gap-x-2">
                                  <span>Filtrage</span>
                                    <input type="text" class="border-2" v-model="filter" />

                                <button type="button"  title="Filtrage" class="text-xs">
                                  Filtrer
                                </button>
                          </span>
                          </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                          <form 
                            v-for="terrain in filterByName" :key="terrain.nom_terrain" class="border-b-2 flex gap-x-4 w-full"> 

                                <span class="input-group-text">Nom</span>
                              <input type="text" class="border-2" v-model='terrain.nom_terrain' required />

                                <!-- Ne Marche pas -->
                              <button type="button"  @click="updateterrain(terrain)" title="Modification">
                                <p class="text-xs">Modification</p> 
                              </button>


                                <!-- Ne marche pas -->
                              <button class="btn btn-light" type="button" @click="deleteterrain(terrain)" title="Suppression">
                               <p class="text-xs">Supprimer</p>
                              </button>

                          </form>
                        </td>
                    </tr>
                </tbody>
            </table>
</div>

</template>

<script>
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
  data() {
    return {
      listeterrain:[],  // Liste des pays - collection pays Firebase
      nom:null, // Pour la création d'un nouveau pays
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
  mounted(){ // Montage de la vue
    // Appel de la liste des pays synchronisée
    this.getterrain();
  },
  methods: {
    async getterrain(){
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document pays
      const dbterrain= collection(firestore, "terrain");
      // Liste des pays synchronisée
      const query = await onSnapshot(dbterrain, (snapshot) =>{
      console.log('query', query);
        //  Récupération des résultats dans listePaysSynchro
        // On utilse map pour récupérer l'intégralité des données renvoyées
        // on identifie clairement le id du document
        // les rest parameters permet de préciser la récupération de toute la partie data
        this.listeterrain = snapshot.docs.map(doc => ({id_terrain:doc.id_terrain, ...doc.data()}));
        console.log('listeterrain', this.listeterrain);
      })      
    },

    async createterrain(){
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document pays
      const dbterrain= collection(firestore, "terrain");
      // On passe en paramètre format json
      // Les champs à mettre à jour
      // Sauf le id qui est créé automatiquement    
      const docRef = await addDoc(dbterrain,{
          nom_terrain: this.nom_terrain,
          adresse_terrain: this.adresse_terrain,
          ville_terrain: this.vile_terrain,
          img_terrain: this.img_terrain,
          
      })
      console.log('document créé avec le id : ', docRef.id_terrain);
    },

    async updateterrain(terrain){
        // Obtenir Firestore
        const firestore = getFirestore();
        // Base de données (collection)  document pays
        // Reference du pays à modifier
        const docRef = doc(firestore, "terrain", terrain.nom_terrain);
        // On passe en paramètre format json
        // Les champs à mettre à jour
        await updateDoc(docRef, {
            nom_terrain: terrain.nom_terrain
        }) 
      },

      async deleteterrain(terrain){
          // Obtenir Firestore
          const firestore = getFirestore();
          // Base de données (collection)  document pays
          // Reference du pays à supprimer
          const docRef = doc(firestore, "terrain", terrain.nom_terrain);
          // Suppression du pays référencé
          await deleteDoc(docRef);
        },

  },
}
</script>