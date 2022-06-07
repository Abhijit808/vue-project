<template>
    <Navbar/>
  <div >
   <Header/>  
   <Hero/>
  </div>
</template>
<script>
import Navbar from '../components/Navbar.vue'
import Header from "../components/Services_Provided/Header.vue";
import Hero from "../components/Services_Provided/Hero.vue";
export default {
  components:{
    Navbar,
    Header,
    Hero
  }
}
</script>