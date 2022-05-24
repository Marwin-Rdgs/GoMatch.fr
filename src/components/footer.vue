<template>
  <div class="w-full bg-black text-white">
    <div class="pt-7 bg-turquoise"></div>

    <div class="flex ml-10">
      <div class="text-4xs flex-col w-1/2 pb-7">
        <h3 class="mb-2">Menu :</h3>
        <p><RouterLink to="/apropos"> ➤ À propos</RouterLink></p>
        <p><RouterLink to="/contact"> ➤ Contact</RouterLink></p>
      </div>
      <div class="text-4xs flex-col ml-auto mr-4">
        <h3 class="mb-2">Nous suivre :</h3>
        <div class="flex">
          <a href="#"><img src="./icones/footer_facebook.png" alt="" /></a>
          <a href="#"
            ><img src="./icones/footer_instagram.png" alt="" class="ml-2"
          /></a>
          <a href="#"
            ><img src="./icones/footer_twitter.png" alt="" class="ml-2"
          /></a>
          
        </div>
      </div>
    </div>
    <div class="text-4xs text-center flex-none">
        <RouterLink to="/mentionslegales"> Mentions Légales</RouterLink>
    </div>
  </div>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
</script>
