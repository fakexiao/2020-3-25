<template>
  <div id="app">
    <router-view></router-view>
    <FooterGuide123 v-if="!('/login'===$route.path)"></FooterGuide123>
  </div>
</template>


<script>
  import FooterGuide123 from './components/FooterGuider/FooterGuider'

  export default {
    components: {
      FooterGuide123
    }
  }

</script>






<style>


</style>
