<template>
    <div id="howitwork" class="container mx-auto px-12 mt-16 border-teal-500 border-b-2">
        <div class="mb-16">
            <h1 class="font-semibold mb-5 text-center text-teal-500 text-xl">How It Work</h1>
            <p class="font-light text-center text-gray-700">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, pariatur reprehenderit facere, suscipit perferendis fugiat eos atque obcaecati necessitatibus explicabo, non nihil sed dolorem dignissimos? Maxime earum suscipit quas alias!</p>
        </div>
        
        <carousel class="pb-12">
        <slide>
            <img class="px-1 rounded-lg" src="../assets/images/slide1.jpg" alt="">
        </slide>
        <slide>
            <img class="px-1 rounded-lg" src="../assets/images/slide2.jpg" alt="">
        </slide>

         <slide>
            <img class="px-1 rounded-lg" src="../assets/images/slide3.jpg" alt="">
        </slide>
        <slide>
            <img class="px-1 rounded-lg" src="../assets/images/slide1.jpg" alt="">
        </slide>

         <slide>
            <img class="px-1 rounded-lg" src="../assets/images/slide2.jpg" alt="">
        </slide>
        <slide>
            <img class="px-1 rounded-lg" src="../assets/images/slide3.jpg" alt="">
        </slide>

        </carousel>
    </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
export default {
  components: {
    Carousel,
    Slide
  }

};
</script>

<style>
.VueCarousel-dot,.VueCarousel-dot--active
 {
    @apply text-teal-500;
    color:#38b2ac !important;
}
</style>