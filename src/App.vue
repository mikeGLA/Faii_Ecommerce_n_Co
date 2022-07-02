<template>
  <router-view/>
  <NavigationBar/>
</template>

<script>
// import MainPage from './components/MainPage.vue'
import NavigationBar from './components/Navigation/navigation.vue'

export default {
  name: 'App',
  components: {
    // MainPage,
    NavigationBar,
  }
}
</script>

<style>
  
</style>
