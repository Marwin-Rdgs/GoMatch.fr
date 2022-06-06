    <template>
  <main>

    <div class="m-6 inline-block">
        <p class="text-3xl font-bold">Profil</p>
        <hr class="my-1 mx-auto w-40 bg-black h-0.5"/>
    </div>

    <div class="flex">
        <imageprofil class="m-4"> </imageprofil>
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
                <textarea name="bio" class="bg-white rounded-lg w-5/6">Bonjour à vous, je m’appelle Anthony Horritz, j’ai 22 ans et j’adore pratiquer un peu de sport lorsque je ne travaille pas pour mes études. J’aime beaucoup faire du Football et du Tennis mais mon sport préféré reste le Basketball…</textarea>
        </div>

        <hr class="my-6 mx-auto w-5/6 bg-black "/>

        <div>
            <p class="ml-8">sport pratiqués</p>
            <div class="bg-white flex gap-x-10 mx-auto rounded-lg w-5/6 justify-center">
                <img
        src="../components/icones/ballon_foot.png"
        class="w-14 h-14 mt-2"/>

                <img
        src="../components/icones/ballon_tennis.png"
        class="w-16 h-16 mt-2"/>

                <img
        src="../components/icones/ballon_basket.png"
        class="w-14 h-14 mt-2"/>

            </div>
        </div>

        <hr class="my-6 mx-auto w-5/6 bg-black "/>
        <div>
            <p class="ml-8 pb-5">sport pratiqués</p>
        </div>

    </main>  
</template>

<script>
import imageprofil from "../components/icones/imageprofil.vue"
import ballontennis from "../components/icones/ballon_tennis.vue"
import ballonfoot from "../components/icones/ballon_foot.vue"
import ballonbasket from "../components/icones/ballon_basket.vue"
export default {
     components: { imageprofil, ballontennis, ballonfoot, ballonbasket }
}
</script>