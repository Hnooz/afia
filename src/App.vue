<template>

  <div id="app">
    <Nav/>

    <Overview/>
    <Howitwork/>
    <Features/>
    <DownloadandShare/>
    <Contact/>
  </div>
</template>

<script>

import Nav from './components/Nav'
import Overview from './components/Overview'
import Howitwork from './components/Howitwork'
import Features from './components/Features'
import DownloadandShare from './components/DownloadandShare'
import Contact from './components/Contact'
export default {
  name: 'App',
  components:{
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




