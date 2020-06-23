<template>
    <header class="bg-white shadow-md border-b-2 border-teal-500">
        <div class="container mx-auto px-8 md:px-12 py-8">
            <div class="md:flex items-center justify-between">
                <div class="flex items-center justify-between">
                    <div class="flex items-center">
                        <img src="../assets/afia.png" class="h-10">
                        <h1 class="text-2xl font-semibold text-teal-400 mx-2">{{ $t('name') }}</h1>
                    </div>

                    <div class="md:hidden">
                        <button @click="isOpen = !isOpen" type="button" class="text-teal-400 focus:text-teal-400 focus:outline-none">
                            <svg class="h-6 w-6 fill-current" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                                <path v-if="isOpen" d="M6 18L18 6M6 6l12 12"></path>
                                <path v-if="!isOpen" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>
                </div>

                <div :class="isOpen ? 'block' : 'hidden'" class="md:flex md:-mx-2">
                    <nav class="md:flex -mx-2">
                        <a href="#overview" class="mt-1 block px-2 py-1 text-teal-400 font-medium rounded hover:bg-teal-400 hover:text-white md:mt-0 md:mx-2">OverView</a>
                        <a href="#howitwork" class="mt-1 block px-2 py-1 text-teal-400 font-medium rounded hover:bg-teal-400 hover:text-white md:mt-0 md:mx-2">How It Work</a>
                        <a href="#Features" class="mt-1 block px-2 py-1 text-teal-400 font-medium rounded hover:bg-teal-400 hover:text-white md:mt-0 md:mx-2">Features</a>
                        <a href="#contact" class="mt-1 block px-2 py-1 text-teal-400 font-medium rounded hover:bg-teal-400 hover:text-white md:mt-0 md:mx-2">Contact</a>
                    </nav>

                    <router-link v-if="currentPage == 'ar'" to="/en" class="font-roboto mt-1 inline px-2 py-1 bg-teal-400 text-white font-semibold rounded hover:bg-teal-300 focus:outline-none md:mt-0 md:mx-2">EN</router-link>
                    <router-link v-if="currentPage == 'en'" to="/ar" class="mt-1 inline px-2 py-1 bg-teal-400 text-white font-semibold rounded hover:bg-teal-300 focus:outline-none md:mt-0 md:mx-2">AR</router-link>
                </div>
            </div>

            <div class="flex items-center" style="height:540px;">
                <div :class="currentPage == 'en' ? 'md:text-left' : 'md:text-right'" class="text-center">
                    <div class="md:max-w-sm">
                        <h2 class="mb-6 text-2xl font-semibold text-teal-500 md:text-4xl">Medication To Your Home.</h2>
                    </div> 

                    <div>
                        <p class="mb-6 text-sm font-medium text-gray-700 md:max-w-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores sunt commodi ab ipsum numquam at labore nobis aliquam quod tempore ,</p>
                    </div>

                    <div class="flex justify-center md:justify-start mt-10 mx-auto">
                        <a href="#DownloadandShare" class="px-4 py-2 font-semibold tracking-wide bg-teal-500 border-teal-500 border-2 rounded text-white hover:bg-transparent hover:border-teal-400 hover:text-teal-400">Download</a>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import i18n from "../i18n";
export default {
    name:'Nav',
    computed: {
        currentPage() {
            return i18n.locale;
        }
    },

    data() {
        return {
            isOpen:false,
        }
    },
}
</script>
