<template>

  <div id="app">
    <!-- <RollerLoader :color="'#54f1d2'" /> -->
   <!-- <Spinner/> -->
    <Nav/>

    <Overview/>
    <Howitwork/>
    <Features/>
    <DownloadandShare/>
    <Contact/>
  </div>
</template>

<script>

// import Spinner from './components/Spinner'
// import RollerLoader from '@bit/joshk.vue-spinners-css.roller-loader';
import Nav from './components/Nav'
import Overview from './components/Overview'
import Howitwork from './components/Howitwork'
import Features from './components/Features'
import DownloadandShare from './components/DownloadandShare'
import Contact from './components/Contact'
export default {
  name: 'App',
  components:{
    // RollerLoader,
    // Spinner,
    Nav,
    Overview,
    Howitwork,
    Features,
    DownloadandShare,
    Contact
  }
}
</script>

<style src="./assets/css/tailwind.css">

</style>




