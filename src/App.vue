<template>
  <div class="wrapper">
      <hero-view/>

      <footer-componets/>
      
  </div>

</template>

<script>
import HeroView from '@/views/HeroView.vue'
import FooterComponets from '@/components/FooterComponets.vue'

export default {
  components: {HeroView, FooterComponets}

}
</script>

<style>

</style>
