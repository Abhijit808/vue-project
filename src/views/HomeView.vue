<template>
  <Navbar />
  <Home/>
  <Services/>
  <!-- <Gallery/> -->
  <Car/>
  <Testmonial/>
  <Footer/>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Home from '../components/Home.vue'
import Services from '../components/Services.vue'
// import Gallery from './components/Gallery.vue'
import Testmonial from '../components/Testmonial.vue'
import Footer from '../components/Footer.vue'
import Car from '../components/Crosoul.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Home,
    Services,
    // Gallery,
    Testmonial,
    Footer,
    Car
  }
}
</script>

<style>
</style>

