<template>
  <div class="bg-white w-12/12">
    <div class="w-11/12 flex items-center ml-4">
      <img src="./icones/Logo.png" alt="" class="w-1/12 flex-none">
      <h1 class="text-3xl font-impact text-center flex-none w-10/12"><RouterLink to="/">GoMatch</RouterLink></h1>
      <RouterLink to="/login"><img src="./icones/pp-nothing.png" alt="" class="flex-none w-1/12" /></RouterLink>
    </div>
  </div>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
</script>