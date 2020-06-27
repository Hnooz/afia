<template>
    <div id="howitwork" class="container mx-auto px-6 md:px-12 mt-16 border-teal-500 border-b-2" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000">
        <div class="mb-16">
            <h1 class="font-semibold mb-5 text-center text-teal-500 text-xl">{{$t('How It Work')}}</h1>
            <p class="font-light text-center text-gray-700">{{$t('How_It_Work_content')}}</p>
        </div>
        
        <carousel dir="ltr" class="pb-12">
            <slide class="md:px-24">
                <img v-if="currentPage == 'ar'" class="px-1 rounded-lg" src="../assets/images/afia-04.png" alt="">
                <img v-if="currentPage == 'en'" class="px-1 rounded-lg" src="../assets/images/step1.png" alt="">
            </slide>

            <slide class="md:px-24">
                 <img v-if="currentPage == 'ar'" class="px-1 rounded-lg" src="../assets/images/afia-05.png" alt="">
                <img v-if="currentPage == 'en'" class="px-1 rounded-lg" src="../assets/images/step2.png" alt="">
            </slide>
            
            <slide class="md:px-24">
                 <img v-if="currentPage == 'ar'" class="px-1 rounded-lg" src="../assets/images/afia-06.png" alt="">
                <img v-if="currentPage == 'en'" class="px-1 rounded-lg" src="../assets/images/step3.png" alt="">
            </slide>
        </carousel>
    </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
import i18n from '../i18n';
export default {
  components: {
    Carousel,
    Slide
  },
  computed: {
    currentPage() {
      return i18n.locale;
    }
  },

};
</script>

<style>
.VueCarousel-dot,.VueCarousel-dot--active
 {
    @apply text-teal-500;
    color:#38b2ac !important;
}
</style>