    <template>
  <main>

    <div class="m-6 inline-block">
        <p class="text-3xl font-bold">Profil</p>
        <hr class="my-1 mx-auto w-40 bg-black h-0.5"/>
    </div>

    <div class="flex">
        <profil class="m-4"/>
        <div>
            <div class="ml-2 mb-4">
                <p class="ml-1">Prénom</p>
                <input class="bg-white w-36 rounded-lg" placeholder="Anthony"/>
                <hr class="my-1 mt-2 mx-auto w-24 bg-black "/>
            </div>
            <div class="ml-2">
                <p class="ml-1">Nom</p>
                <input class="bg-white w-36 rounded-lg" placeholder="Horritz"/>
                <hr class="my-1 mt-2 mx-auto w-24 bg-black "/>
            </div>
            <div class="ml-2">
                <p class="ml-1">Age</p>
                <input class="bg-white w-36 rounded-lg" placeholder="22 ans"/>
                <hr class="my-1 mt-2 mx-auto w-24 bg-black "/>
            </div>
            <div class="ml-2">
                <p class="ml-1">Ville</p>
                <input class="bg-white w-36 rounded-lg" placeholder="Héricourt"/>
                <hr class="my-1 mt-2 mx-auto w-24 bg-black "/>
            </div>
        </div>
    </div>

        <hr class="my-6 mx-auto w-5/6 bg-black "/>

        <div class="ml-8">
                <p class="ml-1">Biographie</p>
                <div class="flex">
                    <textarea name="bio" class="bg-white rounded-lg w-5/6">Bonjour à vous, je m’appelle Anthony Horritz, j’ai 22 ans et j’adore pratiquer un peu de sport lorsque je ne travaille pas pour mes études. J’aime beaucoup faire du Football et du Tennis mais mon sport préféré reste le Basketball…</textarea>
                    <img src="../components/icones/save.svg" class="w-1/12"/>
                </div>
        </div>

        <hr class="my-6 mx-auto w-5/6 bg-black "/>

        <hr class="my-6 mx-auto w-5/6 bg-black "/>
        <div>
            <p class="ml-8 pb-5">Activité Actuelle</p>
        </div>

        <div class="flex justify-center">
            <card
            type='foot'
            statut
            id="cHgvlGWBXbkZDkuLn20Q"
            nom="Héricourt"
            adress="1 Imp. André Schoenenberger"
            img="https://cdn-s-www.estrepublicain.fr/images/16300B08-DF5E-4363-9B15-46E530BCB7E9/NW_listE/les-jeunes-herimoncourtois-sont-ravis-ils-attendaient-avec-impatience-un-endroit-ou-se-reunir-et-partager-des-parties-de-ballon-au-city-stade-on-peut-pratiquer-le-football-le-basket-et-le-handball-photo-er-1600442383.jpg"/>
        </div>

    </main>  
</template>

<script>
import ballontennis from "../components/icones/ballon_tennis.vue"
import ballonfoot from "../components/icones/ballon_foot.vue"
import ballonbasket from "../components/icones/ballon_basket.vue"
import profil from '../components/icones/joueur_icone.vue';

import card from "../components/cardterrains.vue"

export default {
     components: { profil, ballontennis, ballonfoot, ballonbasket, card }
}
</script>