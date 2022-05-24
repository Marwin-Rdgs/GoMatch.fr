<template>
    <p class="text-3xl font-bold text-justify  text-black">Contact</p>
  <line x1="0.5" y1="0.5" x2="93.5" y2="0.5" stroke="black" stroke-linecap="round"></line>

<formulaire/>

</template>

<script >
import formulaire from "../components/forms.vue"

export default {
  name: "componentsView",
  components: { formulaire },
};
</script>