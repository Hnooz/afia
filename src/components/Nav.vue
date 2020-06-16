<template>

    <header class="bg-gray-200 shadow-2xl border-b-2 border-teal-500">
        <!-- <nav 
    :class="{ 'scrolled': !view.atTopOfPage }" 
    class="fixed flex w-full bg-white border-b  flex-wrap p-5 m-auto top-0 animated">
</nav> -->
        <div class="container mx-auto px-16 py-8">
            <div 
                :class="{ 'scrolled': !view.atTopOfPage }" 
                class="sc sticky bg-gray-200 md:flex items-center justify-between  top-0 animated">

                <div class="flex items-center justify-between">
                <div class="flex items-center">
                    <img src="../assets/afia.png" class="pr-1 h-10">
                    <h1 class="text-2xl font-semibold text-teal-400">Afia</h1>
                </div>

                <div class="md:hidden">
                    <button @click="isOpen = !isOpen" type="button" class="text-teal-400 focus:text-teal-400  focus:outline-none">
                        <svg class="h-6 w-6 fill-current" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path v-if="isOpen" d="M6 18L18 6M6 6l12 12"></path>
                            <path v-if="!isOpen" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
                </div>

                <div :class="isOpen ? 'block' : 'hidden'" class="md:flex -mx-2">
                    <a href="#overview" class="block px-2 py-1 text-teal-300 font-medium rounded hover:bg-teal-300 hover:text-white">OverView</a>
                    <a href="#" class="mt-1 block px-2 py-1 text-teal-300 font-medium rounded hover:bg-teal-300 hover:text-white md:mt-0 md:ml-2">How It Work</a>
                    <a href="#" class="mt-1 block px-2 py-1 text-teal-300 font-medium rounded hover:bg-teal-300 hover:text-white md:mt-0 md:ml-2">Features</a>
                    <a href="#" class="mt-1 block px-2 py-1 text-teal-300 font-medium rounded hover:bg-teal-300 hover:text-white md:mt-0 md:ml-2">Contact</a>
                    <button class="mt-1 ml-2 block px-2 py-1 bg-teal-300 text-teal-100 font-semibold rounded hover:bg-teal-300 focus:outline-none md:mt-0 md:ml-2">AR</button>
                </div>
            </div>
            <div class="container mb-32 mt-40 mx-auto">

                   <div class="md:max-w-sm">
                        <p class="mb-6 text-2xl font-semibold text-teal-500 text-center md:text-left md:text-4xl">Medication To Your Home.</p>
                    </div> 
                    <div>
                        <p class="mb-6 text-sm font-medium text-gray-700 md:max-w-md text-center  md:text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores sunt commodi ab ipsum numquam at labore nobis aliquam quod tempore ,</p>
                    </div>

                    <div class="mt-10 mx-auto">
                        <a href="#" class="bg-teal-500 border-2 hover:bg-transparent hover:border-teal-400 hover:text-teal-400 md:mx-0 mx-16 px-2 py-3 rounded-lg text-white text-xl">Download</a>
                    </div>

            </div>
        </div>
    </header>
</template>

<script>
export default {
    name:'Nav',
    data() {
        return {
            isOpen:false,
            view: {
            atTopOfPage: true
            },
        }
    },
    // a beforeMount call to add a listener to the window
    beforeMount () {
        window.addEventListener('scroll', this.handleScroll);
    },


    methods: {
        // the function to call when the user scrolls, added as a method
        handleScroll(){
            // when the user scrolls, check the pageYOffset
            if(window.pageYOffset>0){
                // user is scrolled
                if(this.view.atTopOfPage) this.view.atTopOfPage = false
            }else{
                // user is at top of page
                if(!this.view.atTopOfPage) this.view.atTopOfPage = true
            }
        }
    },
}
</script>

<style>
    .sc 
    {
        z-index: 10
    }
    .scrolled
    {
        /* @apply shadow-md; */

        border-bottom: 0px;
    }
</style>


