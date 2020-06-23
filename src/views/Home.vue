<template>
  <div :dir="currentPage == 'en' ? 'ltr' : 'rtl'" :class="currentPage == 'en' ? 'font-roboto' : 'font-tajawal'">
    <Header/>
    <Overview/>
    <Howitwork/>
    <Features/>
    <DownloadandShare/>
    <Contact/>
  </div>
</template>

<script>

import Header from '../components/Header';
import Overview from '../components/Overview';
import Howitwork from '../components/Howitwork';
import Features from '../components/Features';
import DownloadandShare from '../components/DownloadandShare';
import Contact from '../components/Contact';
import i18n from '../i18n';

export default {
  name: 'Home',
  components:{
    Header,
    Overview,
    Howitwork,
    Features,
    DownloadandShare,
    Contact,
  },
  computed: {
    currentPage() {
      return i18n.locale;
    }
  },
}
</script>
