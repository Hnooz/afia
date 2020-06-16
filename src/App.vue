<template>

  <div id="app">
    <Nav/>

    <Overview/>
  </div>
</template>

<script>

import Nav from './components/Nav'
import Overview from './components/Overview'
export default {
  name: 'App',
  components:{
    Nav,
    Overview
  }
}
</script>

<style src="./assets/css/tailwind.css">

</style>




