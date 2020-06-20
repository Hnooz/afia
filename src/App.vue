<template>
  <div id="app">
    <Header/>
    <Overview/>
    <Howitwork/>
    <Features/>
    <DownloadandShare/>
    <Contact/>
  </div>
</template>

<script>

import Header from './components/Header';
import Overview from './components/Overview';
import Howitwork from './components/Howitwork';
import Features from './components/Features';
import DownloadandShare from './components/DownloadandShare';
import Contact from './components/Contact';
export default {
  name: 'App',
  components:{
    Header,
    Overview,
    Howitwork,
    Features,
    DownloadandShare,
    Contact,
  },
}
</script>

<style src="./assets/css/tailwind.css"></style>
